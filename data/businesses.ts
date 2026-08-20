export interface BusinessFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface BusinessItem {
  id: string;
  number: string;
  category: string;
  name: string;
  italicTagline: string;
  description: string;
  bgType: 'emerald' | 'cream';
  ctaText: string;
  ctaLink: string;
  features?: BusinessFeature[];
  badge?: string;
  partnerNote?: string;
}

export const BUSINESSES: BusinessItem[] = [
  {
    id: 'silifix',
    number: '01',
    category: 'MANUFACTURING',
    name: 'Silifix Silicone',
    italicTagline: 'Where the journey started.',
    description:
      'Silifix is a silicone sealant and silicone products business started by Pramod Raut in 2022.',
    bgType: 'emerald',
    ctaText: 'Explore Silifix',
    ctaLink: '#silifix',
  },
  {
    id: 'winsizer',
    number: '02',
    category: 'SOFTWARE & PRODUCTIVITY',
    name: 'WinSizer',
    italicTagline: 'Measure. Cut. Build.',
    description:
      'WinSizer is a digital tool for the sliding-window industry. It helps users calculate cutting sizes quickly and connects window-related work with job opportunities.',
    bgType: 'cream',
    ctaText: 'Discover WinSizer',
    ctaLink: '#winsizer',
  },
  {
    id: 'falcon-ai',
    number: '03',
    category: 'AI INTERFACE',
    name: 'Falcon AI',
    italicTagline: 'Your keyboard, with intelligence built in.',
    description:
      'Falcon AI is an AI-powered keyboard concept designed to bring intelligent assistance directly into the typing experience.',
    bgType: 'emerald',
    ctaText: 'Explore Falcon AI',
    ctaLink: '#falcon-ai',
  },
  {
    id: 'future-ai',
    number: '04',
    category: 'EXPERIMENTAL AI',
    name: 'Future AI',
    italicTagline: 'Building what comes next.',
    description:
      'Future AI is an experimental AI product initiative focused on creating useful intelligent tools with the help of modern AI development platforms and technology.',
    bgType: 'cream',
    ctaText: 'Coming soon',
    ctaLink: '#future-ai',
    partnerNote: 'Developed with assistance from Manifest',
  },
  {
    id: 'sayus-ai',
    number: '05',
    category: 'INTELLIGENT SYSTEMS',
    name: 'Sayus AI',
    italicTagline: 'Next-generation AI automation.',
    description:
      'Sayus AI is an upcoming artificial intelligence product initiative by ROVEX focusing on smart digital automation and intelligent tools.',
    bgType: 'emerald',
    ctaText: 'Coming soon',
    ctaLink: '#sayus-ai',
  },
];

export const PHILOSOPHY_ITEMS = [
  {
    title: 'BUILD',
    italicWord: 'ideas',
    description: 'Turn ideas into real products.',
    tag: 'Execution',
  },
  {
    title: 'SOLVE',
    italicWord: 'practical',
    description: 'Focus on practical problems.',
    tag: 'Impact',
  },
  {
    title: 'SCALE',
    italicWord: 'systems',
    description: 'Build systems that can grow.',
    tag: 'Growth',
  },
];

export const TIMELINE_STEPS = [
  { step: '01', title: 'IDEA', subtitle: 'Identifying practical real-world problems' },
  { step: '02', title: 'BUILD', subtitle: 'Engineering robust physical & software prototypes' },
  { step: '03', title: 'TEST', subtitle: 'Rigorous validation with industry professionals' },
  { step: '04', title: 'LAUNCH', subtitle: 'Deploying scalable products to market' },
  { step: '05', title: 'GROW', subtitle: 'Expanding features, ecosystem, and reach' },
];
