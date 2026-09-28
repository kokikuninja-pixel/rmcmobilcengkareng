import type { Article } from '../articles';

export const artikelSelfDriveVsSupir: Article = {
  slug: 'self-drive-atau-sewa-supir',
  title: 'Self Drive atau Sewa dengan Supir: Mana yang Cocok?',
  description:
    'Perbandingan sewa mobil self drive dan sewa dengan supir di Jakarta. Mana yang lebih hemat, lebih nyaman, dan lebih praktis untuk perjalanan Anda?',
  category: 'Tips',
  publishedAt: '2026-02-12',
  updatedAt: '2026-03-01',
  readMinutes: 5,
  author: 'Tim RMC Cengkareng',
  body: [
    {
      type: 'p',
      text: 'Pertanyaan ini hampir selalu muncul. Jawabannya bergantung pada siapa yang menyetir, seberapa jauh Anda pergi, dan seberapa sibuk agenda Anda.',
    },
    { type: 'h2', text: 'Self drive lebih cocok kalau' },
    {
      type: 'ul',
      items: [
        'Anda sudah memegang SIM A dan terbiasa mengendari sendiri di Jabodetabek.',
        'Perjalanan Anda pendek dan hanya butuh satu atau dua tujuan.',
        'Ingin menekan biaya, terutama untuk perjalanan yang sering dilakukan.',
        'Butuh mobil di jam tertentu dan tidak ingin menunggu supir.',
      ],
    },
    { type: 'h2', text: 'Sewa dengan supir lebih cocok kalau' },
    {
      type: 'ul',
      items: [
        'Anda belum memegang SIM A, atau kurang terbiasa mengendari di Jabodetabek.',
        'Perjalanan panjang dan Anda ingin tiba dalam kondisi segar.',
        'Ada agenda rapat di tengah perjalanan sehingga Anda perlu fokus.',
        'Membawa orang tua, anak kecil, atau orang yang mudah lelah.',
      ],
    },
    { type: 'h2', text: 'Pertimbangkan waktunya' },
    {
      type: 'p',
      text: 'Self drive jadi pilihan kuat kalau Anda punya waktu luang, karena mobil sepenuhnya milik Anda sampai jam kembali. Dengan supir, Anda bisa bekerja atau berbincang di dalam sambil menunggu. Untuk hari kerja yang padat, opsi supir sering kali ternyata lebih hemat tenaga meskipun tarifnya lebih tinggi.',
    },
    { type: 'h2', text: 'Biaya bahan bakar' },
    {
      type: 'p',
      text: 'Apapun mode yang Anda pilih, bahan bakar tetap ditanggung penyewa. MPV kecil seperti Calya atau Sigra jauh lebih irit untuk perjalanan dalam kota, sedangkan Fortuner cocok untuk perjalanan jauh dengan beban lebih besar.',
    },
    {
      type: 'quote',
      text: 'Kalau ragu, pilih self drive untuk perjalanan pendek dalam kota. Untuk perjalanan jauh, lebih tenang pakai supir.',
    },
  ],
};
