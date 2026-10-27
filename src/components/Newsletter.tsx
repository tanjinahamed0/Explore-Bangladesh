import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (name.trim().length < 2) {
      setMessage('Please enter your name.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('Please enter a valid email address.')
      return
    }
    setMessage('Details validated. This demo does not subscribe you or send email.')
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div>
        <h2 id="newsletter-title">Stay inspired,<br />explore more.</h2>
        <p>Travel ideas and practical guides. Frontend demo only.</p>
      </div>
      <form onSubmit={submit} noValidate>
        <div className="newsletter__fields">
          <label><span className="sr-only">Name</span><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" autoComplete="name" /></label>
          <label><span className="sr-only">Email</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" autoComplete="email" /></label>
          <button type="submit" className="button button--gold">Subscribe</button>
        </div>
        {message && <p className="form-status form-status--light" role="status">{message}</p>}
      </form>
    </section>
  )
}
