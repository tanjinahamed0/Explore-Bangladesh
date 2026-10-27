import { Search, SearchX } from 'lucide-react'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DestinationCard } from '../components/DestinationCard'
import { SectionHeading } from '../components/SectionHeading'
import { SmartLink } from '../components/SmartLink'
import { destinationCategories, destinations } from '../data/destinations'
import { usePageMeta } from '../hooks/usePageMeta'

export function DestinationsPage() {
  usePageMeta('Destinations', 'Search and filter beaches, hills, forests, islands, and cultural destinations across Bangladesh.')
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const category = searchParams.get('category') ?? 'All Destinations'
  const region = searchParams.get('region') ?? 'All Regions'
  const budget = searchParams.get('budget') ?? 'All Budgets'
  const sort = searchParams.get('sort') ?? 'popular'

  function updateFilter(key: string, value: string, defaultValue = '') {
    const next = new URLSearchParams(searchParams)
    if (!value || value === defaultValue) next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim()
    return destinations
      .filter((destination) => !term || `${destination.name} ${destination.location} ${destination.category} ${destination.shortDescription}`.toLowerCase().includes(term))
      .filter((destination) => category === 'All Destinations' || destination.category === category)
      .filter((destination) => region === 'All Regions' || destination.region === region)
      .filter((destination) => budget === 'All Budgets' || destination.budget === budget)
      .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : b.popularity - a.popularity)
  }, [search, category, region, budget, sort])

  function clearFilters() {
    setSearchParams({}, { replace: true })
  }

  return (
    <>
      <section className="listing-intro">
        <span className="eyebrow">Find your way</span>
        <h1>Explore Bangladesh</h1>
        <p>Find your next escape, from sunlit shores to mist-covered hills.</p>
        <div className="listing-search">
          <Search size={19} aria-hidden="true" />
          <label htmlFor="destination-search" className="sr-only">Search destinations</label>
          <input id="destination-search" type="search" value={search} onChange={(event) => updateFilter('search', event.target.value)} placeholder="Search destinations, regions, or experiences…" />
        </div>
      </section>

      <section className="listing-section" aria-label="Destination results">
        <div className="filter-chips" aria-label="Filter by category">
          {destinationCategories.map((item) => (
            <button key={item} type="button" className={category === item ? 'filter-chip active' : 'filter-chip'} aria-pressed={category === item} onClick={() => updateFilter('category', item, 'All Destinations')}>{item}</button>
          ))}
        </div>
        <div className="filter-row">
          <div className="filter-row__group">
            <label>Region
              <select value={region} onChange={(event) => updateFilter('region', event.target.value, 'All Regions')}>
                <option>All Regions</option><option>Chattogram</option><option>Sylhet</option><option>Khulna</option>
              </select>
            </label>
            <label>Budget
              <select value={budget} onChange={(event) => updateFilter('budget', event.target.value, 'All Budgets')}>
                <option>All Budgets</option><option>Low</option><option>Medium</option><option>High</option>
              </select>
            </label>
          </div>
          <label className="sort-control">Sort
            <select value={sort} onChange={(event) => updateFilter('sort', event.target.value, 'popular')}>
              <option value="popular">Popular</option><option value="name">Name A–Z</option>
            </select>
          </label>
        </div>
        <p className="results-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'place' : 'places'} to explore</p>
        {filtered.length > 0 ? (
          <div className="grid grid--four destination-grid">
            {filtered.map((destination) => <DestinationCard key={destination.slug} destination={destination} />)}
          </div>
        ) : (
          <div className="empty-state">
            <SearchX size={38} aria-hidden="true" />
            <h2>No destinations found</h2>
            <p>Try another search or clear your filters to see all places.</p>
            <button type="button" className="button button--green" onClick={clearFilters}>Clear all filters</button>
          </div>
        )}
      </section>

      <section className="simple-cta">
        <SectionHeading title="Your next adventure is closer than you think." align="center" />
        <SmartLink to="/guides?category=Itineraries">Plan your trip</SmartLink>
      </section>
    </>
  )
}
