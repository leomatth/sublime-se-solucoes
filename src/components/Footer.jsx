import './Footer.css'

const currentYear = new Date().getFullYear()

const footerLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Projectos', id: 'projects' },
  { label: 'Sobre', id: 'about' },
  { label: 'Contacto', id: 'contact-form' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/leomatth',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/sublimese.oficial',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Loja',
    href: 'https://sublime-se.com.br/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:diretoria@solucoes.sublime-se.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        {/* Top row */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark"><span className="logo-mark-sublime">S</span><span className="logo-mark-solucoes">S</span></span>
              <div>
                <p className="footer-name">Sublime-se Soluções</p>
                <p className="footer-role">Desenvolvimento Digital</p>
              </div>
            </div>
            <p className="footer-tagline">
              Websites e experiências digitais que ajudam negócios a crescer.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Links do rodapé">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                className="footer-nav-link"
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="footer-social" aria-label="Redes sociais e contactos">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="footer-social-link"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider" role="separator" aria-hidden="true"></div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Sublime-se Soluções. Todos os direitos reservados.
          </p>
          <p className="footer-made">
            Feito com React &amp; CSS Vanilla
          </p>
        </div>
      </div>
    </footer>
  )
}
