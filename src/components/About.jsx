import './About.css'
import Text3DFlip from './Text3DFlip'

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-layout">
        {/* Image column */}
        <div className="about-image-col reveal">
          <div className="about-image-wrapper" style={{ height: '400px', width: '100%', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text3DFlip
              text="SUBLIME-SE"
              color="#308ba2"
              staggerDuration={0.08}
              font={{
                fontFamily: "var(--font-sans)",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                letterSpacing: "-0.05em",
                lineHeight: "1em",
                textAlign: "center"
              }}
            />
            <Text3DFlip
              text="SOLUÇÕES"
              color="#f8b816"
              staggerDuration={0.06}
              staggerFrom="last"
              font={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                letterSpacing: "0.2em",
                lineHeight: "1em",
                textAlign: "center"
              }}
              style={{ marginTop: '-2rem' }}
            />
          </div>

          {/* Stack badge */}
          <div className="about-stack-card" aria-label="Stack tecnológico principal">
            <p className="stack-label">Stack principal</p>
            <div className="stack-items">
              {['React', 'TypeScript', 'Next.js', 'Node.js'].map((tech) => (
                <span key={tech} className="stack-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="about-text-col reveal">
          <span className="section-label">Sobre</span>

          <h2 id="about-heading" className="about-title">
            Transformamos a sua presença digital em resultados
          </h2>

          <div className="about-body">
            <p>
              Nós somos a <strong>Sublime-se Soluções</strong>, uma empresa especialista em soluções digitais que entende que o seu negócio é único e merece brilhar na internet.
            </p>
            <p>
              Do desenvolvimento de sites premium e aplicações exclusivas até à criação de sistemas inteligentes com automação e atendimento via IA, o nosso foco é um só: escalar as suas vendas. Nós estruturamos o seu posicionamento, criamos automações para o seu negócio e impulsionamos o seu Instagram para alcançar quem realmente importa.
            </p>
            <p>
              Não entregamos apenas tecnologia. Entregamos a tranquilidade de saber que o seu negócio funciona de forma inteligente, conectando marcas a pessoas através de experiências digitais memoráveis e focadas na conversão.
            </p>
          </div>

          {/* Highlights */}
          <ul className="about-highlights" aria-label="Características principais">
            <li className="about-highlight">
              <div className="highlight-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.21.45 4.54 1.24"/>
                </svg>
              </div>
              <div>
                <strong>Foco no resultado</strong>
                <span>Não apenas código bonito — websites que ajudam o negócio a crescer.</span>
              </div>
            </li>
            <li className="about-highlight">
              <div className="highlight-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <div>
                <strong>Mobile first</strong>
                <span>Todos os projetos são testados e optimizados para qualquer dispositivo.</span>
              </div>
            </li>
            <li className="about-highlight">
              <div className="highlight-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
                </svg>
              </div>
              <div>
                <strong>QA integrado</strong>
                <span>Testo o projeto antes de entregar — menos bugs, melhor experiência.</span>
              </div>
            </li>
          </ul>

          <div className="about-ctas">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Entrar em contacto com a Sublime-se Soluções"
            >
              Falar conosco
            </button>
            <a
              href="https://github.com/leomatth"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Ver perfil do GitHub da Sublime-se Soluções"
            >
              GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
