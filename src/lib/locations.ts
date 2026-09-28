/**
 * SEO location pages for the Cengkareng / western Jakarta service area.
 * `slug` matches the hrefs in `brand.seoLocations` (src/brands/rmc.ts).
 */

export type ServiceLocation = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  landmark: string;
  distance: string;
};

export const serviceLocations: ServiceLocation[] = [
  {
    slug: 'sewa-mobil-cengkareng',
    name: 'Cengkareng',
    tagline: 'Sewa mobil lepas kunci di Cengkareng',
    description:
      'Sewa mobil di Cengkareng tanpa supir dengan harga transparan. Avanza, Calya, Sigra, dan Fortuner siap pakai. Cocok untuk perjalanan lokal dan transit.',
    highlights: [
      'Kantor berada di Cengkareng Tim, mudah dijangkau',
      'Dekat Bandara Soekarno-Hatta Terminal 1, 2, dan 3',
      'Unit bisa diambil di kantor atau diantar sesuai kebutuhan',
      'Tarif borongan untuk harian, mingguan, dan bulanan',
    ],
    landmark: 'Kawasan Cengkareng, Jakarta Barat',
    distance: 'Titik awal layanan kami',
  },
  {
    slug: 'sewa-mobil-bandara-soetta',
    name: 'Bandara Soekarno-Hatta',
    tagline: 'Antar-jemput dan sewa mobil dekat terminal',
    description:
      'Layanan sewa mobil di Bandara Soekarno-Hatta dengan antar-jemput Terminal 1, 2, dan 3. Mobil terawat, proses cepat, harga masuk akal.',
    highlights: [
      'Antar-jemput ke Terminal 1, Terminal 2, dan Terminal 3',
      'Cocok untuk traveler yang baru mendarat',
      'Bisa diantar pagi, siang, maupun malam',
      'Proses cepat, mobil siap pakai',
    ],
    landmark: 'Bandara Internasional Soekarno-Hatta, Cengkareng',
    distance: 'sekitar 5 sampai 10 menit dari kantor kami',
  },
  {
    slug: 'sewa-mobil-duri-kosambi',
    name: 'Duri Kosambi',
    tagline: 'Rental mobil Duri Kosambi untuk harian',
    description:
      'Sewa mobil di Duri Kosambi tanpa supir, unit terawat dan siap pakai. Harga masuk akal untuk harian maupun bulanan. Pilihan tepat untuk keluarga.',
    highlights: [
      'Sangat dekat, waktu tempuh singkat dari kantor',
      'Cocok untuk commute harian di Jakarta Barat',
      'Unit 7 kursi untuk keluarga',
      'Bisa sewa bulanan dengan harga khusus',
    ],
    landmark: 'Duri Kosambi, Jakarta Barat',
    distance: 'sekitar 5 menit dari kantor kami',
  },
  {
    slug: 'sewa-mobil-kapuk',
    name: 'Kapuk',
    tagline: 'Sewa mobil Kapuk, dekat kawasan PIK',
    description:
      'Rental mobil di Kapuk untuk perjalanan ke PIK, Cengkareng, dan sekitar Jakarta Barat. Unit modern, terawat, harga masuk akal.',
    highlights: [
      'Dekat kawasan PIK dan Jalan Daan Mogot',
      'Cocok untuk belanja, reunion, dan piknik',
      'Unit Matic nyaman dipakai harian',
      'Tersedia antar-jemput ke hotel atau apartemen',
    ],
    landmark: 'Kapuk, Jakarta Utara',
    distance: 'sekitar 10 sampai 15 menit dari kantor kami',
  },
  {
    slug: 'sewa-mobil-kembangan',
    name: 'Kembangan',
    tagline: 'Sewa mobil Kembangan untuk keluarga',
    description:
      'Sewa mobil di Kembangan, Jakarta Barat. Unit terawat, harga transparan, layanan cepat via WhatsApp. Cocok untuk perjalanan keluarga dan acara.',
    highlights: [
      'Melayani area Kembangan dan Rawa Kucing',
      'Unit 7 kursi pas untuk keluarga besar',
      'Bisa request kursi bayi atau amenities tambahan',
      'Harga borongan untuk sewa jangka panjang',
    ],
    landmark: 'Kembangan, Jakarta Barat',
    distance: 'sekitar 10 menit dari kantor kami',
  },
  {
    slug: 'sewa-mobil-tangerang',
    name: 'Tangerang',
    tagline: 'Rental mobil Tangerang dan CitraRaya',
    description:
      'Sewa mobil ke Tangerang, CitraRaya, dan Alam Sutera. Unit siap pakai tanpa supir, harga masuk akal, proses pemesanan cepat via WhatsApp.',
    highlights: [
      'Melayani Kota Tangerang, CitraRaya, dan Alam Sutera',
      'Cocok untuk perjalanan bisnis dan kunjungan keluarga',
      'Mobil selalu diperiksa sebelum disewakan',
      'Bisa diantar langsung ke alamat tujuan',
    ],
    landmark: 'Kota Tangerang, Banten',
    distance: 'sekitar 10 sampai 20 menit dari kantor kami',
  },
  {
    slug: 'sewa-mobil-batusari',
    name: 'Batusari',
    tagline: 'Sewa mobil Batusari dengan unit siap pakai',
    description:
      'Rental mobil di Batusari, Tangerang. Cocok untuk perjalanan lokal, kerja, dan keluarga. Unit terawat, sewa lepas kunci tanpa supir.',
    highlights: [
      'Area perlintasan antara Cengkareng dan Tangerang',
      'Unit Matic nyaman untuk perjalanan harian',
      'Harga fleksibel untuk harian maupun mingguan',
      'Layanan antar-jemput ke alamat sekitar Batusari',
    ],
    landmark: 'Batusari, Tangerang',
    distance: 'sekitar 15 menit dari kantor kami',
  },
  {
    slug: 'sewa-mobil-puri-kembangan',
    name: 'Puri Kembangan',
    tagline: 'Sewa mobil Puri Kembangan',
    description:
      'Sewa mobil di Puri Kembangan dan sekitarnya. Unit terawat dengan harga masuk akal, layanan cepat. Cocok untuk perjalanan ke mall, kantor, dan sekolah.',
    highlights: [
      'Dekat kawasan permukiman Puri Kembangan',
      'Cocok untuk perjalanan ke mall, kantor, dan sekolah',
      'Bisa sewa bulanan untuk karyawan atau keluarga',
      'Armada 7 kursi untuk perjalanan keluarga',
    ],
    landmark: 'Puri Kembangan, Jakarta Barat',
    distance: 'sekitar 10 sampai 15 menit dari kantor kami',
  },
  {
    slug: 'sewa-mobil-joglo',
    name: 'Joglo',
    tagline: 'Rental mobil Joglo dan Jurang Mangu',
    description:
      'Sewa mobil di Joglo, Jakarta Selatan. Unit siap pakai tanpa supir, harga masuk akal, proses cepat. Pilihan tepat untuk perjalanan ke Jakarta Selatan.',
    highlights: [
      'Melayani area Joglo dan sekitar Jurang Mangu',
      'Cocok untuk perjalanan lintas ke Jakarta Selatan',
      'Tersedia antar-jemput pagi dan malam hari',
      'Harga borongan untuk sewa mingguan dan bulanan',
    ],
    landmark: 'Joglo, Jakarta Selatan',
    distance: 'sekitar 25 sampai 35 menit dari kantor kami',
  },
  {
    slug: 'sewa-mobil-meruya',
    name: 'Meruya',
    tagline: 'Sewa mobil Meruya, dekat CBD',
    description:
      'Rental mobil di Meruya, Jakarta Barat. Cocok untuk perjalanan ke CBD Jakarta, rumah, dan area timur Jakarta. Unit terawat, harga masuk akal.',
    highlights: [
      'Dekat kawasan CBD dan Kelapa Gading',
      'Cocok untuk perjalanan kerja dan bisnis',
      'Unit 7 kursi untuk keluarga atau entourage',
      'Layanan antar-jemput fleksibel sesuai jadwal',
    ],
    landmark: 'Meruya, Jakarta Barat',
    distance: 'sekitar 20 sampai 30 menit dari kantor kami',
  },
];
