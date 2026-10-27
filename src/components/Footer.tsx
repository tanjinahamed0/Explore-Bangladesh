import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <Link to="/" className="brand">explore<span>.</span></Link>
        <h2>Bangladesh</h2>
        <p>From quiet islands to misty hills, discover a different side of Bangladesh.</p>
      </div>
      <div className="site-footer__links">
        <div>
          <h3>Explore</h3>
          <Link to="/destinations">Destinations</Link>
          <Link to="/guides">Travel Guides</Link>
          <Link to="/guides?category=Itineraries">Trip Planner</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <Link to="/about#contact">Contact <ArrowUpRight size={13} aria-hidden="true" /></Link>
          <Link to="/about#photo-credits">Photo credits</Link>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {currentYear} Explore Bangladesh</span>
        <span>Made for curious travellers.</span>
      </div>
    </footer>
  )
}
