import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/rmcmobil.png"
      alt="RMC Rental Mobil Cengkareng"
      width={512}
      height={512}
      priority={priority}
      className={cn('h-10 w-auto object-contain', className)}
    />
  );
}
