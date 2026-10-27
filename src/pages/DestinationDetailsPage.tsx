import { BusFront, CalendarDays, Clock3, Lightbulb, MapPin, Plane, Sun, TrainFront } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { DestinationCard } from '../components/DestinationCard'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { SmartImage } from '../components/SmartImage'
import { SmartLink } from '../components/SmartLink'
import { destinations, getDestination } from '../data/destinations'
import { imageAlt } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'
import { NotFoundPage } from './NotFoundPage'

export function DestinationDetailsPage() {
  const { slug } = useParams()
  const destination = getDestination(slug)
  usePageMeta(destination?.name ?? 'Destination not found', destination?.shortDescription ?? 'The requested destination could not be found.')

  if (!destination) return <NotFoundPage />

  const related = destination.related.map((relatedSlug) => destinations.find((item) => item.slug === relatedSlug)!).filter(Boolean)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Destinations', to: '/destinations' }, { label: destination.name }]} />
      <PageHero title={destination.name} subtitle={destination.shortDescription} image={destination.heroImage} className="detail-hero">
        <p className="detail-hero__location"><MapPin size={19} aria-hidden="true" /><span><strong>Map location</strong>{destination.location}</span></p>
        <a href="#overview" className="button button--gold">Explore this destination</a>
      </PageHero>

      <section id="overview" className="section detail-overview">
        <div>
          <span className="eyebrow">Know before you go</span>
          <h2>Destination overview</h2>
          <p>{destination.overview}</p>
        </div>
        <div className="quick-facts">
          <span><MapPin aria-hidden="true" /><strong>Region</strong>{destination.region}</span>
          <span><Sun aria-hidden="true" /><strong>Experience</strong>{destination.category}</span>
          <span><Clock3 aria-hidden="true" /><strong>Suggested stay</strong>2–3 days</span>
        </div>
      </section>

      <section className="section section--topless">
        <SectionHeading title="Top attractions" description="A few places to add to your journey." />
        <div className="grid grid--four attraction-grid">
          {destination.attractions.map((attraction) => (
            <article key={attraction.name} className="attraction-card">
              <SmartImage src={attraction.image} alt={imageAlt[attraction.image] ?? attraction.name} />
              <h3>{attraction.name}</h3>
              <p>{attraction.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section info-band">
        <div className="visit-time">
          <CalendarDays size={30} aria-hidden="true" />
          <div><span className="eyebrow">Seasonal guide</span><h2>Best time to visit</h2><h3>{destination.bestTime}</h3><p>{destination.seasonNote}</p></div>
        </div>
        <div className="transport-section">
          <SectionHeading title="How to get there" />
          <div className="transport-grid">
            <article><Plane aria-hidden="true" /><h3>By air</h3><p>{destination.transport.air}</p></article>
            <article><BusFront aria-hidden="true" /><h3>By road</h3><p>{destination.transport.road}</p></article>
            <article><TrainFront aria-hidden="true" /><h3>By rail</h3><p>{destination.transport.rail}</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading title="Photo gallery" description="A glimpse of the landscapes and experiences waiting here." />
        <div className="photo-gallery">
          {destination.gallery.map((image) => <SmartImage key={image} src={image} alt={imageAlt[image] ?? `${destination.name} travel view`} />)}
        </div>
      </section>

      <section className="section section--topless travel-tips">
        <SectionHeading title="Travel tips" />
        <div className="travel-tips__grid">
          {destination.tips.map((tip, index) => <p key={tip}><Lightbulb aria-hidden="true" /><span><strong>Tip {index + 1}</strong>{tip}</span></p>)}
        </div>
      </section>

      <section className="section related-section">
        <SectionHeading title="Related destinations" description="Keep the journey going." />
        <div className="grid grid--three">
          {related.map((item) => <DestinationCard key={item.slug} destination={item} compact />)}
        </div>
        <div className="section-action"><SmartLink to="/destinations" variant="outline">See every destination</SmartLink></div>
      </section>
    </>
  )
}
