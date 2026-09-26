# RMC Rental Mobil Cengkareng

Landing page rental mobil untuk area Cengkareng, Jakarta Barat - dekat Bandara Soekarno-Hatta.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom components
- **Forms**: React Hook Form + Zod
- **Fonts**: Inter + Plus Jakarta Sans (Google Fonts)
- **Icons**: Lucide React
- **Analytics**: Google Tag Manager
- **Deployment**: Vercel/Netlify ready

## Brand Configuration

Brand konfigurasi berada di `src/brands/rmc.ts`. Mendukung multi-brand (RMB, RMC, RMJP, Nethen).

## Development

```bash
# Install dependencies
npm install

# Run development server (port 9003)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_BRAND=rmc
NEXT_PUBLIC_SITE_URL=https://rentalmobilcengkarengrmc.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6282329616166
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
NEXT_PUBLIC_ADS_ID=AW-XXXXXX
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── brands/              # Brand configurations
│   ├── index.ts         # Brand registry & helpers
│   ├── rmb.ts           # Bandung brand (reference)
│   ├── rmc.ts           # Cengkareng brand (active)
│   └── types.ts         # TypeScript types
├── components/
│   ├── ui/              # Reusable UI components
│   ├── icons/           # SVG icons
│   ├── header.tsx       # Navigation header
│   ├── footer.tsx       # Site footer
│   ├── car-landing.tsx  # Main landing page sections
│   ├── car-card.tsx     # Car display card
│   ├── order-form.tsx   # Booking form
│   ├── floating-action-button.tsx
│   ├── promo-popup.tsx
│   └── json-ld.tsx      # Schema.org JSON-LD
├── lib/
│   ├── cars.ts          # Car inventory data
│   ├── seo.ts           # SEO metadata & JSON-LD builders
│   └── utils.ts         # Utility functions
└── public/
    └── images/          # Static images
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (meta tags, Open Graph, JSON-LD)
- ✅ WhatsApp integration for booking
- ✅ Floating WhatsApp button
- ✅ Promo popup with localStorage dismiss
- ✅ Car inventory with filtering
- ✅ Multi-step booking form
- ✅ FAQ accordion
- ✅ Location-based landing sections
- ✅ Analytics ready (GTM, Google Ads)
- ✅ Dark mode support (CSS variables)
- ✅ Accessible (ARIA, semantic HTML)

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## License

MIT