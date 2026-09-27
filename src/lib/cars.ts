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
];