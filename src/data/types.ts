export type DestinationCategory =
  | 'Beaches & Islands'
  | 'Hills & Mountains'
  | 'Forests & Wildlife'
  | 'Rivers & Countryside'
  | 'History & Culture'
  | 'Tea Gardens'

export type GuideCategory = 'Travel Guides' | 'Travel Tips' | 'Food & Culture' | 'Adventure' | 'Itineraries'

export interface Attraction {
  name: string
  description: string
  image: string
}

export interface Destination {
  slug: string
  name: string
  location: string
  region: 'Chattogram' | 'Sylhet' | 'Khulna' | 'Dhaka'
  category: DestinationCategory
  budget: 'Low' | 'Medium' | 'High'
  popularity: number
  shortDescription: string
  overview: string
  image: string
  heroImage: string
  bestTime: string
  seasonNote: string
  attractions: Attraction[]
  transport: {
    air: string
    road: string
    rail: string
  }
  tips: string[]
  gallery: string[]
  related: string[]
}

export interface GuideSection {
  heading: string
  paragraphs: string[]
}

export interface Guide {
  slug: string
  title: string
  category: GuideCategory
  excerpt: string
  image: string
  imageAlt: string
  date: string
  readTime: number
  destinationSlug: string
  introduction: string
  sections: GuideSection[]
}
