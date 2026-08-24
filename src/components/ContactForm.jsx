import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

const EMAILJS_SERVICE_ID = 'service_jwbzc0h'
const EMAILJS_TEMPLATE_ID = 'template_d0a8wif'
const EMAILJS_PUBLIC_KEY = 'HI4fyNiSJo46BBFVt'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    company: '',
    projectDescription: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const templateParams = {
      firstName: formData.firstName,
      email: formData.email,
      company: formData.company || 'Não indicado',
      projectDescription: formData.projectDescription,
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        setSubmitted(true)
        setFormData({ firstName: '', email: '', company: '', projectDescription: '' })
        setTimeout(() => setSubmitted(false), 5000)
      })
      .catch(() => {
        setError('Ocorreu um erro ao enviar. Por favor tente novamente ou envie um email directo.')
      })
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact-form" className="contact-form-section" aria-labelledby="contact-form-heading">
      <div className="contact-form-layout">
        {/* Left: intro */}
        <div className="form-intro reveal">
          <span className="section-label">Contacto</span>
          <h2 id="contact-form-heading" className="form-intro-title">
            Vamos falar sobre o seu projecto
          </h2>
          <p className="form-intro-body">
            Tem um negócio e precisa de um website profissional? Preencha o formulário e
            entramos em contacto em menos de 24 horas.
          </p>

          <div className="form-direct-contacts" aria-label="Contactos directos">
            <a
              href="mailto:leomattheus95@gmail.com"
              className="direct-contact-item"
              aria-label="Enviar email para leomattheus95@gmail.com"
            >
              <div className="direct-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <span className="direct-contact-label">Email</span>
                <span className="direct-contact-value">leomattheus95@gmail.com</span>
              </div>
            </a>

            <a
              href="https://instagram.com/sublimese.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="direct-contact-item"
              aria-label="Ver perfil Instagram da Sublime-se Soluções"
            >
              <div className="direct-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <span className="direct-contact-label">Instagram</span>
                <span className="direct-contact-value">sublimese.oficial</span>
              </div>
            </a>

            <a
              href="https://github.com/leomatth"
              target="_blank"
              rel="noopener noreferrer"
              className="direct-contact-item"
              aria-label="Ver perfil GitHub da Sublime-se Soluções"
            >
              <div className="direct-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <span className="direct-contact-label">GitHub</span>
                <span className="direct-contact-value">leomatth</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="form-container reveal">
          {submitted ? (
            <div className="form-success" role="alert" aria-live="polite">
              <div className="success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.21.45 4.54 1.24"/>
                </svg>
              </div>
              <h3>Mensagem enviada!</h3>
              <p>Obrigado pelo contacto. Entraremos em contacto em breve.</p>
            </div>
          ) : (
            <form
              id="contact-form-element"
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulário de contacto"
            >
              <div className="form-field">
                <label htmlFor="cf-name" className="form-label">
                  Nome <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="cf-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="O seu nome"
                  autoComplete="given-name"
                  aria-required="true"
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-email" className="form-label">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="o.seu@email.com"
                  autoComplete="email"
                  aria-required="true"
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-company" className="form-label">
                  Empresa / Negócio
                </label>
                <input
                  type="text"
                  id="cf-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome do negócio (opcional)"
                  autoComplete="organization"
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-message" className="form-label">
                  Mensagem <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  placeholder="Conte-nos sobre o seu negócio e o que precisa..."
                  rows={5}
                  aria-required="true"
                />
              </div>

              {error && (
                <div className="form-error" role="alert" aria-live="assertive">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4M12 16h.01"/>
                  </svg>
                  {error}
                </div>
              )}

              <button
                type="submit"
                id="contact-submit-btn"
                className="btn btn-primary btn-lg form-submit"
                disabled={loading}
                aria-label={loading ? 'A enviar mensagem...' : 'Enviar pedido de contacto'}
              >
                {loading ? (
                  <>
                    <span className="btn-spinner" aria-hidden="true"></span>
                    A enviar...
                  </>
                ) : 'Enviar pedido'}
              </button>

              <p className="form-note">
                Respondemos em menos de 24 horas. Os seus dados são usados apenas para responder ao seu pedido.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
