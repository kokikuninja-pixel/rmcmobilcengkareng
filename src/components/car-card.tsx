'use client';

import Image from 'next/image';
import { Car, Settings, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/brands';
import { PRICE_LABEL, type Car as CarType } from '@/lib/cars';

interface CarCardProps {
  car: CarType;
}

export function CarCard({ car }: CarCardProps) {
  const whatsappUrl = getWhatsAppLink(
    `Halo RMC, saya ingin sewa ${car.name}. Mohon info ketersediaan & harga terbaik.`
  );

  const segmentColors: Record<string, string> = {
    MPV: 'bg-blue-100 text-blue-700',
    SUV: 'bg-green-100 text-green-700',
    Premium: 'bg-purple-100 text-purple-700',
    Minibus: 'bg-orange-100 text-orange-700',
  };

  return (
    <Card className="flex flex-col overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={car.imageUrl}
          alt={`${car.name} - ${car.segment} RMC`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={75}
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          data-ai-hint={car.imageHint}
        />
        {car.popular && (
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
            Favorit
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg leading-tight">{car.name}</h3>
          <Badge variant="outline" className={segmentColors[car.segment]}>
            {car.segment}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-1">{car.feature}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {car.seats} Penumpang</span>
          <span className="flex items-center gap-1"><Settings className="h-3.5 w-3.5" /> {car.transmission}</span>
        </div>
        <div className="flex items-center justify-between gap-2 pt-3 border-t">
          <span className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wide text-muted-foreground">Harga</span>
            <span className="font-display font-bold text-base text-primary">{PRICE_LABEL}</span>
          </span>
          <Button asChild size="sm" className="h-9 px-3 font-semibold">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Sewa
              <Car className="w-3.5 h-3.5 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}