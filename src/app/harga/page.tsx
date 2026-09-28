import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Info, MessageCircle, Percent, Wallet, X } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { Button } from '@/components/ui/button';
import { carInventory, PRICE_LABEL } from '@/lib/cars';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'Harga',
  `Cara Mendapat Harga Sewa Mobil ${brand.city} | ${brand.legalName}`,
  `Harga sewa mobil ${brand.city} dihitung langsung oleh admin, tanpa biaya tersembunyi. Kirim unit dan tanggal rencana via WhatsApp untuk mendapatkan penawaran terbaik.`,
  '/harga'
);

const faktor = [
  {
    title: 'Unit yang dipilih',
    text: 'Tiap mobil punya tarif yang berbeda. MPV keluarga dan SUV besar jelas tidak sama.',
  },
  {
    title: 'Durasi sewa',
    text: 'Sewa mingguan dan bulanan biasanya mendapat harga lebih murah daripada harian.',
  },
  {
    title: 'Tanggal ambil',
    text: 'Musim ramai, Ramadan, dan hari raya biasanya sedang ramai. Pemesanan lebih awal membantu.',
  },
  {
    title: 'Lokasi antar',
    text: 'Menyambut di kantor lebih murah. Antar ke lokasi jauh menambah biaya sesuai jarak.',
  },
];

const termasuk = ['Sewa unit', 'Pajak kendaraan', 'Asuransi aktif', 'Servicing rutin', 'Bantuan jalan 24/7'];

const tidakTermasuk = [
  'BBM (Anda mengisi sendiri)',
  'Parkir dan tol',
  'Denda keterlambatan',
  'Kerusakan akibat salah pakai',
];

export default function HargaPage() {
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya mau tanya harga sewa mobil untuk ${brand.city}.`
  );

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow="Harga"
        title={`Cara Mendapat Harga Sewa Mobil ${brand.city}`}
        description="Kami tidak menaruh angka harga di halaman ini. Alasannya sederhana: tarif yang benar bergantung pada unit, tanggal, dan durasi. Admin kami menghitungkannya dan membalas lewat WhatsApp, biasanya dalam hitungan menit."
        breadcrumbs={[{ label: 'Harga' }]}
      >
        {/* Alasan */}
        <div className="mb-12 flex gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm leading-relaxed">
            <p className="font-semibold">Kenapa harga tidak ditulis di sini?</p>
            <p className="mt-1 text-muted-foreground">
              Harga yang tertulis di internet sering kali sudah kedaluwarsa, tidak berlaku
              untuk tanggal Anda, atau menutupi biaya tambahan. Dengan harga lewat admin,
              angka yang Anda terima benar-benar berlaku untuk perjalanan Anda.
            </p>
          </div>
        </div>

        {/* Faktor penentu harga */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Apa Saja yang Menentukan Harga
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Empat hal ini jadi dasar perhitungan tarif harian.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {faktor.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="font-display text-3xl font-extrabold text-primary/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daftar unit */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Unit yang Bisa Dipesan</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Kirim nama unit yang Anda incar, admin akan mengonfirmasi ketersediaan sekaligus
            harganya.
          </p>

          <div className="mt-8 divide-y overflow-hidden rounded-2xl border">
            {carInventory.map((car) => (
              <div
                key={car.id}
                className="flex flex-wrap items-center justify-between gap-4 bg-card p-5"
              >
                <div>
                  <p className="font-display font-bold">{car.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{car.feature}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {car.segment} &middot; {car.seats} penumpang &middot; {car.transmission}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    {PRICE_LABEL}
                  </span>
                  <Button asChild size="sm" className="font-semibold">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Tanya
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="mt-6 h-12 w-full font-semibold shadow-glow sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Minta Penawaran Sekarang
            </a>
          </Button>
        </section>

        {/* Borongan */}
        <section className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Percent className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold">Sewa Borongan</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { period: 'Harian', note: 'Minimal 1 hari (24 jam)', disc: 'Tarif harian' },
              { period: 'Mingguan', note: '7 hari atau lebih', disc: 'Lebih hemat' },
              { period: 'Bulanan', note: '30 hari atau lebih', disc: 'Harga khusus' },
            ].map((row) => (
              <div key={row.period} className="rounded-2xl border bg-card p-6 text-center">
                <p className="font-display text-xl font-bold text-primary">{row.period}</p>
                <p className="mt-1 text-sm text-muted-foreground">{row.note}</p>
                <p className="mt-3 text-sm font-semibold">{row.disc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Termasuk / tidak */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-bold">Sudah Termasuk</h2>
            </div>
            <ul className="space-y-2.5">
              {termasuk.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <X className="h-4 w-4 text-muted-foreground" />
              <h2 className="font-display text-lg font-bold">Belum Termasuk</h2>
            </div>
            <ul className="space-y-2.5">
              {tidakTermasuk.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Ingin lihat spesifikasi tiap unit?{' '}
          <Link href="/armada" className="font-semibold text-primary hover:underline">
            Buka halaman armada
          </Link>
        </p>
      </SeoPageLayout>

      <PageCta
        title="Tinggal chat, admin yang hitung harganya"
        description={`Sebutkan unit dan tanggal rencana. Admin ${brand.shortName} akan membalas dengan penawaran yang benar-benar berlaku.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Baca FAQ"
        secondaryHref="/faq"
      />
    </PageShell>
  );
}
