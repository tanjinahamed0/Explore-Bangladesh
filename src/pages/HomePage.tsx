import { Link } from 'react-router-dom'
import { DestinationCard } from '../components/DestinationCard'
import { DestinationSearch } from '../components/DestinationSearch'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { SmartImage } from '../components/SmartImage'
import { SmartLink } from '../components/SmartLink'
import { destinations } from '../data/destinations'
import { img, imageAlt } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const experiences = [
  { name: 'Beaches & Islands', image: img.coxBazarBeach },
  { name: 'Hills & Mountains', image: img.sajekValleyClouds },
  { name: 'Forests & Wildlife', image: img.ratargulSwamp },
  { name: 'Rivers & Countryside', image: img.kaptaiLake },
  { name: 'History & Culture', image: img.shatGombujMosque },
]

export function HomePage() {
  usePageMeta('Discover Bangladesh', 'Explore Bangladesh’s beaches, hills, forests, islands, culture, and practical travel guides.')

  return (
    <>
      <PageHero title="Find your next adventure." subtitle="From quiet islands to misty hills, discover a different side of Bangladesh." image={img.bangladeshHillWater} className="home-hero">
        <DestinationSearch />
      </PageHero>

      <section className="section">
        <SectionHeading title="Places that stay with you." description="Explore the extraordinary beauty of Bangladesh." align="center" />
        <div className="grid grid--four">
          {['coxs-bazar', 'sajek-valley', 'saint-martins-island', 'srimangal'].map((slug) => {
            const destination = destinations.find((item) => item.slug === slug)!
            return <DestinationCard key={slug} destination={destination} compact />
          })}
        </div>
        <div className="section-action"><SmartLink to="/destinations" variant="outline">View all destinations</SmartLink></div>
      </section>

      <section className="section section--topless">
        <SectionHeading title="Explore by experience" description="Find the kind of journey that feels right for you." align="center" />
        <div className="experience-grid">
          {experiences.map((experience) => (
            <Link key={experience.name} to={`/destinations?category=${encodeURIComponent(experience.name)}`} className="experience-card">
              <SmartImage src={experience.image} alt={imageAlt[experience.image]} />
              <span>{experience.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-section__images">
          <SmartImage src={img.saintMartinBoats} alt={imageAlt[img.saintMartinBoats]} />
          <SmartImage src={img.bandarbanNilgiriView} alt={imageAlt[img.bandarbanNilgiriView]} />
        </div>
        <div className="story-section__content">
          <span className="eyebrow">Travel well</span>
          <h2>Make every<br />journey count.</h2>
          <p>Plan smarter trips, discover local culture, and explore with practical guides made for curious travellers.</p>
          <SmartLink to="/guides" variant="gold">Read travel guides</SmartLink>
        </div>
      </section>

      <section className="wide-cta">
        <SmartImage src={img.padmaRiver} alt={imageAlt[img.padmaRiver]} />
        <div>
          <h2>Your Bangladesh story starts here.</h2>
          <SmartLink to="/destinations" variant="gold">Explore destinations</SmartLink>
        </div>
      </section>
    </>
  )
}
