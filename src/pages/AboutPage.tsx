import { useState, type FormEvent } from 'react'
import { Compass, MailCheck, MessageCircle, Search, ShieldCheck } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { SmartImage } from '../components/SmartImage'
import { img, imageAlt, photoCredits } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

const emptyForm: FormValues = { name: '', email: '', subject: '', message: '' }

export function AboutPage() {
  usePageMeta('About & Contact', 'Learn why Explore Bangladesh exists and try the clearly labelled frontend-only contact demo.')
  const [values, setValues] = useState<FormValues>(emptyForm)
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [status, setStatus] = useState('')

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setStatus('')
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: Partial<FormValues> = {}
    if (values.name.trim().length < 2) nextErrors.name = 'Please enter at least 2 characters.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Please enter a valid email address.'
    if (values.subject.trim().length < 3) nextErrors.subject = 'Please enter a subject.'
    if (values.message.trim().length < 10) nextErrors.message = 'Please enter at least 10 characters.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('Please check the highlighted fields.')
      return
    }
    setStatus('Your message passed validation. This is a frontend demo: nothing was sent, delivered, or stored.')
  }

  return (
    <>
      <PageHero title="Discover the Beauty of Bangladesh" subtitle="Your guide to unforgettable journeys, hidden gems, and meaningful experiences." image={img.bangladeshCountryside} className="about-hero" />

      <section className="section about-intro">
        <p>Explore Bangladesh is an independent portfolio project created to make the country’s diverse landscapes feel closer, clearer, and easier to explore. We bring practical travel ideas and inspiring places together in one simple experience.</p>
      </section>

      <section className="about-collage" aria-label="Bangladesh landscapes">
        <figure className="about-collage__large"><SmartImage src={img.coxBazarSunset} alt={imageAlt[img.coxBazarSunset]} /><figcaption>Cox’s Bazar<span>Golden evenings on the coast</span></figcaption></figure>
        <figure><SmartImage src={img.sajekSunrise} alt={imageAlt[img.sajekSunrise]} /><figcaption>Sajek Valley<span>Misty mornings in the hills</span></figcaption></figure>
        <figure><SmartImage src={img.sundarbansCreek} alt={imageAlt[img.sundarbansCreek]} /><figcaption>Sundarbans<span>Life along tidal waterways</span></figcaption></figure>
        <figure><SmartImage src={img.ratargulSwamp} alt={imageAlt[img.ratargulSwamp]} /><figcaption>Ratargul<span>A quieter world of green</span></figcaption></figure>
        <figure><SmartImage src={img.shatGombujMosque} alt={imageAlt[img.shatGombujMosque]} /><figcaption>Bagerhat<span>Centuries written in brick</span></figcaption></figure>
      </section>

      <section className="section">
        <SectionHeading title="Why Explore Bangladesh?" description="Useful inspiration with respect for places and people." align="center" />
        <div className="feature-grid">
          <article><Search aria-hidden="true" /><h3>Discover hidden gems</h3><p>Go beyond the familiar with islands, forests, tea gardens, and historic towns.</p></article>
          <article><ShieldCheck aria-hidden="true" /><h3>Travel with confidence</h3><p>Clear seasonal notes, transport basics, and practical tips help you plan realistically.</p></article>
          <article><Compass aria-hidden="true" /><h3>Experience local culture</h3><p>Explore with curiosity and respect for the communities that make each place unique.</p></article>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-section__heading">
          <span className="eyebrow">Contact us</span>
          <h2>Let’s talk travel</h2>
          <p>Try the project’s contact form and see its validation states.</p>
        </div>
        <div className="contact-layout">
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="demo-notice"><MailCheck size={20} aria-hidden="true" /><p><strong>Frontend demonstration</strong>No backend is configured. Submitting validates your input but does not send or store a message.</p></div>
            <div className="form-row">
              <label>Name<input value={values.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <span id="name-error" className="field-error">{errors.name}</span>}</label>
              <label>Email<input type="email" value={values.email} onChange={(event) => update('email', event.target.value)} autoComplete="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <span id="email-error" className="field-error">{errors.email}</span>}</label>
            </div>
            <label>Subject<input value={values.subject} onChange={(event) => update('subject', event.target.value)} placeholder="What would you like to discuss?" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />{errors.subject && <span id="subject-error" className="field-error">{errors.subject}</span>}</label>
            <label>Message<textarea value={values.message} onChange={(event) => update('message', event.target.value)} placeholder="Write your message…" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <span id="message-error" className="field-error">{errors.message}</span>}</label>
            <button type="submit" className="button button--green">Send Message</button>
            {status && <p className={Object.keys(errors).length ? 'form-status form-status--error' : 'form-status form-status--success'} role="status">{status}</p>}
          </form>
          <aside className="contact-aside">
            <MessageCircle size={28} aria-hidden="true" />
            <h3>Project information</h3>
            <p>This is a self-guided travel portfolio, not a tour operator or travel agency.</p>
            <p>No business address, telephone number, or contact inbox is configured.</p>
          </aside>
        </div>
      </section>

      <section id="photo-credits" className="section photo-credits">
        <SectionHeading title="Photo credits" description="Openly licensed photography from Wikimedia Commons. Images are cropped for layout; no other edits are implied." />
        <ul>
          {photoCredits.map((credit) => <li key={credit.file}><a href={credit.sourcePage} target="_blank" rel="noreferrer">{credit.commonsTitle.replace(/^File:/, '')}</a><span>{credit.photographer} · {credit.license}</span></li>)}
        </ul>
      </section>
    </>
  )
}
