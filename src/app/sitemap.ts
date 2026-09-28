import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/brands';
import { serviceLocations } from '@/lib/locations';
import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const core: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/armada', priority: 0.9, freq: 'monthly' },
    { path: '/harga', priority: 0.9, freq: 'weekly' },
    { path: '/lokasi', priority: 0.8, freq: 'monthly' },
    { path: '/galeri', priority: 0.7, freq: 'monthly' },
    { path: '/artikel', priority: 0.8, freq: 'weekly' },
    { path: '/tentang-kami', priority: 0.6, freq: 'yearly' },
    { path: '/faq', priority: 0.7, freq: 'monthly' },
    { path: '/snk', priority: 0.4, freq: 'yearly' },
  ];

  return [
    ...core.map((item) => ({
      url: `${base}${item.path}`,
      lastModified: now,
      changeFrequency: item.freq,
      priority: item.priority,
    })),
    ...serviceLocations.map((loc) => ({
      url: `${base}/${loc.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${base}/artikel/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
