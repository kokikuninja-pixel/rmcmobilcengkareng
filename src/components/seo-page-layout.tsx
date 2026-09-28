import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Crumb = { label: string; href?: string };

/**
 * Shared shell for every inner page: breadcrumb, page hero, and a consistent
 * footer CTA so no page ends without a conversion path.
 */
export function SeoPageLayout({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b bg-foreground">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '26px 26px',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container relative px-4 py-14 md:py-20">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-background/60">
                <li className="flex items-center gap-1.5">
                  <Link href="/" className="transition-colors hover:text-primary">
                    Beranda
                  </Link>
                  <ChevronRight className="h-3 w-3" aria-hidden="true" />
                </li>
                {breadcrumbs.map((crumb) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-primary">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-primary">{crumb.label}</span>
                    )}
                    <ChevronRight className="h-3 w-3" aria-hidden="true" />
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <p className="mb-3 inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl font-bold leading-tight text-background sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/75 sm:text-base">
              {description}
            </p>
          )}
        </div>
      </section>

      <div className={cn('container px-4 py-12 md:py-16', className)}>{children}</div>
    </>
  );
}

/** Simple two-column feature block used across several inner pages. */
export function InfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-display font-bold text-base">{title}</h3>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

/** Full-width dark CTA band reused at the bottom of inner pages. */
export function PageCta({
  title,
  description,
  ctaLabel = 'Pesan via WhatsApp',
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      <div className="container relative px-4 py-14 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold leading-tight text-background sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70 sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gold-gradient px-8 font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
          >
            {ctaLabel}
          </a>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-background/30 px-8 font-semibold text-background transition hover:bg-background hover:text-foreground"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/** Small helper so pages can show a real photo without repeating Image config. */
export function PageImage({
  src,
  alt,
  className,
  aspect = 'aspect-[4/3]',
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl bg-muted', aspect, className)}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}
