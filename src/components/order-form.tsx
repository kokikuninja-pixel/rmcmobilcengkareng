'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { getWhatsAppLink } from '@/brands';
import { cn } from '@/lib/utils';
import { Car, Calendar, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  phone: z.string().min(10, 'Nomor WhatsApp tidak valid'),
  email: z.string().email('Email tidak valid').optional().or(z.literal('')),
  car: z.string().min(1, 'Pilih mobil'),
  pickupDate: z.string().min(1, 'Tanggal ambil wajib diisi'),
  returnDate: z.string().min(1, 'Tanggal kembali wajib diisi'),
  pickupLocation: z.string().min(2, 'Lokasi ambil wajib diisi'),
  returnLocation: z.string().min(2, 'Lokasi kembalikan wajib diisi'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const carOptions = [
  { value: 'toyota-avanza', label: 'Toyota Avanza (7 Kursi, Matic)' },
  { value: 'toyota-calya', label: 'Toyota Calya (7 Kursi, Matic)' },
  { value: 'daihatsu-sigra', label: 'Daihatsu Sigra (7 Kursi, Matic)' },
  { value: 'toyota-fortuner', label: 'Toyota Fortuner (7 Kursi, Matic)' },
  { value: 'toyota-innova-zenix', label: 'Toyota Innova Zenix (7 Kursi, Matic)' },
  { value: 'honda-brio', label: 'Honda Brio (5 Kursi, Matic)' },
  { value: 'lainnya', label: 'Lainnya / Tanya Admin' },
];

const locationOptions = [
  { value: 'kantor-rmc', label: 'Kantor RMC Cengkareng' },
  { value: 'bandara-soetta', label: 'Bandara Soekarno-Hatta (Terminal 1/2/3)' },
  { value: 'hotel-cengkareng', label: 'Hotel di Area Cengkareng' },
  { value: 'durikosambi', label: 'Area Duri Kosambi' },
  { value: 'kapuk', label: 'Area Kapuk' },
  { value: 'kembangan', label: 'Area Kembangan' },
  { value: 'tangerang', label: 'Area Tangerang' },
  { value: 'puri-kembangan', label: 'Area Puri Kembangan' },
  { value: 'joglo', label: 'Area Joglo' },
  { value: 'meruya', label: 'Area Meruya' },
  { value: 'lainnya', label: 'Lainnya (sebutkan di catatan)' },
];

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      car: 'toyota-avanza',
      pickupLocation: 'kantor-rmc',
      returnLocation: 'kantor-rmc',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const message = `Halo RMC, saya ingin sewa mobil:
Nama: ${data.name}
WhatsApp: ${data.phone}
${data.email ? `Email: ${data.email}` : ''}
Mobil: ${carOptions.find(c => c.value === data.car)?.label || data.car}
Ambil: ${data.pickupDate} di ${locationOptions.find(l => l.value === data.pickupLocation)?.label || data.pickupLocation}
Kembali: ${data.returnDate} di ${locationOptions.find(l => l.value === data.returnLocation)?.label || data.returnLocation}
${data.message ? `Catatan: ${data.message}` : ''}`;

      const whatsappUrl = getWhatsAppLink(message);
      window.open(whatsappUrl, '_blank');
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Card className="max-w-2xl mx-auto p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">Pesan Terkirim!</h3>
        <p className="text-muted-foreground mb-6">Kami telah membuka WhatsApp untuk melanjutkan pemesanan.</p>
        <Button onClick={() => setSubmitSuccess(false)} className="w-full sm:w-auto">
          Pesan Lagi
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input
            id="name"
            placeholder="Nama lengkap sesuai KTP/SIM"
            {...form.register('name')}
            error={form.formState.errors.name?.message}
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Nomor WhatsApp</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="08xxxxxxxxxx"
            {...form.register('phone')}
            error={form.formState.errors.phone?.message}
          />
          {form.formState.errors.phone && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email (Opsional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@contoh.com"
            {...form.register('email')}
            error={form.formState.errors.email?.message}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="car">Pilih Mobil</Label>
          <Select onValueChange={(value) => form.setValue('car', value)} defaultValue={form.getValues('car')}>
            <SelectTrigger id="car" error={!!form.formState.errors.car}>
              <SelectValue placeholder="Pilih mobil" />
            </SelectTrigger>
            <SelectContent>
              {carOptions.map((car) => (
                <SelectItem key={car.value} value={car.value}>
                  {car.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.car && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.car.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="pickupDate">Tanggal & Waktu Ambil</Label>
          <Input
            id="pickupDate"
            type="datetime-local"
            {...form.register('pickupDate')}
            error={form.formState.errors.pickupDate?.message}
          />
          {form.formState.errors.pickupDate && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.pickupDate.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="returnDate">Tanggal & Waktu Kembali</Label>
          <Input
            id="returnDate"
            type="datetime-local"
            {...form.register('returnDate')}
            error={form.formState.errors.returnDate?.message}
          />
          {form.formState.errors.returnDate && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.returnDate.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="pickupLocation">Lokasi Ambil Mobil</Label>
          <Select onValueChange={(value) => form.setValue('pickupLocation', value)} defaultValue={form.getValues('pickupLocation')}>
            <SelectTrigger id="pickupLocation" error={!!form.formState.errors.pickupLocation}>
              <SelectValue placeholder="Pilih lokasi ambil" />
            </SelectTrigger>
            <SelectContent>
              {locationOptions.map((loc) => (
                <SelectItem key={loc.value} value={loc.value}>
                  {loc.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.pickupLocation && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.pickupLocation.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="returnLocation">Lokasi Kembalikan Mobil</Label>
          <Select onValueChange={(value) => form.setValue('returnLocation', value)} defaultValue={form.getValues('returnLocation')}>
            <SelectTrigger id="returnLocation" error={!!form.formState.errors.returnLocation}>
              <SelectValue placeholder="Pilih lokasi kembalikan" />
            </SelectTrigger>
            <SelectContent>
              {locationOptions.map((loc) => (
                <SelectItem key={loc.value} value={loc.value}>
                  {loc.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.returnLocation && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.returnLocation.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Catatan Tambahan (Opsional)</Label>
        <Textarea
          id="message"
          placeholder="Contoh: Butuh kursi bayi, antar-jemput bandara, dll."
          rows={3}
          {...form.register('message')}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Mengalihkan ke WhatsApp...
          </>
        ) : (
          <>
            <Phone className="w-5 h-5 mr-2" />
            Kirim Pesanan ke WhatsApp
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Dengan mengirim formulir ini, Anda setuju kami menghubungi Anda via WhatsApp untuk konfirmasi pemesanan.
      </p>
    </form>
  );
}