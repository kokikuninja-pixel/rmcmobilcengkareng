import { rmcBrand } from './rmc';
import type { BrandConfig } from './types';
import { buildWhatsAppUrl } from './types';

export type { BrandConfig } from './types';
export { buildWhatsAppUrl } from './types';

const brands = {
  rmc: rmcBrand,
} as const;

export type BrandId = keyof typeof brands;

/**
 * Active brand for this deployment.
 * Later: BRAND=rmc|rmb|rmjp|nethen with matching config modules.
 */
export function getBrand(): BrandConfig {
  const id = (process.env.NEXT_PUBLIC_BRAND || 'rmc').toLowerCase() as BrandId;
  return brands[id] ?? rmcBrand;
}

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  // Keep sitemap/canonical on the real production domain — never emit localhost.
  if (envUrl && /^https:\/\//i.test(envUrl) && !/localhost|127\.0\.0\.1/i.test(envUrl)) {
    return envUrl;
  }
  return getBrand().siteUrl.replace(/\/$/, '');
}

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || getBrand().whatsappNumber;
}

export function getGtmId(): string {
  return process.env.NEXT_PUBLIC_GTM_ID || getBrand().gtmId;
}

export function getAdsId(): string {
  return process.env.NEXT_PUBLIC_ADS_ID || getBrand().adsId;
}

export function getWhatsAppLink(message?: string): string {
  return buildWhatsAppUrl(getWhatsAppNumber(), message);
}