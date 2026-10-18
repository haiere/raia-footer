/* ============================================================
   script.js — Raia Footer v4.0.0
   UI logic: tema, tab, copy, back-to-top, scroll reveal.
   Bergantung pada: i18n.js (window.I18NManager), icons.js (window.renderIcons).
   ============================================================ */

(function () {
    'use strict';

    const LOGO_LIGHT = 'https://i.postimg.cc/GmWt2wch/H-blue.webp';
    const LOGO_DARK  = 'https://i.postimg.cc/8PJ0bhb1/H-haiere.webp';
    const VERSION    = 'v4.0.0';

    // ---- DOM ----
    const header       = document.getElementById('mainHeader');
    const themeToggle  = document.getElementById('themeToggle');
    const themeIcon    = document.getElementById('themeIcon');
    const langToggle   = document.getElementById('langToggle');
    const printBtn     = document.getElementById('printBtn');
    const backBtn      = document.getElementById('backToTop');
    const progressBar  = document.getElementById('progressBar');
    const yearSpan     = document.getElementById('currentYear');
    const hamburger    = document.getElementById('hamburgerBtn');
    const mobileMenu   = document.getElementById('mobileMenu');
    const headerLogo   = document.getElementById('header-logo');
    const footerLogo   = document.getElementById('footer-logo');
    const tabButtons   = document.querySelectorAll('.tab-btn');
    const tabPanels    = document.querySelectorAll('.tabpanel');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ============================================================
       0) RENDER SEMUA IKON
    ============================================================ */
    function refreshIcons(scope) {
        if (typeof window.renderIcons === 'function') {
            window.renderIcons(scope);
        }
    }
    refreshIcons();

    /* ============================================================
       1) THEME
    ============================================================ */
    function getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    function updateLogo() {
        const src = getTheme() === 'dark' ? LOGO_DARK : LOGO_LIGHT;
        if (headerLogo && headerLogo.src !== src) headerLogo.src = src;
        if (footerLogo && footerLogo.src !== src) footerLogo.src = src;
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        themeIcon.setAttribute('data-icon', theme === 'dark' ? 'moon' : 'sun');
        themeIcon.removeAttribute('data-sw');
        themeIcon.innerHTML = '';
        if (typeof window.renderIcon === 'function') {
            window.renderIcon(themeIcon);
        }
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('raiaTheme', theme); } catch (_) {}
        updateThemeIcon(theme);
        updateLogo();
    }

    (function initTheme() {
        let saved;
        try { saved = localStorage.getItem('raiaTheme'); } catch (_) {}
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(saved || (prefersDark ? 'dark' : 'light'));
    })();

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            setTheme(getTheme() === 'dark' ? 'light' : 'dark');
        });
    }

    /* ============================================================
       2) LANGUAGE
    ============================================================ */
    if (window.I18NManager) {
        window.I18NManager.init();

        function refreshLangButton() {
            if (langToggle) {
                langToggle.textContent = window.I18NManager.get() === 'id' ? 'EN' : 'ID';
            }
        }
        refreshLangButton();

        if (langToggle) {
            langToggle.addEventListener('click', function () {
                const next = window.I18NManager.get() === 'id' ? 'en' : 'id';
                window.I18NManager.set(next);
                refreshLangButton();
            });
        }

        window.I18NManager.onChange(refreshLangButton);
    }

    /* ============================================================
       3) PRINT
    ============================================================ */
    if (printBtn) {
        printBtn.addEventListener('click', function () { window.print(); });
    }

    /* ============================================================
       4) SCROLL: progress + header + back-to-top
    ============================================================ */
    let ticking = false;
    function onScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (progressBar) {
            progressBar.style.transform = 'scaleX(' + (percent / 100) + ')';
            progressBar.setAttribute('aria-valuenow', Math.round(percent));
        }
        if (backBtn) backBtn.classList.toggle('show', scrollTop > 300);
        if (header) header.classList.toggle('scrolled', scrollTop > 20);
    }
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                onScroll(); ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    onScroll();

    if (backBtn) {
        backBtn.addEventListener('click', function () {
            const behavior = prefersReduced ? 'auto' : 'smooth';
            window.scrollTo({ top: 0, behavior: behavior });
        });
    }

    /* ============================================================
       5) YEAR
    ============================================================ */
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    /* ============================================================
       6) HAMBURGER / MOBILE MENU
    ============================================================ */
    function toggleMobileMenu(open) {
        if (!mobileMenu || !hamburger) return;
        const isOpen = (open !== undefined) ? open : !mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open', isOpen);
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
        mobileMenu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { toggleMobileMenu(false); });
        });
        document.addEventListener('click', function (e) {
            if (mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(e.target) &&
                !hamburger.contains(e.target)) {
                toggleMobileMenu(false);
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                toggleMobileMenu(false);
                hamburger.focus();
            }
        });
    }

    /* ============================================================
       7) SCROLL REVEAL
    ============================================================ */
    const revealObserver = (function () {
        if (prefersReduced || !('IntersectionObserver' in window)) {
            document.querySelectorAll('[data-scroll-reveal]').forEach(function (el) {
                el.classList.add('is-revealed');
            });
            return null;
        }
        const obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -50px 0px'
        });
        return obs;
    })();

    function assignStagger() {
        const parents = document.querySelectorAll(
            '.tools-grid, .ai-grid, .games-grid, .sitemap-grid, .project-grid, .social-list'
        );
        parents.forEach(function (group) {
            const children = group.querySelectorAll('[data-scroll-reveal]');
            children.forEach(function (el, i) {
                el.style.setProperty('--reveal-delay', Math.min(i * 60, 360) + 'ms');
            });
        });
    }

    function observeReveals(root) {
        if (!revealObserver) return;
        const scope = root || document;
        scope.querySelectorAll('[data-scroll-reveal]:not(.is-revealed)').forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    assignStagger();
    observeReveals();

    /* ============================================================
       8) TABS
    ============================================================ */
    function activateTab(panelId, pushHash) {
        tabButtons.forEach(function (btn) {
            const isActive = btn.getAttribute('data-target') === panelId;
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            btn.setAttribute('tabindex', isActive ? '0' : '-1');
        });
        tabPanels.forEach(function (panel) {
            panel.setAttribute('aria-hidden', panel.id === panelId ? 'false' : 'true');
        });
        if (pushHash !== false) {
            const newHash = '#' + panelId.replace('-panel', '');
            if (window.location.hash !== newHash) {
                history.pushState(null, null, newHash);
            }
        }
        document.querySelectorAll('.mobile-menu a').forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + panelId);
        });

        const activePanel = document.getElementById(panelId);
        document.dispatchEvent(new CustomEvent('raia:tabchange', {
            detail: { panel: activePanel }
        }));
    }

    tabButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            if (target) {
                activateTab(target);
                toggleMobileMenu(false);
            }
        });

        btn.addEventListener('keydown', function (e) {
            const list = Array.from(tabButtons);
            const idx = list.indexOf(this);
            let next = idx;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault(); next = (idx + 1) % list.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault(); next = (idx - 1 + list.length) % list.length;
            } else if (e.key === 'Home') {
                e.preventDefault(); next = 0;
            } else if (e.key === 'End') {
                e.preventDefault(); next = list.length - 1;
            }
            if (next !== idx) {
                const target = list[next].getAttribute('data-target');
                if (target) {
                    activateTab(target);
                    list[next].focus();
                }
            }
        });
    });

    // Init dari hash
    (function initTab() {
        const hash = (window.location.hash || '#privacy').replace('#', '');
        const panelId = hash + '-panel';
        const exists = document.querySelector('.tab-btn[data-target="' + panelId + '"]');
        activateTab(exists ? panelId : 'privacy-panel', false);
    })();

    window.addEventListener('hashchange', function () {
        const hash = (window.location.hash || '#privacy').replace('#', '');
        const panelId = hash + '-panel';
        if (document.querySelector('.tab-btn[data-target="' + panelId + '"]')) {
            activateTab(panelId, false);
        }
    });

    // Re-scan saat tab berubah
    document.addEventListener('raia:tabchange', function (e) {
        const panel = e.detail && e.detail.panel ? e.detail.panel : document;
        refreshIcons(panel);
        assignStagger();
        observeReveals(panel);
    });

    /* ============================================================
       9) COPY TO CLIPBOARD
    ============================================================ */
    document.querySelectorAll('.copy-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const container = this.closest('.copy-container');
            if (!container) return;
            const textEl = container.querySelector('.copy-text');
            if (!textEl) return;
            const text = textEl.textContent.trim();
            if (!text) return;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(function () {
                    showCopied(btn);
                }).catch(function () {
                    fallbackCopy(text, btn);
                });
            } else {
                fallbackCopy(text, btn);
            }
        });
    });

    function fallbackCopy(text, btn) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); showCopied(btn); } catch (_) {}
        document.body.removeChild(ta);
    }

    function showCopied(btn) {
        btn.classList.add('copied');
        const icon = btn.querySelector('svg[data-icon]');
        if (icon) {
            icon.setAttribute('data-icon', 'check');
            icon.innerHTML = '';
            if (typeof window.renderIcon === 'function') window.renderIcon(icon);
        }
        setTimeout(function () {
            btn.classList.remove('copied');
            if (icon) {
                icon.setAttribute('data-icon', 'copy');
                icon.innerHTML = '';
                if (typeof window.renderIcon === 'function') window.renderIcon(icon);
            }
        }, 1800);
    }

    /* ============================================================
       DONE
    ============================================================ */
    console.log('%cRaia Footer ' + VERSION,
        'color:#2563eb;font-weight:bold;',
        'All icons via icons.js · Tools · AI/Bot · Games');
})();