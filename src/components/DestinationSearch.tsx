import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function DestinationSearch() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate(`/destinations${query.trim() ? `?search=${encodeURIComponent(query.trim())}` : ''}`)
  }

  return (
    <form className="hero-search" onSubmit={submit} role="search">
      <label htmlFor="home-destination-search" className="sr-only">Where do you want to explore?</label>
      <input id="home-destination-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Where do you want to explore?" />
      <button type="submit" aria-label="Search destinations"><Search size={18} aria-hidden="true" /><span>Search</span></button>
    </form>
  )
}
