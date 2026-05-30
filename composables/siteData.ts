export type CategoryId = 'mtb' | 'ebike' | 'fullSuspension' | 'accessories'

export type CategoryItem = {
  id: CategoryId
  titleKey: string
  descriptionKey: string
  imageSrc: string
  anchor: string
}

export type BikeItem = {
  id: string
  nameKey: string
  typeKey: string
  descriptionKey: string
  imageSrc: string
  tagKeys: string[]
}

export type BenefitItem = {
  titleKey: string
  descriptionKey?: string
  icon: 'shield' | 'spark' | 'headset'
}

export type ValueItem = {
  titleKey: string
  descriptionKey: string
  icon: 'badge' | 'user' | 'brand' | 'wrench' | 'tag' | 'bolt'
}

export type GalleryItem = {
  id: string
  altKey: string
  imageSrc: string
}

export const CONTACT = {
  addressLine: 'Cite Ezzohour 2, Metlaoui, Tunisia',
  phoneE164: '+21628998215',
  phoneDisplay: '+216 28 998 215',
  // TODO: confirm and replace if Google Maps URL changes.
  mapsUrl: 'https://share.google/81oNQLQOHszIH74Zl'
} as const

export function getMapsEmbedSrc() {
  // Uses a simple public embed query by address. Replace with a dedicated Google Maps embed URL if needed.
  const query = `Ben Chaaben BIKES, ${CONTACT.addressLine}`
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

export const IMAGES = {
  hero: '/images/hero-bike.jpg',
  categories: {
    // Temporary: reuse product images for category cards (different order).
    mtb: '/images/2.jpeg',
    ebike: '/images/3.jpeg',
    fullSuspension: '/images/1.jpeg',
    accessories: '/images/4.jpeg'
  },
  bikes: {
    // User-provided local images (replace anytime)
    bike1: '/images/1.jpeg',
    bike2: '/images/2.jpeg',
    bike3: '/images/3.jpeg'
    ,bike4: '/images/4.jpeg'
  }
} as const

export function useSiteData() {
  const categories: CategoryItem[] = [
    {
      id: 'mtb',
      titleKey: 'categories.mtb.title',
      descriptionKey: 'categories.mtb.description',
      imageSrc: IMAGES.categories.mtb,
      anchor: '#bikes'
    },
    {
      id: 'ebike',
      titleKey: 'categories.ebike.title',
      descriptionKey: 'categories.ebike.description',
      imageSrc: IMAGES.categories.ebike,
      anchor: '#bikes'
    },
    {
      id: 'fullSuspension',
      titleKey: 'categories.fullSuspension.title',
      descriptionKey: 'categories.fullSuspension.description',
      imageSrc: IMAGES.categories.fullSuspension,
      anchor: '#bikes'
    },
    {
      id: 'accessories',
      titleKey: 'categories.accessories.title',
      descriptionKey: 'categories.accessories.description',
      imageSrc: IMAGES.categories.accessories,
      anchor: '#bikes'
    }
  ]

  const featuredBikes: BikeItem[] = [
    {
      id: 'bike-1',
      nameKey: 'bikes.items.bike1.name',
      typeKey: 'bikes.items.bike1.type',
      descriptionKey: 'bikes.items.bike1.description',
      imageSrc: IMAGES.bikes.bike1,
      tagKeys: ['bikes.tags.example']
    },
    {
      id: 'bike-2',
      nameKey: 'bikes.items.bike2.name',
      typeKey: 'bikes.items.bike2.type',
      descriptionKey: 'bikes.items.bike2.description',
      imageSrc: IMAGES.bikes.bike2,
      tagKeys: ['bikes.tags.example']
    },
    {
      id: 'bike-3',
      nameKey: 'bikes.items.bike3.name',
      typeKey: 'bikes.items.bike3.type',
      descriptionKey: 'bikes.items.bike3.description',
      imageSrc: IMAGES.bikes.bike3,
      tagKeys: ['bikes.tags.example']
    },
    {
      id: 'bike-4',
      nameKey: 'bikes.items.bike4.name',
      typeKey: 'bikes.items.bike4.type',
      descriptionKey: 'bikes.items.bike4.description',
      imageSrc: IMAGES.bikes.bike4,
      tagKeys: ['bikes.tags.example']
    }
  ]

  const benefits: BenefitItem[] = [
    { titleKey: 'hero.benefits.quality', icon: 'shield' },
    { titleKey: 'hero.benefits.advice', icon: 'spark' },
    { titleKey: 'hero.benefits.support', icon: 'headset' }
  ]

  const values: ValueItem[] = [
    { titleKey: 'why.items.quality.title', descriptionKey: 'why.items.quality.description', icon: 'badge' },
    { titleKey: 'why.items.advice.title', descriptionKey: 'why.items.advice.description', icon: 'user' },
    { titleKey: 'why.items.brands.title', descriptionKey: 'why.items.brands.description', icon: 'brand' },
    { titleKey: 'why.items.afterSales.title', descriptionKey: 'why.items.afterSales.description', icon: 'wrench' },
    { titleKey: 'why.items.availability.title', descriptionKey: 'why.items.availability.description', icon: 'tag' },
    { titleKey: 'why.items.fastContact.title', descriptionKey: 'why.items.fastContact.description', icon: 'bolt' }
  ]

  return { categories, featuredBikes, benefits, values }
}
