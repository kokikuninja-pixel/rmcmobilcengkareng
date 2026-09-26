/**
 * Brand configuration types for multi-brand landing templates.
 * RMB is the reference implementation; other brands later override tokens + content.
 */

export type BrandSocial = {
  instagram?: string;
  tiktok?: string;
};

export type BrandSeoLocation = {
  name: string;
  href: string;
};

export type BrandNavLink = {
  href: string;
  label: string;
};

export type BrandThemeTokens = {
  /** HSL components without hsl(), e.g. "43 100% 54%" */
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  ring: string;
  radius: string;
  fontSans: string;
  fontDisplay: string;
};

export type BrandPromoPopup = {
  enabled: boolean;
  /** Delay before first show (ms) */
  delayMs: number;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  footnote?: string;
};

export type BrandBusinessInfo = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  latitude: number;
  longitude: number;
  openingHours: string;
  priceRange: string;
};

export type BrandConfig = {
  id: 'rmb' | 'rmc' | 'rmjp' | 'nethen';
  shortName: string;
  legalName: string;
  city: string;
  tagline: string;
  description: string;
  siteUrl: string;
  whatsappNumber: string;
  gtmId: string;
  adsId: string;
  logoPath: string;
  ogImagePath: string;
  social: BrandSocial;
  navLinks: BrandNavLink[];
  seoLocations: BrandSeoLocation[];
  /** Homepage section order — keep this stable across brands */
  homepageSections: string[];
  theme: BrandThemeTokens;
  promoPopup: BrandPromoPopup;
  business: BrandBusinessInfo;
};

export function buildWhatsAppUrl(
  phoneNumber: string,
  message?: string
): string {
  const base = `https://wa.me/${phoneNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}