export interface Villa {
  id: string;
  name: string;
  code: string;
  bedrooms: number;
  maxGuests: number;
  location: string;
  district: string;
  image: string;
  badge?: string;
  highlights: string[];
  description: string;
  amenities: string[];
}

export interface Booking {
  id: string;
  villaId: string;
  villaName: string;
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  specialRequests?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'confirmed' | 'cancelled';
}

export interface SiteConfig {
  brandName: string;
  brandSubtitle: string;
  tagline: string;
  description: string;
  adminPin: string;
  contact: {
    hotline: string;
    whatsapp: string;
    email: string;
    address: string;
    openingHours: string;
    instagram?: string;
    facebook?: string;
  };
  villas: Villa[];
}

