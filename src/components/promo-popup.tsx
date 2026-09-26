'use client';

import { useState, useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getBrand } from '@/brands';
import { getWhatsAppLink } from '@/brands';
import { cn } from '@/lib/utils';

export function PromoPopup() {
  const brand = getBrand();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!brand.promoPopup.enabled) return;
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('promo-dismissed');
      const dismissedTime = dismissed ? parseInt(dismissed, 10) : 0;
      const now = Date.now();
      if (!dismissed || now - dismissedTime > 24 * 60 * 60 * 1000) {
        setIsOpen(true);
      }
    }, brand.promoPopup.delayMs);
    return () => clearTimeout(timer);
  }, [brand.promoPopup.enabled, brand.promoPopup.delayMs]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('promo-dismissed', Date.now().toString());
  };

  if (!isOpen || !brand.promoPopup.enabled) return null;

  const whatsappUrl = getWhatsAppLink('Halo RMC, saya ingin info promo & ketersediaan mobil hari ini.');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0" role="dialog" aria-modal="true" aria-labelledby="promo-title">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />
      <Card className="relative w-full max-w-md animate-scale-in bg-card border-primary/20 shadow-glow overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />
        <div className="p-6">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Tutup promo"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-5 w-5 text-primary" />
            <Badge variant="default" className="text-xs">
              {brand.promoPopup.eyebrow}
            </Badge>
          </div>
          <h2 id="promo-title" className="font-display font-bold text-xl sm:text-2xl mb-2">
            {brand.promoPopup.title}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">{brand.promoPopup.description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto h-11 font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                {brand.promoPopup.primaryCta}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-11 font-semibold border-2 border-primary text-primary hover:bg-primary/10">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                {brand.promoPopup.secondaryCta}
              </a>
            </Button>
          </div>
          {brand.promoPopup.footnote && (
            <p className="mt-4 text-center text-xs text-muted-foreground">{brand.promoPopup.footnote}</p>
          )}
        </div>
      </Card>
    </div>
  );
}