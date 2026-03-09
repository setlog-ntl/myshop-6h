export interface MenuItem {
  name: string;
  nameEn?: string;
  desc: string;
  descEn?: string;
  price: string;
  category: string;
  emoji: string;
  imageUrl?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface BusinessHour {
  day: string;
  dayEn?: string;
  hours: string;
  hoursEn?: string;
  isHoliday?: boolean;
}

const DEMO_MENU: MenuItem[] = [
  {
    name: '\uBAA8\uB461\uC0AC\uC2DC\uBBF8',
    nameEn: 'Assorted Sashimi',
    desc: '\uC624\uB298\uC758 \uC2E0\uC120\uD55C \uC0DD\uC120 5\uC885, \uC170\uD504\uAC00 \uC9C1\uC811 \uC120\uBCC4',
    descEn: 'Daily selection of 5 fresh fish by our chef',
    price: '\u20A938,000',
    category: '\uC0AC\uC2DC\uBBF8',
    emoji: '\uD83D\uDC1F',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '\uC5F0\uC5B4 \uC0AC\uC2DC\uBBF8',
    nameEn: 'Salmon Sashimi',
    desc: '\uB178\uB974\uC6E8\uC774\uC0B0 \uD504\uB9AC\uBBF8\uC5C4 \uC5F0\uC5B4 12\uC810',
    descEn: 'Premium Norwegian salmon, 12 slices',
    price: '\u20A928,000',
    category: '\uC0AC\uC2DC\uBBF8',
    emoji: '\uD83C\uDF63',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&q=80&auto=format&fit=crop',
  },
  {
    name: '\uAD11\uC5B4 \uC6B0\uC2A4\uC988\uCFE0\uB9AC',
    nameEn: 'Hirame Usuzukuri',
    desc: '\uC587\uAC8C \uC36C \uAD11\uC5B4\uC5D0 \uD3F0\uC988 \uC18C\uC2A4\uC640 \uC720\uC790 \uD5A5',
    descEn: 'Thin-sliced flounder with ponzu and yuzu',
    price: '\u20A932,000',
    category: '\uC0AC\uC2DC\uBBF8',
    emoji: '\uD83D\uDC1F',
    imageUrl: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=200&h=200&q=80&auto=format&fit=crop',
    isNew: true,
  },
  {
    name: '\uB2F7\uC0AC\uC774 23 \uC900\uB9C8\uC774\uB2E4\uC774\uAE34\uC870',
    nameEn: 'Dassai 23 Junmai Daiginjo',
    desc: '\uC57C\uB9C8\uAD6C\uCE58\uD604, \uC815\uBBF8\uC728 23%. \uB9D1\uACE0 \uACFC\uC77C \uD5A5\uC774 \uD48D\uBD80',
    descEn: 'Yamaguchi, 23% polish. Clear, fruity aroma',
    price: '\u20A945,000',
    category: '\uC0AC\uCF00',
    emoji: '\uD83C\uDF76',
    imageUrl: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=200&h=200&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '\uAD6C\uBCF4\uD0C0 \uB9CC\uC8FC',
    nameEn: 'Kubota Manju',
    desc: '\uB2C8\uC774\uAC00\uD0C0\uD604, \uBD80\uB4DC\uB7FD\uACE0 \uAE4A\uC740 \uB9DB\uC758 \uC900\uB9C8\uC774\uB2E4\uC774\uAE34\uC870',
    descEn: 'Niigata, smooth and deep Junmai Daiginjo',
    price: '\u20A938,000',
    category: '\uC0AC\uCF00',
    emoji: '\uD83C\uDF76',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&q=80&auto=format&fit=crop',
  },
  {
    name: '\uD558\uC774\uBCFC',
    nameEn: 'Highball',
    desc: '\uC0B0\uD1A0\uB9AC \uC704\uC2A4\uD0A4 + \uAC15\uD0C4\uC0B0, \uB808\uBAAC \uD2B8\uC704\uC2A4\uD2B8',
    descEn: 'Suntory whisky + strong soda, lemon twist',
    price: '\u20A912,000',
    category: '\uC74C\uB8CC',
    emoji: '\uD83E\uDD43',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&q=80&auto=format&fit=crop',
  },
  {
    name: '\uC2A4\uD398\uC15C \uB864 \uC138\uD2B8',
    nameEn: 'Special Roll Set',
    desc: '\uC170\uD504 \uCD94\uCC9C \uC2DC\uADF8\uB2C8\uCC98 \uB864 3\uC885 \uBAA8\uC74C',
    descEn: "Chef's signature roll trio",
    price: '\u20A935,000',
    category: '\uC694\uB9AC',
    emoji: '\uD83C\uDF71',
    imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=200&h=200&q=80&auto=format&fit=crop',
    isNew: true,
  },
  {
    name: '\uC640\uADDC \uD0C0\uD0C0\uD0A4',
    nameEn: 'Wagyu Tataki',
    desc: 'A5 \uC640\uADDC\uB97C \uC0B4\uC9DD \uAD6C\uC6CC \uD3F0\uC988 \uC18C\uC2A4\uC5D0 \uACC1\uB4E4\uC784',
    descEn: 'Lightly seared A5 wagyu with ponzu sauce',
    price: '\u20A942,000',
    category: '\uC694\uB9AC',
    emoji: '\uD83E\uDD69',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '\uC0C8\uC6B0 \uD150\uD478\uB77C',
    nameEn: 'Shrimp Tempura',
    desc: '\uBC14\uC0AD\uD55C \uC0C8\uC6B0 \uD150\uD478\uB77C 5\uB9C8\uB9AC, \uD150\uCE20\uC720 \uC18C\uC2A4',
    descEn: 'Crispy shrimp tempura (5pcs) with tentsuyu',
    price: '\u20A918,000',
    category: '\uC694\uB9AC',
    emoji: '\uD83C\uDF64',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&q=80&auto=format&fit=crop',
  },
  {
    name: '\uC720\uC790 \uC154\uBD07',
    nameEn: 'Yuzu Sorbet',
    desc: '\uC2DD\uD6C4 \uC785\uAC00\uC2EC, \uC0C1\uD07C\uD55C \uC720\uC790 \uC154\uBD07',
    descEn: 'Refreshing yuzu sorbet palate cleanser',
    price: '\u20A98,000',
    category: '\uB514\uC800\uD2B8',
    emoji: '\uD83C\uDF4B',
  },
];

const DEMO_HOURS: BusinessHour[] = [
  { day: '\uC6D4\uC694\uC77C', dayEn: 'Monday', hours: '\uC815\uAE30\uD734\uBB34', isHoliday: true },
  { day: '\uD654\uC694\uC77C', dayEn: 'Tuesday', hours: '17:00 - 24:00', hoursEn: '17:00 - 24:00' },
  { day: '\uC218\uC694\uC77C', dayEn: 'Wednesday', hours: '17:00 - 24:00', hoursEn: '17:00 - 24:00' },
  { day: '\uBAA9\uC694\uC77C', dayEn: 'Thursday', hours: '17:00 - 24:00', hoursEn: '17:00 - 24:00' },
  { day: '\uAE08\uC694\uC77C', dayEn: 'Friday', hours: '17:00 - 01:00', hoursEn: '17:00 - 01:00' },
  { day: '\uD1A0\uC694\uC77C', dayEn: 'Saturday', hours: '17:00 - 01:00', hoursEn: '17:00 - 01:00' },
  { day: '\uC77C\uC694\uC77C', dayEn: 'Sunday', hours: '17:00 - 23:00', hoursEn: '17:00 - 23:00' },
];

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '\uC5F0\uB0A8 \uC0AC\uCF00\uD558\uC6B0\uC2A4 \u591C\u5BB4',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Yeonnam Sake House',
  description:
    process.env.NEXT_PUBLIC_DESCRIPTION ||
    '\uD504\uB9AC\uBBF8\uC5C4 \uC0AC\uC2DC\uBBF8\uC640 \uC0AC\uCF00\uB97C \uC990\uAE30\uB294 \uBAA8\uB358 \uC694\uB9AC\uC8FC\uC810',
  descriptionEn:
    process.env.NEXT_PUBLIC_DESCRIPTION_EN ||
    'Modern Japanese dining with premium sashimi and sake',
  phone: process.env.NEXT_PUBLIC_PHONE || '02-335-7890',
  address: process.env.NEXT_PUBLIC_ADDRESS || '\uC11C\uC6B8 \uB9C8\uD3EC\uAD6C \uC5F0\uB0A8\uB85C 23\uAE38 12, 1\uCE35',
  addressEn: process.env.NEXT_PUBLIC_ADDRESS_EN || '1F, 12, Yeonnam-ro 23-gil, Mapo-gu, Seoul',
  kakaoMapId: process.env.NEXT_PUBLIC_KAKAO_MAP_ID || '',
  menuItems: parseJSON<MenuItem[]>(process.env.NEXT_PUBLIC_MENU_ITEMS, DEMO_MENU),
  businessHours: parseJSON<BusinessHour[]>(process.env.NEXT_PUBLIC_BUSINESS_HOURS, DEMO_HOURS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, [
    'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80&fit=crop',
    'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&q=80&fit=crop',
    'https://images.unsplash.com/photo-1607301405752-8e2a79fe4a84?w=400&q=80&fit=crop',
  ]),
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  naverBlogUrl: process.env.NEXT_PUBLIC_NAVER_BLOG_URL || '',
  kakaoChannelUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || '',
  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#c8a97e',
  fontFamily: process.env.NEXT_PUBLIC_FONT_FAMILY || 'Nanum Myeongjo',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
