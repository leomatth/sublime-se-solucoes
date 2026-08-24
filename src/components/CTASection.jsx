import './CTASection.css'

export default function CTASection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta-section" className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-orb cta-orb-1"></div>
        <div className="cta-orb cta-orb-2"></div>
      </div>

      <div className="cta-content reveal">
        <div className="cta-label section-label">Pronto para começar?</div>

        <h2 id="cta-heading" className="cta-title">
          O seu negócio merece mais do que
          um perfil nas redes sociais.
        </h2>

        <p className="cta-subtitle">
          Vamos transformar a presença digital da sua empresa numa experiência
          profissional, rápida e pensada para gerar oportunidades.
        </p>

        <div className="cta-actions">
          <button
            id="cta-primary-btn"
            className="btn btn-primary btn-lg"
            onClick={() => scrollTo('contact-form')}
            aria-label="Falar sobre o meu projecto"
          >
            Quero falar sobre meu projecto
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            id="cta-secondary-btn"
            className="btn btn-secondary btn-lg"
            onClick={() => scrollTo('projects')}
            aria-label="Ver trabalho realizado"
          >
            Ver o meu trabalho
          </button>
        </div>
      </div>
    </section>
  )
}
