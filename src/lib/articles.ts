import type { Article, ArticleBlock } from './types';
import { artikelPanduanCengkareng } from './articles/panduan-cengkareng';
import { artikelBandaraSoetta } from './articles/bandara-soetta';
import { artikelPilihMobilKeluarga } from './articles/mobil-keluarga';
import { artikelSelfDriveVsSupir } from './articles/self-drive-vs-supir';
import { artikelPersiapanMudik } from './articles/persiapan-mudik';
import { artikelCekUnit } from './articles/cek-kondisi';

export type { Article, ArticleBlock } from './types';

/** Newest first. */
export const articles: Article[] = [
  artikelCekUnit,
  artikelPersiapanMudik,
  artikelSelfDriveVsSupir,
  artikelPilihMobilKeluarga,
  artikelBandaraSoetta,
  artikelPanduanCengkareng,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleCategories(): string[] {
  return [...new Set(articles.map((a) => a.category))];
}

/** Simple related pick: same category first, then fill with recent posts. */
export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, limit);

  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category
  );
  const others = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}
