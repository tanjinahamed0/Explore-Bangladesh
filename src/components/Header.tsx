import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Destinations', to: '/destinations' },
  { label: 'Travel Guides', to: '/guides' },
  { label: 'Trip Planner', to: '/guides?category=Itineraries' },
  { label: 'About', to: '/about' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Explore Bangladesh home">explore<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <NavLink key={item.label} to={item.to} className={({ isActive }) => isActive && item.to !== '/guides?category=Itineraries' ? 'active' : ''}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link to="/destinations" className="button button--green header-cta">Start Exploring</Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link to="/destinations" className="button button--green" onClick={() => setOpen(false)}>Start Exploring</Link>
        </nav>
      )}
    </header>
  )
}
