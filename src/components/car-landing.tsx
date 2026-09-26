import Image from 'next/image';
import Link from 'next/link';
import { CarCard } from '@/components/car-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { OrderForm } from '@/components/order-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  MessageCircle,
  Ship,
  ShieldCheck,
  Users,
  FileCheck,
  Wrench,
  MapPin,
  PhoneCall,
  Banknote,
} from 'lucide-react';
import { carInventory } from '@/lib/cars';
import { getWhatsAppLink } from '@/brands';
import { getBrand } from '@/brands';

const carFaqs = [
  {
    question: 'Berapa harga sewa mobil?',
    answer:
      'Untuk tarif terkini, silakan tanya admin melalui WhatsApp. Kami akan memberi tahu harga terbaik sesuai unit, durasi, dan kebutuhan Anda.',
  },
  {
    question: 'Apakah sistem sewanya tanpa supir?',
    answer:
      'Ya, semua tarif adalah tarif lepas kunci (tanpa supir). Anda mengemudi sendiri, bebas mengatur rute dan waktu sesuai keinginan.',
  },
  {
    question: 'Syarat apa saja untuk menyewa mobil?',
    answer:
      'Cukup bawa KTP dan SIM A yang masih aktif saat mengambil unit. Untuk mobil tertentu, kami memberlakukan uang jaminan (deposit) yang dikembalikan setelah unit kembali. Unit diambil di lokasi kami sesuai jam operasional.',
  },
  {
    question: 'Apakah diperbolehkan keluar kota?',
    answer:
      'Boleh. Mobil standar diperbolehkan dipakai di sekitar Jakarta & Tangerang. Untuk perjalanan antar kota atau antar pulau, beri tahu tim kami terlebih dahulu agar dapat diatur sesuai ketentuan.',
  },
  {
    question: 'Bagaimana cara memesan?',
    answer:
      'Pilih unit favorit Anda, lalu klik tombol Sewa. Tim kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi ketersediaan unit dan pembayaran.',
  },
];

const keunggulan = [
  {
    icon: ShieldCheck,
    title: 'Unit Terawat',
    description: 'Seluruh mobil servis rutin, pajak lengkap, dan asuransi aktif.',
  },
  {
    icon: Users,
    title: 'Lepas Kunci Tanpa Supir',
    description: 'Ambil kunci, langsung jalan. Semua unit disewakan secara self-drive, bebas dan fleksibel.',
  },
  {
    icon: Ship,
    title: 'Harga Tanya Admin',
    description: 'Konfirmasi tarif terbaik langsung lewat WhatsApp, tanpa biaya tersembunyi.',
  },
  {
    icon: FileCheck,
    title: 'Proses Cepat',
    description: 'Pesan via WhatsApp, unit siap tanpa birokrasi berbelit.',
  },
  {
    icon: Banknote,
    title: 'Harga Transparan',
    description: 'Tanpa hidden cost. Info harga lengkap dan jelas, konfirmasi lewat admin.',
  },
  {
    icon: Wrench,
    title: 'Dukungan 24/7',
    description: 'Bantuan darurat di jalan tersedia kapan pun Anda membutuhkan.',
  },
];

const cengkarengSpots = [
  {
    name: 'Bandara Soekarno-Hatta',
    description: 'Bandara internasional utama Indonesia, akses mudah dari Cengkareng.',
    imageUrl: '/images/Soekarno_Hatta_Airport_20260919143051.jpeg',
    hint: 'bandara soekarno hatta terminal',
  },
  {
    name: 'Mall Ciputra',
    description: 'Pusat belanja & hiburan besar di CitraRaya, dekat Cengkareng.',
    imageUrl: '/images/Mall_Ciputra_CitraRaya_20260919143051.jpeg',
    hint: 'mall ciputra citraraya tangerang',
  },
  {
    name: 'Pantai Indah Kapuk (PIK)',
    description: 'Area pesisir populer dengan kuliner, cafe, dan pemandangan laut.',
    imageUrl: '/images/PIK_Pantai_Indah_Kapuk_20260919143051.jpeg',
    hint: 'pantai indah kapuk PIK jakarta',
  },
  {
    name: 'Kota Tua Jakarta',
    description: 'Kawasan heritage dengan bangunan kolonial, museum, dan kuliner khas.',
    imageUrl: '/images/Kota_Tua_Jakarta_20260919143051.jpeg',
    hint: 'kota tua jakarta fatahillah museum',
  },
  {
    name: 'Anyer & Carita Beach',
    description: 'Destinasi pantai favorit di Banten, cocok liburan keluarga.',
    imageUrl: '/images/Anyer_Carita_Beach_20260919143051.jpeg',
    hint: 'anyer carita beach banten',
  },
  {
    name: 'Taman Mini Indonesia Indah',
    description: 'Taman rekreasi budaya nusantara lengkap dengan museum & keagamaan.',
    imageUrl: '/images/Taman_Mini_Indonesia_Indah_20260919143051.jpeg',
    hint: 'taman mini indonesia indah jakarta',
  },
];

const proses = [
  {
    step: '01',
    title: 'Pilih Unit',
    description: 'Tentukan mobil yang cocok untuk kebutuhan Anda.',
  },
  {
    step: '02',
    title: 'Hubungi Kami',
    description: 'Chat WhatsApp dan konfirmasi ketersediaan unit serta tanggal.',
  },
  {
    step: '03',
    title: 'Selesaikan Pembayaran',
    description: 'Lakukan DP untuk mengunci unit di tanggal pilihan Anda.',
  },
  {
    step: '04',
    title: 'Ambil & Jalan',
    description: 'Ambil unit di lokasi kami. Selamat berkendara!',
  },
];

export function CarLanding() {
  const brand = getBrand();
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya ingin sewa mobil di ${brand.city}. Mohon info ketersediaan unit.`
  );

  return (
    <>
      {/* Hero - Cengkareng reference */}
      <section className="relative w-full min-h-[600px] min-h-[88svh] lg:min-h-[92svh] flex flex-col overflow-hidden -mt-16 md:-mt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/Hero_White_car_driving_on_road_20260919164146.webp"
            alt={`Mobil melaju di jalan menuju ${brand.city} dengan pemandangan kota`}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="container px-4 md:px-6 lg:px-8 pt-24 md:pt-28 pb-8">
            <div className="max-w-3xl">
              <h1 className="font-display font-bold text-[30px] leading-[1.05] sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] text-white drop-shadow-lg text-balance">
                Jelajahi {brand.city}
                <br />
                dengan Mudah, dari
                <br />
                Awal hingga Akhir.
              </h1>
              <p className="mt-4 md:mt-6 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                Temukan keindahan {brand.city} & sekitarnya bersama layanan rental mobil terpercaya. Cocok untuk keluarga, wisatawan,
                hingga perjalanan bisnis. Kami pastikan perjalanan nyaman dan berkesan.
              </p>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-full bg-white text-black hover:bg-white/90 px-6 font-semibold shadow-lg"
                >
                  <Link href="#pesan" className="flex items-center">
                    Sewa Sekarang
                    <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-11 rounded-full text-white hover:bg-white/10 hover:text-white px-6 font-medium"
                >
                  <Link href="#armada">Lihat Armada</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats frosted glass */}
        <div className="relative z-10 container px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
          <div className="grid grid-cols-3 gap-0 bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl px-2 sm:px-6 md:px-8 py-5 md:py-6">
            <div className="text-center md:text-left px-2 sm:px-4 border-r border-white/15 last:border-0">
              <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white">50+</p>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/70 mt-1">Armada Tersedia</p>
            </div>
            <div className="text-center md:text-left px-2 sm:px-4 border-r border-white/15 last:border-0">
              <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white">15Rb+</p>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/70 mt-1">Pelanggan Puas</p>
            </div>
            <div className="text-center md:text-left px-2 sm:px-4">
              <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white">200Rb+</p>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/70 mt-1">Kilometer Ditempuh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Kenapa Pilih <span className="text-primary">{brand.shortName}?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kepercayaan ribuan pelanggan adalah prioritas kami. Nikmati kemudahan sewa
              mobil tanpa ribet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keunggulan.map((item) => (
              <Card
                key={item.title}
                className="p-6 bg-card border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Armada */}
      <section id="armada" className="py-16 md:py-24 scroll-mt-20">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Pilihan Armada <span className="text-primary">Mobil Kami</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              MPV keluarga, SUV tangguh, hingga MPV premium. Semua unit terawat dan siap
              pakai.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {carInventory.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="h-12 px-8 font-semibold">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <PhoneCall className="w-5 h-5 mr-2" />
                Tanya Unit Lain
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Jelajahi Cengkareng/Jakarta */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Jelajahi <span className="text-primary">{brand.city} & Sekitarnya</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sebebas roda kemudi Anda. Beberapa spot favorit yang sayang untuk
              dilewatkan bersama {brand.shortName}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cengkarengSpots.map((spot) => (
              <Card
                key={spot.name}
                className="group overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={spot.imageUrl}
                    alt={`${spot.name} - destinasi wisata ${brand.city}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={spot.hint}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg mb-1">{spot.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {spot.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proses */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Cara Sewa <span className="text-primary">Gampang</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empat langkah sederhana dari memilih unit hingga mobil siap meluncur.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proses.map((item) => (
              <div
                key={item.step}
                className="relative bg-card rounded-2xl p-6 border border-transparent hover:border-primary/50 transition-all duration-300"
              >
                <p className="font-display font-extrabold text-5xl text-primary/25 mb-4">
                  {item.step}
                </p>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Pertanyaan <span className="text-primary">Umum</span>
            </h2>
          </div>
          <Card className="max-w-3xl mx-auto p-6 sm:p-10">
            <Accordion type="single" collapsible className="w-full">
              {carFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`car-faq-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Order Form */}
      <section id="pesan" className="py-12 md:py-24 bg-muted/50 scroll-mt-20">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Pesan Sekarang
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground px-1">
              Lengkapi formulir di bawah ini, dan tim kami akan segera menghubungi Anda
              melalui WhatsApp.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 shadow-lg bg-card mb-20 md:mb-0">
            <Suspense fallback={<Skeleton className="h-[800px] w-full" />}>
              <OrderForm />
            </Suspense>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <div className="relative bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        <div className="container px-4 relative text-center max-w-3xl mx-auto py-16 md:py-24">
          <Badge className="mb-6 bg-primary text-primary-foreground text-sm px-4 py-1.5">
            Kasih tahu kami kebutuhan Anda
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-background leading-tight">
            Siap Menjelajah {brand.city} <span className="text-primary">Pakai Mobil?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-background/70 max-w-xl mx-auto">
            Pesan sekarang, tim kami merespons cepat via WhatsApp. Unit terbatas, amankan
            jadwal Anda hari ini!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
            <Button asChild size="lg" className="h-12 sm:px-8 font-semibold bg-primary text-primary-foreground hover:bg-background hover:text-foreground sm:animate-pulse-glow">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Pesan via WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 sm:px-8 font-semibold border-2 border-background/30 text-background hover:bg-background hover:text-foreground">
              <Link href="#armada">
                <FileCheck className="w-5 h-5 mr-2" />
                Lihat Armada
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}