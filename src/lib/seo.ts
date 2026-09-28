import { getBrand, getSiteUrl } from '@/brands';

type SeoOptions = {
  /** Use 'article' for blog posts so social previews render correctly. */
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  authors?: string[];
};

export function generateSeoMetadata(
  pageTitle: string,
  fullTitle: string,
  description: string,
  path: string = '/',
  options: SeoOptions = {}
) {
  const brand = getBrand();
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${path}`;
  const ogType = options.ogType ?? 'website';
  const isArticle = ogType === 'article';

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'id_ID',
      url: canonicalUrl,
      siteName: brand.legalName,
      title: fullTitle,
      description,
      images: [
        {
          url: brand.ogImagePath,
          width: 1200,
          height: 630,
          alt: brand.legalName,
        },
      ],
      ...(isArticle
        ? {
            publishedTime: options.publishedTime,
            modifiedTime: options.modifiedTime ?? options.publishedTime,
            authors: options.authors ?? [brand.legalName],
            section: options.section,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [brand.ogImagePath],
    },
    category: 'travel',
  };
}

export function buildLocalBusinessJsonLd() {
  const brand = getBrand();
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'CarRental',
    name: brand.legalName,
    alternateName: brand.shortName,
    description: brand.description,
    url: siteUrl,
    logo: `${siteUrl}${brand.logoPath}`,
    image: `${siteUrl}${brand.ogImagePath}`,
    telephone: `+${brand.whatsappNumber.replace('62', '62 ')}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: brand.business.streetAddress,
      addressLocality: brand.business.addressLocality,
      addressRegion: brand.business.addressRegion,
      postalCode: brand.business.postalCode,
      addressCountry: brand.business.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: brand.business.latitude,
      longitude: brand.business.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '05:00',
      closes: '21:30',
    },
    priceRange: brand.business.priceRange,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sewa Mobil',
      category: 'Car Rental',
    },
    sameAs: [
      brand.social.instagram,
      brand.social.tiktok,
    ].filter(Boolean),
    areaServed: {
      '@type': 'City',
      name: brand.city,
    },
  };
}

export function buildWebsiteJsonLd() {
  const brand = getBrand();
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.legalName,
    alternateName: brand.shortName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildFaqPageJsonLd() {
  const brand = getBrand();

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Berapa harga sewa mobil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Untuk tarif terkini, silakan tanya admin melalui WhatsApp. Kami akan memberi tahu harga terbaik sesuai unit, durasi, dan kebutuhan Anda.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah sistem sewanya tanpa supir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, semua tarif adalah tarif lepas kunci (tanpa supir). Anda mengemudi sendiri, bebas mengatur rute dan waktu sesuai keinginan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Syarat apa saja untuk menyewa mobil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cukup bawa KTP dan SIM A yang masih aktif saat mengambil unit. Untuk mobil tertentu, kami memberlakukan uang jaminan (deposit) yang dikembalikan setelah unit kembali. Unit diambil di lokasi kami sesuai jam operasional.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah diperbolehkan keluar kota?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Boleh. Mobil standar diperbolehkan dipakai di sekitar Jakarta & Tangerang. Untuk perjalanan antar kota atau antar pulau, beri tahu tim kami terlebih dahulu agar dapat diatur sesuai ketentuan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bagaimana cara memesan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pilih unit favorit Anda, lalu klik tombol Sewa. Tim kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi ketersediaan unit dan pembayaran.',
        },
      },
    ],
  };
}