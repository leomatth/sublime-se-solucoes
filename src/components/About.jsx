import './About.css'
import profileImg from '../assets/profile/leomatth.png'

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-layout">
        {/* Image column */}
        <div className="about-image-col reveal">
          <div className="about-image-wrapper">
            <img
              src={profileImg}
              alt="Leonardo Pereira — Frontend Developer & QA"
              className="about-image"
              width="400"
              height="400"
              loading="lazy"
            />
            <div className="about-image-decoration" aria-hidden="true"></div>
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
            Um Developer que pensa como cliente
          </h2>

          <div className="about-body">
            <p>
              Sou Leonardo Pereira, desenvolvedor Front-end e profissional de QA,
              com experiência na criação de aplicações web e na garantia de qualidade
              de produtos digitais.
            </p>
            <p>
              O meu trabalho começa antes do código. Começa por entender o seu
              negócio, o que o diferencia, e o que o seu cliente precisa de ver para
              tomar uma decisão. Só depois estruturo a experiência e escrevo o código.
            </p>
            <p>
              O meu background em QA significa que entrego projectos que não apenas
              parecem bons — funcionam correctamente em todos os dispositivos,
              browsers e situações.
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
                <span>Todos os projectos são testados e optimizados para qualquer dispositivo.</span>
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
                <span>Testo o projecto antes de entregar — menos bugs, melhor experiência.</span>
              </div>
            </li>
          </ul>

          <div className="about-ctas">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Entrar em contacto com Leonardo Pereira"
            >
              Falar comigo
            </button>
            <a
              href="https://github.com/leomatth"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Ver perfil do GitHub de Leonardo Pereira"
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
