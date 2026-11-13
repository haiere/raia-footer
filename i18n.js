/* ==========================================================================
   Raia Footer v4.0.2 · i18n.js
   Bilingual dictionary: id (Bahasa Indonesia) and en (English)
   Applies translations to [data-i18n] (innerHTML, keeps HTML tags)
   and [data-i18n-aria] (aria-label). Saves choice in localStorage.
   License: CC0 1.0 Universal
   ========================================================================== */

(function () {
    'use strict';

    var STORAGE_KEY = 'haiere_lang';
    var SUPPORTED = ['en', 'id'];

    var DICT = {
        en: {
            'meta.title': 'Legal Info, Tools & Page List | Raia Footer v4.0.2',
            'meta.description': 'Important information about Raia Footer v4.0.2: privacy, terms of use, sitemap, cookies, tools, AI and bots, and games.',

            'skip': 'Skip to main content',
            'brand': 'Haiere',
            'nav.home': 'Home',
            'nav.music': 'Music',
            'nav.tools': 'Tools',
            'nav.legal': 'Legal',
            'aria.theme': 'Switch light or dark theme',
            'aria.lang': 'Change language',
            'aria.print': 'Print this page',
            'aria.menu': 'Open menu',
            'aria.top': 'Back to top',

            'hero.eyebrow': 'Raia Footer v4.0.2 · November 13, 2026',
            'hero.title': 'Legal Info, Tools & Page List',
            'hero.subtitle': 'The important things about this site, written in plain words.',

            'about.title': 'About Raia Footer',
            'about.text': 'Raia Footer is a site footer you can drop into your own website. Version 4.0.2 refreshes the look, improves the text, and makes the pages easier to use on any screen.',

            'tab.privacy': 'Privacy',
            'tab.terms': 'Terms of Use',
            'tab.sitemap': 'Sitemap',
            'tab.cookies': 'Cookies',
            'tab.tools': 'Tools',
            'tab.ai': 'AI / Bot',
            'tab.games': 'Games',

            'privacy.title': 'Privacy Rules',
            'privacy.version': 'Version 4.0.2 · November 13, 2026',
            'privacy.intro': 'In short: we only collect what we need, and only what you give us yourself. We <strong>never sell</strong> your data.',
            'privacy.data.title': '1. What data do we collect?',
            'privacy.data.item1': '<strong>What you type yourself</strong>, such as your name and message in the contact form.',
            'privacy.data.item2': '<strong>Technical info without names</strong>, such as your browser and device, from Google Analytics. This cannot identify you.',
            'privacy.data.item3': '<strong>Your choices</strong>, such as language and theme. They are saved in your own browser (<code>localStorage</code>), not on our server.',
            'privacy.data.item4': '<strong>Digital tools</strong>, such as HajirSync, Raia Delta, Scrub, Vault, Minify, QRe, and RAIA. They run <strong>on your own device</strong>, and nothing is sent anywhere.',
            'privacy.cookies.title': '2. Cookies and other services',
            'privacy.cookies.item1': '<strong>Function cookies</strong> remember your language and theme when you come back.',
            'privacy.cookies.item2': '<strong>Google Analytics</strong> hides your IP address. It is only used to see general visit numbers.',
            'privacy.cookies.item3': '<strong>Formspree</strong> handles the contact form. Messages are deleted at most 30 days after sending.',
            'privacy.cookies.item4': '<strong>Links to other sites</strong>, such as YouTube, Instagram, SoundCloud, and GitHub. Each one has its own privacy rules.',
            'privacy.security.title': '3. How is your data kept safe?',
            'privacy.security.item1': 'This site uses <strong>HTTPS/TLS</strong>. Every connection is encrypted, so others cannot read it.',
            'privacy.security.item2': 'A <strong>Content Security Policy (CSP)</strong> adds a layer of protection against attacks.',
            'privacy.security.item3': 'Everything you send in is checked carefully.',
            'privacy.security.item4': 'Every tool runs in your browser, so your data stays on your device.',
            'privacy.rights.title': '4. Your rights',
            'privacy.rights.desc': 'You have the right to:',
            'privacy.rights.item1': '<strong>See</strong> a copy of the personal data we keep.',
            'privacy.rights.item2': '<strong>Fix</strong> anything that is wrong.',
            'privacy.rights.item3': '<strong>Delete</strong> your personal data.',
            'privacy.rights.contact': 'Want to ask for one of these? Reach us through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page, or email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
            'privacy.changes.title': '5. If things change',
            'privacy.changes.desc': 'If we change these rules, the date at the top of this page will change too. We will never change them in secret.',
            'privacy.contact.title': '6. Contact us',
            'privacy.contact.desc': 'Questions about privacy? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page, or email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
            'privacy.summary': '<strong>In short:</strong> Your data is safe. We only collect what we need. We never sell anything. All tools work on your own device.',
            'copy.privacy': 'Copy privacy summary',

            'terms.title': 'Terms of Use',
            'terms.version': 'Version 4.0.2 · November 13, 2026',
            'terms.intro': 'By using this site, you agree to the rules below. They are fair and simple.',
            'terms.ip.title': '1. Everything here belongs to Haiere',
            'terms.ip.desc1': 'This includes:',
            'terms.ip.item1': '13 original songs: 5 from <em>Fragmen Suara</em>, 7 from <em>Resonansi Dalam Diam</em>, and 1 single, <em>Saya Akan Lawan</em>.',
            'terms.ip.item2': 'All the writing, design, and look of the site.',
            'terms.ip.item3': 'All the digital tools (HajirSync, Raia Delta, Scrub, Vault, Minify, QRe, RAIA).',
            'terms.ip.desc2': 'All of it is protected by copyright and owned by Haiere.',
            'terms.code.license': '<strong>Code license:</strong> the source code of Raia Footer (HTML, CSS, JavaScript) is released under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0 Universal</a>, which places it in the public domain. You may copy, change, and share the code freely, without credit. This applies to the code only. The content above remains &copy; Haiere.',
            'terms.ip.usage': '<strong>You may use it for:</strong>',
            'terms.ip.usage1': 'Personal use, not for making money. It is free.',
            'terms.ip.usage2': 'Commercial use. Ask Muhaajir for written permission first.',
            'terms.ip.usage3': 'Covers or remixes are allowed, as long as you keep the credit: &copy; Muhaajir.',
            'copy.credit': 'Copy credit',
            'terms.prohibited.title': '2. What you must not do',
            'terms.prohibited.item1': 'Resell, share, or claim this work as your own without permission.',
            'terms.prohibited.item2': 'Collect data automatically (<em>scraping</em>) or try to break into the system.',
            'terms.prohibited.item3': 'Use the tools here for illegal activities or to harm others.',
            'terms.disclaimer.title': '3. Limits of our responsibility',
            'terms.disclaimer.desc1': 'This site is provided <strong>"as is"</strong>. We are not responsible if:',
            'terms.disclaimer.item1': 'A download fails or a file is broken.',
            'terms.disclaimer.item2': 'A tool runs into a technical problem. This includes the chance of data loss on your device.',
            'terms.disclaimer.item3': 'Content or rules on outside links connected to this site.',
            'terms.law.title': '4. Which law applies',
            'terms.law.desc': 'This site follows the <strong>laws of the Republic of Indonesia</strong>. The legal area is <strong>Bogor, West Java</strong>.',
            'terms.changes.title': '5. If the rules change',
            'terms.changes.desc': 'The rules can be updated at any time. The newest version is always on this page, with the date it changed.',
            'terms.contact.title': '6. Contact us',
            'terms.contact.desc': 'Questions about these terms? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page, or email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
            'copy.terms': 'Copy terms summary',
            'terms.summary': '<strong>In short:</strong> Everything belongs to Haiere. Free for personal use. For commercial use, ask first. This site is provided "as is".',

            'sitemap.title': 'Sitemap',
            'sitemap.version': 'All pages · Version 4.0.2',
            'sitemap.main.title': 'Main pages',
            'sitemap.home': 'Home',
            'sitemap.home.desc': 'Profile, bio, and music player',
            'sitemap.showcase': 'Showcase',
            'sitemap.showcase.desc': 'Music portfolio',
            'sitemap.tools': 'Tools',
            'sitemap.tools.desc': 'HajirSync, Raia Delta, Scrub, Vault, Minify, QRe',
            'sitemap.raia': 'RAIA',
            'sitemap.raia.desc': 'AI chatbot with 9+ providers',
            'sitemap.ecosystem.title': 'Haiere ecosystem',
            'sitemap.p.hajirsync': 'LRC lyrics generator',
            'sitemap.p.delta': 'Text diff checker',
            'sitemap.p.scrub': 'Metadata cleaner',
            'sitemap.p.vault': 'Password manager',
            'sitemap.p.music': 'Music player',
            'sitemap.p.minify': 'Shrink your files',
            'sitemap.p.qre': 'QR code generator',
            'sitemap.p.raia': 'AI chatbot, 9+ providers',
            'sitemap.nav.title': 'Main navigation',
            'sitemap.nav.home': 'Home',
            'sitemap.nav.legal': 'Legal',
            'sitemap.nav.tools': 'Tools',
            'sitemap.nav.raia': 'RAIA',
            'sitemap.social.title': 'Social media and contact',
            'sitemap.social.note': 'For official contact, use the form on the main page or email isthajir@proton.me.',
            'copy.changelog': 'Copy version history',
            'changelog.title': 'Version history: v4.0.2',
            'changelog.item0': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Pages now open from short links such as <code>/#privacy</code> and <code>/#tools</code>.',
            'changelog.item1': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Refreshed look: Aurora Navy theme with cyan and gold accents.',
            'changelog.item2': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Fonts: Sora (headings), Inter (body), and JetBrains Mono (data).',
            'changelog.item3': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> All icons are now SVG.',
            'changelog.item4': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Copy and layout polished for phones and desktops.',
            'changelog.item5': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Accessibility: keyboard focus, labels, and reduced motion.',

            'cookies.title': 'Cookie Rules',
            'cookies.version': 'Version 4.0.2 · November 13, 2026',
            'cookies.intro': 'We use cookies to make this site more comfortable for you. Here is the simple version.',
            'cookies.what.title': '1. What is a cookie?',
            'cookies.what.desc': 'A cookie is a small file saved on your device when you open a site. It works like a short note. It helps the site remember your choices, such as theme or language, when you come back.',
            'cookies.weuse.title': '2. Cookies we use',
            'cookies.table.name': 'Name',
            'cookies.table.type': 'Type',
            'cookies.table.purpose': 'Purpose',
            'cookies.table.duration': 'Duration',
            'cookies.type.functional': 'Functional',
            'cookies.type.preference': 'Preference',
            'cookies.type.analytics': 'Analytics',
            'cookies.row.raia': 'Saves your RAIA settings (provider, model, parameters)',
            'cookies.row.lang': 'Saves your language choice (ID/EN)',
            'cookies.row.theme': 'Saves your theme choice (light or dark)',
            'cookies.row.consent': 'Saves your answer to the cookie banner',
            'cookies.row.permanent': 'Until deleted',
            'cookies.row.ga': 'Tells visitors apart without names',
            'cookies.row.ga2': 'Saves session state and grouped numbers',
            'cookies.row.ga_duration': '2 years',
            'cookies.third.title': '3. Other services',
            'cookies.third.ga': '<strong>Google Analytics</strong> shows visit stats with data that has no names.',
            'cookies.third.formspree': '<strong>Formspree</strong> handles the contact form. It sets no tracking cookies.',
            'cookies.third.external': '<strong>YouTube, Instagram, SoundCloud, GitHub</strong> are outside links. Each one has its own cookie rules.',
            'cookies.control.title': '4. How to manage cookies',
            'cookies.control.browser': '<strong>In your browser:</strong> you can refuse or delete cookies in your privacy settings.',
            'cookies.control.banner': '<strong>In the cookie banner:</strong> choose accept or decline on your first visit.',
            'cookies.control.ga': '<strong>Opt out of Google Analytics:</strong> install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">official add-on</a> if you do not want to be tracked.',
            'cookies.changes.title': '5. If the rules change',
            'cookies.changes.desc': 'These cookie rules can be updated at any time. The newest version is always on this page.',
            'cookies.contact.title': '6. Contact us',
            'cookies.contact.desc': 'Questions about cookies? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page, or email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
            'copy.cookies': 'Copy cookie summary',
            'cookies.summary': '<strong>In short:</strong> Cookies are only used for your comfort, to remember your theme, your language, and anonymous stats. You can manage them yourself at any time.',

            'tools.title': 'Hajir Tools',
            'tools.version': 'Version 4.0.2 · November 13, 2026',
            'tools.intro': 'A set of digital tools from the Haiere ecosystem. All of them are light and run right in your browser.',
            'tools.cta': 'Open tool',
            'tools.hajirsync.name': 'HajirSync',
            'tools.hajirsync.desc': 'Sync lyrics with your song.',
            'tools.vault.name': 'Raia Vault',
            'tools.vault.desc': 'A personal password vault.',
            'tools.scrub.name': 'Raia Scrub',
            'tools.scrub.desc': 'Clean the metadata from your files.',
            'tools.delta.name': 'Raia Delta',
            'tools.delta.desc': 'Compare two texts and spot the differences.',
            'tools.minify.name': 'Raia Minify',
            'tools.minify.desc': 'Shrink the size of HTML, CSS, and JS files.',
            'tools.raiaspace.name': 'RaiaSpace',
            'tools.raiaspace.desc': 'A digital workspace from Raia.',
            'tools.calc.name': 'Calc',
            'tools.calc.desc': 'A simple calculator for everyday needs.',
            'tools.qre.name': 'QRe',
            'tools.qre.desc': 'Make QR codes in your browser. Everything is processed locally.',

            'ai.title': 'AI and Bots',
            'ai.version': 'Version 4.0.2 · November 13, 2026',
            'ai.intro': 'Digital assistants from the Haiere ecosystem. Pick one to start chatting.',
            'ai.badge': 'AI',
            'ai.cta': 'Start chat',
            'ai.raia.name': 'Raia',
            'ai.raia.desc': 'An AI chatbot that works with many model providers.',
            'ai.kirana.name': 'Kirana',
            'ai.kirana.desc': 'An AI assistant from Haiere.',

            'games.title': 'Games',
            'games.version': 'Version 4.0.2 · November 13, 2026',
            'games.intro': 'Light games you can play right in the browser.',
            'games.cta': 'Play',
            'games.chess.name': 'Chess',
            'games.chess.desc': 'The classic game of chess.',
            'games.loveyou.name': 'Loveyou',
            'games.loveyou.desc': 'A small game with a sweet theme.',
            'games.orbit.name': 'Orbit Weaver',
            'games.orbit.desc': 'A game about orbits and motion.',
            'games.starfall.name': 'Starfall',
            'games.starfall.desc': 'A game about falling stars.',

            'footer.home': 'Home',
            'footer.about': 'About',
            'footer.music': 'Music',
            'footer.tools': 'Tools',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms of Use',
            'footer.sitemap': 'Sitemap',
            'footer.cookies': 'Cookies',
            'footer.email': 'isthajir@proton.me',
            'footer.rights': 'Raia Footer, made with heart by Haiere.',
            'footer.license': 'Code licensed under CC0 1.0 Universal',
            'footer.disclaimer': 'Note: you are responsible for how you use the tools here. Haiere is not responsible for damage or lost data.'
        },

        id: {
            'meta.title': 'Info Hukum, Tools & Daftar Halaman | Raia Footer v4.0.2',
            'meta.description': 'Informasi penting tentang Raia Footer v4.0.2: privasi, syarat penggunaan, peta situs, cookie, tools, AI dan bot, serta game.',

            'skip': 'Lewati ke konten utama',
            'brand': 'Haiere',
            'nav.home': 'Beranda',
            'nav.music': 'Musik',
            'nav.tools': 'Tools',
            'nav.legal': 'Hukum',
            'aria.theme': 'Ganti tema terang atau gelap',
            'aria.lang': 'Ganti bahasa',
            'aria.print': 'Cetak halaman ini',
            'aria.menu': 'Buka menu',
            'aria.top': 'Kembali ke atas',

            'hero.eyebrow': 'Raia Footer v4.0.2 · 13 November 2026',
            'hero.title': 'Info Hukum, Tools & Daftar Halaman',
            'hero.subtitle': 'Hal-hal penting tentang situs ini, ditulis dengan bahasa sederhana.',

            'about.title': 'Tentang Raia Footer',
            'about.text': 'Raia Footer adalah footer situs yang bisa kamu pasang di website sendiri. Versi 4.0.2 menyegarkan tampilannya, merapikan teks, dan membuat halaman lebih nyaman dibuka di layar mana pun.',

            'tab.privacy': 'Privasi',
            'tab.terms': 'Syarat Penggunaan',
            'tab.sitemap': 'Peta Situs',
            'tab.cookies': 'Cookie',
            'tab.tools': 'Tools',
            'tab.ai': 'AI / Bot',
            'tab.games': 'Game',

            'privacy.title': 'Aturan Privasi',
            'privacy.version': 'Versi 4.0.2 · 13 November 2026',
            'privacy.intro': 'Singkatnya: kami hanya mengambil data yang benar-benar perlu, dan hanya yang kamu berikan sendiri. Data kamu <strong>tidak pernah dijual</strong>.',
            'privacy.data.title': '1. Data apa yang kami ambil?',
            'privacy.data.item1': '<strong>Yang kamu ketik sendiri</strong>, seperti nama dan pesan di formulir kontak.',
            'privacy.data.item2': '<strong>Info teknis tanpa nama</strong>, seperti jenis browser dan perangkat, dari Google Analytics. Info ini tidak bisa mengenali kamu.',
            'privacy.data.item3': '<strong>Pilihan kamu</strong>, seperti bahasa dan tema. Pilihan ini disimpan di browser kamu sendiri (<code>localStorage</code>), bukan di server kami.',
            'privacy.data.item4': '<strong>Tools digital</strong>, seperti HajirSync, Raia Delta, Scrub, Vault, Minify, QRe, dan RAIA. Semuanya berjalan <strong>di perangkat kamu sendiri</strong>, dan tidak ada yang dikirim ke mana pun.',
            'privacy.cookies.title': '2. Cookie dan layanan lain',
            'privacy.cookies.item1': '<strong>Cookie fungsi</strong> mengingat bahasa dan tema kamu saat kamu kembali.',
            'privacy.cookies.item2': '<strong>Google Analytics</strong> menyembunyikan alamat IP kamu. Data ini hanya dipakai untuk melihat jumlah kunjungan secara umum.',
            'privacy.cookies.item3': '<strong>Formspree</strong> menangani formulir kontak. Pesan dihapus paling lama 30 hari setelah dikirim.',
            'privacy.cookies.item4': '<strong>Tautan ke situs lain</strong>, seperti YouTube, Instagram, SoundCloud, dan GitHub. Masing-masing punya aturan privasinya sendiri.',
            'privacy.security.title': '3. Bagaimana data kamu dijaga?',
            'privacy.security.item1': 'Situs ini memakai <strong>HTTPS/TLS</strong>. Setiap koneksi dienkripsi, jadi orang lain tidak bisa membacanya.',
            'privacy.security.item2': '<strong>Content Security Policy (CSP)</strong> menambah lapisan perlindungan dari serangan.',
            'privacy.security.item3': 'Setiap data yang kamu kirim diperiksa dengan teliti.',
            'privacy.security.item4': 'Semua tools berjalan di browser kamu, jadi data tetap ada di perangkatmu.',
            'privacy.rights.title': '4. Hak kamu',
            'privacy.rights.desc': 'Kamu berhak untuk:',
            'privacy.rights.item1': '<strong>Melihat</strong> salinan data pribadi yang kami simpan.',
            'privacy.rights.item2': '<strong>Memperbaiki</strong> data yang keliru.',
            'privacy.rights.item3': '<strong>Menghapus</strong> data pribadi kamu.',
            'privacy.rights.contact': 'Mau minta salah satu dari ini? Hubungi kami lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama, atau email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
            'privacy.changes.title': '5. Jika ada perubahan',
            'privacy.changes.desc': 'Jika aturan ini kami ubah, tanggal di bagian atas halaman ini ikut berubah. Kami tidak akan mengubahnya diam-diam.',
            'privacy.contact.title': '6. Hubungi kami',
            'privacy.contact.desc': 'Ada pertanyaan soal privasi? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama, atau email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
            'privacy.summary': '<strong>Singkatnya:</strong> Data kamu aman. Kami hanya mengambil yang perlu. Kami tidak pernah menjual apa pun. Semua tools berjalan di perangkat kamu sendiri.',
            'copy.privacy': 'Salin ringkasan privasi',

            'terms.title': 'Syarat Penggunaan',
            'terms.version': 'Versi 4.0.2 · 13 November 2026',
            'terms.intro': 'Dengan memakai situs ini, kamu setuju dengan aturan di bawah. Aturannya adil dan sederhana.',
            'terms.ip.title': '1. Semua yang ada di sini milik Haiere',
            'terms.ip.desc1': 'Ini mencakup:',
            'terms.ip.item1': '13 lagu orisinal: 5 dari <em>Fragmen Suara</em>, 7 dari <em>Resonansi Dalam Diam</em>, dan 1 single, <em>Saya Akan Lawan</em>.',
            'terms.ip.item2': 'Semua tulisan, desain, dan tampilan situs.',
            'terms.ip.item3': 'Semua tools digital (HajirSync, Raia Delta, Scrub, Vault, Minify, QRe, RAIA).',
            'terms.ip.desc2': 'Semuanya dilindungi hak cipta dan dimiliki oleh Haiere.',
            'terms.code.license': '<strong>Lisensi kode:</strong> kode sumber Raia Footer (HTML, CSS, JavaScript) dirilis di bawah <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0 Universal</a>, yang menempatkannya di domain publik. Kamu boleh menyalin, mengubah, dan membagikan kode ini dengan bebas, tanpa mencantumkan kredit. Ini hanya berlaku untuk kode. Konten di atas tetap &copy; Haiere.',
            'terms.ip.usage': '<strong>Kamu boleh memakainya untuk:</strong>',
            'terms.ip.usage1': 'Penggunaan pribadi, bukan untuk mencari uang. Gratis.',
            'terms.ip.usage2': 'Penggunaan komersial. Minta izin tertulis dari Muhaajir terlebih dahulu.',
            'terms.ip.usage3': 'Cover atau remix diperbolehkan, selama kamu tetap mencantumkan kredit: &copy; Muhaajir.',
            'copy.credit': 'Salin kredit',
            'terms.prohibited.title': '2. Yang tidak boleh kamu lakukan',
            'terms.prohibited.item1': 'Menjual kembali, membagikan, atau mengklaim karya ini sebagai milikmu tanpa izin.',
            'terms.prohibited.item2': 'Mengambil data secara otomatis (<em>scraping</em>) atau mencoba menembus sistem.',
            'terms.prohibited.item3': 'Memakai tools di sini untuk kegiatan ilegal atau untuk merugikan orang lain.',
            'terms.disclaimer.title': '3. Batas tanggung jawab kami',
            'terms.disclaimer.desc1': 'Situs ini disediakan <strong>"apa adanya"</strong>. Kami tidak bertanggung jawab jika:',
            'terms.disclaimer.item1': 'Unduhan gagal atau file-nya rusak.',
            'terms.disclaimer.item2': 'Tools mengalami masalah teknis. Ini termasuk kemungkinan data di perangkatmu hilang.',
            'terms.disclaimer.item3': 'Isi atau aturan dari tautan luar yang terhubung dengan situs ini.',
            'terms.law.title': '4. Hukum yang berlaku',
            'terms.law.desc': 'Semua hal di situs ini mengikuti <strong>hukum Republik Indonesia</strong>. Wilayah hukumnya adalah <strong>Bogor, Jawa Barat</strong>.',
            'terms.changes.title': '5. Jika aturan berubah',
            'terms.changes.desc': 'Aturan ini bisa diperbarui kapan saja. Versi terbaru selalu ada di halaman ini, beserta tanggal perubahannya.',
            'terms.contact.title': '6. Hubungi kami',
            'terms.contact.desc': 'Ada pertanyaan tentang syarat ini? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama, atau email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
            'copy.terms': 'Salin ringkasan syarat',
            'terms.summary': '<strong>Singkatnya:</strong> Semuanya milik Haiere. Gratis untuk pemakaian pribadi. Untuk pemakaian komersial, tanyakan dulu. Situs ini disediakan "apa adanya".',

            'sitemap.title': 'Peta Situs',
            'sitemap.version': 'Semua halaman · Versi 4.0.2',
            'sitemap.main.title': 'Halaman utama',
            'sitemap.home': 'Beranda',
            'sitemap.home.desc': 'Profil, bio, dan pemutar musik',
            'sitemap.showcase': 'Showcase',
            'sitemap.showcase.desc': 'Portofolio musik',
            'sitemap.tools': 'Tools',
            'sitemap.tools.desc': 'HajirSync, Raia Delta, Scrub, Vault, Minify, QRe',
            'sitemap.raia': 'RAIA',
            'sitemap.raia.desc': 'Chatbot AI dengan 9+ penyedia',
            'sitemap.ecosystem.title': 'Ekosistem Haiere',
            'sitemap.p.hajirsync': 'Pembuat lirik LRC',
            'sitemap.p.delta': 'Pembanding teks',
            'sitemap.p.scrub': 'Pembersih metadata',
            'sitemap.p.vault': 'Pengelola kata sandi',
            'sitemap.p.music': 'Pemutar musik',
            'sitemap.p.minify': 'Perkecil file kamu',
            'sitemap.p.qre': 'Pembuat kode QR',
            'sitemap.p.raia': 'Chatbot AI, 9+ penyedia',
            'sitemap.nav.title': 'Navigasi utama',
            'sitemap.nav.home': 'Beranda',
            'sitemap.nav.legal': 'Hukum',
            'sitemap.nav.tools': 'Tools',
            'sitemap.nav.raia': 'RAIA',
            'sitemap.social.title': 'Media sosial dan kontak',
            'sitemap.social.note': 'Untuk kontak resmi, pakai formulir di halaman utama atau email isthajir@proton.me.',
            'copy.changelog': 'Salin riwayat versi',
            'changelog.title': 'Riwayat versi: v4.0.2',
            'changelog.item0': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Halaman sekarang bisa dibuka lewat tautan singkat seperti <code>/#privacy</code> dan <code>/#tools</code>.',
            'changelog.item1': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Tampilan baru dengan tema Aurora Navy, aksen cyan dan emas.',
            'changelog.item2': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Font: Sora (judul), Inter (isi), dan JetBrains Mono (data).',
            'changelog.item3': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Semua ikon sekarang berbentuk SVG.',
            'changelog.item4': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Copy dan tata letak dirapikan untuk ponsel dan desktop.',
            'changelog.item5': '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> Aksesibilitas: fokus keyboard, label, dan gerakan yang dikurangi.',

            'cookies.title': 'Aturan Cookie',
            'cookies.version': 'Versi 4.0.2 · 13 November 2026',
            'cookies.intro': 'Kami memakai cookie agar situs ini lebih nyaman untukmu. Ini penjelasan sederhananya.',
            'cookies.what.title': '1. Apa itu cookie?',
            'cookies.what.desc': 'Cookie adalah file kecil yang disimpan di perangkatmu saat kamu membuka sebuah situs. Cookie seperti catatan pendek. Cookie membantu situs mengingat pilihanmu, seperti tema atau bahasa, saat kamu kembali.',
            'cookies.weuse.title': '2. Cookie yang kami pakai',
            'cookies.table.name': 'Nama',
            'cookies.table.type': 'Jenis',
            'cookies.table.purpose': 'Fungsi',
            'cookies.table.duration': 'Masa berlaku',
            'cookies.type.functional': 'Fungsi',
            'cookies.type.preference': 'Preferensi',
            'cookies.type.analytics': 'Analitik',
            'cookies.row.raia': 'Menyimpan pengaturan RAIA kamu (penyedia, model, parameter)',
            'cookies.row.lang': 'Menyimpan pilihan bahasa kamu (ID/EN)',
            'cookies.row.theme': 'Menyimpan pilihan tema kamu (terang atau gelap)',
            'cookies.row.consent': 'Menyimpan jawabanmu di banner cookie',
            'cookies.row.permanent': 'Sampai dihapus',
            'cookies.row.ga': 'Membedakan pengunjung tanpa nama',
            'cookies.row.ga2': 'Menyimpan status sesi dan angka yang dikelompokkan',
            'cookies.row.ga_duration': '2 tahun',
            'cookies.third.title': '3. Layanan lain',
            'cookies.third.ga': '<strong>Google Analytics</strong> menampilkan statistik kunjungan dengan data yang tidak memuat nama.',
            'cookies.third.formspree': '<strong>Formspree</strong> menangani formulir kontak. Layanan ini tidak memasang cookie pelacak.',
            'cookies.third.external': '<strong>YouTube, Instagram, SoundCloud, GitHub</strong> adalah tautan luar. Masing-masing punya aturan cookie sendiri.',
            'cookies.control.title': '4. Cara mengatur cookie',
            'cookies.control.browser': '<strong>Di browser kamu:</strong> kamu bisa menolak atau menghapus cookie lewat pengaturan privasi.',
            'cookies.control.banner': '<strong>Di banner cookie:</strong> pilih terima atau tolak saat pertama kali berkunjung.',
            'cookies.control.ga': '<strong>Berhenti dari Google Analytics:</strong> pasang <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">add-on resmi</a> jika kamu tidak ingin dilacak.',
            'cookies.changes.title': '5. Jika aturan berubah',
            'cookies.changes.desc': 'Aturan cookie ini bisa diperbarui kapan saja. Versi terbaru selalu ada di halaman ini.',
            'cookies.contact.title': '6. Hubungi kami',
            'cookies.contact.desc': 'Ada pertanyaan soal cookie? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama, atau email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
            'copy.cookies': 'Salin ringkasan cookie',
            'cookies.summary': '<strong>Singkatnya:</strong> Cookie hanya dipakai untuk kenyamananmu, yaitu mengingat tema, bahasa, dan statistik anonim. Kamu bisa mengaturnya sendiri kapan saja.',

            'tools.title': 'Tools Hajir',
            'tools.version': 'Versi 4.0.2 · 13 November 2026',
            'tools.intro': 'Kumpulan tools digital dari ekosistem Haiere. Semuanya ringan dan berjalan langsung di browser kamu.',
            'tools.cta': 'Buka tool',
            'tools.hajirsync.name': 'HajirSync',
            'tools.hajirsync.desc': 'Sinkronkan lirik dengan lagumu.',
            'tools.vault.name': 'Raia Vault',
            'tools.vault.desc': 'Brankas kata sandi pribadi.',
            'tools.scrub.name': 'Raia Scrub',
            'tools.scrub.desc': 'Bersihkan metadata dari file kamu.',
            'tools.delta.name': 'Raia Delta',
            'tools.delta.desc': 'Bandingkan dua teks dan temukan perbedaannya.',
            'tools.minify.name': 'Raia Minify',
            'tools.minify.desc': 'Perkecil ukuran file HTML, CSS, dan JS.',
            'tools.raiaspace.name': 'RaiaSpace',
            'tools.raiaspace.desc': 'Ruang kerja digital dari Raia.',
            'tools.calc.name': 'Calc',
            'tools.calc.desc': 'Kalkulator sederhana untuk kebutuhan harian.',
            'tools.qre.name': 'QRe',
            'tools.qre.desc': 'Buat kode QR langsung di browser. Semua diproses secara lokal.',

            'ai.title': 'AI dan Bot',
            'ai.version': 'Versi 4.0.2 · 13 November 2026',
            'ai.intro': 'Asisten digital dari ekosistem Haiere. Pilih salah satu untuk mulai mengobrol.',
            'ai.badge': 'AI',
            'ai.cta': 'Mulai chat',
            'ai.raia.name': 'Raia',
            'ai.raia.desc': 'Chatbot AI yang bekerja dengan banyak penyedia model.',
            'ai.kirana.name': 'Kirana',
            'ai.kirana.desc': 'Asisten AI dari Haiere.',

            'games.title': 'Game',
            'games.version': 'Versi 4.0.2 · 13 November 2026',
            'games.intro': 'Game ringan yang bisa kamu mainkan langsung di browser.',
            'games.cta': 'Main',
            'games.chess.name': 'Catur',
            'games.chess.desc': 'Permainan catur klasik.',
            'games.loveyou.name': 'Loveyou',
            'games.loveyou.desc': 'Game kecil dengan tema manis.',
            'games.orbit.name': 'Orbit Weaver',
            'games.orbit.desc': 'Game tentang orbit dan gerakan.',
            'games.starfall.name': 'Starfall',
            'games.starfall.desc': 'Game tentang bintang yang berjatuhan.',

            'footer.home': 'Beranda',
            'footer.about': 'Tentang',
            'footer.music': 'Musik',
            'footer.tools': 'Tools',
            'footer.privacy': 'Privasi',
            'footer.terms': 'Syarat Penggunaan',
            'footer.sitemap': 'Peta Situs',
            'footer.cookies': 'Cookie',
            'footer.email': 'isthajir@proton.me',
            'footer.rights': 'Raia Footer, dibuat dengan sepenuh hati oleh Haiere.',
            'footer.license': 'Kode dilisensikan di bawah CC0 1.0 Universal',
            'footer.disclaimer': 'Catatan: kamu bertanggung jawab atas cara memakai tools di sini. Haiere tidak bertanggung jawab atas kerusakan atau data yang hilang.'
        }
    };

    var current = 'en';

    function readSaved() {
        try {
            var v = window.localStorage.getItem(STORAGE_KEY);
            return SUPPORTED.indexOf(v) !== -1 ? v : null;
        } catch (e) {
            return null;
        }
    }

    function saveChoice(lang) {
        try {
            window.localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            /* storage unavailable: keep the choice for this visit only */
        }
    }

    function detectLanguage() {
        var saved = readSaved();
        if (saved) return saved;
        var nav = (window.navigator && window.navigator.language) || '';
        return nav.toLowerCase().indexOf('id') === 0 ? 'id' : 'en';
    }

    function t(key, lang) {
        var l = lang || current;
        var dict = DICT[l] || DICT.en;
        if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
        if (Object.prototype.hasOwnProperty.call(DICT.en, key)) return DICT.en[key];
        return key;
    }

    function applyTranslations(lang) {
        var root = document.documentElement;
        root.setAttribute('lang', lang);

        var nodes = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < nodes.length; i++) {
            var key = nodes[i].getAttribute('data-i18n');
            nodes[i].innerHTML = t(key, lang);
        }

        var aria = document.querySelectorAll('[data-i18n-aria]');
        for (var j = 0; j < aria.length; j++) {
            aria[j].setAttribute('aria-label', t(aria[j].getAttribute('data-i18n-aria'), lang));
        }

        document.title = t('meta.title', lang);
        var desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', t('meta.description', lang));
        var ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', t('meta.title', lang));
        var ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', t('meta.description', lang));
        var twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle) twTitle.setAttribute('content', t('meta.title', lang));
        var twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc) twDesc.setAttribute('content', t('meta.description', lang));

        var btn = document.getElementById('langToggle');
        if (btn) {
            /* Button shows the language it switches to */
            btn.textContent = lang === 'en' ? 'ID' : 'EN';
        }
    }

    function setLang(lang) {
        if (SUPPORTED.indexOf(lang) === -1) return;
        current = lang;
        applyTranslations(lang);
        saveChoice(lang);
        document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
    }

    function getLang() {
        return current;
    }

    function bindLangToggle() {
        var btn = document.getElementById('langToggle');
        if (!btn) return;
        btn.addEventListener('click', function () {
            setLang(current === 'en' ? 'id' : 'en');
        });
    }

    function init() {
        current = detectLanguage();
        applyTranslations(current);
        bindLangToggle();
    }

    window.HaiereI18n = {
        t: function (key) { return t(key, current); },
        setLang: setLang,
        getLang: getLang,
        supported: SUPPORTED.slice()
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
