import type { Metadata } from 'next';
import { Check, Wrench, ShieldCheck } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { CarCard } from '@/components/car-card';
import { Button } from '@/components/ui/button';
import { carInventory, PRICE_LABEL } from '@/lib/cars';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'Armada',
  `Armada Sewa Mobil ${brand.city} | ${brand.legalName}`,
  `Daftar armada sewa mobil ${brand.city} tanpa supir: Toyota Avanza, Calya, Daihatsu Sigra, dan Fortuner. Semua unit terawat, pajak lengkap, dan asuransi aktif. Harga tanya admin.`,
  '/armada'
);

const standar = [
  'KTP asli',
  'SIM A aktif',
  'Deposit dikembalikan',
  'Asuransi aktif',
  'Pajak lengkap',
  'Unit terawat',
];

export default function ArmadaPage() {
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya mau tanya armada yang tersedia untuk sewa di ${brand.city}.`
  );

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow="Armada"
        title={`Armada Sewa Mobil ${brand.city}`}
        description="Semua unit disewakan lepas kunci tanpa supir. Pilih unit sesuai kebutuhan, dari MPV keluarga yang irit hingga SUV untuk perjalanan jauh. Tarif dikonfirmasi langsung oleh admin."
        breadcrumbs={[{ label: 'Armada' }]}
      >
        {/* Ringkasan */}
        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: 'Total unit', value: `${carInventory.length} unit` },
            { label: 'Harga', value: PRICE_LABEL },
            { label: 'Sistem sewa', value: 'Lepas kunci' },
            { label: 'Tanpa supir', value: 'Self drive' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
              <p className="mt-1.5 font-display text-lg font-bold text-primary sm:text-xl">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Grid armada */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carInventory.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Detail spesifikasi */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Detail Spesifikasi</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Rincian teknis tiap unit supaya Anda bisa memilih dengan tepat.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-semibold">Unit</th>
                  <th className="px-4 py-3 text-left font-semibold">Segmen</th>
                  <th className="px-4 py-3 text-left font-semibold">Kursi</th>
                  <th className="px-4 py-3 text-left font-semibold">Transmisi</th>
                  <th className="px-4 py-3 text-left font-semibold">Cocok untuk</th>
                  <th className="px-4 py-3 text-right font-semibold">Harga</th>
                </tr>
              </thead>
              <tbody>
                {carInventory.map((car) => (
                  <tr key={car.id} className="border-b last:border-0 hover:bg-muted/40">
                    <td className="px-4 py-3 font-medium">{car.name}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {car.segment}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{car.seats} penumpang</td>
                    <td className="px-4 py-3 text-muted-foreground">{car.transmission}</td>
                    <td className="px-4 py-3 text-muted-foreground">{car.feature}</td>
                    <td className="px-4 py-3 text-right font-semibold text-primary">{PRICE_LABEL}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Tarif tidak kami tampilkan di halaman ini. Harga tergantung pada unit, tanggal,
            dan durasi sewa, jadi admin yang menghitungkannya agar Anda mendapat offer
            terbaik.
          </p>
        </section>

        {/* Syarat & cicilan equipment */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-bold">Syarat Sewa</h2>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {standar.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-bold">Perawatan Unit</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Setiap unit undergo servicing rutin dan pemeriksaan sebelum disewakan.
              Mesin, rem, dan ban selalu dalam kondisi prima.
            </p>
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="h-12 px-8 font-semibold shadow-glow">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Tanya Ketersediaan via WhatsApp
            </a>
          </Button>
        </div>
      </SeoPageLayout>

      <PageCta
        title={`Armada ${brand.shortName} siap Anda pakai`}
        description="Pilih unit, tentukan tanggal, dan mobil bisa Anda ambili di Cengkareng. Tanpa supir, tanpa birokasi panjang."
        ctaHref={whatsappUrl}
        secondaryLabel="Lihat Harga"
        secondaryHref="/harga"
      />
    </PageShell>
  );
}
