import { ArrowUpRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Guide } from '../data/types'
import { SmartImage } from './SmartImage'

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="guide-card">
      <Link to={`/guides/${guide.slug}`} className="guide-card__image-link" tabIndex={-1} aria-hidden="true">
        <SmartImage src={guide.image} alt={guide.imageAlt} className="guide-card__image" />
      </Link>
      <div className="guide-card__body">
        <span className="guide-card__category">{guide.category}</span>
        <h3><Link to={`/guides/${guide.slug}`}>{guide.title}</Link></h3>
        <p>{guide.excerpt}</p>
        <div className="guide-card__meta">
          <span><Clock size={13} aria-hidden="true" /> {guide.readTime} min · {guide.date}</span>
          <Link to={`/guides/${guide.slug}`} className="read-more">Read more <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  )
}
