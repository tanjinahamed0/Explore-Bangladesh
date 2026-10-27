import { Compass } from 'lucide-react'
import { SmartLink } from '../components/SmartLink'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta('Page not found', 'The page you requested could not be found.')
  return (
    <section className="not-found">
      <Compass size={48} aria-hidden="true" />
      <span className="eyebrow">404 · Wrong turn</span>
      <h1>Let’s find a better path.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <SmartLink to="/">Back to the homepage</SmartLink>
    </section>
  )
}
