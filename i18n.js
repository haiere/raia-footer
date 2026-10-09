/* ============================================================
   i18n.js — Raia Footer v3.9.b
   Manajemen terjemahan (ID / EN) + helper untuk ganti bahasa.
   ============================================================ */

window.I18N = {
    id: {
        /* --- meta & nav --- */
        skip: 'Langsung ke isi utama',
        brand: 'Haiere',
        'nav.home': 'Beranda',
        'nav.music': 'Musik',
        'nav.tools': 'Tools',
        'nav.legal': 'Legal',
        'aria.theme': 'Ganti tema terang atau gelap',
        'aria.lang': 'Ganti bahasa',
        'aria.print': 'Cetak halaman ini',

        /* --- hero --- */
        'hero.title': 'Info Legal & Daftar Halaman',
        'hero.subtitle': 'Hal-hal penting tentang situs ini, ditulis dengan kata-kata yang mudah dimengerti.',
        'hero.version': 'Raia Footer v3.9.b — 9 Oktober 2026',
        'hero.stable': 'Stabil',

        /* --- about --- */
        'about.title': 'Tentang Raia Footer',
        'about.text': 'Raia Footer itu bagian bawah situs yang bisa kamu pakai di website kamu. Versi v3.9.b ini sudah diperbaiki dan ditambah fiturnya. Sekarang makin enak dipakai — untuk proyek pribadi maupun untuk usaha.',

        /* --- tabs --- */
        'tab.privacy': 'Privasi',
        'tab.terms': 'Aturan Pakai',
        'tab.sitemap': 'Peta Situs',
        'tab.cookies': 'Cookie',

        /* --- privacy --- */
        'privacy.title': 'Aturan Privasi',
        'privacy.version': 'Versi 3.9.b — 9 Oktober 2026',
        'privacy.intro': 'Singkatnya: kami cuma ambil data yang benar-benar perlu. Itu pun kalau kamu sendiri yang memberi. Data kamu <strong>tidak pernah kami jual</strong> ke siapa pun.',
        'privacy.data.title': '1. Data apa yang kami ambil?',
        'privacy.data.item1': '<strong>Yang kamu tulis sendiri</strong> — misalnya nama dan pesan lewat formulir kontak.',
        'privacy.data.item2': '<strong>Info teknis tanpa nama</strong> — seperti jenis browser dan perangkat, dari Google Analytics. Ini tidak bisa dipakai untuk mengenali kamu.',
        'privacy.data.item3': '<strong>Pilihan kamu</strong> — bahasa dan tema disimpan di browser kamu sendiri (<code>localStorage</code>), bukan di server kami.',
        'privacy.data.item4': '<strong>Alat digital</strong> — seperti HajirSync, Raia Delta, Scrub, Vault, Minify, dan RAIA. Semuanya jalan <strong>di perangkat kamu sendiri</strong>. Tidak ada data yang dikirim ke mana pun.',
        'privacy.cookies.title': '2. Cookie &amp; layanan lain',
        'privacy.cookies.item1': '<strong>Cookie untuk fungsi</strong> — supaya pilihan kamu (bahasa, tema) tetap diingat saat kamu kembali.',
        'privacy.cookies.item2': '<strong>Google Analytics</strong> — IP-nya disamarkan. Cuma untuk melihat statistik kunjungan secara umum.',
        'privacy.cookies.item3': '<strong>Formspree</strong> — mengurus formulir kontak. Pesan otomatis dihapus paling lama 30 hari setelah dikirim.',
        'privacy.cookies.item4': '<strong>Link ke luar</strong> — seperti YouTube, Instagram, SoundCloud, dan GitHub. Masing-masing punya aturan privasi sendiri.',
        'privacy.security.title': '3. Bagaimana data dijaga?',
        'privacy.security.item1': 'Situs ini pakai <strong>HTTPS/TLS</strong>. Artinya semua hubungan ke situs ini dikunci, jadi orang lain tidak bisa membacanya.',
        'privacy.security.item2': 'Ada <strong>Content Security Policy (CSP)</strong>. Ini lapisan pengaman untuk menangkal serangan digital.',
        'privacy.security.item3': 'Semua data yang masuk diperiksa dengan teliti.',
        'privacy.security.item4': 'Semua alat jalan di browser kamu. Data tetap tinggal di perangkat kamu.',
        'privacy.rights.title': '4. Hak kamu',
        'privacy.rights.desc': 'Kamu berhak untuk:',
        'privacy.rights.item1': '<strong>Melihat</strong> — minta salinan data pribadi yang kami simpan.',
        'privacy.rights.item2': '<strong>Memperbaiki</strong> — minta kami membetulkan data yang salah.',
        'privacy.rights.item3': '<strong>Menghapus</strong> — minta data pribadi kamu dihapus.',
        'privacy.rights.contact': 'Mau meminta salah satunya? Hubungi kami lewat <a href="https://haiere.github.io#contact">formulir kontak</a> di halaman utama.',
        'privacy.changes.title': '5. Kalau ada perubahan',
        'privacy.changes.desc': 'Kalau aturan ini diubah, tanggal "Terakhir diperbarui" selalu kami tampilkan di bagian atas. Kami tidak akan mengubah aturan diam-diam.',
        'privacy.contact.title': '6. Hubungi kami',
        'privacy.contact.desc': 'Ada pertanyaan soal privasi? Kirim pesan lewat <a href="https://haiere.github.io#contact">formulir kontak</a> di halaman utama.',
        'privacy.summary': '<strong>Intinya:</strong> Data kamu aman. Kami cuma ambil yang perlu. Kami tidak menjual apa pun. Semua alat bekerja di perangkat kamu sendiri.',

        /* --- terms --- */
        'terms.title': 'Aturan Pakai',
        'terms.version': 'Versi 3.9.b — 9 Oktober 2026',
        'terms.intro': 'Kalau kamu memakai situs ini, berarti kamu setuju dengan aturan di bawah. Tenang, semuanya wajar dan sederhana.',
        'terms.ip.title': '1. Semua karya di sini milik Haiere',
        'terms.ip.desc1': 'Yang termasuk di dalamnya:',
        'terms.ip.item1': '13 lagu asli — 5 dari album <em>Fragmen Suara</em>, 7 dari <em>Resonansi Dalam Diam</em>, dan 1 singel <em>Saya Akan Lawan</em>.',
        'terms.ip.item2': 'Semua tulisan, desain, dan tampilan situs.',
        'terms.ip.item3': 'Semua alat digital (HajirSync, Raia Delta, Scrub, Vault, Minify, RAIA).',
        'terms.ip.desc2': 'Semuanya dilindungi hak cipta dan sepenuhnya milik Haiere.',
        'terms.ip.usage': '<strong>Boleh dipakai untuk:</strong>',
        'terms.ip.usage1': 'Keperluan pribadi (bukan untuk mencari uang) — gratis.',
        'terms.ip.usage2': 'Keperluan komersial — harus minta izin tertulis dari Muhaajir dulu.',
        'terms.ip.usage3': 'Cover atau remix — boleh, asal tetap tulis kreditnya: © Muhaajir.',
        'terms.prohibited.title': '2. Yang tidak boleh dilakukan',
        'terms.prohibited.item1': 'Menjual ulang, menyebar, atau mengaku karya ini punya kamu tanpa izin.',
        'terms.prohibited.item2': 'Mengambil data otomatis (<em>scraping</em>) atau mencoba membobol sistem.',
        'terms.prohibited.item3': 'Memakai alat di sini untuk hal ilegal atau merugikan orang lain.',
        'terms.disclaimer.title': '3. Batas tanggung jawab',
        'terms.disclaimer.desc1': 'Situs ini diberikan <strong>"apa adanya"</strong>. Kami tidak bertanggung jawab kalau:',
        'terms.disclaimer.item1': 'Unduhan gagal atau filenya rusak.',
        'terms.disclaimer.item2': 'Ada kendala teknis saat memakai alat. Ini termasuk kemungkinan data hilang di perangkat kamu.',
        'terms.disclaimer.item3': 'Isi atau aturan dari link luar yang tersambung ke situs ini.',
        'terms.law.title': '4. Hukum yang berlaku',
        'terms.law.desc': 'Semua hal soal situs ini mengikuti <strong>hukum Republik Indonesia</strong>. Wilayah hukumnya di <strong>Bogor, Jawa Barat</strong>.',
        'terms.changes.title': '5. Kalau aturan berubah',
        'terms.changes.desc': 'Aturan bisa diperbarui kapan saja. Versi terbaru selalu ada di halaman ini, lengkap dengan tanggal perubahannya.',
        'terms.contact.title': '6. Hubungi kami',
        'terms.contact.desc': 'Ada pertanyaan soal Aturan Pakai? Kirim pesan lewat <a href="https://haiere.github.io#contact">formulir kontak</a> di halaman utama.',
        'terms.summary': '<strong>Intinya:</strong> Semua karya milik Haiere. Bebas dipakai untuk keperluan pribadi. Kalau untuk komersial, minta izin dulu. Situs ini diberikan "apa adanya".',

        /* --- sitemap --- */
        'sitemap.title': 'Peta Situs',
        'sitemap.version': 'Semua halaman — Versi 3.9.b',
        'sitemap.main.title': 'Halaman Utama',
        'sitemap.home': 'Beranda',
        'sitemap.home.desc': 'Profil, bio, dan pemutar musik',
        'sitemap.showcase': 'Showcase',
        'sitemap.showcase.desc': 'Kumpulan karya musik',
        'sitemap.tools': 'Tools',
        'sitemap.tools.desc': 'HajirSync · Raia Delta · Scrub · Vault · Minify',
        'sitemap.raia': 'RAIA',
        'sitemap.raia.desc': 'Chatbot AI · 9+ Penyedia',
        'sitemap.ecosystem.title': 'Ekosistem Haiere',
        'sitemap.nav.title': 'Navigasi Utama',
        'sitemap.nav.home': 'Beranda',
        'sitemap.nav.legal': 'Legal',
        'sitemap.nav.tools': 'Tools',
        'sitemap.nav.raia': 'RAIA',
        'sitemap.social.title': 'Media Sosial &amp; Kontak',
        'sitemap.social.note': 'Kontak resmi lewat formulir di halaman utama.',
        'changelog.title': 'Riwayat Versi — v3.9.b',
        'changelog.item1': '✓ Halaman Legal dibuat ulang. Sekarang lebih bersih, modern, dan enak dibaca.',
        'changelog.item2': '✓ Bahasanya dibuat sederhana supaya mudah dimengerti semua umur.',
        'changelog.item3': '✓ File dipisah rapi: <code>index.html</code>, <code>style.css</code>, <code>i18n.js</code>, <code>script.js</code>.',
        'changelog.item4': '✓ Pengaturan bahasa dipindah ke <code>i18n.js</code>, jadi gampang menambah bahasa baru.',
        'changelog.item5': '✓ Aksesibilitas dan kecepatan dioptimalkan (Lighthouse &gt; 95).',
        'changelog.item6': '✓ Berganti nama dari Muhaajir menjadi <strong>Haiere</strong>, dengan logo H.',

        /* --- cookies --- */
        'cookies.title': 'Aturan Cookie',
        'cookies.version': 'Versi 3.9.b — 9 Oktober 2026',
        'cookies.intro': 'Kami pakai cookie supaya kamu makin nyaman memakai situs ini. Ini penjelasannya dengan bahasa sederhana.',
        'cookies.what.title': '1. Apa itu cookie?',
        'cookies.what.desc': 'Cookie itu file kecil yang disimpan di perangkat kamu saat membuka situs. Fungsinya seperti catatan kecil. Situs jadi ingat pilihan kamu (misalnya tema atau bahasa) saat kamu kembali lagi.',
        'cookies.weuse.title': '2. Cookie yang kami pakai',
        'cookies.table.name': 'Nama',
        'cookies.table.type': 'Jenis',
        'cookies.table.purpose': 'Fungsi',
        'cookies.table.duration': 'Masa Berlaku',
        'cookies.type.functional': 'Fungsional',
        'cookies.type.preference': 'Preferensi',
        'cookies.type.analytics': 'Analitik',
        'cookies.row.raia': 'Menyimpan pengaturan RAIA (provider, model, parameter)',
        'cookies.row.lang': 'Menyimpan pilihan bahasa (ID/EN)',
        'cookies.row.theme': 'Menyimpan pilihan tema (terang/gelap)',
        'cookies.row.consent': 'Menyimpan jawaban banner cookie',
        'cookies.row.ga': 'Membedakan pengunjung tanpa nama',
        'cookies.row.ga2': 'Menyimpan status sesi &amp; data agregat',
        'cookies.row.permanent': 'Sampai dihapus',
        'cookies.row.ga_duration': '2 tahun',
        'cookies.third.title': '3. Layanan pihak ketiga',
        'cookies.third.ga': '<strong>Google Analytics</strong> — melihat statistik kunjungan dengan data tanpa nama.',
        'cookies.third.formspree': '<strong>Formspree</strong> — mengurus formulir kontak (tanpa cookie pelacak).',
        'cookies.third.external': '<strong>YouTube, Instagram, SoundCloud, GitHub</strong> — link ke luar. Masing-masing punya aturan cookie sendiri.',
        'cookies.control.title': '4. Cara mengatur cookie',
        'cookies.control.browser': '<strong>Lewat browser</strong> — kamu bisa menolak atau menghapus cookie di pengaturan privasi browser.',
        'cookies.control.banner': '<strong>Lewat banner cookie</strong> — pilih terima atau tolak saat pertama kali berkunjung.',
        'cookies.control.ga': '<strong>Menolak Google Analytics</strong> — pasang <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">add-on resmi</a> kalau tidak mau dilacak.',
        'cookies.changes.title': '5. Kalau aturan berubah',
        'cookies.changes.desc': 'Aturan cookie bisa diperbarui kapan saja. Versi terbaru selalu ada di halaman ini.',
        'cookies.contact.title': '6. Hubungi kami',
        'cookies.contact.desc': 'Ada pertanyaan soal cookie? Kirim pesan lewat <a href="https://haiere.github.io#contact">formulir kontak</a> di halaman utama.',
        'cookies.summary': '<strong>Intinya:</strong> Cookie cuma dipakai untuk kenyamanan kamu. Untuk mengingat tema, bahasa, dan statistik tanpa nama. Kamu selalu bisa mengaturnya sendiri.',

        /* --- footer --- */
        'footer.home': 'Beranda',
        'footer.about': 'Tentang',
        'footer.music': 'Musik',
        'footer.tools': 'Tools',
        'footer.privacy': 'Privasi',
        'footer.terms': 'Aturan Pakai',
        'footer.sitemap': 'Peta Situs',
        'footer.cookies': 'Cookie',
        'footer.contact': 'Kontak',
        'footer.rights': 'Raia Footer v3.9.b. Dibuat dengan hati oleh Haiere.',
        'footer.disclaimer': 'Catatan: kamu sendiri yang bertanggung jawab saat memakai alat di sini. Haiere tidak bertanggung jawab atas kerusakan atau data yang hilang.'
    },

    en: {
        /* --- meta & nav --- */
        skip: 'Skip to main content',
        brand: 'Haiere',
        'nav.home': 'Home',
        'nav.music': 'Music',
        'nav.tools': 'Tools',
        'nav.legal': 'Legal',
        'aria.theme': 'Switch light or dark theme',
        'aria.lang': 'Change language',
        'aria.print': 'Print this page',

        /* --- hero --- */
        'hero.title': 'Legal Info & Page List',
        'hero.subtitle': 'The important things about this site, written in easy words.',
        'hero.version': 'Raia Footer v3.9.b — October 9, 2026',
        'hero.stable': 'Stable',

        /* --- about --- */
        'about.title': 'About Raia Footer',
        'about.text': 'Raia Footer is the bottom part of a site that you can use on your website. Version v3.9.b has been fixed up and given new features. It is easier to use now — for personal projects or for business.',

        /* --- tabs --- */
        'tab.privacy': 'Privacy',
        'tab.terms': 'Terms of Use',
        'tab.sitemap': 'Sitemap',
        'tab.cookies': 'Cookies',

        /* --- privacy --- */
        'privacy.title': 'Privacy Rules',
        'privacy.version': 'Version 3.9.b — October 9, 2026',
        'privacy.intro': 'In short: we only take what we really need. And only if you give it yourself. Your data is <strong>never sold</strong> to anyone.',
        'privacy.data.title': '1. What data do we take?',
        'privacy.data.item1': '<strong>What you type yourself</strong> — like your name and message in the contact form.',
        'privacy.data.item2': '<strong>Technical info without names</strong> — like your browser type and device, from Google Analytics. This cannot identify you.',
        'privacy.data.item3': '<strong>Your choices</strong> — language and theme are saved in your own browser (<code>localStorage</code>), not on our server.',
        'privacy.data.item4': '<strong>Digital tools</strong> — like HajirSync, Raia Delta, Scrub, Vault, Minify, and RAIA. They all run <strong>on your own device</strong>. Nothing is sent anywhere.',
        'privacy.cookies.title': '2. Cookies &amp; other services',
        'privacy.cookies.item1': '<strong>Function cookies</strong> — so your choices (language, theme) are remembered when you come back.',
        'privacy.cookies.item2': '<strong>Google Analytics</strong> — the IP is hidden. Only used to see general visit numbers.',
        'privacy.cookies.item3': '<strong>Formspree</strong> — handles the contact form. Messages are deleted at most 30 days after sending.',
        'privacy.cookies.item4': '<strong>Links to other sites</strong> — like YouTube, Instagram, SoundCloud, and GitHub. Each has its own privacy rules.',
        'privacy.security.title': '3. How is data kept safe?',
        'privacy.security.item1': 'This site uses <strong>HTTPS/TLS</strong>. That means every connection to this site is locked, so no one else can read it.',
        'privacy.security.item2': 'There is a <strong>Content Security Policy (CSP)</strong>. It is a safety layer against digital attacks.',
        'privacy.security.item3': 'Everything you send in is checked carefully.',
        'privacy.security.item4': 'Every tool runs in your browser. Your data stays on your device.',
        'privacy.rights.title': '4. Your rights',
        'privacy.rights.desc': 'You have the right to:',
        'privacy.rights.item1': '<strong>See</strong> — ask for a copy of the personal data we keep.',
        'privacy.rights.item2': '<strong>Fix</strong> — ask us to correct anything that is wrong.',
        'privacy.rights.item3': '<strong>Delete</strong> — ask us to delete your personal data.',
        'privacy.rights.contact': 'Want to ask for one of these? Reach us through the <a href="https://haiere.github.io#contact">contact form</a> on the main page.',
        'privacy.changes.title': '5. If things change',
        'privacy.changes.desc': 'If we change these rules, the "Last updated" date will always be at the top. We will never change rules in secret.',
        'privacy.contact.title': '6. Contact us',
        'privacy.contact.desc': 'Questions about privacy? Send us a message through the <a href="https://haiere.github.io#contact">contact form</a> on the main page.',
        'privacy.summary': '<strong>In short:</strong> Your data is safe. We only take what we need. We never sell anything. All tools work on your own device.',

        /* --- terms --- */
        'terms.title': 'Terms of Use',
        'terms.version': 'Version 3.9.b — October 9, 2026',
        'terms.intro': 'If you use this site, it means you agree to the rules below. Don\'t worry — they are all fair and simple.',
        'terms.ip.title': '1. Everything here belongs to Haiere',
        'terms.ip.desc1': 'This includes:',
        'terms.ip.item1': '13 original songs — 5 from <em>Fragmen Suara</em>, 7 from <em>Resonansi Dalam Diam</em>, and 1 single <em>Saya Akan Lawan</em>.',
        'terms.ip.item2': 'All the writing, design, and look of the site.',
        'terms.ip.item3': 'All the digital tools (HajirSync, Raia Delta, Scrub, Vault, Minify, RAIA).',
        'terms.ip.desc2': 'All of it is protected by copyright and fully owned by Haiere.',
        'terms.ip.usage': '<strong>You may use it for:</strong>',
        'terms.ip.usage1': 'Personal use (not to make money) — free.',
        'terms.ip.usage2': 'Commercial use — you must ask Muhaajir for written permission first.',
        'terms.ip.usage3': 'Covers or remixes — allowed, as long as you keep the credit: © Muhaajir.',
        'terms.prohibited.title': '2. What you must not do',
        'terms.prohibited.item1': 'Resell, share, or claim this work as your own without permission.',
        'terms.prohibited.item2': 'Take data automatically (<em>scraping</em>) or try to break into the system.',
        'terms.prohibited.item3': 'Use the tools here for illegal things or to harm others.',
        'terms.disclaimer.title': '3. Limits of our responsibility',
        'terms.disclaimer.desc1': 'This site is given <strong>"as is"</strong>. We are not responsible if:',
        'terms.disclaimer.item1': 'A download fails or a file is broken.',
        'terms.disclaimer.item2': 'There is a technical problem while using a tool. This includes the chance of data loss on your device.',
        'terms.disclaimer.item3': 'Content or rules from outside links connected to this site.',
        'terms.law.title': '4. Which law applies',
        'terms.law.desc': 'Everything about this site follows the <strong>laws of the Republic of Indonesia</strong>. The legal area is <strong>Bogor, West Java</strong>.',
        'terms.changes.title': '5. If the rules change',
        'terms.changes.desc': 'The rules can be updated at any time. The newest version is always on this page, with the date it changed.',
        'terms.contact.title': '6. Contact us',
        'terms.contact.desc': 'Questions about Terms of Use? Send us a message through the <a href="https://haiere.github.io#contact">contact form</a> on the main page.',
        'terms.summary': '<strong>In short:</strong> Everything belongs to Haiere. Free for personal use. For commercial use, ask first. This site is given "as is".',

        /* --- sitemap --- */
        'sitemap.title': 'Sitemap',
        'sitemap.version': 'All pages — Version 3.9.b',
        'sitemap.main.title': 'Main Pages',
        'sitemap.home': 'Home',
        'sitemap.home.desc': 'Profile, bio, and music player',
        'sitemap.showcase': 'Showcase',
        'sitemap.showcase.desc': 'Music portfolio',
        'sitemap.tools': 'Tools',
        'sitemap.tools.desc': 'HajirSync · Raia Delta · Scrub · Vault · Minify',
        'sitemap.raia': 'RAIA',
        'sitemap.raia.desc': 'AI Chatbot · 9+ Providers',
        'sitemap.ecosystem.title': 'Haiere Ecosystem',
        'sitemap.nav.title': 'Main Navigation',
        'sitemap.nav.home': 'Home',
        'sitemap.nav.legal': 'Legal',
        'sitemap.nav.tools': 'Tools',
        'sitemap.nav.raia': 'RAIA',
        'sitemap.social.title': 'Social Media &amp; Contact',
        'sitemap.social.note': 'Official contact via the form on the main page.',
        'changelog.title': 'Version History — v3.9.b',
        'changelog.item1': '✓ Legal page rebuilt. It is cleaner, more modern, and easier to read.',
        'changelog.item2': '✓ The language is simple, so all ages can understand it.',
        'changelog.item3': '✓ Files neatly separated: <code>index.html</code>, <code>style.css</code>, <code>i18n.js</code>, <code>script.js</code>.',
        'changelog.item4': '✓ Language settings moved to <code>i18n.js</code>, so new languages are easy to add.',
        'changelog.item5': '✓ Accessibility and speed optimized (Lighthouse &gt; 95).',
        'changelog.item6': '✓ Renamed from Muhaajir to <strong>Haiere</strong>, with the H logo.',

        /* --- cookies --- */
        'cookies.title': 'Cookie Rules',
        'cookies.version': 'Version 3.9.b — October 9, 2026',
        'cookies.intro': 'We use cookies to make this site nicer for you. Here is the simple explanation.',
        'cookies.what.title': '1. What is a cookie?',
        'cookies.what.desc': 'A cookie is a small file saved on your device when you open a site. It works like a little note. It helps the site remember your choices (like theme or language) when you come back.',
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
        'cookies.row.theme': 'Saves your theme choice (light/dark)',
        'cookies.row.consent': 'Saves your answer to the cookie banner',
        'cookies.row.ga': 'Tells visitors apart without names',
        'cookies.row.ga2': 'Saves session state &amp; grouped numbers',
        'cookies.row.permanent': 'Until deleted',
        'cookies.row.ga_duration': '2 years',
        'cookies.third.title': '3. Other services',
        'cookies.third.ga': '<strong>Google Analytics</strong> — shows visit stats with data that has no names.',
        'cookies.third.formspree': '<strong>Formspree</strong> — handles the contact form (no tracking cookies).',
        'cookies.third.external': '<strong>YouTube, Instagram, SoundCloud, GitHub</strong> — outside links. Each has its own cookie rules.',
        'cookies.control.title': '4. How to manage cookies',
        'cookies.control.browser': '<strong>In your browser</strong> — you can refuse or delete cookies in your browser privacy settings.',
        'cookies.control.banner': '<strong>In the cookie banner</strong> — pick accept or decline on your first visit.',
        'cookies.control.ga': '<strong>Say no to Google Analytics</strong> — install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">official add-on</a> if you do not want to be tracked.',
        'cookies.changes.title': '5. If the rules change',
        'cookies.changes.desc': 'The cookie rules can be updated at any time. The newest version is always on this page.',
        'cookies.contact.title': '6. Contact us',
        'cookies.contact.desc': 'Questions about cookies? Send us a message through the <a href="https://haiere.github.io#contact">contact form</a> on the main page.',
        'cookies.summary': '<strong>In short:</strong> Cookies are only used for your comfort. To remember theme, language, and nameless stats. You can always manage them yourself.',

        /* --- footer --- */
        'footer.home': 'Home',
        'footer.about': 'About',
        'footer.music': 'Music',
        'footer.tools': 'Tools',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms of Use',
        'footer.sitemap': 'Sitemap',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Contact',
        'footer.rights': 'Raia Footer v3.9.b. Made with Heart by Haiere.',
        'footer.disclaimer': 'Note: you are responsible for how you use the tools here. Haiere is not responsible for damage or lost data.'
    }
};

/* ============================================================
   I18NManager — ganti bahasa & terapkan ke DOM
   ============================================================ */
window.I18NManager = (function () {
    'use strict';

    const DEFAULT_LANG = 'id';
    const STORAGE_KEY = 'raiaLang';
    const listeners = [];
    let currentLang = DEFAULT_LANG;

    function getAvailable() {
        return Object.keys(window.I18N);
    }

    function get() {
        return currentLang;
    }

    function t(key, lang) {
        const l = lang || currentLang;
        const dict = window.I18N[l] || window.I18N[DEFAULT_LANG];
        return dict && dict[key] !== undefined ? dict[key] : key;
    }

    function apply() {
        // Teks
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const value = t(key);
            if (value === undefined || value === null) return;
            // Deteksi HTML di dalam string
            if (/<[a-z][\s\S]*>/i.test(value)) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        // aria-label
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-aria');
            const value = t(key);
            if (value) el.setAttribute('aria-label', value);
        });

        // placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-placeholder');
            const value = t(key);
            if (value) el.setAttribute('placeholder', value);
        });

        // Update <title>
        const titleKey = document.documentElement.getAttribute('data-title-key');
        if (titleKey) document.title = t(titleKey) + ' | Raia Footer v3.9.b';
    }

    function set(lang) {
        if (!window.I18N[lang]) lang = DEFAULT_LANG;
        currentLang = lang;
        document.documentElement.lang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
        apply();
        listeners.forEach(function (fn) {
            try { fn(lang); } catch (_) {}
        });
    }

    function init() {
        let saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) {}
        const browser = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
        const initial = saved || (window.I18N[browser] ? browser : DEFAULT_LANG);
        set(initial);
    }

    function onChange(fn) {
        if (typeof fn === 'function') listeners.push(fn);
    }

    return {
        get: get,
        set: set,
        t: t,
        apply: apply,
        init: init,
        onChange: onChange,
        available: getAvailable
    };
})();