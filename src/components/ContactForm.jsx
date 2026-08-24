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
            entro em contacto em menos de 24 horas.
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
              href="https://www.linkedin.com/in/leomatth95"
              target="_blank"
              rel="noopener noreferrer"
              className="direct-contact-item"
              aria-label="Ver perfil LinkedIn de Leonardo Pereira"
            >
              <div className="direct-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <span className="direct-contact-label">LinkedIn</span>
                <span className="direct-contact-value">Leonardo Pereira</span>
              </div>
            </a>

            <a
              href="https://github.com/leomatth"
              target="_blank"
              rel="noopener noreferrer"
              className="direct-contact-item"
              aria-label="Ver perfil GitHub de Leonardo Pereira"
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
              <p>Obrigado pelo contacto. Entrarei em contacto em breve.</p>
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
                  placeholder="Conte-me sobre o seu negócio e o que precisa..."
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
                Respondo em menos de 24 horas. Os seus dados são usados apenas para responder ao seu pedido.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
