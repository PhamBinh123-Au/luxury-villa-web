import { SiteConfig } from "@/types";

/**
 * =========================================================================
 * B VILLA - FILE CẤU HÌNH DỄ DÀNG TÙY CHỈNH (CONFIG FILE)
 * Bạn có thể tự do thay đổi tên, số điện thoại, email, mã PIN admin tại đây.
 * Mọi thay đổi trong file này sẽ tự động cập nhật lên toàn bộ website!
 * =========================================================================
 */
export const siteConfig: SiteConfig = {
  // Tên thương hiệu hiển thị trên web
  brandName: "B VILLA",
  brandSubtitle: "Luxury Private Collection",
  tagline: "Exclusive Coastal Sanctuaries in Da Nang",
  description:
    "Experience the pinnacle of coastal luxury at B Villa Collection. Modern architecture, private crystal pools, and personalized hospitality tailored for discerning travelers.",

  // Mã PIN để đăng nhập vào trang quản trị (/admin)
  // Mặc định là 8888, bạn có thể đổi thành bất kỳ số nào bạn muốn
  adminPin: "8888",

  // Thông tin liên hệ
  contact: {
    hotline: "+84 901 234 567",
    whatsapp: "+84 901 234 567",
    email: "concierge@bvilla-danang.com",
    address: "Son Tra Peninsula & Ngu Hanh Son, Da Nang City, Vietnam",
    openingHours: "24/7 Dedicated Concierge Service",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },

  // Danh sách 4 căn Villa (Đã gán chính xác theo ảnh và vị trí)
  villas: [
    {
      id: "villa-b1",
      code: "B1",
      name: "B1 Luxury Pool Villa",
      bedrooms: 4,
      maxGuests: 10,
      location: "Thanh Vinh 3, Son Tra",
      district: "Son Tra Peninsula",
      image: "/images/villa-b1.jpg",
      badge: "Signature Collection",
      highlights: [
        "4 King Bedrooms with en-suite bathrooms",
        "Large private outdoor swimming pool",
        "Designer open kitchen & banquet dining table",
        "Lush tropical garden pathway & serene terrace",
      ],
      description:
        "B1 Villa offers an exquisite blend of modern architecture and tropical tranquility. Situated near the pristine coastline of Son Tra, this 4-bedroom villa features a panoramic private pool, gourmet kitchen, and expansive dining area perfect for memorable family holidays and group getaways.",
      amenities: [
        "Private Pool",
        "High-Speed Wi-Fi",
        "Smart TV & Sound System",
        "Fully Equipped Kitchen",
        "Daily Housekeeping",
        "Air Conditioning in all rooms",
        "Free Private Parking",
        "24/7 Guest Support",
      ],
    },
    {
      id: "villa-b2",
      code: "B2",
      name: "B2 Skylight Pool Villa",
      bedrooms: 4,
      maxGuests: 10,
      location: "Nuoc Man 3, Ngu Hanh Son",
      district: "Ngu Hanh Son",
      image: "/images/villa-b2.jpg",
      badge: "Modern Architecture",
      highlights: [
        "4 Deluxe Bedrooms with pool view windows",
        "Architectural skylight courtyard swimming pool",
        "Minimalist all-white luxury interior aesthetic",
        "Long formal dining area & breakfast bar",
      ],
      description:
        "Designed with refined minimalist elegance, B2 Villa stands out with its striking indoor courtyard pool illuminated by natural sunlight from an architectural skylight. Featuring 4 lavish bedrooms and sleek contemporary interiors, it is a serene oasis in the heart of Ngu Hanh Son.",
      amenities: [
        "Indoor Courtyard Pool",
        "Natural Skylight",
        "High-Speed Wi-Fi",
        "Modern Chef Kitchen",
        "Luxury Bedding & Linens",
        "Washing Machine & Dryer",
        "Smart Lock Access",
        "Airport Concierge on Request",
      ],
    },
    {
      id: "villa-b3",
      code: "B3",
      name: "B3 Boutique Pool Villa",
      bedrooms: 2,
      maxGuests: 5,
      location: "Nuoc Man 7, Ngu Hanh Son",
      district: "Ngu Hanh Son",
      image: "/images/villa-b3.jpg",
      badge: "Intimate Retreat",
      highlights: [
        "2 Private Master Bedrooms with pool access",
        "Waterfall-feature private plunge pool",
        "Cozy Scandinavian living space with plush sofa",
        "Full kitchen with modern laundry amenities",
      ],
      description:
        "A boutique sanctuary curated for intimate family stays or couples. B3 Villa features 2 exquisitely appointed bedrooms opening directly onto a private waterfall plunge pool. Experience effortless comfort with an open-plan lounge, ambient lighting, and complete home conveniences.",
      amenities: [
        "Private Plunge Pool",
        "Waterfall Feature",
        "High-Speed Wi-Fi",
        "Full Kitchen & Washing Machine",
        "Work Desk & Vanity Area",
        "Premium Toiletries",
        "Secure Keyless Entry",
        "Daily Maid Service",
      ],
    },
    {
      id: "villa-b4",
      code: "B4",
      name: "B4 Tropical Garden Villa",
      bedrooms: 4,
      maxGuests: 10,
      location: "Thanh Vinh 2, Son Tra",
      district: "Son Tra Peninsula",
      image: "/images/villa-b4.jpg",
      badge: "Pure Minimalist",
      highlights: [
        "4 Spacious Bedrooms with floor-to-ceiling glass",
        "Stunning white brick facade with vibrant bougainvillea",
        "Direct pool access from ground-floor suites",
        "Contemporary dining lounge with courtyard views",
      ],
      description:
        "Capturing the breezy coastal charm of Son Tra, B4 Villa enchants guests with its distinctive white breezeway facade adorned with blooming bougainvillea. With 4 sunny bedrooms overlooking a crystal blue pool, this residence is designed for seamless indoor-outdoor living.",
      amenities: [
        "Private Swimming Pool",
        "Outdoor Garden Terrace",
        "High-Speed Wi-Fi",
        "Modern Dining & Kitchen",
        "Smart Climate Control",
        "Curated Art & Lighting",
        "Family-Friendly Amenities",
        "24/7 Security Assistance",
      ],
    },
  ],
};

