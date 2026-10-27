import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { GuideCard } from '../components/GuideCard'
import { SmartImage } from '../components/SmartImage'
import { SmartLink } from '../components/SmartLink'
import { getDestination } from '../data/destinations'
import { getGuide, guides } from '../data/guides'
import { usePageMeta } from '../hooks/usePageMeta'
import { NotFoundPage } from './NotFoundPage'

export function ArticlePage() {
  const { slug } = useParams()
  const guide = getGuide(slug)
  usePageMeta(guide?.title ?? 'Guide not found', guide?.excerpt ?? 'The requested guide could not be found.')

  if (!guide) return <NotFoundPage />
  const destination = getDestination(guide.destinationSlug)!
  const moreGuides = guides.filter((item) => item.slug !== guide.slug).slice(0, 3)

  return (
    <article>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Travel Guides', to: '/guides' }, { label: guide.title }]} />
      <header className="article-header">
        <span className="eyebrow">{guide.category}</span>
        <h1>{guide.title}</h1>
        <p>{guide.excerpt}</p>
        <div className="article-header__meta">
          <span><CalendarDays size={15} aria-hidden="true" />{guide.date}</span>
          <span><Clock3 size={15} aria-hidden="true" />{guide.readTime} min read</span>
          <Link to={`/destinations/${destination.slug}`}><MapPin size={15} aria-hidden="true" />{destination.name}</Link>
        </div>
      </header>
      <SmartImage src={guide.image} alt={guide.imageAlt} className="article-hero-image" loading="eager" />
      <div className="article-layout">
        <div className="article-body">
          <p className="article-intro">{guide.introduction}</p>
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <aside className="article-note">
            <h2>A quick note</h2>
            <p>Transport, access rules, and weather can change. Confirm current details with official local sources before travelling.</p>
          </aside>
        </div>
        <aside className="article-sidebar">
          <span className="eyebrow">Explore the place</span>
          <SmartImage src={destination.image} alt={destination.name} />
          <h2>{destination.name}</h2>
          <p>{destination.shortDescription}</p>
          <SmartLink to={`/destinations/${destination.slug}`} variant="outline">Destination guide</SmartLink>
        </aside>
      </div>
      <section className="section related-section">
        <h2>Keep reading</h2>
        <div className="grid grid--three">{moreGuides.map((item) => <GuideCard key={item.slug} guide={item} />)}</div>
      </section>
    </article>
  )
}
