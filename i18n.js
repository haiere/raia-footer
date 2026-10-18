/* ============================================================
   i18n.js — Raia Footer v4.0.0
   Manajemen terjemahan (ID / EN) + helper untuk ganti bahasa.
   + Konten Tools, AI / Bot, Games.
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
        'hero.title': 'Info Legal, Tools & Halaman',
        'hero.subtitle': 'Hal-hal penting soal situs ini, ditulis dengan bahasa yang gampang dimengerti.',
        'hero.version': 'Raia Footer v4.0.0 — 10 Oktober 2026',
        'hero.stable': 'Stabil',

        /* --- about --- */
        'about.title': 'Tentang Raia Footer',
        'about.text': 'Raia Footer adalah bagian bawah situs yang bisa kamu pasang di websitemu sendiri. Di versi v4.0.0 ini, animasi scroll-nya makin halus, ada tiga section baru (Tools, AI/Bot, Games), plus aksesibilitas dan performa yang lebih baik.',

        /* --- tabs --- */
        'tab.privacy': 'Privasi',
        'tab.terms': 'Aturan Pakai',
        'tab.sitemap': 'Peta Situs',
        'tab.cookies': 'Cookie',
        'tab.tools': 'Tools',
        'tab.ai': 'AI / Bot',
        'tab.games': 'Games',

        /* --- privacy --- */
        'privacy.title': 'Aturan Privasi',
        'privacy.version': 'Versi 4.0.0 — 10 Oktober 2026',
        'privacy.intro': 'Singkatnya: kami cuma ambil data yang beneran perlu, dan itu pun kalau kamu sendiri yang kasih. Data kamu <strong>nggak akan pernah kami jual</strong> ke siapa pun.',
        'privacy.data.title': '1. Data apa yang kami ambil?',
        'privacy.data.item1': '<strong>Yang kamu ketik sendiri</strong> — misalnya nama dan pesan lewat formulir kontak.',
        'privacy.data.item2': '<strong>Info teknis tanpa nama</strong> — kayak jenis browser dan perangkat, dari Google Analytics. Info ini nggak bisa dipakai buat ngenalin kamu.',
        'privacy.data.item3': '<strong>Pilihan kamu</strong> — bahasa dan tema disimpan di browser kamu sendiri (<code>localStorage</code>), bukan di server kami. Jadi kamu yang pegang kendali.',
        'privacy.data.item4': '<strong>Alat digital</strong> — kayak HajirSync, Raia Delta, Scrub, Vault, Minify, dan RAIA. Semuanya jalan <strong>di perangkat kamu sendiri</strong>, jadi nggak ada data yang dikirim ke mana-mana.',
        'privacy.cookies.title': '2. Cookie &amp; layanan lain',
        'privacy.cookies.item1': '<strong>Cookie buat fungsi</strong> — biar pilihan kamu (bahasa, tema) tetap keingat pas kamu balik lagi.',
        'privacy.cookies.item2': '<strong>Google Analytics</strong> — IP-nya disamarkan, cuma buat lihat statistik kunjungan secara umum.',
        'privacy.cookies.item3': '<strong>Formspree</strong> — yang ngurus formulir kontak. Pesanmu otomatis dihapus paling lama 30 hari setelah terkirim.',
        'privacy.cookies.item4': '<strong>Link ke luar</strong> — kayak YouTube, Instagram, SoundCloud, dan GitHub. Masing-masing punya aturan privasi sendiri.',
        'privacy.security.title': '3. Bagaimana data dijaga?',
        'privacy.security.item1': 'Situs ini pakai <strong>HTTPS/TLS</strong>. Jadi semua koneksi ke situs ini terkunci, dan orang lain nggak bisa baca data yang lewat.',
        'privacy.security.item2': 'Ada <strong>Content Security Policy (CSP)</strong> — lapisan pengaman buat nangkal serangan digital.',
        'privacy.security.item3': 'Semua data yang masuk diperiksa dengan teliti.',
        'privacy.security.item4': 'Semua alat jalan di browser kamu. Data tetap tinggal di perangkat kamu.',
        'privacy.rights.title': '4. Hak kamu',
        'privacy.rights.desc': 'Kamu punya hak buat:',
        'privacy.rights.item1': '<strong>Ngeliat</strong> — minta salinan data pribadi yang kami simpan.',
        'privacy.rights.item2': '<strong>Membetulkan</strong> — minta kami benerin data yang keliru.',
        'privacy.rights.item3': '<strong>Menghapus</strong> — minta data pribadi kamu dihapus total.',
        'privacy.rights.contact': 'Mau minta salah satunya? Kabari kami lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama.',
        'privacy.changes.title': '5. Kalau ada perubahan',
        'privacy.changes.desc': 'Kalau aturan ini berubah, tanggal "Terakhir diperbarui" bakal selalu kami tampilin di bagian atas. Nggak ada perubahan diam-diam.',
        'privacy.contact.title': '6. Hubungi kami',
        'privacy.contact.desc': 'Ada pertanyaan soal privasi? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama.',
        'privacy.summary': '<strong>Intinya:</strong> Data kamu aman, kami cuma ambil yang perlu, nggak jual apa pun, dan semua alat jalan di perangkat kamu sendiri.',

        /* --- terms --- */
        'terms.title': 'Aturan Pakai',
        'terms.version': 'Versi 4.0.0 — 10 Oktober 2026',
        'terms.intro': 'Kalau kamu pakai situs ini, berarti kamu setuju sama aturan di bawah. Tenang aja, semuanya wajar dan gampang.',
        'terms.ip.title': '1. Semua karya di sini milik Haiere',
        'terms.ip.desc1': 'Yang termasuk:',
        'terms.ip.item1': '13 lagu asli — 5 dari album <em>Fragmen Suara</em>, 7 dari <em>Resonansi Dalam Diam</em>, dan 1 single <em>Saya Akan Lawan</em>.',
        'terms.ip.item2': 'Semua tulisan, desain, dan tampilan situs.',
        'terms.ip.item3': 'Semua alat digital (HajirSync, Raia Delta, Scrub, Vault, Minify, RAIA).',
        'terms.ip.desc2': 'Semuanya dilindungi hak cipta dan sepenuhnya milik Haiere. Jadi jangan diaku-aku ya.',
        'terms.ip.usage': '<strong>Boleh dipakai untuk:</strong>',
        'terms.ip.usage1': 'Keperluan pribadi (bukan buat cari uang) — gratis.',
        'terms.ip.usage2': 'Keperluan komersial — wajib minta izin tertulis ke Muhaajir dulu.',
        'terms.ip.usage3': 'Cover atau remix — boleh aja, asal tetap cantumin kreditnya: © Muhaajir.',
        'terms.prohibited.title': '2. Yang tidak boleh dilakukan',
        'terms.prohibited.item1': 'Jual lagi, sebar, atau ngaku-ngaku karya ini punya kamu tanpa izin.',
        'terms.prohibited.item2': 'Ambil data otomatis (<em>scraping</em>) atau nyoba bobol sistem.',
        'terms.prohibited.item3': 'Pakai alat di sini buat hal ilegal atau buat rugiin orang lain.',
        'terms.disclaimer.title': '3. Batas tanggung jawab',
        'terms.disclaimer.desc1': 'Situs ini diberikan <strong>"apa adanya"</strong>. Kami nggak bertanggung jawab kalau:',
        'terms.disclaimer.item1': 'Unduhan gagal atau filenya corrupt.',
        'terms.disclaimer.item2': 'Ada kendala teknis pas pakai alat — termasuk kemungkinan data hilang di perangkat kamu.',
        'terms.disclaimer.item3': 'Isi atau aturan dari link luar yang nyambung ke situs ini.',
        'terms.law.title': '4. Hukum yang berlaku',
        'terms.law.desc': 'Semua urusan situs ini ngikutin <strong>hukum Republik Indonesia</strong>, dengan wilayah hukum <strong>Bogor, Jawa Barat</strong>.',
        'terms.changes.title': '5. Kalau aturan berubah',
        'terms.changes.desc': 'Aturan bisa diperbarui kapan aja. Versi terbarunya selalu ada di halaman ini, lengkap sama tanggal perubahannya.',
        'terms.contact.title': '6. Hubungi kami',
        'terms.contact.desc': 'Ada pertanyaan soal Aturan Pakai? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama.',
        'terms.summary': '<strong>Intinya:</strong> Semua karya milik Haiere, bebas dipakai buat keperluan pribadi, kalau komersial minta izin dulu, dan situs ini diberikan "apa adanya".',

        /* --- sitemap --- */
        'sitemap.title': 'Peta Situs',
        'sitemap.version': 'Semua halaman — Versi 4.0.0',
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
        'sitemap.social.note': 'Kontak resminya lewat formulir di halaman utama.',
        'changelog.title': 'Riwayat Versi — v4.0.0',
        'changelog.item1': '✓ Animasi scroll dirombak total — halus, natural, tanpa layout shift.',
        'changelog.item2': '✓ Tiga section baru: Tools, AI / Bot, dan Games.',
        'changelog.item3': '✓ Tablist responsif: horizontal-scroll halus di layar kecil.',
        'changelog.item4': '✓ Semua link eksternal pakai <code>target="_blank"</code> + <code>rel="noopener noreferrer"</code> biar lebih aman.',
        'changelog.item5': '✓ Aksesibilitas dinaikin: fokus keyboard, aria-label, sampai reduced-motion.',
        'changelog.item6': '✓ Performa tetap ringan: tanpa dependency baru, animasi cuma pakai <code>opacity</code> &amp; <code>transform</code>.',

        /* --- cookies --- */
        'cookies.title': 'Aturan Cookie',
        'cookies.version': 'Versi 4.0.0 — 10 Oktober 2026',
        'cookies.intro': 'Kami pakai cookie biar kamu makin nyaman jelajahin situs ini. Penjelasannya kami tulis sesederhana mungkin.',
        'cookies.what.title': '1. Apa itu cookie?',
        'cookies.what.desc': 'Cookie itu file kecil yang disimpen di perangkat kamu pas buka situs. Fungsinya kayak catatan kecil — biar situs inget pilihan kamu (misalnya tema atau bahasa) pas kamu balik lagi.',
        'cookies.weuse.title': '2. Cookie yang kami pakai',
        'cookies.table.name': 'Nama',
        'cookies.table.type': 'Jenis',
        'cookies.table.purpose': 'Fungsi',
        'cookies.table.duration': 'Masa Berlaku',
        'cookies.type.functional': 'Fungsional',
        'cookies.type.preference': 'Preferensi',
        'cookies.type.analytics': 'Analitik',
        'cookies.row.raia': 'Ngesimpen setelan RAIA (provider, model, parameter)',
        'cookies.row.lang': 'Ngesimpen pilihan bahasa (ID/EN)',
        'cookies.row.theme': 'Ngesimpen pilihan tema (terang/gelap)',
        'cookies.row.consent': 'Ngesimpen jawaban kamu di banner cookie',
        'cookies.row.ga': 'Ngebedain pengunjung tanpa perlu nama',
        'cookies.row.ga2': 'Ngesimpen status sesi &amp; data agregat',
        'cookies.row.permanent': 'Sampai dihapus',
        'cookies.row.ga_duration': '2 tahun',
        'cookies.third.title': '3. Layanan pihak ketiga',
        'cookies.third.ga': '<strong>Google Analytics</strong> — buat lihat statistik kunjungan pakai data tanpa nama.',
        'cookies.third.formspree': '<strong>Formspree</strong> — yang ngurus formulir kontak (tanpa cookie pelacak).',
        'cookies.third.external': '<strong>YouTube, Instagram, SoundCloud, GitHub</strong> — link ke luar, masing-masing punya aturan cookie sendiri.',
        'cookies.control.title': '4. Cara mengatur cookie',
        'cookies.control.browser': '<strong>Lewat browser</strong> — kamu bisa nolak atau hapus cookie di setelan privasi browser.',
        'cookies.control.banner': '<strong>Lewat banner cookie</strong> — pilih terima atau tolak pas pertama kali berkunjung.',
        'cookies.control.ga': '<strong>Nolak Google Analytics</strong> — pasang <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">add-on resminya</a> kalau kamu nggak mau dilacak.',
        'cookies.changes.title': '5. Kalau aturan berubah',
        'cookies.changes.desc': 'Aturan cookie bisa berubah kapan aja. Versi terbarunya selalu ada di halaman ini.',
        'cookies.contact.title': '6. Hubungi kami',
        'cookies.contact.desc': 'Ada pertanyaan soal cookie? Kirim pesan lewat <a href="https://hajir.is-a.dev#contact">formulir kontak</a> di halaman utama.',
        'cookies.summary': '<strong>Intinya:</strong> Cookie cuma dipakai buat kenyamanan kamu — buat inget tema, bahasa, dan statistik tanpa nama. Dan kamu selalu bisa atur sendiri.',

        /* --- tools --- */
        'tools.title': 'Hajir Tools',
        'tools.version': 'Versi 4.0.0 — 10 Oktober 2026',
        'tools.intro': 'Kumpulan alat digital dari ekosistem Haiere. Semuanya ringan dan langsung jalan di browser, tanpa ribet.',
        'tools.cta': 'Buka Tool',
        'tools.hajirsync.name': 'HajirSync',
        'tools.hajirsync.desc': 'Alat buat nyelarasin lirik sama lagunya.',
        'tools.vault.name': 'Raia Vault',
        'tools.vault.desc': 'Brankas kata sandi pribadimu.',
        'tools.scrub.name': 'Raia Scrub',
        'tools.scrub.desc': 'Pembersih metadata (data tersembunyi) di file.',
        'tools.delta.name': 'Raia Delta',
        'tools.delta.desc': 'Pembanding teks biar bedanya kelihatan jelas.',
        'tools.minify.name': 'Raia Minify',
        'tools.minify.desc': 'Pengecilik ukuran file (HTML, CSS, JS).',
        'tools.raiaspace.name': 'RaiaSpace',
        'tools.raiaspace.desc': 'Ruang kerja digital buatan Raia.',
        'tools.calc.name': 'Calc',
        'tools.calc.desc': 'Kalkulator simpel buat hitungan harian.',

        /* --- ai / bot --- */
        'ai.title': 'AI / Bot',
        'ai.version': 'Versi 4.0.0 — 10 Oktober 2026',
        'ai.intro': 'Asisten digital dari ekosistem Haiere. Pilih satu buat mulai ngobrol.',
        'ai.badge': 'AI',
        'ai.cta': 'Mulai Chat',
        'ai.raia.name': 'Raia',
        'ai.raia.desc': 'Chatbot AI yang dukung banyak penyedia model.',
        'ai.kirana.name': 'Kirana',
        'ai.kirana.desc': 'Asisten AI buatan Haiere.',

        /* --- games --- */
        'games.title': 'Games',
        'games.version': 'Versi 4.0.0 — 10 Oktober 2026',
        'games.intro': 'Game ringan yang langsung bisa dimainin di browser.',
        'games.cta': 'Mainkan',
        'games.chess.name': 'Chess',
        'games.chess.desc': 'Catur klasik, langsung main di browser.',
        'games.loveyou.name': 'Loveyou',
        'games.loveyou.desc': 'Game kecil bertema manis buat orang tersayang.',
        'games.orbit.name': 'Orbit Weaver',
        'games.orbit.desc': 'Game bertema orbit dan pergerakan.',
        'games.starfall.name': 'Starfall',
        'games.starfall.desc': 'Game nangkepin bintang yang jatuh.',

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
        'footer.rights': 'Raia Footer — dibuat dengan hati oleh Haiere.',
        'footer.disclaimer': 'Catatan: tanggung jawab pemakaian alat di sini ada di kamu. Haiere nggak bertanggung jawab atas kerusakan atau kehilangan data.'
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
        'hero.title': 'Legal Info, Tools & Page List',
        'hero.subtitle': 'The important things about this site, written in plain words.',
        'hero.version': 'Raia Footer v4.0.0 — October 10, 2026',
        'hero.stable': 'Stable',

        /* --- about --- */
        'about.title': 'About Raia Footer',
        'about.text': 'Raia Footer is a site footer you can drop into your own website. Version v4.0.0 brings smoother scroll animations, three new sections (Tools, AI / Bot, Games), and improved accessibility and performance.',

        /* --- tabs --- */
        'tab.privacy': 'Privacy',
        'tab.terms': 'Terms of Use',
        'tab.sitemap': 'Sitemap',
        'tab.cookies': 'Cookies',
        'tab.tools': 'Tools',
        'tab.ai': 'AI / Bot',
        'tab.games': 'Games',

        /* --- privacy --- */
        'privacy.title': 'Privacy Rules',
        'privacy.version': 'Version 4.0.0 — October 10, 2026',
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
        'privacy.rights.contact': 'Want to ask for one of these? Reach us through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page.',
        'privacy.changes.title': '5. If things change',
        'privacy.changes.desc': 'If we change these rules, the "Last updated" date will always be at the top. We will never change rules in secret.',
        'privacy.contact.title': '6. Contact us',
        'privacy.contact.desc': 'Questions about privacy? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page.',
        'privacy.summary': '<strong>In short:</strong> Your data is safe. We only take what we need. We never sell anything. All tools work on your own device.',

        /* --- terms --- */
        'terms.title': 'Terms of Use',
        'terms.version': 'Version 4.0.0 — October 10, 2026',
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
        'terms.contact.desc': 'Questions about Terms of Use? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page.',
        'terms.summary': '<strong>In short:</strong> Everything belongs to Haiere. Free for personal use. For commercial use, ask first. This site is given "as is".',

        /* --- sitemap --- */
        'sitemap.title': 'Sitemap',
        'sitemap.version': 'All pages — Version 4.0.0',
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
        'changelog.title': 'Version History — v4.0.0',
        'changelog.item1': '✓ Scroll animations rebuilt — smooth, natural, no layout shift.',
        'changelog.item2': '✓ Three new sections: Tools, AI / Bot, and Games.',
        'changelog.item3': '✓ Responsive tablist: smooth horizontal scroll on small screens.',
        'changelog.item4': '✓ All external links use <code>target="_blank"</code> + <code>rel="noopener noreferrer"</code>.',
        'changelog.item5': '✓ Accessibility improved: keyboard focus, aria-label, reduced-motion.',
        'changelog.item6': '✓ Performance kept: no new dependency, animations use only <code>opacity</code> &amp; <code>transform</code>.',

        /* --- cookies --- */
        'cookies.title': 'Cookie Rules',
        'cookies.version': 'Version 4.0.0 — October 10, 2026',
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
        'cookies.contact.desc': 'Questions about cookies? Send us a message through the <a href="https://hajir.is-a.dev#contact">contact form</a> on the main page.',
        'cookies.summary': '<strong>In short:</strong> Cookies are only used for your comfort. To remember theme, language, and nameless stats. You can always manage them yourself.',

        /* --- tools --- */
        'tools.title': 'Hajir Tools',
        'tools.version': 'Version 4.0.0 — October 10, 2026',
        'tools.intro': 'A set of digital tools from the Haiere ecosystem. All of them are light and run right in your browser.',
        'tools.cta': 'Open Tool',
        'tools.hajirsync.name': 'HajirSync',
        'tools.hajirsync.desc': 'A tool to sync lyrics with the song.',
        'tools.vault.name': 'Raia Vault',
        'tools.vault.desc': 'A personal password vault.',
        'tools.scrub.name': 'Raia Scrub',
        'tools.scrub.desc': 'Metadata cleaner for your files.',
        'tools.delta.name': 'Raia Delta',
        'tools.delta.desc': 'Text diff checker to spot differences.',
        'tools.minify.name': 'Raia Minify',
        'tools.minify.desc': 'Shrink file size (HTML, CSS, JS).',
        'tools.raiaspace.name': 'RaiaSpace',
        'tools.raiaspace.desc': 'A digital workspace from Raia.',
        'tools.calc.name': 'Calc',
        'tools.calc.desc': 'A simple calculator for daily needs.',

        /* --- ai / bot --- */
        'ai.title': 'AI / Bot',
        'ai.version': 'Version 4.0.0 — October 10, 2026',
        'ai.intro': 'Digital assistants from the Haiere ecosystem. Pick one to start chatting.',
        'ai.badge': 'AI',
        'ai.cta': 'Start Chat',
        'ai.raia.name': 'Raia',
        'ai.raia.desc': 'AI chatbot with support for many model providers.',
        'ai.kirana.name': 'Kirana',
        'ai.kirana.desc': 'An AI assistant by Haiere.',

        /* --- games --- */
        'games.title': 'Games',
        'games.version': 'Version 4.0.0 — October 10, 2026',
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
        'footer.rights': 'Raia Footer — made with heart by Haiere.',
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
        if (titleKey) document.title = t(titleKey) + ' | Raia Footer v4.0.0';
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