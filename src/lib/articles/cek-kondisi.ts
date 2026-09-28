import type { Article } from '../articles';

export const artikelCekUnit: Article = {
  slug: 'cek-kondisi-mobil-sewa',
  title: 'Cek Kondisi Mobil Sewa Sebelum Jalan',
  description:
    'Checklist lengkap sebelum menerima unit sewa: bagian yang wajib dicek, cara mendokumentasikan, dan apa yang harus dilakukan jika menemukan kerusakan.',
  category: 'Panduan',
  publishedAt: '2026-03-02',
  updatedAt: '2026-03-10',
  readMinutes: 4,
  author: 'Tim RMC Cengkareng',
  body: [
    {
      type: 'p',
      text: 'Menerima unit dalam kondisi baik itu tanggung jawab bersama. Dengan beberapa langkah sederhana, Anda melindungi diri dari masalah yang jauh lebih merepotkan di akhir masa sewa.',
    },
    { type: 'h2', text: 'Periksa bagian luar' },
    {
      type: 'ul',
      items: [
        'Lihat sekeliling bodi dari jarak dekat, cari goresan atau penyok baru.',
        'Perhatikan pelek dan ban, pastikan tidak ada yang bermasalah.',
        'Cek lampu depan, lampu belakang, dan lampu rem.',
        'Pastikan plat nomor lengkap dan tidak ada yang hilang.',
      ],
    },
    { type: 'h2', text: 'Periksa bagian dalam' },
    {
      type: 'ul',
      items: [
        'Pastikan kursi dapat diatur dengan benar dan sabuk pengaman berfungsi.',
        'Cek pendingin atau air conditioner menyala normal.',
        'Perhatikan bau tidak sedap yang perlu Anda ketahui sejak awal.',
        'Cek kelengkapan: ban cadangan, dongki, dan tool kit.',
      ],
    },
    { type: 'h2', text: 'Dokumentasikan dengan baik' },
    {
      type: 'p',
      text: 'Ambil foto atau rekam video semua sisi mobil, termasuk odometer, dasbor, dan bagian dalam. Kirim ke admin dan simpan salinannya. Dokumentasi ini penting sebagai bukti kalau ada kerusakan muncul setelah perjalanan.',
    },
    {
      type: 'quote',
      text: 'Bila Anda menemukan kerusakan yang sudah ada sebelumnya, sampaikan sekarang. Lebih mudah diselesaikan daripada setelah Anda pulang.',
    },
    { type: 'h2', text: 'Kalau menemukan masalah' },
    {
      type: 'ol',
      items: [
        'Sebutkan bagiannya dengan jelas, misalnya goresan di pintu kanan.',
        'Tanyakan apakah unit bisa diganti dengan yang kondisi lebih baik.',
        'Jangan menerima unit dengan kerusakan berarti tanpa penjelasan tertulis.',
      ],
    },
  ],
};
