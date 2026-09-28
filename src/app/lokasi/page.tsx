import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { Button } from '@/components/ui/button';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';
import { serviceLocations } from '@/lib/locations';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'Lokasi',
  `Lokasi Sewa Mobil ${brand.city} | Alamat ${brand.shortName}`,
  `Alamat kantor rental mobil ${brand.city}: ${brand.business.streetAddress}. Area layanan mencakup ${brand.city}, Duri Kosambi, Kapuk, Kembangan, Tangerang, dan sekitar Jakarta Barat.`,
  '/lokasi'
);

export default function LokasiPage() {
  const b = brand.business;
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya mau tanya soal pengambilan mobil di ${brand.city}.`
  );

  // Simple embedded map (OpenStreetMap) — no API key required.
  const dLat = b.latitude - 0.004;
  const dLon = b.longitude - 0.006;
  const bbox = `${dLon},${dLat},${b.longitude + 0.006},${b.latitude + 0.004}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${b.latitude},${b.longitude}`;

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow="Lokasi"
        title={`Lokasi Kantor ${brand.shortName}`}
        description={`Kantor kami berada di ${b.addressLocality}, ${b.addressRegion}, dekat akses jalan utama dan bandara. Unit bisa diambil di kantor atau diantar ke alamat Anda.`}
        breadcrumbs={[{ label: 'Lokasi' }]}
      >
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Detail */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-card p-6">
              <h2 className="font-display text-lg font-bold">Alamat</h2>
              <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
                {b.streetAddress}
                <br />
                {b.addressLocality}, {b.addressRegion}
                <br />
                {b.postalCode}, Indonesia
              </address>

              <div className="mt-5 space-y-3 border-t pt-5 text-sm">
                <div className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">Jam operasional:</span>
                    <br />
                    Setiap hari, 05.00 - 21.30 WIB
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">Pengambilan unit:</span>
                    <br />
                    Di kantor atau diantar ke lokasi Anda
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button asChild className="font-semibold">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${b.latitude},${b.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Buka Maps
                  </a>
                </Button>
                <Button asChild variant="outline" className="font-semibold">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    Tanya Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Peta */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                src={mapSrc}
                title={`Peta lokasi ${brand.legalName}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 lg:h-full lg:min-h-[420px]"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Peta perkiraan. Untuk titik presisi, gunakan tombol Buka Maps atau tanyakan
              ke admin via WhatsApp.
            </p>
          </div>
        </div>

        {/* Area layanan */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Area Layanan</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Kami melayani {brand.city} dan sekitarnya. Pilih area Anda untuk info lebih
            lanjut.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="group rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/25">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-bold transition-colors group-hover:text-primary">
                  Sewa Mobil {loc.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {loc.distance}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </SeoPageLayout>

      <PageCta
        title="Butuh mobil di area sekitar Anda?"
        description="Butuh mobil di area sekitar Anda? Sebutkan lokasi Anda lewat WhatsApp, admin kami akan cek unit yang tersedia beserta biaya antarnya."
        ctaHref={whatsappUrl}
        secondaryLabel="Lihat Armada"
        secondaryHref="/armada"
      />
    </PageShell>
  );
}
