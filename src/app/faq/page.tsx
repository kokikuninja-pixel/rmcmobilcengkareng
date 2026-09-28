import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata, buildFaqPageJsonLd } from '@/lib/seo';
import { faqs } from '@/lib/faqs';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'FAQ',
  `Tanya Jawab Sewa Mobil ${brand.city} | ${brand.legalName}`,
  `Pertanyaan umum sewa mobil ${brand.city}: harga, syarat sewa, deposit, antar-jemput bandara, jam operasional, dan sewa bulanan. Semua dijawab admin ${brand.shortName}.`,
  '/faq'
);

export default function FaqPage() {
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya mau tanya soal sewa mobil di ${brand.city}.`
  );

  return (
    <PageShell jsonLd={buildFaqPageJsonLd()}>
      <SeoPageLayout
        eyebrow="FAQ"
        title="Pertanyaan Umum"
        description={`Jawaban untuk pertanyaan yang paling sering masuk tentang sewa mobil ${brand.city}. Kalau belum ketemu jawabannya, tanya langsung ke admin kami.`}
        breadcrumbs={[{ label: 'FAQ' }]}
      >
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
            <h2 className="font-display text-lg font-bold">Belum menemukan jawabannya?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Chat admin {brand.shortName} langsung. Pertanyaan Anda akan dijawab pada jam
              operasional.
            </p>
            <Button asChild size="lg" className="mt-5 h-11 font-semibold">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Tanya Admin
              </a>
            </Button>
          </div>
        </div>
      </SeoPageLayout>

      <PageCta
        title="Masih ada yang belum jelas?"
        description={`Admin ${brand.shortName} siap menjelaskan detail sewa, aturan, dan biaya sebelum Anda memutuskan.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Lihat Syarat & Ketentuan"
        secondaryHref="/snk"
      />
    </PageShell>
  );
}
