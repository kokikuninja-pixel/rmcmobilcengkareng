import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { GoogleTagManager } from '@next/third-parties/google';
import { cn } from '@/lib/utils';
import { getBrand, getSiteUrl } from '@/brands';
import { JsonLd } from '@/components/json-ld';
import { buildLocalBusinessJsonLd, buildWebsiteJsonLd } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const brand = getBrand();
const siteUrl = getSiteUrl();
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: 'hsl(var(--primary))',
};

const defaultTitle = `${brand.shortName} - Rental Mobil ${brand.city} | Sewa Mobil Cepat & Aman`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: brand.description,
  applicationName: brand.legalName,
  keywords: [
    `sewa mobil ${brand.city.toLowerCase()}`,
    `rental mobil ${brand.city.toLowerCase()}`,
    'sewa mobil cengkareng',
    'rental mobil bandara soetta',
    brand.shortName,
  ],
  authors: [{ name: brand.legalName }],
  creator: brand.legalName,
  publisher: brand.legalName,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: brand.legalName,
    title: defaultTitle,
    description: brand.description,
    images: [
      {
        url: brand.ogImagePath,
        width: 1200,
        height: 630,
        alt: brand.legalName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: brand.description,
    images: [brand.ogImagePath],
  },
  category: 'travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = getGtmId();

  return (
    <html lang="id" className={cn('!scroll-smooth', inter.variable, plusJakarta.variable)}>
      <body className={cn('font-sans antialiased', inter.className)}>
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <JsonLd data={buildWebsiteJsonLd()} />
        {/* Ads conversions should be fired from GTM (single tag path for performance). */}
        <GoogleTagManager gtmId={gtmId} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

function getGtmId(): string {
  return process.env.NEXT_PUBLIC_GTM_ID || getBrand().gtmId;
}