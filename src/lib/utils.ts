import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppMessage(carName?: string, pickupDate?: string, returnDate?: string): string {
  let message = 'Halo RMC, saya ingin sewa mobil';
  if (carName) message += ` ${carName}`;
  message += ' di Cengkareng.';
  if (pickupDate) message += ` Tanggal ambil: ${pickupDate}.`;
  if (returnDate) message += ` Tanggal kembali: ${returnDate}.`;
  message += ' Mohon info ketersediaan & harga terbaik.';
  return message;
}