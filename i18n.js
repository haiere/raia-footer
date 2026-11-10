/* ============================================================
   i18n.js: Raia Footer v4.0.1
   Manajemen terjemahan (ID / EN) dan helper untuk ganti bahasa.
   Termasuk konten Tools, AI / Bot, dan Games.
   ============================================================ */

window.I18N = {
    id: {
        skip: 'Langsung ke konten utama',
        brand: 'Haiere',
        'nav.home': 'Beranda',
        'nav.music': 'Musik',
        'nav.tools': 'Tools',
        'nav.legal': 'Legal',
        'aria.theme': 'Ganti tema terang atau gelap',
        'aria.lang': 'Ganti bahasa',
        'aria.print': 'Cetak halaman ini',

        'hero.title': 'Info Legal, Tools & Halaman',
        'hero.subtitle': 'Hal penting tentang situs ini, ditulis dengan bahasa yang mudah dimengerti.',
        'hero.version': 'Raia Footer v4.0.1, 10 November 2026',
        'hero.stable': 'Stabil',

        'about.title': 'Tentang Raia Footer',
        'about.text': 'Raia Footer adalah bagian bawah situs yang bisa kamu pasang di situsmu sendiri. Di versi v4.0.1 ini, ada tool QRE baru, tema warna Aurora Navy, font Sora/Inter/JetBrains Mono, serta aksesibilitas dan performa yang lebih baik.',

        'tab.privacy': 'Privasi',
        'tab.terms': 'Aturan Pakai',
        'tab.sitemap': 'Peta Situs',
        'tab.cookies': 'Cookie',
        'tab.tools': 'Tools',
        'tab.ai': 'AI / Bot',
        'tab.games': 'Games',

        /* --- privacy --- */
        'privacy.title': 'Aturan Privasi',
        'privacy.version': 'Versi 4.0.1, 10 November 2026',
        'privacy.intro': 'Singkatnya, kami hanya mengambil data yang benar-benar dibutuhkan, dan hanya jika kamu sendiri yang memberikannya. Data kamu <strong>tidak akan pernah kami jual</strong> kepada siapa pun.',
        'privacy.data.title': '1. Data apa saja yang kami ambil?',
        'privacy.data.item1': '<strong>Data yang kamu ketik sendiri</strong>, misalnya nama dan pesan lewat formulir kontak.',
        'privacy.data.item2': '<strong>Info teknis tanpa nama</strong>, seperti jenis browser dan perangkat, dari Google Analytics. Info ini tidak bisa dipakai untuk mengenali kamu.',
        'privacy.data.item3': '<strong>Pilihan kamu</strong>, yaitu bahasa dan tema, yang disimpan di browser kamu sendiri (<code>localStorage</code>), bukan di server kami. Jadi kamu yang memegang kendali.',
        'privacy.data.item4': '<strong>Alat digital</strong>, seperti HajirSync, Raia Delta, Scrub, Vault, Minify, QRE, dan RAIA. Semuanya berjalan <strong>di perangkat kamu sendiri</strong>, jadi tidak ada data yang dikirim ke mana pun.',
        'privacy.cookies.title': '2. Cookie &amp; layanan lain',
        'privacy.cookies.item1': '<strong>Cookie fungsional</strong>, agar pilihan kamu (bahasa dan tema) tetap diingat saat kamu kembali.',
        'privacy.cookies.item2': '<strong>Google Analytics</strong>, alamat IP disamarkan dan hanya dipakai untuk melihat statistik kunjungan secara umum.',
        'privacy.cookies.item3': '<strong>Formspree</strong>, layanan yang mengurus formulir kontak. Pesan kamu otomatis dihapus paling lama 30 hari setelah terkirim.',
        'privacy.cookies.item4': '<strong>Link ke luar</strong>, seperti YouTube, Instagram, SoundCloud, dan GitHub. Masing-masing punya aturan privasi sendiri.',
        'privacy.security.title': '3. Bagaimana data dijaga?',
        'privacy.security.item1': 'Situs ini memakai <strong>HTTPS/TLS</strong>. Artinya, semua koneksi ke situs ini terkunci, sehingga orang lain tidak bisa membaca data yang dikirim.',
        'privacy.security.item2': 'Ada <strong>Content Security Policy (CSP)</strong>, yaitu lapisan pengaman untuk mencegah serangan digital.',
        'privacy.security.item3': 'Semua data yang masuk diperiksa dengan teliti.',
        'privacy.security.item4': 'Semua alat berjalan di browser kamu. Data tetap berada di perangkat kamu.',
        'privacy.rights.title': '4. Hak kamu',
        'privacy.rights.desc': 'Kamu berhak untuk:',
        'privacy.rights.item1': '<strong>Melihat</strong>, meminta salinan data pribadi yang kami simpan.',
        'privacy.rights.item2': '<strong>Memperbaiki</strong>, meminta kami memperbaiki data yang keliru.',
        'privacy.rights.item3': '<strong>Menghapus</strong>, meminta data pribadi kamu dihapus sepenuhnya.',
        'privacy.rights.contact': 'Ingin meminta salah satunya? Hubungi kami lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama, atau email ke <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
        'privacy.changes.title': '5. Jika ada perubahan',
        'privacy.changes.desc': 'Jika aturan ini berubah, tanggal "Terakhir diperbarui" akan selalu ditampilkan di bagian atas. Tidak ada perubahan diam-diam.',
        'privacy.contact.title': '6. Hubungi kami',
        'privacy.contact.desc': 'Ada pertanyaan tentang privasi? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama, atau email ke <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
        'privacy.summary': '<strong>Intinya:</strong> Data kamu aman, kami hanya mengambil yang diperlukan, tidak menjual apa pun, dan semua alat berjalan di perangkat kamu sendiri.',

        /* --- terms --- */
        'terms.title': 'Aturan Pakai',
        'terms.version': 'Versi 4.0.1, 10 November 2026',
        'terms.intro': 'Dengan menggunakan situs ini, kamu setuju dengan aturan di bawah. Tenang, aturannya wajar dan sederhana.',
        'terms.ip.title': '1. Semua karya di sini milik Haiere',
        'terms.ip.desc1': 'Termasuk:',
        'terms.ip.item1': '13 lagu asli: 5 dari album <em>Fragmen Suara</em>, 7 dari <em>Resonansi Dalam Diam</em>, dan 1 single <em>Saya Akan Lawan</em>.',
        'terms.ip.item2': 'Semua tulisan, desain, dan tampilan situs.',
        'terms.ip.item3': 'Semua alat digital (HajirSync, Raia Delta, Scrub, Vault, Minify, QRE, RAIA).',
        'terms.ip.desc2': 'Semuanya dilindungi hak cipta dan sepenuhnya milik Haiere. Mohon jangan mengaku-ngaku karya ini sebagai milik kamu.',
        'terms.ip.usage': '<strong>Boleh dipakai untuk:</strong>',
        'terms.ip.usage1': 'Keperluan pribadi (bukan untuk mencari uang): gratis.',
        'terms.ip.usage2': 'Keperluan komersial: wajib meminta izin tertulis kepada Muhaajir terlebih dahulu.',
        'terms.ip.usage3': 'Cover atau remix: boleh, asalkan tetap mencantumkan kredit: © Muhaajir.',
        'terms.prohibited.title': '2. Yang tidak boleh dilakukan',
        'terms.prohibited.item1': 'Menjual lagi, menyebarkan, atau mengaku karya ini sebagai milik sendiri tanpa izin.',
        'terms.prohibited.item2': 'Mengambil data secara otomatis (<em>scraping</em>) atau mencoba membobol sistem.',
        'terms.prohibited.item3': 'Memakai alat di sini untuk hal ilegal atau untuk merugikan orang lain.',
        'terms.disclaimer.title': '3. Batas tanggung jawab',
        'terms.disclaimer.desc1': 'Situs ini diberikan <strong>"apa adanya"</strong>. Kami tidak bertanggung jawab jika:',
        'terms.disclaimer.item1': 'Unduhan gagal atau file-nya rusak.',
        'terms.disclaimer.item2': 'Terjadi kendala teknis saat memakai alat, termasuk kemungkinan hilangnya data di perangkat kamu.',
        'terms.disclaimer.item3': 'Isi atau aturan dari link luar yang terhubung ke situs ini.',
        'terms.law.title': '4. Hukum yang berlaku',
        'terms.law.desc': 'Semua urusan situs ini mengikuti <strong>hukum Republik Indonesia</strong>, dengan wilayah hukum <strong>Bogor, Jawa Barat</strong>.',
        'terms.changes.title': '5. Jika aturan berubah',
        'terms.changes.desc': 'Aturan bisa diperbarui kapan saja. Versi terbaru selalu ada di halaman ini, lengkap dengan tanggal perubahannya.',
        'terms.contact.title': '6. Hubungi kami',
        'terms.contact.desc': 'Ada pertanyaan tentang Aturan Pakai? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama, atau email ke <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
        'terms.summary': '<strong>Intinya:</strong> Semua karya milik Haiere, bebas dipakai untuk keperluan pribadi, untuk komersial wajib minta izin dulu, dan situs ini diberikan "apa adanya".',
        'footer.license': 'Kode dirilis di bawah CC0 1.0 Universal',
        'terms.code.license': '<strong>Lisensi kode:</strong> kode sumber Raia Footer (HTML, CSS, JavaScript) dirilis di bawah <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0 Universal</a> — domain publik. Kamu bebas menyalin, mengubah, dan menyebarluaskan kodenya tanpa perlu mencantumkan atribusi. Ini berlaku untuk kode saja; konten di atas tetap © Haiere.',

        /* --- sitemap --- */
        'sitemap.title': 'Peta Situs',
        'sitemap.version': 'Semua halaman, Versi 4.0.1',
        'sitemap.main.title': 'Halaman Utama',
        'sitemap.home': 'Beranda',
        'sitemap.home.desc': 'Profil, bio, dan pemutar musik',
        'sitemap.showcase': 'Showcase',
        'sitemap.showcase.desc': 'Kumpulan karya musik',
        'sitemap.tools': 'Tools',
        'sitemap.tools.desc': 'HajirSync · Raia Delta · Scrub · Vault · Minify · QRE',
        'sitemap.raia': 'RAIA',
        'sitemap.raia.desc': 'Chatbot AI · 9+ penyedia model',
        'sitemap.ecosystem.title': 'Ekosistem Haiere',
        'sitemap.nav.title': 'Navigasi Utama',
        'sitemap.nav.home': 'Beranda',
        'sitemap.nav.legal': 'Legal',
        'sitemap.nav.tools': 'Tools',
        'sitemap.nav.raia': 'RAIA',
        'sitemap.social.title': 'Media Sosial &amp; Kontak',
        'sitemap.social.note': 'Kontak resmi tersedia lewat formulir di halaman utama atau email isthajir@proton.me.',
        'changelog.title': 'Riwayat Versi, v4.0.1',
        'changelog.item1': '✓ Tema warna baru: Aurora Navy (dark) dengan aksen cyan dan gold.',
        'changelog.item2': '✓ Font baru: Sora (display), Inter (body), JetBrains Mono (data).',
        'changelog.item3': '✓ Tool QRE ditambahkan: generator kode QR dengan pemrosesan lokal.',
        'changelog.item4': '✓ Email kontak resmi: isthajir@proton.me.',
        'changelog.item5': '✓ Semua link eksternal memakai <code>target="_blank"</code> dan <code>rel="noopener noreferrer"</code> agar lebih aman.',
        'changelog.item6': '✓ Aksesibilitas ditingkatkan: fokus keyboard, aria-label, dan mode gerak dikurangi (reduced-motion).',

        /* --- cookies --- */
        'cookies.title': 'Aturan Cookie',
        'cookies.version': 'Versi 4.0.1, 10 November 2026',
        'cookies.intro': 'Kami memakai cookie agar situs ini lebih nyaman untuk kamu. Berikut penjelasannya dengan bahasa sederhana.',
        'cookies.what.title': '1. Apa itu cookie?',
        'cookies.what.desc': 'Cookie adalah file kecil yang disimpan di perangkat kamu saat membuka situs. Cookie ibarat catatan kecil yang membantu situs mengingat pilihan kamu, seperti tema atau bahasa, saat kamu kembali.',
        'cookies.weuse.title': '2. Cookie yang kami pakai',
        'cookies.table.name': 'Nama',
        'cookies.table.type': 'Jenis',
        'cookies.table.purpose': 'Fungsi',
        'cookies.table.duration': 'Masa Berlaku',
        'cookies.type.functional': 'Fungsional',
        'cookies.type.preference': 'Preferensi',
        'cookies.type.analytics': 'Analitik',
        'cookies.row.raia': 'Menyimpan pengaturan RAIA (penyedia, model, parameter)',
        'cookies.row.lang': 'Menyimpan pilihan bahasa (ID/EN)',
        'cookies.row.theme': 'Menyimpan pilihan tema (terang/gelap)',
        'cookies.row.consent': 'Menyimpan jawaban kamu di banner cookie',
        'cookies.row.ga': 'Membedakan pengunjung tanpa nama',
        'cookies.row.ga2': 'Menyimpan status sesi &amp; data statistik gabungan',
        'cookies.row.permanent': 'Sampai dihapus',
        'cookies.row.ga_duration': '2 tahun',
        'cookies.third.title': '3. Layanan pihak ketiga',
        'cookies.third.ga': '<strong>Google Analytics</strong>: menampilkan statistik kunjungan dengan data tanpa nama.',
        'cookies.third.formspree': '<strong>Formspree</strong>: mengurus formulir kontak (tanpa cookie pelacak).',
        'cookies.third.external': '<strong>YouTube, Instagram, SoundCloud, GitHub</strong>: link ke luar, masing-masing punya aturan cookie sendiri.',
        'cookies.control.title': '4. Cara mengatur cookie',
        'cookies.control.browser': '<strong>Lewat browser</strong>: kamu bisa menolak atau menghapus cookie di pengaturan privasi browser.',
        'cookies.control.banner': '<strong>Lewat banner cookie</strong>: pilih terima atau tolak saat pertama kali berkunjung.',
        'cookies.control.ga': '<strong>Menolak Google Analytics</strong>: pasang <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">add-on resminya</a> jika kamu tidak ingin dilacak.',
        'cookies.changes.title': '5. Jika aturan berubah',
        'cookies.changes.desc': 'Aturan cookie bisa berubah kapan saja. Versi terbaru selalu ada di halaman ini.',
        'cookies.contact.title': '6. Hubungi kami',
        'cookies.contact.desc': 'Ada pertanyaan tentang cookie? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama, atau email ke <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
        'cookies.summary': '<strong>Intinya:</strong> Cookie hanya dipakai untuk kenyamanan kamu, yaitu mengingat tema, bahasa, dan statistik tanpa nama. Kamu selalu bisa mengaturnya sendiri.',

        /* --- tools --- */
        'tools.title': 'Hajir Tools',
        'tools.version': 'Versi 4.0.1, 10 November 2026',
        'tools.intro': 'Kumpulan alat digital dari ekosistem Haiere. Semuanya ringan dan berjalan langsung di browser.',
        'tools.cta': 'Buka Tool',
        'tools.hajirsync.name': 'HajirSync',
        'tools.hajirsync.desc': 'Alat untuk menyelaraskan lirik dengan lagunya.',
        'tools.vault.name': 'Raia Vault',
        'tools.vault.desc': 'Brankas kata sandi pribadi kamu.',
        'tools.scrub.name': 'Raia Scrub',
        'tools.scrub.desc': 'Pembersih metadata (data tersembunyi) pada file.',
        'tools.delta.name': 'Raia Delta',
        'tools.delta.desc': 'Pembanding teks agar perbedaannya terlihat jelas.',
        'tools.minify.name': 'Raia Minify',
        'tools.minify.desc': 'Memperkecil ukuran file (HTML, CSS, JS).',
        'tools.raiaspace.name': 'RaiaSpace',
        'tools.raiaspace.desc': 'Ruang kerja digital buatan Raia.',
        'tools.calc.name': 'Calc',
        'tools.calc.desc': 'Kalkulator sederhana untuk kebutuhan harian.',
        'tools.qre.name': 'QRe',
        'tools.qre.desc': 'Generator kode QR berbasis browser dengan pemrosesan lokal.',

        /* --- ai / bot --- */
        'ai.title': 'AI / Bot',
        'ai.version': 'Versi 4.0.1, 10 November 2026',
        'ai.intro': 'Asisten digital dari ekosistem Haiere. Pilih salah satu untuk mulai mengobrol.',
        'ai.badge': 'AI',
        'ai.cta': 'Mulai Chat',
        'ai.raia.name': 'Raia',
        'ai.raia.desc': 'Chatbot AI yang mendukung banyak penyedia model.',
        'ai.kirana.name': 'Kirana',
        'ai.kirana.desc': 'Asisten AI buatan Haiere.',

        /* --- games --- */
        'games.title': 'Games',
        'games.version': 'Versi 4.0.1, 10 November 2026',
        'games.intro': 'Game ringan yang bisa langsung dimainkan di browser.',
        'games.cta': 'Mainkan',
        'games.chess.name': 'Chess',
        'games.chess.desc': 'Catur klasik yang bisa langsung dimainkan di browser.',
        'games.loveyou.name': 'Loveyou',
        'games.loveyou.desc': 'Game kecil dengan tema manis.',
        'games.orbit.name': 'Orbit Weaver',
        'games.orbit.desc': 'Game tentang orbit dan pergerakan.',
        'games.starfall.name': 'Starfall',
        'games.starfall.desc': 'Game tentang bintang yang jatuh.',

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
        'footer.email': 'isthajir@proton.me',
        'footer.rights': 'Raia Footer, dibuat dengan hati oleh Haiere.',
        'footer.disclaimer': 'Catatan: kamu bertanggung jawab atas cara memakai alat di sini. Haiere tidak bertanggung jawab atas kerusakan atau kehilangan data.'
    },

    en: {
        skip: 'Skip to main content',
        brand: 'Haiere',
        'nav.home': 'Home',
        'nav.music': 'Music',
        'nav.tools': 'Tools',
        'nav.legal': 'Legal',
        'aria.theme': 'Switch between light and dark theme',
        'aria.lang': 'Change language',
        'aria.print': 'Print this page',

        'hero.title': 'Legal Info, Tools & Page List',
        'hero.subtitle': 'The important things about this site, written in plain language.',
        'hero.version': 'Raia Footer v4.0.1, November 10, 2026',
        'hero.stable': 'Stable',

        'about.title': 'About Raia Footer',
        'about.text': 'Raia Footer is a site footer you can add to your own website. Version 4.0.1 brings a new QRE tool, the Aurora Navy color theme, Sora/Inter/JetBrains Mono fonts, and better accessibility and performance.',

        'tab.privacy': 'Privacy',
        'tab.terms': 'Terms of Use',
        'tab.sitemap': 'Sitemap',
        'tab.cookies': 'Cookies',
        'tab.tools': 'Tools',
        'tab.ai': 'AI / Bot',
        'tab.games': 'Games',

        /* --- privacy --- */
        'privacy.title': 'Privacy Policy',
        'privacy.version': 'Version 4.0.1, November 10, 2026',
        'privacy.intro': 'In short, we only collect what we really need, and only if you provide it yourself. We will <strong>never sell</strong> your data to anyone.',
        'privacy.data.title': '1. What data do we collect?',
        'privacy.data.item1': '<strong>What you type yourself</strong>, like your name and message in the contact form.',
        'privacy.data.item2': '<strong>Technical info without names</strong>, like your browser and device type, from Google Analytics. This cannot be used to identify you.',
        'privacy.data.item3': '<strong>Your choices</strong>: your language and theme are saved in your own browser (<code>localStorage</code>), not on our server. You stay in control.',
        'privacy.data.item4': '<strong>Digital tools</strong>, like HajirSync, Raia Delta, Scrub, Vault, Minify, QRE, and RAIA. They all run <strong>on your own device</strong>, so no data is sent anywhere.',
        'privacy.cookies.title': '2. Cookies &amp; other services',
        'privacy.cookies.item1': '<strong>Functional cookies</strong>: so your choices (language and theme) are remembered when you come back.',
        'privacy.cookies.item2': '<strong>Google Analytics</strong>: your IP address is masked, and it is only used to see general visit numbers.',
        'privacy.cookies.item3': '<strong>Formspree</strong>: handles the contact form. Your messages are deleted within 30 days of being sent.',
        'privacy.cookies.item4': '<strong>Links to other sites</strong>, like YouTube, Instagram, SoundCloud, and GitHub. Each has its own privacy policy.',
        'privacy.security.title': '3. How is your data protected?',
        'privacy.security.item1': 'This site uses <strong>HTTPS/TLS</strong>. This means every connection to the site is encrypted, so others cannot read the data being sent.',
        'privacy.security.item2': 'It has a <strong>Content Security Policy (CSP)</strong>, a safety layer that helps block digital attacks.',
        'privacy.security.item3': 'Everything you send is checked carefully.',
        'privacy.security.item4': 'All tools run in your browser. Your data stays on your device.',
        'privacy.rights.title': '4. Your rights',
        'privacy.rights.desc': 'You have the right to:',
        'privacy.rights.item1': '<strong>Access</strong> a copy of the personal data we store.',
        'privacy.rights.item2': '<strong>Correct</strong> data that is wrong.',
        'privacy.rights.item3': '<strong>Delete</strong> your personal data completely.',
        'privacy.rights.contact': 'Want to make a request? Contact us through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page, or email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
        'privacy.changes.title': '5. If anything changes',
        'privacy.changes.desc': 'If we update this policy, the "Last updated" date will always appear at the top. We never make changes in secret.',
        'privacy.contact.title': '6. Contact us',
        'privacy.contact.desc': 'Have a question about privacy? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page, or email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
        'privacy.summary': '<strong>In short:</strong> Your data is safe, we only collect what is needed, we do not sell anything, and all tools run on your own device.',

        /* --- terms --- */
        'terms.title': 'Terms of Use',
        'terms.version': 'Version 4.0.1, November 10, 2026',
        'terms.intro': 'By using this site, you agree to the terms below. They are fair and simple.',
        'terms.ip.title': '1. Everything here belongs to Haiere',
        'terms.ip.desc1': 'This includes:',
        'terms.ip.item1': '13 original songs: 5 from <em>Fragmen Suara</em>, 7 from <em>Resonansi Dalam Diam</em>, and 1 single, <em>Saya Akan Lawan</em>.',
        'terms.ip.item2': 'All the writing, design, and look of the site.',
        'terms.ip.item3': 'All the digital tools (HajirSync, Raia Delta, Scrub, Vault, Minify, QRE, RAIA).',
        'terms.ip.desc2': 'All of it is protected by copyright and fully owned by Haiere.',
        'terms.ip.usage': '<strong>You may use it for:</strong>',
        'terms.ip.usage1': 'Personal use (not for making money): free.',
        'terms.ip.usage2': 'Commercial use: you must get written permission from Muhaajir first.',
        'terms.ip.usage3': 'Covers or remixes: allowed, as long as you keep the credit: © Muhaajir.',
        'terms.prohibited.title': '2. What you must not do',
        'terms.prohibited.item1': 'Resell, share, or claim this work as your own without permission.',
        'terms.prohibited.item2': 'Collect data automatically (<em>scraping</em>) or try to break into the system.',
        'terms.prohibited.item3': 'Use the tools here for anything illegal or to harm others.',
        'terms.disclaimer.title': '3. Limits of our responsibility',
        'terms.disclaimer.desc1': 'This site is provided <strong>"as is"</strong>. We are not responsible if:',
        'terms.disclaimer.item1': 'A download fails or a file is damaged.',
        'terms.disclaimer.item2': 'A technical problem happens while you use a tool, including the possibility of losing data on your device.',
        'terms.disclaimer.item3': 'Content or rules on external links connected to this site.',
        'terms.law.title': '4. Which law applies',
        'terms.law.desc': 'Everything about this site follows the <strong>laws of the Republic of Indonesia</strong>, with the legal jurisdiction of <strong>Bogor, West Java</strong>.',
        'terms.changes.title': '5. If the terms change',
        'terms.changes.desc': 'The terms can be updated at any time. The latest version is always on this page, with the date of the change.',
        'terms.contact.title': '6. Contact us',
        'terms.contact.desc': 'Questions about the Terms of Use? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page, or email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
        'terms.summary': '<strong>In short:</strong> Everything belongs to Haiere. Free for personal use. For commercial use, ask first. This site is provided "as is".',
        'footer.license': 'Code licensed under CC0 1.0 Universal',
        'terms.code.license': '<strong>Lisensi kode:</strong> kode sumber Raia Footer (HTML, CSS, JavaScript) dirilis di bawah <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0 Universal</a> — domain publik. Kamu bebas menyalin, mengubah, dan menyebarluaskan kodenya tanpa perlu mencantumkan atribusi. Ini berlaku untuk kode saja; konten di atas tetap © Haiere.',
        
        /* --- sitemap --- */
        'sitemap.title': 'Sitemap',
        'sitemap.version': 'All pages, Version 4.0.1',
        'sitemap.main.title': 'Main Pages',
        'sitemap.home': 'Home',
        'sitemap.home.desc': 'Profile, bio, and music player',
        'sitemap.showcase': 'Showcase',
        'sitemap.showcase.desc': 'Music portfolio',
        'sitemap.tools': 'Tools',
        'sitemap.tools.desc': 'HajirSync · Raia Delta · Scrub · Vault · Minify · QRE',
        'sitemap.raia': 'RAIA',
        'sitemap.raia.desc': 'AI chatbot · 9+ providers',
        'sitemap.ecosystem.title': 'Haiere Ecosystem',
        'sitemap.nav.title': 'Main Navigation',
        'sitemap.nav.home': 'Home',
        'sitemap.nav.legal': 'Legal',
        'sitemap.nav.tools': 'Tools',
        'sitemap.nav.raia': 'RAIA',
        'sitemap.social.title': 'Social Media &amp; Contact',
        'sitemap.social.note': 'Official contact is available through the form on the main page or email isthajir@proton.me.',
        'changelog.title': 'Version History, v4.0.1',
        'changelog.item1': '✓ New color theme: Aurora Navy (dark) with cyan and gold accents.',
        'changelog.item2': '✓ New fonts: Sora (display), Inter (body), JetBrains Mono (data).',
        'changelog.item3': '✓ QRE tool added: browser-based QR code generator with local processing.',
        'changelog.item4': '✓ Official contact email: isthajir@proton.me.',
        'changelog.item5': '✓ All external links use <code>target="_blank"</code> and <code>rel="noopener noreferrer"</code> for better safety.',
        'changelog.item6': '✓ Better accessibility: keyboard focus, aria-labels, and reduced motion support.',

        /* --- cookies --- */
        'cookies.title': 'Cookie Policy',
        'cookies.version': 'Version 4.0.1, November 10, 2026',
        'cookies.intro': 'We use cookies to make this site more comfortable for you. Here is a simple explanation.',
        'cookies.what.title': '1. What is a cookie?',
        'cookies.what.desc': 'A cookie is a small file saved on your device when you open a site. Think of it as a little note that helps the site remember your choices, like theme or language, when you come back.',
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
        'cookies.row.ga2': 'Saves session status &amp; grouped statistics',
        'cookies.row.permanent': 'Until deleted',
        'cookies.row.ga_duration': '2 years',
        'cookies.third.title': '3. Third-party services',
        'cookies.third.ga': '<strong>Google Analytics</strong>: shows visit statistics using data without names.',
        'cookies.third.formspree': '<strong>Formspree</strong>: handles the contact form (no tracking cookies).',
        'cookies.third.external': '<strong>YouTube, Instagram, SoundCloud, GitHub</strong>: external links. Each has its own cookie policy.',
        'cookies.control.title': '4. How to manage cookies',
        'cookies.control.browser': '<strong>In your browser</strong>: you can refuse or delete cookies in your browser privacy settings.',
        'cookies.control.banner': '<strong>In the cookie banner</strong>: choose accept or decline on your first visit.',
        'cookies.control.ga': '<strong>Opt out of Google Analytics</strong>: install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">official add-on</a> if you do not want to be tracked.',
        'cookies.changes.title': '5. If the policy changes',
        'cookies.changes.desc': 'The cookie policy can be updated at any time. The latest version is always on this page.',
        'cookies.contact.title': '6. Contact us',
        'cookies.contact.desc': 'Questions about cookies? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page, or email <a href="mailto:isthajir@proton.me">isthajir@proton.me</a>.',
        'cookies.summary': '<strong>In short:</strong> Cookies are only used for your comfort, such as remembering your theme, language, and anonymous stats. You can always manage them yourself.',

        /* --- tools --- */
        'tools.title': 'Hajir Tools',
        'tools.version': 'Version 4.0.1, November 10, 2026',
        'tools.intro': 'A set of digital tools from the Haiere ecosystem. All of them are lightweight and run right in your browser.',
        'tools.cta': 'Open Tool',
        'tools.hajirsync.name': 'HajirSync',
        'tools.hajirsync.desc': 'A tool to sync lyrics with the song.',
        'tools.vault.name': 'Raia Vault',
        'tools.vault.desc': 'A personal password vault.',
        'tools.scrub.name': 'Raia Scrub',
        'tools.scrub.desc': 'Metadata cleaner for your files.',
        'tools.delta.name': 'Raia Delta',
        'tools.delta.desc': 'Text comparison tool to spot differences clearly.',
        'tools.minify.name': 'Raia Minify',
        'tools.minify.desc': 'Reduce file size (HTML, CSS, JS).',
        'tools.raiaspace.name': 'RaiaSpace',
        'tools.raiaspace.desc': 'A digital workspace from Raia.',
        'tools.calc.name': 'Calc',
        'tools.calc.desc': 'A simple calculator for everyday needs.',
        'tools.qre.name': 'QRe',
        'tools.qre.desc': 'Browser-based QR code generator with local-only processing.',

        /* --- ai / bot --- */
        'ai.title': 'AI / Bot',
        'ai.version': 'Version 4.0.1, November 10, 2026',
        'ai.intro': 'Digital assistants from the Haiere ecosystem. Pick one to start chatting.',
        'ai.badge': 'AI',
        'ai.cta': 'Start Chat',
        'ai.raia.name': 'Raia',
        'ai.raia.desc': 'AI chatbot that supports many model providers.',
        'ai.kirana.name': 'Kirana',
        'ai.kirana.desc': 'An AI assistant made by Haiere.',

        /* --- games --- */
        'games.title': 'Games',
        'games.version': 'Version 4.0.1, November 10, 2026',
        'games.intro': 'Light games you can play right in your browser.',
        'games.cta': 'Play',
        'games.chess.name': 'Chess',
        'games.chess.desc': 'The classic game of chess, playable right in your browser.',
        'games.loveyou.name': 'Loveyou',
        'games.loveyou.desc': 'A small game with a sweet theme.',
        'games.orbit.name': 'Orbit Weaver',
        'games.orbit.desc': 'A game about orbits and motion.',
        'games.starfall.name': 'Starfall',
        'games.starfall.desc': 'A game about falling stars.',

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
        'footer.email': 'isthajir@proton.me',
        'footer.rights': 'Raia Footer, made with heart by Haiere.',
        'footer.disclaimer': 'Note: you are responsible for how you use the tools here. Haiere is not responsible for any damage or data loss.'
    }
};

/* ============================================================
   I18NManager: ganti bahasa dan terapkan ke DOM
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
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const value = t(key);
            if (value === undefined || value === null) return;
            if (/<[a-z][\s\S]*>/i.test(value)) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-aria');
            const value = t(key);
            if (value) el.setAttribute('aria-label', value);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-placeholder');
            const value = t(key);
            if (value) el.setAttribute('placeholder', value);
        });

        const titleKey = document.documentElement.getAttribute('data-title-key');
        if (titleKey) document.title = t(titleKey) + ' | Raia Footer v4.0.1';
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