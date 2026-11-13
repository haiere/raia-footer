/* ==========================================================================
   Raia Footer v4.0.2 · script.js
   Hash routing (/#privacy, #terms, #sitemap, #cookies, #tools, #ai-bot, #games),
   theme toggle, mobile menu, copy buttons, print, back to top,
   progress bar and GSAP reveals (with ScrollTrigger).
   License: CC0 1.0 Universal
   ========================================================================== */

(function () {
    'use strict';

    var ROUTES = ['privacy', 'terms', 'sitemap', 'cookies', 'tools', 'ai-bot', 'games'];
    var DEFAULT_ROUTE = 'privacy';
    var THEME_KEY = 'haiere_theme';
    var REVEAL_SELECTOR = '.item-card, .sitemap-card, .project-card, .friendly-list li, .callout, .about-card, .changelog, .table-wrap';

    var MSG = {
        en: {
            copied: 'Copied to clipboard.',
            copyFail: 'Could not copy. Please select the text and copy it yourself.',
            themeLight: 'Light theme on.',
            themeDark: 'Dark theme on.',
            menuOpen: 'Open menu',
            menuClose: 'Close menu'
        },
        id: {
            copied: 'Berhasil disalin.',
            copyFail: 'Gagal menyalin. Pilih teksnya lalu salin secara manual.',
            themeLight: 'Tema terang aktif.',
            themeDark: 'Tema gelap aktif.',
            menuOpen: 'Buka menu',
            menuClose: 'Tutup menu'
        }
    };

    var reducedQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var hasGsap = typeof window.gsap !== 'undefined';
    var hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';

    var els = {};
    var progressTrigger = null;
    var toastTimer = null;
    var copyTimers = [];
    var ticking = false;

    /* ---------- helpers ---------- */

    function $(sel, root) {
        return (root || document).querySelector(sel);
    }

    function $$(sel, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(sel));
    }

    function reduced() {
        return !!(reducedQuery && reducedQuery.matches);
    }

    function lang() {
        return (window.HaiereI18n && window.HaiereI18n.getLang()) || 'en';
    }

    function msg(key) {
        var set = MSG[lang()] || MSG.en;
        return set[key] || MSG.en[key] || key;
    }

    function safeGet(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    }

    function safeSet(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (e) {
            /* storage unavailable: setting applies to this visit only */
        }
    }

    function getRoute() {
        var raw = (window.location.hash || '').replace(/^#\/?/, '');
        try {
            raw = decodeURIComponent(raw);
        } catch (e) {
            raw = '';
        }
        return ROUTES.indexOf(raw) !== -1 ? raw : DEFAULT_ROUTE;
    }

    /* ---------- toast ---------- */

    function toast(text) {
        if (!els.toast) return;
        els.toast.textContent = text;
        els.toast.classList.add('is-visible');
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(function () {
            els.toast.classList.remove('is-visible');
        }, 2400);
    }

    /* ---------- theme ---------- */

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    function currentTheme() {
        return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    }

    function initTheme() {
        var saved = safeGet(THEME_KEY);
        applyTheme(saved === 'light' ? 'light' : 'dark');
    }

    function toggleTheme() {
        var next = currentTheme() === 'light' ? 'dark' : 'light';
        applyTheme(next);
        safeSet(THEME_KEY, next);
        toast(next === 'light' ? msg('themeLight') : msg('themeDark'));
    }

    /* ---------- mobile menu ---------- */

    function isMenuOpen() {
        return els.burger && els.burger.getAttribute('aria-expanded') === 'true';
    }

    function setMenu(open, returnFocus) {
        if (!els.burger || !els.menu) return;
        els.menu.hidden = !open;
        els.burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        els.burger.setAttribute('aria-label', open ? msg('menuClose') : msg('menuOpen'));
        if (!open && returnFocus) {
            els.burger.focus({ preventScroll: true });
        }
    }

    function initMenu() {
        if (!els.burger || !els.menu) return;

        els.burger.addEventListener('click', function () {
            setMenu(!isMenuOpen(), false);
        });

        els.menu.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                setMenu(false, false);
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && isMenuOpen()) {
                setMenu(false, true);
            }
        });

        var desktop = window.matchMedia('(min-width: 900px)');
        var closeOnDesktop = function (mq) {
            if (mq.matches && isMenuOpen()) {
                setMenu(false, false);
            }
        };
        if (desktop.addEventListener) {
            desktop.addEventListener('change', closeOnDesktop);
        } else if (desktop.addListener) {
            desktop.addListener(closeOnDesktop);
        }

        document.addEventListener('i18n:change', function () {
            if (els.burger) {
                els.burger.setAttribute('aria-label', isMenuOpen() ? msg('menuClose') : msg('menuOpen'));
            }
        });
    }

    /* ---------- copy buttons ---------- */

    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }
        return new Promise(function (resolve, reject) {
            var area = document.createElement('textarea');
            area.value = text;
            area.setAttribute('readonly', '');
            area.style.position = 'fixed';
            area.style.opacity = '0';
            area.style.top = '0';
            document.body.appendChild(area);
            area.select();
            var ok = false;
            try {
                ok = document.execCommand('copy');
            } catch (e) {
                ok = false;
            }
            document.body.removeChild(area);
            if (ok) {
                resolve();
            } else {
                reject(new Error('copy failed'));
            }
        });
    }

    function initCopy() {
        $$('.copy-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var box = btn.closest('.copy-container');
                var textEl = box ? box.querySelector('.copy-text') : null;
                if (!textEl) return;

                var text = (textEl.textContent || '').replace(/\s+/g, ' ').trim();

                copyToClipboard(text).then(function () {
                    btn.classList.add('is-copied');
                    var timer = window.setTimeout(function () {
                        btn.classList.remove('is-copied');
                    }, 1600);
                    copyTimers.push(timer);
                    toast(msg('copied'));
                }).catch(function () {
                    toast(msg('copyFail'));
                });
            });
        });
    }

    /* ---------- routing ---------- */

    function scrollToTabs(instant) {
        var tabs = els.tabsWrapper;
        if (!tabs || !els.header) return;

        /* Natural (non-sticky) position of the tabs in the document */
        var y = 0;
        var node = tabs;
        while (node) {
            y += node.offsetTop;
            node = node.offsetParent;
        }

        var target = Math.max(0, y - els.header.offsetHeight - 12);
        if (window.pageYOffset > target + 4) {
            window.scrollTo({
                top: target,
                behavior: instant || reduced() ? 'auto' : 'smooth'
            });
        }
    }

    function updateNavState(route) {
        $$('[data-route]').forEach(function (el) {
            var on = el.getAttribute('data-route') === route;

            if (el.classList.contains('tab')) {
                el.classList.toggle('is-active', on);
                if (on) {
                    el.setAttribute('aria-current', 'page');
                } else {
                    el.removeAttribute('aria-current');
                }
            } else if (el.closest('.header-nav, .mobile-menu')) {
                el.classList.toggle('is-active', on);
                if (on) {
                    el.setAttribute('aria-current', 'page');
                } else {
                    el.removeAttribute('aria-current');
                }
            }
        });
    }

    function killItemTriggers() {
        if (!hasScrollTrigger) return;
        window.ScrollTrigger.getAll().forEach(function (st) {
            if (st !== progressTrigger) {
                st.kill();
            }
        });
    }

    function revealPanel(panel) {
        if (!hasGsap || reduced()) return;

        var items = $$(REVEAL_SELECTOR, panel);
        if (!items.length) return;

        if (hasScrollTrigger) {
            /* Reveal each item as it enters the viewport, once */
            window.gsap.set(items, { opacity: 0, y: 14 });
            window.ScrollTrigger.batch(items, {
                start: 'top 92%',
                once: true,
                onEnter: function (batch) {
                    window.gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        stagger: 0.06,
                        overwrite: true,
                        clearProps: 'transform'
                    });
                }
            });
        } else {
            window.gsap.fromTo(items, { opacity: 0, y: 14 }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.06,
                clearProps: 'transform'
            });
        }
    }

    function render(options) {
        var opts = options || {};
        var route = getRoute();

        ROUTES.forEach(function (name) {
            var panel = document.getElementById(name);
            if (panel) {
                panel.hidden = name !== route;
            }
        });

        updateNavState(route);
        killItemTriggers();

        var panel = document.getElementById(route);
        if (panel) {
            revealPanel(panel);
        }

        if (hasScrollTrigger) {
            window.requestAnimationFrame(function () {
                window.ScrollTrigger.refresh();
            });
        }

        if (!opts.initial && panel) {
            panel.focus({ preventScroll: true });
            scrollToTabs(false);
        }

    }

    function handleKeyTabs(event) {
        var tabs = $$('.tab');
        var index = tabs.indexOf(document.activeElement);
        if (index === -1) return;

        var next = -1;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;

        if (next !== -1) {
            event.preventDefault();
            tabs[next].focus();
            tabs[next].click();
        }
    }

    function initRouting() {
        window.addEventListener('hashchange', function () {
            render({ initial: false });
        });

        var tabList = $('#tabs');
        if (tabList) {
            tabList.addEventListener('keydown', handleKeyTabs);
        }

        render({ initial: true });
    }

    /* ---------- header, progress, back to top ---------- */

    function updateOnScroll() {
        var y = window.pageYOffset || document.documentElement.scrollTop;

        if (els.backToTop) {
            els.backToTop.hidden = y < 400;
        }

        if (!hasScrollTrigger && els.progress) {
            var max = document.documentElement.scrollHeight - window.innerHeight;
            var ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
            els.progress.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
            els.progress.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
        }

        ticking = false;
    }

    function requestScrollUpdate() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateOnScroll);
        }
    }

    function initProgress() {
        if (!els.progress) return;

        if (hasGsap && hasScrollTrigger && !reduced()) {
            window.gsap.registerPlugin(window.ScrollTrigger);
            progressTrigger = window.gsap.fromTo(els.progress,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: document.body,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: true
                    }
                }
            ).scrollTrigger;
            els.progress.style.transform = '';
        } else {
            window.addEventListener('scroll', requestScrollUpdate, { passive: true });
            window.addEventListener('resize', requestScrollUpdate);
        }
    }

    function initBackToTop() {
        if (!els.backToTop) return;

        els.backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' });
            var main = els.main;
            if (main) {
                main.focus({ preventScroll: true });
            }
        });

        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
        updateOnScroll();
    }

    /* ---------- print & year ---------- */

    function initPrint() {
        if (!els.printBtn) return;
        els.printBtn.addEventListener('click', function () {
            window.print();
        });
    }

    function setYear() {
        var year = document.getElementById('currentYear');
        if (year) {
            year.textContent = String(new Date().getFullYear());
        }
    }

    /* ---------- init ---------- */

    function cacheElements() {
        els.header = $('#mainHeader');
        els.main = $('#mainContent');
        els.tabsWrapper = $('.tabs-wrapper');
        els.burger = $('#hamburgerBtn');
        els.menu = $('#mobileMenu');
        els.themeBtn = $('#themeToggle');
        els.printBtn = $('#printBtn');
        els.backToTop = $('#backToTop');
        els.progress = $('#progressBar');
        els.toast = $('#toast');
    }

    function init() {
        cacheElements();
        initTheme();

        if (els.themeBtn) {
            els.themeBtn.addEventListener('click', toggleTheme);
        }

        initMenu();
        initCopy();
        initPrint();
        setYear();
        initProgress();
        initBackToTop();
        initRouting();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
