import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { ArticleCard } from '@/components/article-card';
import { articles, getArticleCategories } from '@/lib/articles';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'Artikel',
  `Artikel & Panduan Sewa Mobil ${brand.city} | ${brand.legalName}`,
  `Kumpulan panduan praktis sewa mobil ${brand.city}: cara memesan, memilih unit untuk keluarga, persiapan bepergian, dan cek kondisi mobil sebelum jalan.`,
  '/artikel'
);

export default function ArtikelPage() {
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya baca artikel di situs dan mau tanya sewa mobil.`
  );
  const categories = getArticleCategories();

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow="Artikel"
        title="Panduan Sewa Mobil"
        description="Kumpulan panduan praktis dari tim kami. Isinya soal cara memesan, memilih unit yang tepat, persiapan bepergian, dan hal-hal yang sering terlewat saat menerima mobil sewa."
        breadcrumbs={[{ label: 'Artikel' }]}
      >
        {/* Kategori */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Kategori:</span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border bg-card px-3 py-1 text-xs font-semibold text-primary"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* List artikel, terbaru duluan */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </SeoPageLayout>

      <PageCta
        title="Sudah paham caranya, tinggal sewa"
        description={`Admin ${brand.shortName} siap membantu pilih unit yang sesuai kebutuhan Anda di ${brand.city}.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Lihat Armada"
        secondaryHref="/armada"
      />
    </PageShell>
  );
}
