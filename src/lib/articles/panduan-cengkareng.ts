import type { Article } from '../articles';

export const artikelPanduanCengkareng: Article = {
  slug: 'panduan-sewa-mobil-cengkareng',
  title: 'Panduan Sewa Mobil di Cengkareng untuk Pemula',
  description:
    'Panduan lengkap sewa mobil di Cengkareng: dokumen yang perlu disiapkan, cara memesan, pertanyaan yang wajib ditanyakan, dan kesalahan yang sering terjadi.',
  category: 'Panduan',
  publishedAt: '2026-01-15',
  updatedAt: '2026-02-20',
  readMinutes: 6,
  author: 'Tim RMC Cengkareng',
  body: [
    {
      type: 'p',
      text: 'Menyewa mobil di Cengkareng sebenarnya tidak serumit yang dibayangkan. Yang sering membuat repot adalah tidak tahu harus menyiapkan apa, dan pertanyaan apa yang perlu ditanyakan sebelum deal. Panduan ini menutup keduanya.',
    },
    { type: 'h2', text: 'Dokumen yang wajib disiapkan' },
    {
      type: 'p',
      text: 'Sewa mobil lepas kunci di Indonesia umumnya butuh dua dokumen utama: KTP dan SIM A yang masih berlaku. Keduanya harus dibawa fisik saat serah terima, bukan foto atau salinan.',
    },
    {
      type: 'ul',
      items: [
        'Kartu Tanda Penduduk asli yang masih berlaku',
        'SIM A asli dan tidak dalam masa suspend',
        'Umur penyewa minimal 21 tahun',
        'Uang deposit sesuai ketentuan unit',
        'Nomor WhatsApp yang aktif dan mudah dihubungi',
      ],
    },
    { type: 'h2', text: 'Lima pertanyaan yang wajib ditanyakan' },
    {
      type: 'p',
      text: 'Sebelum menyewa, pastikan Anda sudah tahu jawabannya untuk lima hal berikut. Kalau ada yang belum jelas, tanyakan lewat chat lebih dulu, jangan menunggu sampai serah terima.',
    },
    {
      type: 'ol',
      items: [
        'Berapa tarif untuk tanggal dan durasi yang saya rencana?',
        'Apakah tarif sudah termasuk pajak, atau ada biaya lain?',
        'Berapa nilai deposit, dan kapan dikembalikan?',
        'Unit bisa diambil di kantor, atau perlu diantar?',
        'Bagaimana aturan kalau saya terlambat mengembalikan?',
      ],
    },
    { type: 'h2', text: 'Waktu terbaik untuk memesan' },
    {
      type: 'p',
      text: 'Untuk perjalanan biasa di hari kerja, unit biasanya masih tersedia meski baru dipesan sehari sebelumnya. Namun akhir pekan, libur sekolah, Ramadan, dan hari raya adalah masa paling ramai. Pada periode itu unit terbaik bisa habis beberapa minggu sebelum tanggal rencana. Memesan satu sampai dua minggu lebih awal jauh lebih aman.',
    },
    { type: 'h2', text: 'Kesalahan yang sering terjadi' },
    {
      type: 'ul',
      items: [
        'Tidak cek kondisi mobil saat serah terima. Dokumentasikan setiap sisi, roda, dan bagian dalam sebelum meninggalkan kantor.',
        'Lupa menanyakan batas wilayah. Tanyakan lebih dulu apakah boleh keluar kota.',
        'Tidak menyimpan kontak admin saat pemesanan. Simpan agar mudah dikonfirmasi kalau jadwal berubah.',
        'Menilai unit hanya dari foto. Tanyakan tahun mobil dan riwayat servisnya.',
      ],
    },
    {
      type: 'quote',
      text: 'Aturan paling penting: dokumentasikan kondisi mobil saat serah terima. Ini melindungi Anda dari tuduhan kerusakan yang tidak Anda lakukan.',
    },
    { type: 'h2', text: 'Langkah selanjutnya' },
    {
      type: 'p',
      text: 'Kalau sudah paham alurnya, tinggal pilih unit yang cocok lalu chat admin. Seluruh pertanyaan bisa dijawab dalam satu percakapan WhatsApp.',
    },
  ],
};
