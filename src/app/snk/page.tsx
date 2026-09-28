import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { SeoPageLayout, PageCta } from '@/components/seo-page-layout';
import { AlertTriangle, Ban, CheckCircle2, Clock, FileText, Wallet } from 'lucide-react';
import { getBrand, getWhatsAppLink } from '@/brands';
import { generateSeoMetadata } from '@/lib/seo';

const brand = getBrand();

export const metadata: Metadata = generateSeoMetadata(
  'Syarat & Ketentuan',
  `Syarat & Ketentuan Sewa Mobil ${brand.city} | ${brand.legalName}`,
  `Syarat dan ketentuan sewa mobil ${brand.city}: dokumen yang dibutuhkan, deposit, aturan pemakaian, tanggung jawab kerusakan, dan pembatalan sewa. Bacalah sebelum menyewa unit ${brand.shortName}.`,
  '/snk'
);

const syarat = [
  'Kartu Tanda Penduduk (KTP) asli yang masih berlaku.',
  'Surat Izin Mengendarai (SIM A) asli dan aktif.',
  'Umur penyewa minimal 21 tahun.',
  'Menyetorkan deposit sesuai ketentuan unit yang disewa.',
  'Menyetor DP atau biaya sewa sesuai kesepakatan.',
  'Menyetorkan identitas asli selama masa sewa sebagai jaminan.',
];

const aturan = [
  'Mobil digunakan untuk keperluan pribadi dan perjalanan yang wajar.',
  'Tidak boleh dipakai untuk aktivitas ilegal atau berbahaya.',
  'Tidak boleh disewakan kembali kepada pihak lain.',
  'Tidak boleh dibawa ke luar wilayah yang disepakati tanpa izin admin.',
  'Bahan bakar dan aki harus dalam kondisi cukup selama masa sewa.',
  'Unit harus dikembalikan dalam kondisi sama seperti saat diterima.',
];

const tanggungJawab = [
  'Kerusakan akibat kelalaian penyewa menjadi tanggung jawab penyewa.',
  'Keterlambatan pengembelian dikenakan denda sesuai ketentuan.',
  'BBM, tol, dan parkir ditanggung oleh penyewa.',
  'Deposit dikembalikan setelah unit diperiksa dan dinyatakan baik.',
  'Kondisi unit saat serah terima didokumentasikan bersama.',
];

const pembatalan = [
  'Pembatalan di bawah 24 jam sebelum jadwal sewa dikenakan deposit penuh.',
  'Pembatalan di atas 24 jam sebelum jadwal sewa, deposit dikembalikan penuh.',
  'Jika unit tidak tersedia, DP dikembalikan penuh.',
];

export default function SnkPage() {
  const whatsappUrl = getWhatsAppLink(
    `Halo ${brand.shortName}, saya mau tanya detail syarat dan ketentuan sewa mobil.`
  );

  const blocks = [
    { icon: FileText, title: 'Syarat Penyewa', items: syarat },
    { icon: CheckCircle2, title: 'Aturan Pemakaian', items: aturan },
    { icon: Wallet, title: 'Tanggung Jawab Penyewa', items: tanggungJawab },
    { icon: Clock, title: 'Pembatalan & Pengembalian', items: pembatalan },
  ];

  return (
    <PageShell>
      <SeoPageLayout
        eyebrow="Legal"
        title="Syarat & Ketentuan"
        description={`Ketentuan sewa mobil ${brand.city} dari ${brand.shortName}. Dengan menyewa, Anda dianggap menyetujui seluruh poin di bawah ini.`}
        breadcrumbs={[{ label: 'Syarat & Ketentuan' }]}
      >
        <div className="mb-10 flex gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed">
            Halaman ini adalah ringkasan ketentuan umum. Ketentuan final yang berlaku
            adalah yang disepakati bersama admin di saat pemesanan. Jika ada perbedaan,
            tanyakan kepada admin sebelum transaksi berlanjut.
          </p>
        </div>

        <div className="space-y-10">
          {blocks.map((block) => (
            <section key={block.title}>
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/25">
                  <block.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold">{block.title}</h2>
              </div>
              <ul className="space-y-2.5 rounded-2xl border bg-card p-6">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <Ban className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Terakhir diperbarui{' '}
          {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })} &middot;{' '}
          {brand.legalName}
        </p>
      </SeoPageLayout>

      <PageCta
        title="Setuju dengan ketentuannya?"
        description={`Cek ketersediaan unit dan konfirmasi detail sewa ${brand.shortName} melalui WhatsApp.`}
        ctaHref={whatsappUrl}
        secondaryLabel="Baca FAQ"
        secondaryHref="/faq"
      />
    </PageShell>
  );
}
