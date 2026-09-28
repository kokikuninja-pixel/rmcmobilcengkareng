import type { Metadata } from 'next';
import { Check, Info, MessageCircle, Percent, Wallet } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { carInventory } from '@/lib/cars';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';
import { formatRupiah } from '@/lib/utils';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'Harga',
  `Daftar Harga Sewa Mobil ${brand.city} | ${brand.legalName}`,
  `Informasi harga sewa mobil ${brand.city} per hari tanpa supir. Harga transparan tanpa biaya tersembunyi, borongan mingguan dan bulanan. Konfirmasi tarif via WhatsApp.`,
  '/harga'
);

const borongan = [
  { period: 'Harian', note: 'Minimal 1 hari (24 jam)', disc: 'Harga list' },
  { period: 'Mingguan', note: '7 hari atau lebih', disc: 'Hemat hingga 10%' },
  { period: 'Bulanan', note: '30 hari atau lebih', disc: 'Harga khusus' },
];

const termasuk = [
  'Sewa(unit)',
  'Pajak kendaraan',
  'Asuransi aktif',
  'Servicing rutin',
  'Bantuan jalan 24/7',
];

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
  const termurah = Math.min(...carInventory.map((c) => c.price));

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow="Harga"
        title={`Daftar Harga Sewa Mobil ${brand.city}`}
        description="Harga di bawah adalah tarif indikatif per hari, sudah termasuk sewa dan pajak. Tarif final dikonfirmasi admin sesuai tanggal, durasi, dan unit yang dipilih."
        breadcrumbs={[{ label: 'Harga' }]}
      >
        {/* Info banner */}
        <div className="mb-10 flex gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed">
            Harga bersifat indikatif dan bisa berubah sesuai musim serta ketersediaan unit.
            Untuk tarif pasti, kirim nama unit dan tanggal rencana lewat WhatsApp.
          </p>
        </div>

        {/* Harga per unit */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {carInventory.map((car) => (
            <div
              key={car.id}
              className="flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-lg font-bold">{car.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {car.segment} · {car.seats} kursi · {car.transmission}
                  </p>
                </div>
                {car.popular && <Badge className="bg-primary text-primary-foreground">Favorit</Badge>}
              </div>

              <p className="mb-5">
                <span className="font-display text-3xl font-bold text-primary">
                  {formatRupiah(car.price)}
                </span>
                <span className="text-sm text-muted-foreground"> /hari</span>
              </p>

              <ul className="mb-6 space-y-2 text-sm">
                {termasuk.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-auto w-full font-semibold">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Tanya Harga Final
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Borongan */}
        <section className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Percent className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold">Harga Borongan</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {borongan.map((row) => (
              <div key={row.period} className="rounded-2xl border bg-card p-6 text-center">
                <p className="font-display text-xl font-bold text-primary">{row.period}</p>
                <p className="mt-1 text-sm text-muted-foreground">{row.note}</p>
                <p className="mt-3 text-sm font-semibold">{row.disc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Termasuk / tidak termasuk */}
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
              <Info className="h-5 w-5 text-muted-foreground" />
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

        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Mulai dari{' '}
            <span className="font-display text-lg font-bold text-primary">{formatRupiah(termurah)}</span>{' '}
            per hari
          </p>
          <Button asChild size="lg" className="mt-4 h-12 px-8 font-semibold shadow-glow">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Konfirmasi Harga via WhatsApp
            </a>
          </Button>
        </div>
      </SeoPageLayout>

      <PageCta
        title="Harga transparan, tanpa biaya tersembunyi"
        description={`Tanya tarif ${brand.shortName} kapan saja. Admin kami balas cepat di jam operasional 05.00 sampai 21.30 WIB.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Lihat Armada"
        secondaryHref="/armada"
      />
    </PageShell>
  );
}
