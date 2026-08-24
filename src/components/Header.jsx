import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Projetos', id: 'projects' },
  { label: 'Sobre', id: 'about' },
  { label: 'Contacto', id: 'contact-form' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-container">
        {/* Logo */}
        <button
          className="header-logo"
          onClick={() => scrollToSection('hero')}
          aria-label="Ir para o início"
        >
          <span className="logo-mark"><span className="logo-mark-sublime">S</span><span className="logo-mark-solucoes">S</span></span>
          <span className="logo-text">Sublime-se Soluções</span>
        </button>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          className="header-cta btn btn-primary"
          onClick={() => scrollToSection('contact-form')}
          aria-label="Entrar em contacto"
        >
          Falar conosco
        </button>

        {/* Mobile toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
        <nav className="mobile-nav" aria-label="Navegação móvel">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="mobile-nav-link"
              onClick={() => scrollToSection(link.id)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {link.label}
            </button>
          ))}
          <button
            className="mobile-cta btn btn-primary btn-lg"
            onClick={() => scrollToSection('contact-form')}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Falar conosco
          </button>
        </nav>
      </div>
    </header>
  )
}
