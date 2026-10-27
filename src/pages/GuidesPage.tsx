import { Clock3 } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { DestinationCard } from '../components/DestinationCard'
import { GuideCard } from '../components/GuideCard'
import { Newsletter } from '../components/Newsletter'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { SmartImage } from '../components/SmartImage'
import { SmartLink } from '../components/SmartLink'
import { destinations } from '../data/destinations'
import { guideCategories, guides } from '../data/guides'
import { img } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function GuidesPage() {
  usePageMeta('Travel Guides & Stories', 'Read practical Bangladesh travel guides, itineraries, food stories, and adventure ideas.')
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') ?? 'All Stories'
  const featured = guides[0]
  const filtered = category === 'All Stories' ? guides : guides.filter((guide) => guide.category === category)

  return (
    <>
      <PageHero title="Travel Guides & Stories" subtitle="Local insight, practical ideas, and inspiration for your next journey." image={img.sylhetRiverBoats} className="guides-hero" />

      <section className="section featured-guide">
        <div className="featured-guide__content">
          <span className="eyebrow">Featured story</span>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <div className="featured-guide__meta"><Clock3 size={15} aria-hidden="true" /> {featured.readTime} min read · {featured.date}</div>
          <SmartLink to={`/guides/${featured.slug}`}>Read the story</SmartLink>
        </div>
        <Link to={`/guides/${featured.slug}`} className="featured-guide__image-link" aria-label={`Read ${featured.title}`}>
          <SmartImage src={featured.image} alt={featured.imageAlt} />
        </Link>
      </section>

      <section className="section section--topless">
        <div className="filter-chips" aria-label="Filter guides by category">
          {['All Stories', ...guideCategories].map((item) => (
            <button key={item} type="button" className={category === item ? 'filter-chip active' : 'filter-chip'} aria-pressed={category === item} onClick={() => setSearchParams(item === 'All Stories' ? {} : { category: item }, { replace: true })}>{item}</button>
          ))}
        </div>
        <p className="results-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'story' : 'stories'}</p>
        {filtered.length ? <div className="grid grid--three guide-grid">{filtered.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div> : <p>No stories in this category yet.</p>}
      </section>

      <section className="section popular-guides">
        <SectionHeading title="Popular guides" description="Start with a place, then make the journey your own." />
        <div className="popular-guides__grid">
          {destinations.slice(0, 5).map((destination) => (
            <div key={destination.slug}>
              <DestinationCard destination={destination} compact />
              <SmartLink to={`/destinations/${destination.slug}`}>Explore now</SmartLink>
            </div>
          ))}
        </div>
      </section>

      <section className="plan-banner">
        <h2>Plan your trip</h2>
        <p>Turn a little inspiration into a realistic itinerary.</p>
        <SmartLink to="/guides/sajek-weekend-itinerary" variant="gold">Plan your trip</SmartLink>
      </section>
      <Newsletter />
    </>
  )
}
