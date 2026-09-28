export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  /** ISO date, drives Article JSON-LD datePublished. */
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  author: string;
  body: ArticleBlock[];
};
