import { Logo, LogoCategory } from '../types';

// This is sample data - replace with your actual GitHub URLs
export const logos: Logo[] = [
  {
    id: 'firstbank',
    name: 'First Bank of Nigeria',
    category: 'Banking',
    description: 'Leading commercial bank in Nigeria',
    pngUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/banking/firstbank.png',
    svgUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/banking/firstbank.svg',
    tags: ['bank', 'financial', 'blue', 'elephant'],
    featured: true
  },
  {
    id: 'gtbank',
    name: 'Guaranty Trust Bank',
    category: 'Banking',
    description: 'Premier financial institution',
    pngUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/banking/gtbank.png',
    svgUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/banking/gtbank.svg',
    tags: ['bank', 'financial', 'orange', 'modern'],
    featured: true
  },
  {
    id: 'mtn',
    name: 'MTN Nigeria',
    category: 'Telecommunications',
    description: 'Leading telecommunications company',
    pngUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/telecom/mtn.png',
    svgUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/telecom/mtn.svg',
    tags: ['telecom', 'yellow', 'mobile', 'network'],
    featured: true
  },
  {
    id: 'airtel',
    name: 'Airtel Nigeria',
    category: 'Telecommunications',
    description: 'Major telecommunications provider',
    pngUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/telecom/airtel.png',
    svgUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/telecom/airtel.svg',
    tags: ['telecom', 'red', 'mobile', 'network']
  },
  {
    id: 'dangote',
    name: 'Dangote Group',
    category: 'Conglomerate',
    description: 'Largest industrial conglomerate in West Africa',
    pngUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/industrial/dangote.png',
    svgUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/industrial/dangote.svg',
    tags: ['industrial', 'cement', 'blue', 'conglomerate'],
    featured: true
  },
  {
    id: 'zenith',
    name: 'Zenith Bank',
    category: 'Banking',
    description: 'Top-tier commercial bank',
    pngUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/banking/zenith.png',
    svgUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/banking/zenith.svg',
    tags: ['bank', 'financial', 'red', 'premium']
  },
  {
    id: 'uba',
    name: 'United Bank for Africa',
    category: 'Banking',
    description: 'Pan-African financial services group',
    pngUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/banking/uba.png',
    svgUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/banking/uba.svg',
    tags: ['bank', 'financial', 'red', 'africa']
  },
  {
    id: 'glo',
    name: 'Globacom',
    category: 'Telecommunications',
    description: 'Indigenous telecommunications company',
    pngUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/telecom/glo.png',
    svgUrl: 'https://raw.githubusercontent.com/yourusername/nigerian-logos/main/telecom/glo.svg',
    tags: ['telecom', 'green', 'mobile', 'indigenous']
  }
];

export const categories: LogoCategory[] = [
  {
    id: 'all',
    name: 'All Categories',
    description: 'View all available logos',
    count: logos.length
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    description: 'Financial institutions and banks',
    count: logos.filter(logo => logo.category === 'Banking').length
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    description: 'Telecom companies and network providers',
    count: logos.filter(logo => logo.category === 'Telecommunications').length
  },
  {
    id: 'conglomerate',
    name: 'Industrial & Conglomerates',
    description: 'Large industrial companies and conglomerates',
    count: logos.filter(logo => logo.category === 'Conglomerate').length
  }
];