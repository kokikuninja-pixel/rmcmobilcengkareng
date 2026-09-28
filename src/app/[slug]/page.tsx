import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, Clock, MapPin, MessageCircle } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { Button } from '@/components/ui/button';
import { carInventory, PRICE_LABEL } from '@/lib/cars';
import { serviceLocations, type ServiceLocation } from '@/lib/locations';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';

const brand = getBrand();

/**
 * This folder is a catch-all for the SEO location pages
 * (`/sewa-mobil-cengkareng`, `/sewa-mobil-joglo`, ...).
 *
 * Note: in the App Router a dynamic segment must be the *entire* folder name,
 * so static text cannot be folded into it (e.g. `sewa-mobil-[slug]` is NOT
 * dynamic, it is treated as a literal segment). Static folders such as
 * `/armada` take priority over this one at the same level.
 */

export const dynamicParams = false;

/** Prerenders every location page at build time. */
export function generateStaticParams() {
  return serviceLocations.map((loc) => ({ slug: loc.slug }));
}

function findLocation(slug: string): ServiceLocation | undefined {
  return serviceLocations.find((loc) => loc.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = findLocation(slug);
  if (!loc) return {};

  return generateSeoMetadata(
    `Sewa Mobil ${loc.name}`,
    `Sewa Mobil ${loc.name} Tanpa Supir | ${brand.shortName} ${brand.city}`,
    loc.description,
    `/${loc.slug}`
  );
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = findLocation(slug);
  if (!loc) notFound();

  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya mau sewa mobil untuk area ${loc.name}. Mohon info ketersediaan dan harga.`
  );

  const otherLocations = serviceLocations.filter((l) => l.slug !== loc.slug).slice(0, 6);

  const ringkasan = [
    { icon: MapPin, label: 'Wilayah', value: loc.landmark },
    { icon: Clock, label: 'Jarak', value: loc.distance },
    { icon: Check, label: 'Harga', value: PRICE_LABEL },
  ];

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow={`Sewa Mobil ${loc.name}`}
        title={`Rental Mobil ${loc.name} Tanpa Supir`}
        description={loc.description}
        breadcrumbs={[{ label: 'Sewa Mobil', href: '/armada' }, { label: loc.name }]}
      >
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {ringkasan.map((item) => (
            <div key={item.label} className="rounded-2xl border bg-card p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/25">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-sm font-medium leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section>
              <h2 className="font-display text-2xl font-bold">Layanan Sewa Mobil {loc.name}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  {brand.legalName} melayani sewa mobil lepas kunci di {loc.name} dan
                  sekitarnya. Semua unit dalam kondisi prima, rutin diservis, dan siap
                  dipakai. Anda mengemudi sendiri, tanpa supir, sehingga perjalanan jadi
                  lebih fleksibel.
                </p>
                <p>
                  Kantor kami berada di {brand.business.addressLocality}, sekitar{' '}
                  {loc.distance} dari {loc.name}. Unit bisa diambil langsung di kantor atau
                  diantar ke alamat Anda sesuai kesepakatan.
                </p>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold">Keunggulan Sewa Mobil {loc.name}</h2>
              <ul className="mt-5 space-y-3">
                {loc.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-xl border bg-card p-4 text-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold">Armada Tersedia</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Pilihan unit yang bisa disewa untuk area {loc.name}.
              </p>
              <div className="mt-5 divide-y overflow-hidden rounded-2xl border">
                {carInventory.map((car) => (
                  <div key={car.id} className="flex items-center justify-between gap-4 bg-card p-4">
                    <div>
                      <p className="font-medium">{car.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {car.segment} &middot; {car.seats} kursi &middot; {car.transmission}
                      </p>
                    </div>
                    <p className="shrink-0 font-semibold text-primary">{PRICE_LABEL}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/armada"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Lihat detail armada
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <h2 className="font-display text-lg font-bold">Cek Harga {loc.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Kirim nama unit dan tanggal rencana. Admin {brand.shortName} akan membalas
                dengan tarif terbaik.
              </p>
              <Button asChild size="lg" className="mt-5 h-12 w-full font-semibold shadow-glow">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Tanya via WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="mt-2 h-12 w-full font-semibold">
                <Link href="/#pesan">Isi Form Pesan</Link>
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Dibalas pada jam operasional 05.00 - 21.30 WIB
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">Area Layanan Lainnya</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Kami juga melayani area berikut di sekitar {brand.city}.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border bg-card p-4 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="font-medium transition-colors group-hover:text-primary">
                  Sewa Mobil {l.name}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </section>
      </SeoPageLayout>

      <PageCta
        title={`Sewa mobil di ${loc.name} sekarang`}
        description={`Cek ketersediaan unit dan konfirmasi tarif ${brand.shortName} lewat WhatsApp. Proses cepat, tanpa birokasi.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Semua Armada"
        secondaryHref="/armada"
      />
    </PageShell>
  );
}
