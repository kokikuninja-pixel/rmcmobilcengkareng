export interface Car {
  id: string;
  name: string;
  segment: 'MPV' | 'SUV' | 'Premium' | 'Minibus';
  seats: number;
  transmission: 'Matic' | 'Manual';
  price: number;
  feature: string;
  imageUrl: string;
  sceneImage?: string;
  imageHint: string;
  popular?: boolean;
}

export const carInventory: Car[] = [
  {
    id: 'toyota-avanza',
    name: 'Toyota Avanza',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    price: 350000,
    feature: 'MPV andalan untuk keluarga, irit dan nyaman di dalam kota maupun menuju bandara.',
    imageUrl: '/images/Toyota_Avanza_front_view_20260919114928.jpeg',
    sceneImage: '/images/Toyota_Avanza_parked_in_driveway_20260919114928.jpeg',
    imageHint: 'Toyota Avanza',
    popular: true,
  },
  {
    id: 'toyota-calya',
    name: 'Toyota Calya',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    price: 300000,
    feature: 'MPV ringkas dengan harga paling bersahabat untuk perjalanan harian & antar kota.',
    imageUrl: '/images/Toyota_Calya_in_photo_studio_20260919114928.jpeg',
    sceneImage: '/images/Toyota_Calya_parked_on_street_20260919114928.jpeg',
    imageHint: 'Toyota Calya',
  },
  {
    id: 'daihatsu-sigra',
    name: 'Daihatsu Sigra',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    price: 300000,
    feature: 'MPV irit dan lincah, pas untuk penjelajahan kota maupun ke bandara Soetta.',
    imageUrl: '/images/Silver_Daihatsu_Sigra_in_studio_20260919114928.jpeg',
    sceneImage: '/images/Daihatsu_Sigra_parked_at_cafe_20260919114928.jpeg',
    imageHint: 'Daihatsu Sigra',
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    segment: 'SUV',
    seats: 7,
    transmission: 'Matic',
    price: 1200000,
    feature: 'SUV tangguh untuk wisata keluarga ke Anyer, Carita, atau pegunungan.',
    imageUrl: '/images/Toyota_Fortuner_in_studio_20260919114928.jpeg',
    sceneImage: '/images/Toyota_Fortuner_parked_on_road_20260919114928.jpeg',
    imageHint: 'Toyota Fortuner',
  },
  {
    id: 'toyota-innova-zenix',
    name: 'Toyota Innova Zenix',
    segment: 'Premium',
    seats: 7,
    transmission: 'Matic',
    price: 800000,
    feature: 'MPV premium hybrid, nyaman untuk perjalanan jauh keluarga besar.',
    imageUrl: '/images/Toyota_Innova_Zenix_front_view_20260919114928.jpeg',
    sceneImage: '/images/Toyota_Innova_Zenix_parked_20260919114928.jpeg',
    imageHint: 'Toyota Innova Zenix',
  },
  {
    id: 'honda-brio',
    name: 'Honda Brio',
    segment: 'MPV',
    seats: 5,
    transmission: 'Matic',
    price: 250000,
    feature: 'City car irit & lincah, ideal untuk solo traveler atau pasangan ke bandara.',
    imageUrl: '/images/Honda_Brio_front_view_20260919114928.jpeg',
    sceneImage: '/images/Honda_Brio_parked_20260919114928.jpeg',
    imageHint: 'Honda Brio',
  },
];