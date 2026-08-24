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
            <span className="eyebrow-label">INDEPENDENT FRONT-END DEVELOPER</span>
          </div>

          {/* Headline — typographic editorial mix */}
          <h1 className="hero-headline" aria-label="Websites que fazem o seu negócio parecer tão bom quanto ele é.">
            <span className="hl-light">Websites que fazem</span>
            <span className="hl-bold">o seu negócio parecer</span>
            <span className="hl-regular">tão bom quanto ele é.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub">
            Desenvolvemos websites e landing pages para empresas que querem
            uma presença digital profissional, rápida e pensada para gerar oportunidades.
          </p>

          {/* CTAs — one primary button + text link */}
          <div className="hero-actions">
            <button
              id="hero-cta-primary"
              className="btn btn-primary hero-btn-primary"
              onClick={() => scrollTo('contact-form')}
              aria-label="Falar sobre um projecto com a Sublime-se Soluções"
            >
              Falar sobre um projecto
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7.5 1.5L13 7l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
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
            Frontend · Performance · SEO · QA
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
