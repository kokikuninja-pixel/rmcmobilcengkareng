interface JsonLdProps {
  data: Record<string, unknown>;
  /** Overrides the generated DOM id. Use when a page emits the same @type twice. */
  idSuffix?: string;
}

/**
 * Renders a schema.org JSON-LD block.
 *
 * This is a plain inline <script> rather than next/script on purpose: next/script
 * with any strategy other than "beforeInteractive" injects the tag from the
 * client, so crawlers and social scrapers that do not run JavaScript (WhatsApp,
 * Facebook, Twitter previews) would never see the structured data.
 */
export function JsonLd({ data, idSuffix }: JsonLdProps) {
  const type = String(data['@type'] ?? 'object').toLowerCase();
  const id = `json-ld-${type}${idSuffix ? `-${idSuffix}` : ''}`;

  return (
    <script
      id={id}
      type="application/ld+json"
      // Schema.org payloads are built from our own typed config, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
