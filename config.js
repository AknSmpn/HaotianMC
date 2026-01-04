/* ================================================================
   HaotianMC THEME - CONFIGURATION (FULL CONTENT VERSION)
   ================================================================ */

const config = {
    // 1. INFO SERVIDOR
    serverName: "HaotianMC",
    serverIp: "basic-6.alstore.space:25575",
    serverLogo: "Logo.png", // Asegúrate de que existe
    // El favicon se carga automáticamente si se llama "favicon.png"

    // 2. REDES SOCIALES
    social: {
        discord: "https://discord.gg/J38KakVxhY",
        store: "https://.com",
        twitter: "https://.com",
        instagram: "https://.com",
        tiktok: "https://.com",
        youtube: "https://.com"
    },

    // 3. ENLACES DE VOTACIÓN (6 Sitios)
    voteLinks: [
        { name: "NameMC", url: "https://namemc.com" },
        { name: "MinecraftMP", url: "https://minecraft-mp.com" },
        { name: "PlanetMinecraft", url: "https://planetminecraft.com" },
        { name: "TopG", url: "https://topg.org/minecraft-servers/" },
        { name: "MinecraftServers", url: "https://minecraftservers.org/" },
        { name: "BestServers", url: "https://bestservers.com/" }
    ],

    // 4. CONTENIDO (Español _es / Inglés _en UNIFICADOS)
    content: {
        // --- STAFF ---
        staff: [
            { 
                name: "Avif_Ikhsan", role: "OWNER", 
                bio_es: "Pendiri proyek, bertanggung jawab atas pengembangan teknis dan sistem.",
                bio_en: "Project founder, in charge of technical development and systems."
            },
            { 
                name: "Dedy_Mst", role: "OWNER", 
                bio_es: "Pendiri proyek, bertanggung jawab atas pengembangan teknis dan sistem.",
                bio_en: "Project founder, in charge of technical development and systems."
            },
            { 
                name: "AbiiGanzz", role: "ADMIN", 
                bio_es: "Community manager yang mengurus event dan penyelesaian konflik",
                bio_en: "Community manager, events coordinator and conflict resolution."
            },
            { 
                name: "K43dee", role: "DEVELOPER", 
                bio_es: "Mengembangkan plugin dan mengoptimalkan server",
                bio_en: "Plugin developer and server optimization specialist."
            },
            
            { 
                name: "ItsMeKaramm", role: "MODERATOR", 
                bio_es: "Menangani laporan, pengawasan, serta support user",
                bio_en: "In charge of reports, surveillance, and user support."
            }
        ],

        // --- REGLAS (8 Reglas Comunes) ---
        rules: [
            { 
                title_es: "1. Saling Menghargai", desc_es: "Jaga bahasa tetap sopan. Tidak diperbolehkan menghina, rasis, seksis, atau bersikap toxic kepada pemain maupun staf.",
                title_en: "1. Mutual Respect", desc_en: "Keep language appropriate. Insults, racism, sexism, or toxicity towards players or staff are not tolerated."
            },
            { 
                title_es: "2. Dilarang menggunakan Hack/Cheat", desc_es: "Menggunakan klien yang dimodifikasi (KillAura, Xray, Fly, dan sejenisnya) akan mengakibatkan pemblokiran permanen dan tidak dapat diajukan banding.",
                title_en: "2. No Hacks/Cheats", desc_en: "Using modified clients (KillAura, Xray, Fly, etc.) will result in a permanent and unappealable ban."
            },
            { 
                title_es: "3. Dilarang Spam/Flood", desc_es: "Mengirim pesan berulang, penggunaan huruf kapital berlebihan, atau mempromosikan server lain (IP atau tautan) dilarang.",
                title_en: "3. No Spam/Flood", desc_en: "Sending repetitive messages, excessive caps, or promoting other servers (IPs or links) is forbidden."
            },
            { 
                title_es: "4. Keamanan Akun", desc_es: "Kamu bertanggung jawab atas akunmu. Jangan membagikan kata sandimu. Staf tidak akan pernah meminta kata sandimu.",
                title_en: "4. Account Security", desc_en: "You are responsible for your account. Do not share your password. Staff will never ask for your password."
            },
            { 
                title_es: "5. Penyalahgunaan Bug", desc_es: "Menyalahgunakan bug atau kesalahan pada game maupun server untuk keuntungan pribadi dilarang. Segera laporkan jika menemukannya.",
                title_en: "5. Bug Abuse", desc_en: "Exploiting game or server errors for personal gain is prohibited. Report them immediately."
            },
            { 
                title_es: "6. Perusakan (Griefing)", desc_es: "Merusak bangunan milik orang lain atau mencuri di area yang dilindungi tidak diperbolehkan. Hormati hasil karya orang lain.",
                title_en: "6. Griefing", desc_en: "Destroying others' builds or stealing in protected areas is not allowed. Respect the work of others."
            },
            { 
                title_es: "7. Nama & Skin", desc_es: "Nama pengguna dan skin tidak boleh mengandung konten yang menyinggung, berbau seksual, atau bermuatan politik.",
                title_en: "7. Names & Skins", desc_en: "Usernames and skins must not contain offensive, sexual, or political content."
            },
            { 
                title_es: "8. Kebijakan Staff", desc_es: "Keputusan administrator bersifat final. Memperdebatkan sanksi secara publik dapat mengakibatkan hukuman tambahan.",
                title_en: "8. Staff Discretion", desc_en: "Administrator decisions are final. Publicly arguing about sanctions may lead to further punishment."
            }
        ],

        // --- PREGUNTAS FRECUENTES (8 FAQs) ---
        faq: [
            { 
                q_es: "Apa IP servernya?", 
                a_es: "IP untuk terhubung adalah <b>play.HaotianMC.net</b>. Server ini mendukung Minecraft Java Edition versi 1.16 hingga 1.21.",
                q_en: "What is the Server IP?", 
                a_en: "The connection IP is <b>play.HaotianMC.net</b>. The server supports Minecraft Java Edition versions 1.16 through 1.21."
            },
            { 
                q_es: "Apakah Premium atau Non-Premium?", 
                a_es: "Kami adalah server <b>Semi-Premium</b>. Artinya, kamu bisa masuk menggunakan akun resmi Mojang/Microsoft maupun launcher tidak resmi.",
                q_en: "Is it Premium or Cracked?", 
                a_en: "We are a <b>Semi-Premium</b> server. This means you can join with both official Mojang/Microsoft accounts and unofficial launchers."
            },
            { 
                q_es: "Di mana saya bisa membeli rank?", 
                a_es: "Kamu bisa mengunjungi toko resmi kami dengan mengklik tombol keranjang di atas atau langsung ke <b>tienda.HaotianMC.net</b>. Kami menerima PayPal dan kartu.",
                q_en: "Where can I buy ranks?", 
                a_en: "You can visit our official store by clicking the cart button above or visiting <b>store.HaotianMC.net</b>. We accept PayPal and cards."
            },
            { 
                q_es: "Bagaimana cara mendaftar menjadi Staff?", 
                a_es: "Pendaftaran Staff dibuka setiap bulan melalui Discord kami. Kamu harus berusia minimal 16 tahun, memiliki mikrofon, dan memahami peraturan.",
                q_en: "How do I apply for Staff?", 
                a_en: "Applications open monthly on our Discord. You must be over 16, have a microphone, and know the rules."
            },
            { 
                q_es: "Apakah TPA diperbolehkan?", 
                a_es: "Ya, di mode Survival kamu bisa menggunakan <code>/tpa [pemain]</code> untuk mengirim permintaan teleport ke temanmu.",
                q_en: "Is TPA allowed?", 
                a_en: "Yes, in Survival mode you can use <code>/tpa [player]</code> to send a teleport request to your friends."
            },
            { 
                q_es: "Bagaimana cara melindungi rumah saya?", 
                a_es: "Kami menggunakan sistem proteksi area menggunakan blok (Pala Emas). Cukup klik dua sudut berlawanan dari tanahmu untuk mengklaim area tersebut.",
                q_en: "How do I protect my house?", 
                a_en: "We use the block protection system (Golden Shovel). Simply click on two opposite corners of your land to claim it."
            },
            { 
                q_es: "Apakah ada chat suara?", 
                a_es: "Ya, kami mendukung mod <b>Simple Voice Chat</b>. Mod ini tidak wajib, tetapi dapat meningkatkan pengalaman bermain di server.",
                q_en: "Do you have Voice Chat?", 
                a_en: "Yes, we support the <b>Simple Voice Chat</b> mod. It is not mandatory to play, but it enhances the server experience."
            },
            { 
                q_es: "Apa yang harus saya lakukan jika melihat hacker?", 
                a_es: "Rekam bukti dalam bentuk video lalu buka tiket di Discord kami. <b>Jangan</b> menuduh pemain tersebut di chat publik agar mereka tidak kabur.",
                q_en: "What if I see a hacker?", 
                a_en: "Record video proof and open a ticket on our Discord. <b>Do not</b> accuse the player in public chat to prevent them from logging off."
            }

        ],

        // --- TEXTOS LEGALES COMPLETOS (HTML) ---
        legal: {
            // TÉRMINOS DEL SERVICIO
            tos_es: `
                <h3>Ruang Lingkup Layanan</h3>
                <p>Server, layanan web, dan infrastruktur launcher disediakan oleh HaotianMC Networks S.L. Akses ke layanan ini merupakan sebuah hak istimewa, bukan hak mutlak.</p>
                <br>
                <h3>Tanggung Jawab Akun</h3>
                <p>Keamanan akun sepenuhnya menjadi tanggung jawab pemain. HaotianMC tidak bertanggung jawab atas kerugian yang disebabkan oleh pencurian akun, berbagi kata sandi, atau kelalaian keamanan oleh pengguna.</p>
                <br>
                <h3>Pembayaran dan Pengembalian Dana</h3>
                <p>Pembelian yang dilakukan di toko server dianggap sebagai produk digital tidak berwujud. Sesuai dengan peraturan produk digital, setelah layanan atau rank diberikan, <b>tidak ada pengembalian atau refund</b> dalam keadaan apa pun. Setiap upaya chargeback akan mengakibatkan akun diblokir secara permanen.</p>
                <br>
                <h3>Sanksi</h3>
                <p>Pelanggaran terhadap peraturan server dapat mengakibatkan peringatan, mute, kick sementara, atau banned permanen. Tim administrasi berhak membatasi akses pengguna mana pun yang dianggap merugikan komunitas.</p>
            `,
            tos_en: `
               <h3>Ruang Lingkup Layanan</h3>
                <p>Server, layanan web, dan infrastruktur launcher disediakan oleh HaotianMC Networks S.L. Akses ke layanan ini merupakan sebuah hak istimewa, bukan hak mutlak.</p>
                <br>
                <h3>Tanggung Jawab Akun</h3>
                <p>Keamanan akun sepenuhnya menjadi tanggung jawab pemain. HaotianMC tidak bertanggung jawab atas kerugian yang disebabkan oleh pencurian akun, berbagi kata sandi, atau kelalaian keamanan dari pengguna.</p>
                <br>
                <h3>Pembayaran dan Pengembalian Dana</h3>
                <p>Pembelian yang dilakukan di toko server dianggap sebagai produk digital tidak berwujud. Sesuai dengan ketentuan produk digital, setelah layanan atau rank diberikan, <b>tidak ada pengembalian atau refund</b> dalam kondisi apa pun. Setiap upaya chargeback akan mengakibatkan pemblokiran akun secara permanen.</p>
                <br>
                <h3>Sanksi</h3>
                <p>Pelanggaran terhadap peraturan server dapat mengakibatkan peringatan, mute, kick sementara, atau ban permanen. Tim administrasi berhak membatasi akses pengguna mana pun yang dianggap merugikan komunitas.</p>
            `,

            // AVISO LEGAL
            notice_es: `
                <h3>Información Perusahaan</h3>
                <ul>
                    <li><b>Nama Legal:</b> HaotianMC Networks S.L.</li>
                    <li><b>Alamat:</b> Calle Falsa 123, Madrid, Spanyol (Kantor operasional di Istanbul, Turki)</li>
                    <li><b>Nomor Pajak:</b> ES-B12345678</li>
                    <li><b>Kontak Legal:</b> HaotianMC.net</li>
                </ul>
                <br>
                <h3>Lisensi dan Hak Cipta</h3>
                <p>HaotianMC tidak berafiliasi, bermitra, atau didukung oleh Mojang Studios, Microsoft, maupun anak perusahaannya. Minecraft adalah merek dagang terdaftar milik Mojang Studios.</p>
                <p>Semua aset permainan, tekstur, dan model dasar tunduk pada EULA Minecraft. Konten asli dari website dan server dilindungi oleh hak cipta HaotianMC Networks S.L.</p>
            `,
            notice_en: `
                <h3>Company Information</h3>
                <ul>
                    <li><b>Legal Name:</b> HaotianMC Networks S.L.</li>
                    <li><b>Address:</b> Fake Street 123, Madrid, Spain (Operational HQ in Istanbul, Turkey)</li>
                    <li><b>Tax ID:</b> ES-B12345678</li>
                    <li><b>Legal Contact:</b> HaotianMC.net</li>
                </ul>
                <br>
                <h3>License and Copyright</h3>
                <p>HaotianMC is not affiliated, associated, or endorsed by Mojang Studios, Microsoft, or any of their affiliates. Minecraft is a registered trademark of Mojang Studios.</p>
                <p>All game assets, textures, and base models are subject to the Minecraft EULA. Original web and server content is copyright of HaotianMC Networks S.L.</p>
            `,

            // POLÍTICA DE PRIVACIDAD
            priv_es: `
                <h3>Data yang Dikumpulkan</h3>
                <p>Untuk operasional layanan, kami secara otomatis mengumpulkan informasi berikut:</p>
                <ul>
                    <li>Alamat IP (untuk keamanan dan moderasi).</li>
                    <li>UUID Minecraft dan nama pengguna.</li>
                    <li>Catatan chat dan perintah (logs).</li>
                    <li>Riwayat transaksi di toko.</li>
                </ul>
                <br>
                <h3>Masa Penyimpanan</h3>
                <p>Data disimpan secara terenkripsi di server kami yang berlokasi di Uni Eropa selama akun pemain tetap aktif atau jika diperlukan untuk alasan hukum dan keamanan.</p>
                <br>
                <h3>Hak Anda</h3>
                <p>Anda berhak untuk mengakses, memperbaiki, menghapus (hak untuk dilupakan), dan memindahkan data pribadi Anda. Untuk menggunakan hak-hak ini, silakan hubungi petugas perlindungan data kami di <b>privacy@HaotianMC.net</b>.</p>
            `,
            priv_en: `
                <h3>Collected Data</h3>
                <p>To operate the service, we automatically collect the following information:</p>
                <ul>
                    <li>IP Address (for security and moderation).</li>
                    <li>Minecraft UUID and username.</li>
                    <li>Chat logs and command history.</li>
                    <li>Store transaction history.</li>
                </ul>
                <br>
                <h3>Retention Period</h3>
                <p>Data is stored encrypted on our servers located in the European Union while the player account remains active or as required for legal and security reasons.</p>
                <br>
                <h3>Your Rights</h3>
                <p>You have the right to access, correct, delete (right to be forgotten), and port your personal data. To exercise these rights, please contact our data protection officer at <b>privacy@HaotianMC.net</b>.</p>
            `
        }
    },

    // 5. INTERFAZ (Botones, Títulos)
    interface: {
        es: {
            flag: "id", name: "Indonesian",
            nav: { home: "Home", staff: "Staff", rules: "Peraturan", faq: "FAQ", vote: "Vote" },
            hero: { subtitle: "SERVER JAVA DAN BEDROCK", btn_copy: "COPY IP", online: "en línea" },
            titles: { staff: "STAFF", rules: "PERATURAN SERVER", faq: "PERTANYAAN YANG SERING DIAJUKAN (FAQ)", vote: "VOTE UNTUK SERVER", legal: "LEGAL CENTER" },
            legal_tabs: { tos: "Ketentuan", priv: "Privasi", notice: "Pemberitahuan Hukum" }
        },
        en: {
            flag: "us", name: "English",
            nav: { home: "Home", staff: "Staff", rules: "Rules", faq: "FAQ", vote: "Vote" },
            hero: { subtitle: "JAVA AND BEDROCK SERVER", btn_copy: "COPY IP", online: "online" },
            titles: { staff: "STAFF", rules: "SERVER RULES", faq: "FREQUENTLY ASKED QUESTIONS", vote: "VOTE FOR US", legal: "LEGAL CENTER" },
            legal_tabs: { tos: "Terms", priv: "Privacy", notice: "Legal Notice" }
        }
    }
};