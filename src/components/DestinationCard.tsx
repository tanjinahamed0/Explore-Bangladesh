import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Destination } from '../data/types'
import { imageAlt } from '../data/images'
import { SmartImage } from './SmartImage'

export function DestinationCard({ destination, compact = false }: { destination: Destination; compact?: boolean }) {
  return (
    <article className={`destination-card ${compact ? 'destination-card--compact' : ''}`}>
      <Link to={`/destinations/${destination.slug}`} className="destination-card__link" aria-label={`Explore ${destination.name}`}>
        <div className="destination-card__image-wrap">
          <SmartImage src={destination.image} alt={imageAlt[destination.image] ?? `${destination.name}, Bangladesh`} className="destination-card__image" />
          <span className="tag">{destination.category}</span>
        </div>
        <div className="destination-card__body">
          <h3>{destination.name}</h3>
          {compact ? (
            <p className="destination-card__location"><MapPin size={13} aria-hidden="true" /> Bangladesh</p>
          ) : (
            <>
              <p>{destination.shortDescription}</p>
              <span className="destination-card__location"><MapPin size={13} aria-hidden="true" /> {destination.location}</span>
            </>
          )}
        </div>
      </Link>
    </article>
  )
}
