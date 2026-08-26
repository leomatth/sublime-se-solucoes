import './Hero.css'
import heroProjectImg from '../assets/projects/euro_wine.jpg'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" aria-label="Apresentação">
      <div className="hero-layout">

        {/* ── LEFT: editorial text ─────────────────────────────── */}
        <div className="hero-text">

          {/* Eyebrow — editorial label, not a pill badge */}
          <div className="hero-eyebrow">
            <span className="eyebrow-rule" aria-hidden="true"></span>
            <span className="eyebrow-label">SOLUÇÕES DIGITAIS PARA PEQUENOS NEGÓCIOS</span>
          </div>

          {/* Headline — fixed and focused on local businesses */}
          <h1 className="hero-headline" aria-label="O seu negócio merece uma presença digital à sua altura.">
            <span className="hl-light">O seu negócio merece</span>
            <span className="hl-bold">uma presença digital</span>
            <span className="hl-regular">à sua altura.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub">
            Websites, landing pages e automações para salões, restaurantes, clínicas e
            prestadores de serviço que querem crescer online e transformar visitas em clientes.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            {/* WhatsApp — primary, high-conversion CTA */}
            <a
              id="hero-cta-whatsapp"
              href="https://wa.me/5521976670234?text=Ol%C3%A1%21%20Tenho%20um%20neg%C3%B3cio%20local%20e%20gostaria%20de%20saber%20como%20melhorar%20a%20minha%20presen%C3%A7a%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn-whatsapp"
              aria-label="Falar connosco no WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <button
              id="hero-cta-secondary"
              className="hero-link"
              onClick={() => scrollTo('projects')}
              aria-label="Ver projectos realizados"
            >
              Ver projectos ↗
            </button>
          </div>

          {/* Meta — very quiet, no pills */}
          <p className="hero-meta" aria-label="Especialidades">
            Websites · Landing Pages · Automações · WhatsApp & Instagram
          </p>
        </div>

        {/* ── RIGHT: project visual ────────────────────────────── */}
        <div className="hero-visual" aria-hidden="true">

          {/* Project frame */}
          <a
            href="https://eurowineexperience.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-project-frame"
            aria-label="Ver projecto Euro Wine Experience ao vivo"
          >
            <img
              src={heroProjectImg}
              alt="Projecto Euro Wine Experience — website desenvolvido pela Sublime-se Soluções"
              className="hero-project-img"
              loading="eager"
              width="800"
              height="450"
            />
            {/* Hover overlay */}
            <div className="hero-project-hover">
              <span className="project-hover-label">Ver projecto ↗</span>
            </div>
          </a>

          {/* Caption — editorial style */}
          <div className="hero-project-caption">
            <div className="caption-rule" aria-hidden="true"></div>
            <div className="caption-body">
              <span className="caption-index" aria-hidden="true">01</span>
              <div className="caption-info">
                <span className="caption-name">Euro Wine Experience</span>
                <span className="caption-type">Vitrine Digital · React · Vite</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
