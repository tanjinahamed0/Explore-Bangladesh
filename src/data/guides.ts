import type { Guide } from './types'
import { img, imageAlt } from './images'

export const guides: Guide[] = [
  {
    slug: 'secrets-of-the-sundarbans',
    title: 'Discovering the Secrets of the Sundarbans Mangrove Forest',
    category: 'Travel Guides',
    excerpt: 'A calm, responsible introduction to tidal creeks, forest walks, and life on a mangrove boat.',
    image: img.sundarbansMangroveRoots,
    imageAlt: imageAlt[img.sundarbansMangroveRoots],
    date: '18 Oct 2026',
    readTime: 8,
    destinationSlug: 'sundarbans',
    introduction: 'The Sundarbans rewards patience. Its magic is not a checklist of animals, but the shifting tide, dense mangrove roots, and early-morning birdsong around your boat.',
    sections: [
      { heading: 'Choose the right journey', paragraphs: ['Most visitors join a two- or three-day trip departing from Khulna or Mongla. Choose a licensed operator that uses trained forest guides, follows permit rules, and keeps group sizes sensible.', 'Ask what is included before paying: accommodation, meals, forest fees, smaller boat excursions, and transfers can vary between operators.'] },
      { heading: 'Slow down and look closer', paragraphs: ['The best moments often happen in a small boat on a narrow creek. Keep voices low, put the camera down occasionally, and watch for kingfishers, egrets, deer tracks, and the different shapes of mangrove roots.', 'A tiger sighting is never guaranteed and should not be the measure of a successful visit. Treat every wildlife encounter as a privilege and follow your guide immediately.'] },
      { heading: 'Pack for life on the water', paragraphs: ['Bring light long sleeves, sun protection, insect repellent, a refillable bottle, and a small dry bag for electronics. Winter mornings can feel cool on deck.', 'Avoid single-use plastics and never leave waste in the forest. A responsible trip leaves the waterways exactly as you found them.'] },
    ],
  },
  {
    slug: 'culinary-journey-through-dhaka',
    title: 'A Culinary Journey Through Dhaka',
    category: 'Food & Culture',
    excerpt: 'From old-city favourites to comforting home-style dishes, taste your way through the capital.',
    image: img.dhakaFoodMarket,
    imageAlt: imageAlt[img.dhakaFoodMarket],
    date: '15 Oct 2026',
    readTime: 7,
    destinationSlug: 'bagerhat',
    introduction: 'Dhaka’s food tells the story of a busy, generous city. Start with a few well-chosen stops, arrive hungry, and leave room for tea and something sweet.',
    sections: [
      { heading: 'Begin with breakfast', paragraphs: ['Try a traditional breakfast of flatbread, lentils, vegetables, and egg at a busy local restaurant. Busy turnover and freshly cooked food are useful signs when choosing where to eat.', 'Drink bottled or properly filtered water and be mindful of your own tolerance for chilli and rich food.'] },
      { heading: 'Explore the old city', paragraphs: ['Old Dhaka is known for fragrant rice dishes, grilled meat, and historic sweet shops. A local food guide can add context and help with navigation through crowded lanes.', 'Ask about ingredients if you have allergies. Menus and recipes vary, so never assume two similarly named dishes are prepared the same way.'] },
      { heading: 'Finish with tea', paragraphs: ['Tea is a pause in the day rather than just a drink. Use the time to compare notes, ask what locals order next, and plan your final stop.', 'Carry small cash, be respectful when photographing vendors, and support places that treat their staff well.'] },
    ],
  },
  {
    slug: 'first-time-coxs-bazar',
    title: 'A First-Timer’s Guide to Cox’s Bazar',
    category: 'Travel Guides',
    excerpt: 'Plan beach time, coastal day trips, and a safer seaside stay without rushing the experience.',
    image: img.coxBazarSunset,
    imageAlt: imageAlt[img.coxBazarSunset],
    date: '12 Oct 2026',
    readTime: 6,
    destinationSlug: 'coxs-bazar',
    introduction: 'Cox’s Bazar can be lively, peaceful, or both in the same day. A little planning helps you enjoy the main beach while making time for quieter stretches of coast.',
    sections: [
      { heading: 'Choose your base', paragraphs: ['Staying near the central beach keeps restaurants and transport close, while accommodation farther south can feel quieter. Read recent reviews and confirm the exact walking distance to the shore.', 'Two nights gives you time for a beach morning, a coastal day trip, and an unhurried sunset.'] },
      { heading: 'Plan around the conditions', paragraphs: ['Check the forecast, tide, and local swimming advice. Conditions can change quickly, and a beach that looks calm may still have strong currents.', 'For Inani or Himchari, arrange a reputable driver, agree the price in advance, and avoid packing too many stops into one afternoon.'] },
      { heading: 'Travel with care', paragraphs: ['Keep valuables secure, use sun protection, and carry cash for smaller purchases. Avoid disturbing fishing boats or entering work areas for photographs.', 'Choose local restaurants and guides thoughtfully, and take your litter away from quieter beaches.'] },
    ],
  },
  {
    slug: 'sajek-weekend-itinerary',
    title: 'A Slow Weekend in Sajek Valley',
    category: 'Itineraries',
    excerpt: 'A practical two-day outline for sunrise views, hill roads, and time to simply enjoy the valley.',
    image: img.sajekSunrise,
    imageAlt: imageAlt[img.sajekSunrise],
    date: '8 Oct 2026',
    readTime: 5,
    destinationSlug: 'sajek-valley',
    introduction: 'Sajek is at its best when the itinerary stays light. Travel times in the hills are unpredictable, so focus on a few viewpoints and leave space for changing weather.',
    sections: [
      { heading: 'Day one: the road into the hills', paragraphs: ['Reach Khagrachhari early enough for the authorised onward transfer. Confirm current transport arrangements before your trip rather than relying on an old schedule.', 'After checking in, take an easy walk near your accommodation and visit a nearby viewpoint before dusk. Keep the evening free for a simple local meal.'] },
      { heading: 'Day two: sunrise and valley views', paragraphs: ['Start early for Konglak Hill if conditions and local guidance allow. Cloud cover is part of the experience, so enjoy the journey even when the sunrise stays hidden.', 'Return for breakfast, visit a local community respectfully, and leave enough time for the road journey back to Khagrachhari.'] },
      { heading: 'Before you book', paragraphs: ['Confirm identification requirements, current hill district guidance, and the exact vehicle arrangements with your accommodation. Avoid travelling unfamiliar hill roads after dark.', 'A light jacket, sturdy shoes, cash, and a power bank are useful. Keep plans flexible during heavy rain.'] },
    ],
  },
  {
    slug: 'srimangal-by-bicycle',
    title: 'Exploring Srimangal by Bicycle',
    category: 'Adventure',
    excerpt: 'A gentle route through tea gardens, village roads, and some of Bangladesh’s greenest scenery.',
    image: img.srimangalCycling,
    imageAlt: imageAlt[img.srimangalCycling],
    date: '2 Oct 2026',
    readTime: 6,
    destinationSlug: 'srimangal',
    introduction: 'A bicycle turns Srimangal’s quiet estate roads into the main attraction. You can stop for photographs, tea, and conversation without following a rigid tour schedule.',
    sections: [
      { heading: 'Prepare for an easy ride', paragraphs: ['Rent a bicycle in town and check the brakes, tyres, and seat height before leaving. Start early to avoid midday heat and carry more water than you expect to need.', 'Stay on established public roads and paths. Tea estates are working landscapes, so give vehicles and workers priority.'] },
      { heading: 'Build a flexible loop', paragraphs: ['Combine nearby tea gardens with Madhabpur Lake or another stop recommended locally. Distances can feel longer on rolling roads, so keep your first route short.', 'For Lawachara, use an authorised guide and follow forest rules rather than treating the reserve as an ordinary cycling route.'] },
      { heading: 'Stop respectfully', paragraphs: ['Ask before photographing workers, homes, or private estate areas. Buying tea or a snack from a local shop is a simple way to support the community.', 'Check the weather, bring a basic repair kit, and return before dark if your bicycle does not have suitable lights.'] },
    ],
  },
  {
    slug: 'bangladesh-travel-essentials',
    title: 'Bangladesh Travel Essentials: What to Know Before You Go',
    category: 'Travel Tips',
    excerpt: 'Practical advice for transport, money, weather, cultural respect, and a smoother journey.',
    image: img.bangladeshTrainJourney,
    imageAlt: imageAlt[img.bangladeshTrainJourney],
    date: '25 Sep 2026',
    readTime: 9,
    destinationSlug: 'sylhet',
    introduction: 'A rewarding trip to Bangladesh begins with realistic travel times, flexible plans, and openness to local advice. These essentials cover the basics without trying to script every moment.',
    sections: [
      { heading: 'Allow more time', paragraphs: ['Traffic, weather, ferries, and road conditions can all affect a journey. Avoid tight connections and keep at least one flexible day in a longer itinerary.', 'Trains and domestic flights save time on some routes, but seats can sell out. Use official booking channels and confirm current schedules.'] },
      { heading: 'Money and connectivity', paragraphs: ['Cards are useful in larger hotels and city businesses, but cash remains important in smaller towns and for local transport. Withdraw from reputable bank ATMs and keep notes secure.', 'A local SIM can make maps and transport easier. Buy through an authorised seller and complete any required registration.'] },
      { heading: 'Respect places and people', paragraphs: ['Dress modestly at religious sites, remove shoes where requested, and ask before taking close-up portraits. A few Bangla greetings are always appreciated.', 'Check current government travel advice, local weather, and district-specific requirements. Conditions can change, especially in coastal and hill regions.'] },
    ],
  },
]

export const guideCategories = ['Travel Guides', 'Travel Tips', 'Food & Culture', 'Adventure', 'Itineraries'] as const

export function getGuide(slug: string | undefined) {
  return guides.find((guide) => guide.slug === slug)
}
