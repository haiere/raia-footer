/* ============================================================
   script.js — Raia Footer v3.9.b
   UI logic: tema, tab, copy, back-to-top, dsb.
   Bergantung pada i18n.js (window.I18NManager).
   ============================================================ */

(function () {
    'use strict';

    const LOGO_LIGHT = 'https://i.postimg.cc/GmWt2wch/H-blue.webp';
    const LOGO_DARK  = 'https://i.postimg.cc/8PJ0bhb1/H-haiere.webp';

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

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('raiaTheme', theme); } catch (_) {}
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
        updateLogo();
    }

    (function initTheme() {
        let saved;
        try { saved = localStorage.getItem('raiaTheme'); } catch (_) {}
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(saved || (prefersDark ? 'dark' : 'light'));
    })();

    themeToggle.addEventListener('click', function () {
        setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });

    /* ============================================================
       2) LANGUAGE — pakai I18NManager dari i18n.js
    ============================================================ */
    if (window.I18NManager) {
        window.I18NManager.init();

        // Update tombol
        function refreshLangButton() {
            langToggle.textContent = window.I18NManager.get() === 'id' ? 'EN' : 'ID';
        }
        refreshLangButton();

        langToggle.addEventListener('click', function () {
            const next = window.I18NManager.get() === 'id' ? 'en' : 'id';
            window.I18NManager.set(next);
            refreshLangButton();
        });

        window.I18NManager.onChange(refreshLangButton);
    }

    /* ============================================================
       3) PRINT
    ============================================================ */
    printBtn.addEventListener('click', function () { window.print(); });

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

    backBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ============================================================
       5) YEAR
    ============================================================ */
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    /* ============================================================
       6) HAMBURGER / MOBILE MENU
    ============================================================ */
    function toggleMobileMenu(open) {
        const isOpen = (open !== undefined) ? open : !mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open', isOpen);
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
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

    /* ============================================================
       7) TABS
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
        // Update mobile menu active state
        document.querySelectorAll('.mobile-menu a').forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + panelId);
        });
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

    // Init dari hash URL
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

    /* ============================================================
       8) COPY TO CLIPBOARD
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
        const icon = btn.querySelector('i');
        if (icon) icon.className = 'fas fa-check';
        setTimeout(function () {
            btn.classList.remove('copied');
            if (icon) icon.className = 'fas fa-copy';
        }, 1800);
    }

    /* ============================================================
       DONE
    ============================================================ */
    console.log('%c✅ Raia Footer v3.9.b', 'color:#2563eb;font-weight:bold;', 'Legal & Sitemap — modern, friendly, i18n-ready.');
})();