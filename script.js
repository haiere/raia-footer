        (function() {
            'use strict';

            // ---- CONFIG ----
            const LEGAL_CONFIG = {
                operatorName: 'Hajir',
                websiteUrl: 'https://haiere.github.io',
                effectiveDate: '12 Agustus 2026',
                jurisdiction: 'Indonesia, Bogor Jawa Barat',
                lastUpdated: '12 Agustus 2026'
            };

            // ---- DOM REFS ----
            const header = document.getElementById('mainHeader');
            const themeToggle = document.getElementById('themeToggle');
            const themeIcon = document.getElementById('themeIcon');
            const langToggle = document.getElementById('langToggle');
            const printBtn = document.getElementById('printBtn');
            const backBtn = document.getElementById('backToTop');
            const progressBar = document.getElementById('progressBar');
            const yearSpan = document.getElementById('currentYear');
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const mobileMenu = document.getElementById('mobileMenu');

            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabPanels = document.querySelectorAll('.tabpanel');

            const headerLogo = document.getElementById('header-logo');
            const footerLogo = document.getElementById('footer-logo');

            const LOGO_LIGHT = 'https://i.postimg.cc/GmWt2wch/H-blue.webp';
            const LOGO_DARK = 'https://i.postimg.cc/8PJ0bhb1/H-haiere.webp';

            // ---- THEME ----
            function getTheme() {
                return document.documentElement.getAttribute('data-theme') || 'dark';
            }

            function setTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                try { localStorage.setItem('legalTheme', theme); } catch (_) {}
                if (themeIcon) {
                    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
                }
                updateLogo();
            }

            function toggleTheme() {
                setTheme(getTheme() === 'dark' ? 'light' : 'dark');
            }

            function updateLogo() {
                const isDark = getTheme() === 'dark';
                const src = isDark ? LOGO_DARK : LOGO_LIGHT;
                if (headerLogo && headerLogo.src !== src) { headerLogo.src = src; }
                if (footerLogo && footerLogo.src !== src) { footerLogo.src = src; }
            }

            (function() {
                let saved;
                try { saved = localStorage.getItem('legalTheme'); } catch (_) {}
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(saved || (prefersDark ? 'dark' : 'light'));
            })();

            themeToggle.addEventListener('click', toggleTheme);

            // ---- I18N ----
            const translations = {
    Id: {
        skip: 'Langsung ke konten utama',
        brand: 'Haiere',
        'nav.home': 'Beranda',
        'nav.music': 'Musik',
        'nav.tools': 'Tools',
        'nav.legal': 'Legal',
        'lang.btn': 'EN',
        'hero.title': 'Legal & Sitemap',
        'hero.subtitle': 'Dokumen Resmi Haiere Official – Musik & Tools Digital',
        'hero.version': 'Versi 3.8.b — 12 Agustus 2026',
        'hero.stable': 'Stabil',
        'tab.privacy': 'Privasi',
        'tab.terms': 'Syarat & Ketentuan',
        'tab.sitemap': 'Sitemap',
        'tab.cookies': 'Cookie',

        'toc.privacy.title': 'Daftar Isi',
        'toc.privacy.commitment': 'Komitmen Kami',
        'toc.privacy.data': 'Data Pengguna',
        'toc.privacy.cookies': 'Penggunaan Cookie',
        'toc.privacy.security': 'Keamanan Data',
        'toc.privacy.rights': 'Hak Kamu',
        'toc.privacy.changes': 'Perubahan Aturan',
        'toc.privacy.contact': 'Hubungi Kami',

        'toc.terms.title': 'Daftar Isi',
        'toc.terms.ip': 'Hak Cipta & Karya',
        'toc.terms.prohibited': 'Hal yang Dilarang',
        'toc.terms.disclaimer': 'Batas Tanggung Jawab',
        'toc.terms.law': 'Hukum & Wilayah',
        'toc.terms.changes': 'Perubahan Aturan',
        'toc.terms.contact': 'Hubungi Kami',

        'toc.cookies.title': 'Daftar Isi',
        'toc.cookies.what': 'Apa itu Cookie?',
        'toc.cookies.weuse': 'Cookie yang Dipakai',
        'toc.cookies.third': 'Layanan Pihak Ketiga',
        'toc.cookies.control': 'Atur Cookie',
        'toc.cookies.changes': 'Perubahan Aturan',
        'toc.cookies.contact': 'Hubungi Kami',

        'privacy.title': 'Kebijakan Privasi',
        'privacy.version': 'Versi 3.8.b — 12 Agustus 2026',
        'privacy.commitment.title': 'Komitmen Privasi',
        'privacy.commitment.desc': 'Saya, Hajir, berkomitmen untuk selalu menjaga privasi kamu secara terbuka dan jujur. Data kamu tidak akan pernah dijual, disewakan, atau dibagikan ke pihak mana pun untuk urusan iklan/pemasaran. Semua fitur di situs ini dibuat dengan mengutamakan rasa aman dan nyaman buat kamu.',
        'privacy.data.title': '1. Data yang Dikumpulkan',
        'privacy.data.desc': 'Kami cuma mengumpulkan data yang benar-benar dibutuhkan:',
        'privacy.data.item1': 'Data yang kamu isi secara sukarela, seperti nama dan pesan lewat formulir kontak.',
        'privacy.data.item2': 'Data teknis umum dari Google Analytics (seperti tipe browser, HP/komputer yang dipakai, dan lokasi umum) tanpa bisa mengetahui identitas pribadi kamu.',
        'privacy.data.item3': 'Pengaturan pribadi seperti pilihan bahasa dan tema (terang/gelap) yang langsung tersimpan di browser kamu sendiri (localStorage), bukan di server kami.',
        'privacy.data.item4': 'Tools digital seperti HajirSync, Raia Delta, Scrub, Vault, Minify, dan RAIA berjalan penuh di browser kamu tanpa mengirimkan data pribadi ke server luar.',
        'privacy.cookies.title': '2. Cookie & Layanan Pihak Ketiga',
        'privacy.cookies.desc': 'Situs ini menggunakan:',
        'privacy.cookies.item1': 'Cookie fungsional untuk menyimpan preferensi kamu (seperti bahasa dan tampilan) supaya lebih nyaman saat dipakai.',
        'privacy.cookies.item2': 'Google Analytics dengan fitur penyamaran IP untuk melihat statistik pengunjung secara umum.',
        'privacy.cookies.item3': 'Formulir kontak Formspree, di mana pesan kamu akan otomatis dihapus paling lambat 30 hari setelah dikirim.',
        'privacy.cookies.item4': 'Tautan ke platform luar seperti YouTube, Instagram, SoundCloud, dan GitHub yang punya aturan privasinya masing-masing.',
        'privacy.security.title': '3. Keamanan Data',
        'privacy.security.item1': 'Seluruh akses situs dienkripsi dan dilindungi oleh protokol HTTPS/TLS yang aman.',
        'privacy.security.item2': 'Memakai sistem pengamanan Content Security Policy (CSP) untuk mencegah serangan digital.',
        'privacy.security.item3': 'Pemeriksaan keamanan input data secara berkala.',
        'privacy.security.item4': 'Semua alat digital bekerja langsung di browser kamu, jadi data kamu tetap aman di perangkat sendiri.',
        'privacy.rights.title': '4. Hak Kamu sebagai Pengguna',
        'privacy.rights.desc': 'Kamu punya hak penuh untuk:',
        'privacy.rights.item1': 'Melihat data pribadi kamu yang tersimpan di sini.',
        'privacy.rights.item2': 'Meminta perbaikan jika ada data yang kurang tepat.',
        'privacy.rights.item3': 'Meminta penghapusan data pribadi kamu kapan saja.',
        'privacy.rights.contact': 'Untuk mengajukan hal di atas, kamu bisa langsung menghubungi kami lewat formulir kontak di halaman utama.',
        'privacy.changes.title': '5. Perubahan Kebijakan',
        'privacy.changes.desc': 'Kebijakan ini bisa saja diperbarui jika ada penambahan fitur baru atau penyesuaian aturan hukum. Tanggal pembaruan terakhir akan selalu dicantumkan di bagian atas halaman ini.',
        'privacy.contact.title': '6. Kontak',
        'privacy.contact.desc': 'Punya pertanyaan tentang Kebijakan Privasi ini? Kamu bisa kirim pesan lewat formulir kontak di halaman utama.',
        'privacy.summary': 'Intinya: Kami cuma mengumpulkan data seperlunya, tidak pernah menjual data kamu, dan semua tools bekerja langsung di perangkat kamu. Privasi kamu aman bersama kami!',

        'terms.title': 'Syarat & Ketentuan',
        'terms.version': 'Versi 3.8.b — 12 Agustus 2026',
        'terms.intro': 'Dengan mengakses dan menggunakan situs ini, kamu dianggap sudah paham dan setuju dengan aturan berikut:',
        'terms.ip.title': '1. Hak Cipta & Penggunaan Karya',
        'terms.ip.desc1': 'Semua konten yang ada di situs ini, meliputi:',
        'terms.ip.item1': '13 karya musik original (5 dari album Fragmen Suara, 7 dari Resonansi Dalam Diam, dan 1 single Saya Akan Lawan),',
        'terms.ip.item2': 'Teks, desain visual, serta tampilan situs,',
        'terms.ip.item3': 'Serta tools digital (HajirSync, Raia Delta, Scrub, Vault, Minify, dan RAIA),',
        'terms.ip.desc2': 'adalah hak milik penuh Haiere dan dilindungi oleh undang-undang hak cipta.',
        'terms.ip.usage1': 'Boleh digunakan secara gratis untuk keperluan pribadi (non-komersial).',
        'terms.ip.usage2': 'Penggunaan untuk urusan komersial/bisnis wajib dapat izin tertulis dari Muhaajir.',
        'terms.ip.usage3': 'Boleh membuat lagu cover atau remix, asalkan tetap mencantumkan kredit: © Muhaajir.',
        'terms.prohibited.title': '2. Larangan Penggunaan',
        'terms.prohibited.item1': 'Dilarang menyebarkan ulang, menjual, atau mengklaim konten ini sebagai milik sendiri tanpa izin.',
        'terms.prohibited.item2': 'Dilarang mengambil data secara otomatis (scraping) atau mencoba meretas sistem situs.',
        'terms.prohibited.item3': 'Dilarang memakai tools yang ada untuk tindakan merugikan orang lain atau melanggar hukum.',
        'terms.disclaimer.title': '3. Batasan Tanggung Jawab',
        'terms.disclaimer.desc1': 'Situs dan seluruh fitsur di dalamnya disediakan "apa adanya". Haiere tidak bertanggung jawab atas:',
        'terms.disclaimer.item1': 'Gagal unduh atau file unduhan yang rusak/korup.',
        'terms.disclaimer.item2': 'Kendala teknis saat memakai tools, termasuk potensi kehilangan data pribadi di perangkat kamu.',
        'terms.disclaimer.item3': 'Isi konten atau aturan dari link luar yang terhubung di situs ini.',
        'terms.law.title': '4. Hukum yang Berlaku',
        'terms.law.desc': 'Semua hal yang berkaitan dengan penggunaan situs ini diatur berdasarkan hukum Republik Indonesia, dengan wilayah hukum di Bogor, Jawa Barat.',
        'terms.changes.title': '5. Perubahan Ketentuan',
        'terms.changes.desc': 'Ketentuan ini bisa diperbarui sewaktu-waktu. Versi paling baru beserta tanggal perubahannya akan selalu ditampilkan di halaman ini.',
        'terms.contact.title': '6. Kontak',
        'terms.contact.desc': 'Ada pertanyaan seputar Syarat & Ketentuan? Silakan kirim pesan melalui formulir kontak di halaman utama.',
        'terms.summary': 'Intinya: Seluruh konten adalah milik Haiere. Bebas dipakai untuk keperluan pribadi, tapi kalau mau dipakai untuk jualan/bisnis harus minta izin dulu. Situs ini disediakan apa adanya.',

        'sitemap.title': 'Sitemap',
        'sitemap.version': 'Navigasi Lengkap — Versi 3.8.b',
        'sitemap.main.title': 'Halaman Utama',
        'sitemap.home': 'Beranda',
        'sitemap.home.desc': 'Profil, biografi, dan pemutar musik',
        'sitemap.showcase': 'Showcase',
        'sitemap.showcase.desc': 'Portofolio karya musik',
        'sitemap.tools': 'Tools',
        'sitemap.tools.desc': 'HajirSync • Raia Delta • Scrub • Vault • Minify',
        'sitemap.raia': 'RAIA',
        'sitemap.raia.desc': 'AI Chatbot · 9+ Provider AI',
        'sitemap.ecosystem.title': '🌐 Ekosistem Haiere',
        'sitemap.nav.title': 'Navigasi Utama',
        'sitemap.nav.home': 'Beranda',
        'sitemap.nav.legal': 'Legal',
        'sitemap.nav.tools': 'Tools',
        'sitemap.nav.raia': 'RAIA',
        'sitemap.content.title': 'Daftar Konten & Tools',
        'sitemap.content.audio': 'Koleksi Audio: 13 lagu original — 5 dari Fragmen Suara, 7 dari Resonansi Dalam Diam, dan 1 single Saya Akan Lawan.',
        'sitemap.content.tools': 'Tools Digital: HajirSync · Raia Delta · Raia Scrub · Raia Vault · RaiaMinify • RAIA AI Chatbot.',
        'sitemap.social.title': 'Media Sosial & Kontak',
        'sitemap.social.note': 'Layanan kontak resmi bisa diakses lewat formulir kontak Formspree di halaman utama.',

        'changelog.title': '📋 Riwayat Perubahan — v3.8.b (12 Agustus 2026)',
        'changelog.item1': '✓ Menambahkan bagian Kebijakan Cookie (#cookies) yang lebih jelas dan mudah dipahami.',
        'changelog.item2': '✓ Memperbarui tampilan header dan footer agar navigasi terasa lebih rapi dan ringan.',
        'changelog.item3': '✓ Memperbarui versi sistem utama ke 3.8.b.',
        'changelog.item4': '✓ Meningkatkan performa situs dan kenyamanan akses (Skor Lighthouse > 95).',
        'changelog.item5': '✓ Menyederhanakan bahasa hukum/legal agar lebih santai dan gampang dimengerti.',
        'changelog.item6': '✓ Penyegaran identitas brand dari Muhaajir menjadi Haiere dengan logo baru berinisial H.',
        'changelog.item7': '✓ Menambahkan direktori Ekosistem Proyek pada halaman Sitemap.',
        'changelog.item8': '✓ Arsitektur kode diperbarui: Tidak lagi menggunakan single file index.html, melainkan dipisah menjadi index.html, style.css, dan script.js untuk kemudahan pengembangan.',

        'cookies.title': 'Kebijakan Cookie',
        'cookies.version': 'Versi 3.8.b — 12 Agustus 2026',
        'cookies.intro': 'Kami menggunakan cookie dan teknologi sejenis untuk membuat pengalaman kamu menjelajahi situs ini jadi lebih nyaman. Halaman ini menjelaskan jenis cookie yang dipakai beserta fungsinya.',
        'cookies.what.title': '1. Apa itu Cookie?',
        'cookies.what.desc': 'Cookie adalah file teks kecil yang tersimpan di perangkat kamu saat membuka situs web. Cookie membantu situs mengingat pilihan kamu agar saat berkunjung kembali, semuanya sudah siap dan praktis.',
        'cookies.weuse.title': '2. Jenis Cookie yang Kami Gunakan',
        'cookies.table.name': 'Nama Cookie',
        'cookies.table.type': 'Tipe',
        'cookies.table.purpose': 'Fungsi / Tujuan',
        'cookies.table.duration': 'Masa Berlaku',
        'cookies.type.functional': 'Fungsional',
        'cookies.type.preference': 'Preferensi',
        'cookies.type.analytics': 'Analitik',
        'cookies.row.raia': 'Menyimpan pengaturan RAIA seperti pilihan provider, model AI, dan parameter',
        'cookies.row.lang': 'Menyimpan pilihan bahasa (ID/EN) kamu',
        'cookies.row.theme': 'Menyimpan pilihan tema tampilan (Gelap/Terang)',
        'cookies.row.consent': 'Menyimpan jawaban persetujuan kamu pada banner cookie',
        'cookies.row.ga': 'Membedakan pengunjung situs secara anonim',
        'cookies.row.ga2': 'Menyimpan statistik sesi dan penggunaan situs secara umum',
        'cookies.row.permanent': 'Permanen (sampai kamu hapus sendiri)',
        'cookies.row.ga_duration': '2 tahun',
        'cookies.note': 'Cookie fungsional dan preferensi dipakai murni untuk kenyamanan kamu. Data analitik pun sepenuhnya anonim dan tidak dipakai untuk melacak kamu secara pribadi.',
        'cookies.third.title': '3. Cookie Pihak Ketiga',
        'cookies.third.desc': 'Kami juga bekerjasama dengan beberapa layanan pihak ketiga yang terpercaya:',
        'cookies.third.ga': 'Google Analytics: Menganalisis kunjungan web secara umum dengan data anonim.',
        'cookies.third.formspree': 'Formspree: Memproses pesan formulir tanpa memasang cookie pelacak.',
        'cookies.third.external': 'YouTube, Instagram, SoundCloud, dan GitHub: Berjalan sebagai link luar yang memakai aturan cookie platform mereka masing-masing.',
        'cookies.control.title': '4. Cara Mengatur Cookie',
        'cookies.control.desc': 'Kamu punya kendali penuh atas cookie melalui beberapa cara:',
        'cookies.control.browser': 'Lewat Pengaturan Browser: Kamu bisa menolak atau menghapus cookie kapan saja melalui menu pengaturan privasi di browser kamu.',
        'cookies.control.banner': 'Lewat Banner Cookie: Saat pertama kali datang, kamu bisa memilih untuk menerima atau menolak cookie tambahan.',
        'cookies.control.ga': 'Google Analytics Opt-out: Kamu bisa memasang ekstensi browser dari Google untuk mematikan pelacakan analitik.',
        'cookies.changes.title': '5. Perubahan Kebijakan',
        'cookies.changes.desc': 'Kebijakan cookie ini dapat diperbarui sewaktu-waktu sesuai penyesuaian layanan. Tanggal pembaruan terbaru akan selalu ditampilkan di halaman ini.',
        'cookies.contact.title': '6. Kontak',
        'cookies.contact.desc': 'Punya pertanyaan seputar Cookie? Kamu bisa kirim pesan lewat formulir kontak di halaman utama.',
        'cookies.summary': 'Intinya: Kami pakai cookie cuma buat bantu menyimpan preferensi tampilan kamu dan melihat statistik anonim. Kamu bebas mengatur atau menghapus cookie ini kapan saja!',
        'cookies.updated': 'Terakhir diperbarui: 12 Agustus 2026',

        'footer.home': 'Beranda',
        'footer.about': 'Tentang',
        'footer.music': 'Musik',
        'footer.tools': 'Tools',
        'footer.privacy': 'Privasi',
        'footer.terms': 'Syarat & Ketentuan',
        'footer.sitemap': 'Sitemap',
        'footer.cookies': 'Cookie',
        'footer.contact': 'Kontak',
        'footer.rights': 'Haiere Official. Hak Cipta Dilindungi.',
        'footer.disclaimer': 'Sanggahan: Penggunaan seluruh tools sepenuhnya menjadi tanggung jawab pengguna. Haiere tidak bertanggung jawab atas potensi kerusakan atau kehilangan data.',
        'footer.updated': 'Terakhir diperbarui: 12 Agustus 2026',
        'footer.version': 'v3.8.b'
    },
    en: {
        skip: 'Skip to main content',
        brand: 'Haiere',
        'nav.home': 'Home',
        'nav.music': 'Music',
        'nav.tools': 'Tools',
        'nav.legal': 'Legal',
        'lang.btn': 'ID',
        'hero.title': 'Legal & Sitemap',
        'hero.subtitle': 'Official Documents of Haiere Official – Music & Digital Tools',
        'hero.version': 'Version 3.8.b — August 12, 2026',
        'hero.stable': 'Stable',
        'tab.privacy': 'Privacy',
        'tab.terms': 'Terms & Conditions',
        'tab.sitemap': 'Sitemap',
        'tab.cookies': 'Cookie',

        'toc.privacy.title': 'Table of Contents',
        'toc.privacy.commitment': 'Our Commitment',
        'toc.privacy.data': 'User Data',
        'toc.privacy.cookies': 'Cookies Usage',
        'toc.privacy.security': 'Data Security',
        'toc.privacy.rights': 'Your Rights',
        'toc.privacy.changes': 'Policy Updates',
        'toc.privacy.contact': 'Contact Us',

        'toc.terms.title': 'Table of Contents',
        'toc.terms.ip': 'Copyright & Assets',
        'toc.terms.prohibited': 'Prohibited Actions',
        'toc.terms.disclaimer': 'Disclaimer',
        'toc.terms.law': 'Governing Law',
        'toc.terms.changes': 'Terms Updates',
        'toc.terms.contact': 'Contact Us',

        'toc.cookies.title': 'Table of Contents',
        'toc.cookies.what': 'What Are Cookies?',
        'toc.cookies.weuse': 'Cookies We Use',
        'toc.cookies.third': 'Third-Party Services',
        'toc.cookies.control': 'Cookie Controls',
        'toc.cookies.changes': 'Policy Updates',
        'toc.cookies.contact': 'Contact Us',

        'privacy.title': 'Privacy Policy',
        'privacy.version': 'Version 3.8.b — August 12, 2026',
        'privacy.commitment.title': 'Privacy Commitment',
        'privacy.commitment.desc': 'I, Hajir, am fully committed to protecting your privacy with complete transparency. Your personal data is never sold, rented, or shared with third parties for marketing. Every feature here is built with your privacy and peace of mind in mind.',
        'privacy.data.title': '1. Data We Collect',
        'privacy.data.desc': 'We only collect essential data required for basic functionality:',
        'privacy.data.item1': 'Information you share voluntarily, like your name and message through the contact form.',
        'privacy.data.item2': 'Anonymous technical data via Google Analytics (such as browser type, general location, and device type) which cannot personally identify you.',
        'privacy.data.item3': 'Your site preferences, such as language and theme settings, stored directly inside your browser (localStorage) rather than on our servers.',
        'privacy.data.item4': 'Digital tools like HajirSync, Raia Delta, Scrub, Vault, Minify, and RAIA run entirely in your browser without sending personal data to external servers.',
        'privacy.cookies.title': '2. Cookies & External Services',
        'privacy.cookies.desc': 'We use:',
        'privacy.cookies.item1': 'Functional cookies to remember your preferences (like language and theme) for a smooth browsing experience.',
        'privacy.cookies.item2': 'Google Analytics with IP anonymization to view general visitor trends.',
        'privacy.cookies.item3': 'Formspree for contact submissions, which automatically purges message data within 30 days.',
        'privacy.cookies.item4': 'External links to platforms like YouTube, Instagram, SoundCloud, and GitHub, operating under their respective privacy policies.',
        'privacy.security.title': '3. Data Security',
        'privacy.security.item1': 'All connections are protected and encrypted using HTTPS/TLS.',
        'privacy.security.item2': 'Active Content Security Policy (CSP) measures to protect against security risks.',
        'privacy.security.item3': 'Regular security validation checks for input fields.',
        'privacy.security.item4': 'All tools execute locally on your browser, keeping your data safely on your own device.',
        'privacy.rights.title': '4. Your Rights',
        'privacy.rights.desc': 'As a user, you always have the right to:',
        'privacy.rights.item1': 'Request access to any personal data saved with us.',
        'privacy.rights.item2': 'Request corrections to any inaccurate data.',
        'privacy.rights.item3': 'Request complete deletion of your personal information.',
        'privacy.rights.contact': 'To submit a request, simply reach out to us using the contact form on the main page.',
        'privacy.changes.title': '5. Policy Updates',
        'privacy.changes.desc': 'This policy may be updated to reflect new features or legal requirements. The updated revision date will always be visible at the top of this page.',
        'privacy.contact.title': '6. Contact',
        'privacy.contact.desc': 'Have questions about this Privacy Policy? Send us a message via the contact form on the main page.',
        'privacy.summary': 'In short: We only collect essential data, never sell your information, and run all tools directly on your device. Your privacy is safe with us!',

        'terms.title': 'Terms & Conditions',
        'terms.version': 'Version 3.8.b — August 12, 2026',
        'terms.intro': 'By accessing and using this website, you agree to follow and be bound by these simple terms:',
        'terms.ip.title': '1. Copyright & Intellectual Property',
        'terms.ip.desc1': 'All creative content on this site, including:',
        'terms.ip.item1': '13 original music tracks (5 from Fragmen Suara, 7 from Resonansi Dalam Diam, and 1 single Saya Akan Lawan),',
        'terms.ip.item2': 'Written copy, visual artwork, and site interface,',
        'terms.ip.item3': 'As well as digital tools (HajirSync, Raia Delta, Scrub, Vault, Minify, and RAIA),',
        'terms.ip.desc2': 'are the property of Haiere and protected under copyright law.',
        'terms.ip.usage1': 'Free to use for personal, non-commercial purposes.',
        'terms.ip.usage2': 'Commercial use requires prior written permission and licensing from Muhaajir.',
        'terms.ip.usage3': 'Covers and remixes are allowed as long as proper credit is given: © Muhaajir.',
        'terms.prohibited.title': '2. Prohibited Uses',
        'terms.prohibited.item1': 'You may not redistribute, sell, or claim ownership of any content without permission.',
        'terms.prohibited.item2': 'Automated data scraping or attempts to compromise site security are strictly forbidden.',
        'terms.prohibited.item3': 'You may not use the digital tools for unlawful activities or to harm others.',
        'terms.disclaimer.title': '3. Limitation of Liability',
        'terms.disclaimer.desc1': 'This site and its features are provided "as-is". Haiere is not responsible for:',
        'terms.disclaimer.item1': 'Interrupted or corrupted file downloads.',
        'terms.disclaimer.item2': 'Technical glitches while using tools, including potential data loss on your device.',
        'terms.disclaimer.item3': 'Content or privacy policies of linked external websites.',
        'terms.law.title': '4. Governing Law',
        'terms.law.desc': 'Any disputes connected to this site will be handled according to the laws of the Republic of Indonesia, under the jurisdiction of Bogor, West Java.',
        'terms.changes.title': '5. Changes to Terms',
        'terms.changes.desc': 'These terms may be updated from time to time. The latest version along with its updated date will always be published here.',
        'terms.contact.title': '6. Contact',
        'terms.contact.desc': 'Questions about our Terms & Conditions? Reach out to us via the contact form on the main page.',
        'terms.summary': 'In short: All content belongs to Haiere. Free for personal use, but commercial use requires permission. The site is provided as-is.',

        'sitemap.title': 'Sitemap',
        'sitemap.version': 'Complete Navigation — Version 3.8.b',
        'sitemap.main.title': 'Main Pages',
        'sitemap.home': 'Home',
        'sitemap.home.desc': 'Profile, bio, and music player',
        'sitemap.showcase': 'Showcase',
        'sitemap.showcase.desc': 'Music portfolio',
        'sitemap.tools': 'Tools',
        'sitemap.tools.desc': 'HajirSync • Raia Delta • Scrub • Vault • Minify',
        'sitemap.raia': 'RAIA',
        'sitemap.raia.desc': 'AI Chatbot · 9+ AI Providers',
        'sitemap.ecosystem.title': '🌐 Haiere Ecosystem',
        'sitemap.nav.title': 'Main Navigation',
        'sitemap.nav.home': 'Home',
        'sitemap.nav.legal': 'Legal',
        'sitemap.nav.tools': 'Tools',
        'sitemap.nav.raia': 'RAIA',
        'sitemap.content.title': 'Content & Tools Directory',
        'sitemap.content.audio': 'Audio Collection: 13 original tracks — 5 from Fragmen Suara, 7 from Resonansi Dalam Diam, and 1 single Saya Akan Lawan.',
        'sitemap.content.tools': 'Digital Tools: HajirSync · Raia Delta · Raia Scrub · Raia Vault · RaiaMinify • RAIA AI Chatbot.',
        'sitemap.social.title': 'Social Media & Contact',
        'sitemap.social.note': 'Official inquiries can be submitted through the Formspree contact form on the main page.',

        'changelog.title': '📋 Version History — v3.8.b (August 12, 2026)',
        'changelog.item1': '✓ Added a clear and transparent Cookie Policy section (#cookies).',
        'changelog.item2': '✓ Refreshed header and footer layout for a cleaner, faster navigation experience.',
        'changelog.item3': '✓ Updated system version release to 3.8.b.',
        'changelog.item4': '✓ Optimized site performance and overall user experience (Lighthouse score > 95).',
        'changelog.item5': '✓ Simplified legal wording into plain, friendly language.',
        'changelog.item6': '✓ Brand refreshed from Muhaajir to Haiere with the new H logo identity.',
        'changelog.item7': '✓ Introduced Project Ecosystem directory within the Sitemap.',
        'changelog.item8': '✓ Codebase modularized: Moved away from single-file index.html into separated index.html, style.css, and script.js for better development ergonomics.',

        'cookies.title': 'Cookie Policy',
        'cookies.version': 'Version 3.8.b — August 12, 2026',
        'cookies.intro': 'We use cookies and similar technologies to give you a smoother experience on our site. This policy explains what cookies we use and how you can manage them.',
        'cookies.what.title': '1. What Are Cookies?',
        'cookies.what.desc': 'Cookies are tiny text files stored on your device when you visit a website. They help the site remember your choices so everything stays convenient when you come back.',
        'cookies.weuse.title': '2. Cookies We Use',
        'cookies.table.name': 'Cookie Name',
        'cookies.table.type': 'Type',
        'cookies.table.purpose': 'Purpose',
        'cookies.table.duration': 'Duration',
        'cookies.type.functional': 'Functional',
        'cookies.type.preference': 'Preference',
        'cookies.type.analytics': 'Analytics',
        'cookies.row.raia': 'Stores RAIA settings including provider, AI model, and parameter choices',
        'cookies.row.lang': 'Saves your preferred language selection (ID/EN)',
        'cookies.row.theme': 'Saves your visual theme choice (Dark/Light)',
        'cookies.row.consent': 'Saves your cookie banner consent selection',
        'cookies.row.ga': 'Anonymously distinguishes unique site visitors',
        'cookies.row.ga2': 'Stores session state and aggregate site usage metrics',
        'cookies.row.permanent': 'Persistent (until manually cleared)',
        'cookies.row.ga_duration': '2 years',
        'cookies.note': 'Functional and preference cookies are strictly used for your convenience. Analytics data is completely anonymized and never used for personal tracking.',
        'cookies.third.title': '3. Third-Party Services',
        'cookies.third.desc': 'We partner with trusted third-party services that may place cookies on your device:',
        'cookies.third.ga': 'Google Analytics: Analyzes overall traffic using anonymized data.',
        'cookies.third.formspree': 'Formspree: Processes contact form submissions without tracking cookies.',
        'cookies.third.external': 'YouTube, Instagram, SoundCloud, and GitHub: Operates as external links adhering to their respective privacy guidelines.',
        'cookies.control.title': '4. Managing Your Cookies',
        'cookies.control.desc': 'You have full control over cookie settings in several ways:',
        'cookies.control.browser': 'Browser Settings: Most browsers let you block or delete cookies in their privacy settings.',
        'cookies.control.banner': 'Consent Banner: Choose whether to accept or decline optional cookies on your first visit.',
        'cookies.control.ga': 'Google Analytics Opt-out: You can install Google’s browser extension to disable analytics tracking across sites.',
        'cookies.changes.title': '5. Policy Updates',
        'cookies.changes.desc': 'This policy may be updated occasionally. The current version and revision date will always be displayed here.',
        'cookies.contact.title': '6. Contact',
        'cookies.contact.desc': 'Questions about our Cookie Policy? Contact us via the form on the main page.',
        'cookies.summary': 'In short: We use cookies to remember your display preferences and collect anonymous stats. You can manage or delete them whenever you like!',
        'cookies.updated': 'Last updated: August 12, 2026',

        'footer.home': 'Home',
        'footer.about': 'About',
        'footer.music': 'Music',
        'footer.tools': 'Tools',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms & Conditions',
        'footer.sitemap': 'Sitemap',
        'footer.cookies': 'Cookie',
        'footer.contact': 'Contact',
        'footer.rights': 'Haiere Official. All Rights Reserved.',
        'footer.disclaimer': 'Disclaimer: Tool usage is entirely at your discretion. Haiere assumes no responsibility for potential data loss.',
        'footer.updated': 'Last updated: August 12, 2026',
        'footer.version': 'v3.8.b'
    }
};


            let currentLang = 'id';

            function applyLang(lang) {
                currentLang = lang;
                const t = translations[lang] || translations.id;
                langToggle.textContent = lang === 'id' ? 'EN' : 'ID';
                try { localStorage.setItem('legalLang', lang); } catch (_) {}

                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    const value = t[key];
                    if (value !== undefined) {
                        if (el.querySelector('a') && value.includes('<')) {
                            el.innerHTML = value;
                        } else {
                            el.textContent = value;
                        }
                    }
                });

                document.querySelectorAll('.cookie-table td, .cookie-table th, .badge-cookie').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (key && t[key] !== undefined) {
                        el.textContent = t[key];
                    }
                });

                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) {
                    metaDesc.setAttribute('content', lang === 'id' ?
                        'Kebijakan Privasi, Syarat & Ketentuan, Sitemap, dan Kebijakan Cookie Haiere Official – Musik & Tools Digital. Versi 3.8.b' :
                        'Privacy Policy, Terms & Conditions, Sitemap, and Cookie Policy of Haiere Official – Music & Digital Tools. Version 3.8.b'
                    );
                }
                const ogDesc = document.querySelector('meta[property="og:description"]');
                if (ogDesc) {
                    ogDesc.setAttribute('content', lang === 'id' ?
                        'Dokumen resmi Haiere Official – Kebijakan Privasi, Syarat & Ketentuan, Sitemap, Kebijakan Cookie.' :
                        'Official documents of Haiere Official – Privacy Policy, Terms & Conditions, Sitemap, Cookie Policy.'
                    );
                }
                document.documentElement.lang = lang;
            }

            (function() {
                let saved;
                try { saved = localStorage.getItem('legalLang'); } catch (_) {}
                const browserLang = navigator.language && navigator.language.startsWith('id') ? 'id' : 'en';
                applyLang(saved || browserLang || 'id');
            })();

            langToggle.addEventListener('click', function() {
                applyLang(currentLang === 'id' ? 'en' : 'id');
            });

            // ---- PRINT ----
            printBtn.addEventListener('click', function() {
                window.print();
            });

            // ---- BACK TO TOP & PROGRESS ----
            function onScroll() {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const height = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = height > 0 ? (scrollTop / height) * 100 : 0;
                if (progressBar) {
                    progressBar.style.transform = 'scaleX(' + (scrolled / 100) + ')';
                    progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
                }
                if (backBtn) {
                    backBtn.classList.toggle('show', scrollTop > 300);
                }
                if (header) {
                    header.classList.toggle('scrolled', scrollTop > 20);
                }
            }

            let ticking = false;
            window.addEventListener('scroll', function() {
                if (!ticking) {
                    requestAnimationFrame(function() {
                        onScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            onScroll();

            backBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // ---- YEAR ----
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }

            // ---- HAMBURGER ----
            function toggleMobileMenu(open) {
                const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('open');
                mobileMenu.classList.toggle('open', isOpen);
                hamburgerBtn.classList.toggle('active', isOpen);
                hamburgerBtn.setAttribute('aria-expanded', isOpen);
                document.body.style.overflow = isOpen ? 'hidden' : '';
            }

            hamburgerBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleMobileMenu();
            });

            mobileMenu.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    toggleMobileMenu(false);
                });
            });

            document.addEventListener('click', function(e) {
                if (mobileMenu.classList.contains('open') &&
                    !mobileMenu.contains(e.target) &&
                    !hamburgerBtn.contains(e.target)) {
                    toggleMobileMenu(false);
                }
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                    toggleMobileMenu(false);
                    hamburgerBtn.focus();
                }
            });

            // ---- TABLIST ----
            function activateTab(tabId) {
                tabButtons.forEach(function(btn) {
                    btn.setAttribute('aria-selected', 'false');
                    btn.setAttribute('tabindex', '-1');
                });
                tabPanels.forEach(function(panel) {
                    panel.setAttribute('aria-hidden', 'true');
                    panel.style.display = 'none';
                });

                const selectedTab = document.querySelector('.tab-btn[data-target="' + tabId + '"]');
                if (selectedTab) {
                    selectedTab.setAttribute('aria-selected', 'true');
                    selectedTab.setAttribute('tabindex', '0');
                    selectedTab.focus();
                }

                const selectedPanel = document.getElementById(tabId);
                if (selectedPanel) {
                    selectedPanel.setAttribute('aria-hidden', 'false');
                    selectedPanel.style.display = 'block';
                }

                document.querySelectorAll('.mobile-menu a').forEach(function(a) {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + tabId.replace('-panel', ''));
                });

                updateTOC(tabId);
            }

            function updateTOC(panelId) {
                const panel = document.getElementById(panelId);
                if (!panel) return;
                const tocLinks = panel.querySelectorAll('.toc-list a');
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                tocLinks.forEach(function(link) {
                    const href = link.getAttribute('href');
                    if (!href || !href.startsWith('#')) return;
                    const targetId = href.substring(1);
                    const target = document.getElementById(targetId);
                    if (!target) return;
                    const rect = target.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > 0;
                    if (isVisible) {
                        link.setAttribute('aria-current', 'location');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                });
            }

            tabButtons.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    const target = this.getAttribute('data-target');
                    if (target) {
                        activateTab(target);
                        history.pushState(null, null, '#' + target.replace('-panel', ''));
                        toggleMobileMenu(false);
                    }
                });

                btn.addEventListener('keydown', function(e) {
                    const buttons = Array.from(tabButtons);
                    const currentIndex = buttons.indexOf(this);
                    let newIndex = currentIndex;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        newIndex = (currentIndex + 1) % buttons.length;
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                    } else if (e.key === 'Home') {
                        e.preventDefault();
                        newIndex = 0;
                    } else if (e.key === 'End') {
                        e.preventDefault();
                        newIndex = buttons.length - 1;
                    }
                    if (newIndex !== currentIndex) {
                        const target = buttons[newIndex].getAttribute('data-target');
                        if (target) {
                            activateTab(target);
                            history.pushState(null, null, '#' + target.replace('-panel', ''));
                        }
                    }
                });
            });

            (function() {
                let hash = window.location.hash;
                if (!hash || hash === '#') {
                    hash = '#privacy';
                }
                const panelId = hash.replace('#', '') + '-panel';
                const tabExists = document.querySelector('.tab-btn[data-target="' + panelId + '"]');
                activateTab(tabExists ? panelId : 'privacy-panel');
            })();

            window.addEventListener('hashchange', function() {
                const hash = window.location.hash || '#privacy';
                const panelId = hash.replace('#', '') + '-panel';
                const tabExists = document.querySelector('.tab-btn[data-target="' + panelId + '"]');
                if (tabExists) {
                    activateTab(panelId);
                }
            });

            // ---- TOC SMOOTH SCROLL ----
            document.querySelectorAll('.toc-list a').forEach(function(link) {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        const targetId = href.substring(1);
                        const target = document.getElementById(targetId);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            setTimeout(function() {
                                const panel = target.closest('.tabpanel');
                                if (panel) {
                                    const panelId = panel.id;
                                    updateTOC(panelId);
                                }
                            }, 400);
                        }
                    }
                });
            });

            // ---- TOC SCROLL OBSERVER ----
            let tocTimeout;
            window.addEventListener('scroll', function() {
                if (tocTimeout) cancelAnimationFrame(tocTimeout);
                tocTimeout = requestAnimationFrame(function() {
                    tabPanels.forEach(function(panel) {
                        if (panel.getAttribute('aria-hidden') === 'false') {
                            updateTOC(panel.id);
                        }
                    });
                });
            });

            // ---- COPY TO CLIPBOARD ----
            document.querySelectorAll('.copy-btn').forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const container = this.closest('.copy-container');
                    if (!container) return;
                    const textEl = container.querySelector('.copy-text');
                    if (!textEl) return;
                    let text = textEl.textContent.trim();
                    if (!text) return;

                    // Gunakan Clipboard API jika tersedia
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(text).then(function() {
                            showCopiedFeedback(btn);
                        }).catch(function() {
                            fallbackCopy(text, btn);
                        });
                    } else {
                        fallbackCopy(text, btn);
                    }
                });
            });

            function fallbackCopy(text, btn) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    showCopiedFeedback(btn);
                } catch (err) {
                    // silent fail
                }
                document.body.removeChild(textarea);
            }

            function showCopiedFeedback(btn) {
                btn.classList.add('copied');
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-check';
                }
                setTimeout(function() {
                    btn.classList.remove('copied');
                    if (icon) {
                        icon.className = 'fas fa-copy';
                    }
                }, 2000);
            }

            // ---- CONSOLE ----
            console.log('✅ Legal & Sitemap v3.8.b (Haiere) — Glass UI · I18N · A11y · TOC · Copy');
        })();