import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { ArticleCard } from '@/components/article-card';
import { articles, getArticle, getRelatedArticles, type ArticleBlock } from '@/lib/articles';
import { getBrand, getSiteUrl, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';
import { formatTanggalPendek } from '@/lib/utils';

const brand = getBrand();

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    ...generateSeoMetadata(
      article.title,
      `${article.title} | ${brand.legalName}`,
      article.description,
      `/artikel/${article.slug}`,
      {
        ogType: 'article',
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        section: article.category,
        authors: [article.author],
      }
    ),
    keywords: [
      'sewa mobil cengkareng',
      'panduan sewa mobil',
      article.category.toLowerCase(),
      brand.shortName,
    ],
  };
}

/** Wraps the body blocks in Article + BreadcrumbList structured data. */
function buildArticleJsonLd(article: ReturnType<typeof getArticle> & object) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/artikel/${article.slug}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: 'id-ID',
      articleSection: article.category,
      wordCount: article.body.reduce((sum, b) => {
        if (b.type === 'ul' || b.type === 'ol') return sum + b.items.join(' ').split(/\s+/).length;
        if (b.type === 'quote' || b.type === 'h2' || b.type === 'p') return sum + b.text.split(/\s+/).length;
        return sum;
      }, 0),
      timeRequired: `PT${article.readMinutes}M`,
      author: { '@type': 'Organization', name: article.author },
      publisher: {
        '@type': 'Organization',
        name: brand.legalName,
        logo: { '@type': 'ImageObject', url: `${siteUrl}${brand.logoPath}` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${siteUrl}/artikel` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  ];
}

function renderBlock(block: ArticleBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={i}
          className="mt-10 font-display text-xl font-bold sm:text-2xl"
        >
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={i} className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i} className="mt-4 space-y-2.5">
          {block.items.map((item, n) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                {n + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <blockquote
          key={i}
          className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/5 p-6 text-sm font-medium leading-relaxed"
        >
          {block.text}
        </blockquote>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, 3);
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya baca artikel "${article.title}" dan mau tanya sewa mobil.`
  );

  return (
    <PageShell jsonLd={buildArticleJsonLd(article)}>
      <SeoPageLayout
        eyebrow={article.category}
        title={article.title}
        description={article.description}
        breadcrumbs={[{ label: 'Artikel', href: '/artikel' }, { label: article.title }]}
      >
        <article className="mx-auto max-w-3xl">
          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-b pb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.publishedAt}>
                {formatTanggalPendek(article.publishedAt)}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readMinutes} menit baca
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {article.category}
            </span>
          </div>

          {/* Isi */}
          <div className="text-[15px]">
            {article.body.map(renderBlock)}
          </div>

          {/* Update note */}
          {article.updatedAt !== article.publishedAt && (
            <p className="mt-10 rounded-xl bg-muted p-4 text-xs text-muted-foreground">
              Artikel ini terakhir diperbarui pada{' '}
              {formatTanggalPendek(article.updatedAt)}.
            </p>
          )}

          <div className="mt-10 flex justify-center">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Semua artikel
            </Link>
          </div>
        </article>

        {/* Artikel terkait */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-bold">Artikel Lainnya</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Bacaan lain yang mungkin Anda butuhkan.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </SeoPageLayout>

      <PageCta
        title="Butuh mobil untuk perjalanan Anda?"
        description={`Admin ${brand.shortName} siap bantu pilih unit yang sesuai. Tarif dikonfirmasi langsung lewat WhatsApp.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Lihat Armada"
        secondaryHref="/armada"
      />
    </PageShell>
  );
}
