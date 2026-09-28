import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CarLanding } from '@/components/car-landing';
import { FloatingActionButton } from '@/components/floating-action-button';
import { PromoPopup } from '@/components/promo-popup';
import { JsonLd } from '@/components/json-ld';
import { buildFaqPageJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata(
  'Sewa Mobil Cengkareng',
  'Sewa Mobil Cengkareng | Rental Mobil Terdekat Bandara Soetta RMC',
  'Sewa mobil di Cengkareng area Bandara Soekarno-Hatta dengan harga tanya admin. Tersedia Avanza, Calya, Sigra & Fortuner. Semua unit lepas kunci tanpa supir. Dekat bandara, cocok transit & wisata. Pesan sekarang!',
  '/'
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* LocalBusiness & WebSite are already emitted once in the root layout. */}
      <JsonLd data={buildFaqPageJsonLd()} />
      <Header />
      <main>
        <CarLanding />
      </main>
      <Footer />
      <FloatingActionButton />
      <PromoPopup />
    </div>
  );
}