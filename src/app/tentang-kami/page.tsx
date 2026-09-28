import type { Metadata } from 'next';
import {
  Clock,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  ThumbsUp,
  UserCheck,
} from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { Button } from '@/components/ui/button';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'Tentang Kami',
  `Tentang ${brand.shortName} | Rental Mobil ${brand.city}`,
  `Kenalan dengan ${brand.legalName}, penyedia sewa mobil ${brand.city} sejak awal. Unit terawat, harga transparan, dan layanan cepat via WhatsApp.`,
  '/tentang-kami'
);

const nilai = [
  {
    icon: ShieldCheck,
    title: 'Unit Terawat',
    text: 'Setiap mobil diservis rutin dan dicek sebelum disewakan, jadi apa yang Anda terima selalu dalam kondisi prima.',
  },
  {
    icon: ThumbsUp,
    title: 'Harga Transparan',
    text: 'Tidak ada biaya tersembunyi. Semua tarif dibahas dulu sebelum Anda menyewa.',
  },
  {
    icon: Clock,
    title: 'Respon Cepat',
    text: 'Chat WhatsApp dan admin kami akan membalas pada jam operasional, tanpa menunggu lama.',
  },
  {
    icon: UserCheck,
    title: 'Tanpa Supir',
    text: 'Semua sewa lepas kunci. Anda mengemudi sendiri dengan bebas dan fleksibel.',
  },
  {
    icon: HeartHandshake,
    title: 'Pelayanan Ramah',
    text: 'Kami membantu semaksimal mungkin, mulai dari pilih unit sampai proses pengembalian.',
  },
  {
    icon: Sparkles,
    title: 'Bersih & Nyaman',
    text: 'Interior dibersihkan setelah setiap sewa agar Anda selalu mendapat unit yang segar.',
  },
];

const langkah = [
  { step: '01', title: 'Anda pilih unit', text: 'Lihat armada dan pilih yang paling sesuai kebutuhan.' },
  { step: '02', title: 'Chat admin', text: 'Kirim tanggal rencana lewat WhatsApp untuk cek ketersediaan.' },
  { step: '03', title: 'Konfirmasi & bayar', text: 'Sepakati tarif, lalu lakukan DP untuk mengunci unit.' },
  { step: '04', title: 'Ambil mobil', text: 'Unit diserahkan di Cengkareng atau diantar ke lokasi Anda.' },
];

export default function TentangKamiPage() {
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya mau tanya layanan sewa mobil di ${brand.city}.`
  );

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow="Tentang Kami"
        title={`Selamat datang di ${brand.legalName}`}
        description={`${brand.tagline} Kami melayani penyewaan mobil lepas kunci di ${brand.city} dan sekitarnya dengan fokus pada kepraktisan dan harga yang jujur.`}
        breadcrumbs={[{ label: 'Tentang Kami' }]}
      >
        {/* Profil */}
        <section className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Cerita kami</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                {brand.legalName} berdiri untuk menyediakan solusi transportasi yang
                praktis bagi warga {brand.city} dan sekitarnya. Kami sadar bahwa menyewa
                mobil sering terasa merepotkan: harga yang tidak jelas, unit yang kondisi
                tak terduga, dan proses yang berbelit.
              </p>
              <p>
                Karena itu kami memangkas semua yang tidak perlu. Semua armada kami servis
                rutin, tarif kami bahas terbuka di awal, dan pemesanan cukup lewat WhatsApp.
                Anda tidak perlu datang bolak-balik hanya untuk menanyakan ketersediaan.
              </p>
              <p>
                Lokasi kami di {brand.business.addressLocality} yang dekat dengan
                {brand.city} dan banda udara, sehingga menjemput Anda tidak merepotkan.
                Jam operasional kami buka setiap hari, pukul 05.00 sampai 21.30 WIB.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border bg-card p-6">
              <h2 className="font-display text-lg font-bold">Info Singkat</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Alamat</dt>
                  <dd className="mt-1 leading-relaxed">
                    {brand.business.streetAddress}, {brand.business.addressLocality},{' '}
                    {brand.business.addressRegion} {brand.business.postalCode}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Jam buka</dt>
                  <dd className="mt-1">Setiap hari, 05.00 - 21.30 WIB</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Wilayah</dt>
                  <dd className="mt-1">{brand.city} dan sekitar Jakarta Barat</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Sistem</dt>
                  <dd className="mt-1">Lepas kunci tanpa supir</dd>
                </div>
              </dl>
            </div>
          </aside>
        </section>

        {/* Nilai */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Kenapa {brand.shortName}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enam hal yang kami jaga di setiap transaksi.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nilai.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cara kerja */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Cara kerjanya</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {langkah.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-transparent bg-card p-6 transition-all duration-300 hover:border-primary/50"
              >
                <p className="font-display text-5xl font-extrabold text-primary/25">{item.step}</p>
                <h3 className="mt-3 font-display font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 flex justify-center">
          <Button asChild size="lg" className="h-12 px-8 font-semibold shadow-glow">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Chat {brand.shortName} Sekarang
            </a>
          </Button>
        </div>
      </SeoPageLayout>

      <PageCta
        title="Mulai perjalanan Anda hari ini"
        description={`Cek ketersediaan unit dan konfirmasi tarif lewat WhatsApp. Admin ${brand.shortName} siap membantu.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Lihat Armada"
        secondaryHref="/armada"
      />
    </PageShell>
  );
}
