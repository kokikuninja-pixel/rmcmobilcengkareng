import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CarLanding } from '@/components/car-landing';
import { FloatingActionButton } from '@/components/floating-action-button';
import { PromoPopup } from '@/components/promo-popup';
import { JsonLd } from '@/components/json-ld';
import { buildFaqPageJsonLd, buildLocalBusinessJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata(
  'Sewa Mobil Cengkareng',
  'Sewa Mobil Cengkareng | Rental Mobil Terdekat Bandara Soetta RMC',
  'Sewa mobil di Cengkareng area Bandara Soekarno-Hatta dengan harga tanya admin. Tersedia Avanza, Calya, Sigra, Fortuner, Innova Zenix & Brio. Semua unit lepas kunci tanpa supir. Dekat bandara, cocok transit & wisata. Pesan sekarang!',
  '/'
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <JsonLd data={buildLocalBusinessJsonLd()} />
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