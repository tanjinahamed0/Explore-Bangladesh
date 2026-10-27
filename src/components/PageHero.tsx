import { SmartImage } from './SmartImage'

interface PageHeroProps {
  title: string
  subtitle?: string
  image: string
  children?: React.ReactNode
  className?: string
}

export function PageHero({ title, subtitle, image, children, className = '' }: PageHeroProps) {
  return (
    <section className={`page-hero ${className}`}>
      <SmartImage src={image} alt="" className="page-hero__image" loading="eager" />
      <div className="page-hero__shade" />
      <div className="page-hero__content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
