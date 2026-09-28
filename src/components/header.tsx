'use client';

import Link from 'next/link';
import { Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tiktok } from '@/components/icons/tiktok';
import { getBrand } from '@/brands';

export function Header() {
  const brand = getBrand();
  const navLinks = brand.navLinks;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isHome = mounted ? pathname === '/' : false;
  const isTransparent = isHome && !hasScrolled && !isMenuOpen;

  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        const header = document.querySelector('header');
        if (header instanceof HTMLElement) header.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const header = document.querySelector('header');
      if (header instanceof HTMLElement) header.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const header = document.querySelector('header');
      if (header instanceof HTMLElement) header.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}`;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300',
        isTransparent
          ? 'bg-black/25 border-b border-white/10 supports-[backdrop-filter]:bg-black/20'
          : 'bg-background/95 border-b',
        isTransparent ? 'border-white/10' : hasScrolled ? 'shadow-md border-border/20' : 'shadow-none border-transparent'
      )}
    >
      <div className="container flex h-16 items-center gap-2 px-4 md:h-20 md:gap-4">
        <div className="flex shrink-0">
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)} aria-label="Beranda RMC">
            <span
              className={cn(
                'flex items-center justify-center transition-colors',
                isTransparent
                  ? 'rounded-xl bg-black/40 p-1 shadow-md ring-1 ring-primary/30'
                  : 'bg-transparent p-0'
              )}
            >
              <Logo className="h-9 md:h-11" priority />
            </span>
          </Link>
        </div>

        <nav
          className={cn('hidden lg:flex lg:items-center lg:gap-5 xl:gap-6 text-sm', isTransparent ? 'text-white' : 'text-foreground')}
          aria-label="Navigasi utama"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors underline-offset-4 hover:underline',
                isTransparent ? 'text-white/85 hover:text-white' : 'text-foreground/80 hover:text-primary'
              )}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-1.5 sm:gap-2">
          <Button
            asChild
            size="sm"
            className={cn(
              'h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm font-semibold',
              isTransparent && 'bg-white text-black hover:bg-white/90 border border-white'
            )}
            variant={isTransparent ? 'secondary' : 'default'}
          >
            <Link href="/#pesan" onClick={(e) => handleLinkClick(e, '/#pesan')}>
              Sewa Sekarang
            </Link>
          </Button>
          {brand.social.instagram && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className={cn(
                'hidden md:inline-flex',
                isTransparent ? 'text-white hover:bg-white/20 hover:text-white' : 'text-primary hover:bg-primary/20'
              )}
            >
              <Link href={brand.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram RMC">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {brand.social.tiktok && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className={cn(
                'hidden md:inline-flex',
                isTransparent ? 'text-white hover:bg-white/20 hover:text-white' : 'text-primary hover:bg-primary/20'
              )}
            >
              <Link href={brand.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok RMC">
                <Tiktok className="h-5 w-5" />
              </Link>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'h-10 w-10 lg:hidden shrink-0',
              isTransparent ? 'text-white hover:bg-white/20 hover:text-white' : 'text-primary hover:bg-primary/20'
            )}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={cn(
          'lg:hidden absolute inset-x-0 top-full z-50 border-b bg-background shadow-lg transition-all',
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none',
          'max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain'
        )}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen ? true : undefined}
      >
        <nav className="flex flex-col gap-1 p-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]" aria-label="Navigasi mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary active:bg-primary/15"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}

          <div className="my-2 h-px bg-border" />

          <div className="grid grid-cols-2 gap-2 px-1">
            {brand.social.instagram && (
              <Link
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-3 text-sm font-medium hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="h-4 w-4" /> Instagram
              </Link>
            )}
            {brand.social.tiktok && (
              <Link
                href={brand.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-3 text-sm font-medium hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                <Tiktok className="h-4 w-4" /> TikTok
              </Link>
            )}
          </div>

          <Button asChild size="lg" className="mt-3 h-12 w-full text-base font-semibold">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Hubungi WhatsApp
            </a>
          </Button>
        </nav>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <button
          aria-label="Tutup menu"
          className="fixed inset-0 top-16 lg:top-20 bg-black/30 backdrop-blur-sm lg:hidden -z-10"
          onClick={() => setIsMenuOpen(false)}
          tabIndex={-1}
        />
      )}
    </header>
  );
}