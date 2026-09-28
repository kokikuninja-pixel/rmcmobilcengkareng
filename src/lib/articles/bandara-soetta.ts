import type { Article } from '../articles';

export const artikelBandaraSoetta: Article = {
  slug: 'sewa-mobil-bandara-soekarno-hatta',
  title: 'Sewa Mobil di Bandara Soekarno-Hatta: Panduan Traveler',
  description:
    'Panduan sewa mobil dekat Bandara Soekarno-Hatta: memilih terminal, tips antar-jemput, dokumen untuk turis asing, dan cara menghindari jam sibuk.',
  category: 'Bandara',
  publishedAt: '2026-01-28',
  updatedAt: '2026-02-25',
  readMinutes: 5,
  author: 'Tim RMC Cengkareng',
  body: [
    {
      type: 'p',
      text: 'Bandara Soekarno-Hatta punya tiga terminal yang saling berjauhan. Salah memilih terminal adalah kesalahan paling umum yang membuat perjalanan traveler wasting time.',
    },
    { type: 'h2', text: 'Terminal mana berada di mana' },
    {
      type: 'ul',
      items: [
        'Terminal 1: maskapai domestik dan beberapa penerbangan internasional',
        'Terminal 2: maskapai Garuda dan beberapa maskapai nasional lainnya',
        'Terminal 3: maskapai yang melayani penerbangan internasional maupun domestik',
      ],
    },
    {
      type: 'p',
      text: 'Karena jarak antar terminal cukup jauh, selalu sebutkan terminal tujuan dengan jelas saat memesan. Admin kami bisa mengatur antar-jemput ke terminal yang benar.',
    },
    { type: 'h2', text: 'Kapan sebaiknya mengambil mobil' },
    {
      type: 'p',
      text: 'Mobil biasanya langsung diambil setelah keluar dari area pengambilan bagasi. Kalau ambil sedikit lebih lambat, unit sudah lebih siap dan Anda tidak perlu menunggu lama di area parkir.',
    },
    {
      type: 'ol',
      items: [
        'Ambil setelah selesai mengambil bagasi supaya tidak terburu-buru.',
        'Hindari mengambil mobil saat jam sibuk sore karena jalan keluar bandara macet.',
        'Untuk hari libur, pesan lebih awal karena stok unit menipis.',
      ],
    },
    { type: 'h2', text: 'Kalau Anda turis asing' },
    {
      type: 'p',
      text: 'Penyewa dari luar negeri perlu menyertakan paspor dan izin resmi dari negara asal. Sampaikan ke admin sebelum memesan supaya unit yang paling sesuai bisa disiapkan.',
    },
    { type: 'h2', text: 'Tips biar hemat waktu' },
    {
      type: 'ul',
      items: [
        'Kirim detail penerbangan Anda agar admin tahu kapan Anda mendarat.',
        'Simpan kontak WhatsApp admin selama masa sewa.',
        'Cek kembali jam operasional kami sebelum merencanakan jadwal.',
      ],
    },
  ],
};
