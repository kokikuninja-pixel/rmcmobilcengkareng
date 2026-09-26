'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/brands';
import { cn } from '@/lib/utils';

export function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappUrl = getWhatsAppLink('Halo RMC, saya ingin sewa mobil di Cengkareng. Mohon info ketersediaan unit.');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isExpanded && (
        <>
          <Button
            asChild
            variant="default"
            size="sm"
            className={cn(
              'h-10 px-4 text-sm font-semibold shadow-lg animate-slide-in-right',
              'bg-primary text-primary-foreground hover:bg-primary/90'
            )}
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className={cn(
              'h-10 px-4 text-sm font-semibold shadow-lg animate-slide-in-right',
              'border-2 border-border bg-background hover:bg-muted'
            )}
          >
            <a href="/#pesan" className="flex items-center gap-2">
              Form Pesan
            </a>
          </Button>
        </>
      )}
      <Button
        variant="default"
        size="icon"
        className={cn(
          'h-14 w-14 rounded-full shadow-card-hover bg-primary text-primary-foreground',
          'hover:bg-primary/90 transition-all duration-300',
          isExpanded && 'rotate-45'
        )}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Tutup menu WhatsApp' : 'Buka menu WhatsApp'}
      >
        {isExpanded ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </Button>
    </div>
  );
}