import type { Metadata } from 'next';
import Image from 'next/image';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { carInventory } from '@/lib/cars';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'Galeri',
  `Galeri Mobil ${brand.shortName} | Sewa Mobil ${brand.city}`,
  `Lihat langsung unit sewa mobil ${brand.city}: Toyota Avanza, Calya, Daihatsu Sigra, dan Fortuner. Semua unit terawat dan siap pakai.`,
  '/galeri'
);

type Shot = { src: string; alt: string; caption: string };

export default function GaleriPage() {
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya lihat-lihat galeri dan mau tanya sewa mobil di ${brand.city}.`
  );

  const heroShot: Shot = {
    src: '/images/Silver_SUV_parked_near_airport_2K_20260926211849.jpg',
    alt: `Unit SUV terparkir di dekat Bandara Soekarno-Hatta, ${brand.city}`,
    caption: 'Unit siap diantar ke lokasi Anda',
  };

  const carShots: Shot[] = carInventory
    .filter((car) => Boolean(car.sceneImage || car.imageUrl))
    .map((car) => ({
      src: car.sceneImage ?? car.imageUrl,
      alt: `${car.name} - armada sewa mobil ${brand.city}`,
      caption: car.name,
    }));

  const shots = [heroShot, ...carShots];

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow="Galeri"
        title={`Galeri Armada ${brand.shortName}`}
        description="Foto unit yang kami sewakan di Cengkareng. Semua mobil dalam kondisi prima, terawat rutin, dan siap pakai."
        breadcrumbs={[{ label: 'Galeri' }]}
      >
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Foto di atas adalah unit yang tersedia saat ini. Ketersediaan dan spesifikasinya
          bisa berubah, jadi konfirmasi unit yang Anda inginkan langsung ke admin.
        </p>
      </SeoPageLayout>

      <PageCta
        title="Unitnya sudah Anda lihat, sekarang pesan"
        description={`Pilih armada ${brand.shortName} sesuai kebutuhan, dan admin mengonfirmasi ketersediaan via WhatsApp.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Lihat Armada"
        secondaryHref="/armada"
      />
    </PageShell>
  );
}
