import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Leotech</h2>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            Sobre
          </button>
          <button className="nav-link" onClick={() => scrollToSection('results')}>
            Resultados
          </button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>
            Skills
          </button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>
            Projetos
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contato
          </button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
