import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, unknown>;
  /** Overrides the generated DOM id. Use when a page emits the same @type twice. */
  idSuffix?: string;
}

/**
 * Renders a schema.org JSON-LD block.
 * Each instance needs a unique DOM id, otherwise the page ships duplicate ids.
 */
export function JsonLd({ data, idSuffix }: JsonLdProps) {
  const type = String(data['@type'] ?? 'object').toLowerCase();
  const id = `json-ld-${type}${idSuffix ? `-${idSuffix}` : ''}`;
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="lazyOnload"
    />
  );
}
