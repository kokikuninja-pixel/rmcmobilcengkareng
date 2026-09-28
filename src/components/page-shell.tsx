import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingActionButton } from '@/components/floating-action-button';
import { JsonLd } from '@/components/json-ld';

/**
 * Wraps an inner page with the shared chrome (header, footer, floating WhatsApp).
 * Pages pass their own JSON-LD; the root layout handles the homepage schemas.
 */
export function PageShell({
  children,
  jsonLd,
}: {
  children: React.ReactNode;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}) {
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {schemas.map((data, i) => (
        <JsonLd key={i} data={data} idSuffix={schemas.length > 1 ? String(i) : undefined} />
      ))}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
