import { useState, useEffect, useRef, useCallback } from 'react'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfólio Adriano Dantas",
      description: "Portfólio profissional responsivo com showcase de projetos, experiência profissional e formulário de contato integrado.",
      link: "https://adrianodantas.vercel.app/",
      demo: "https://adrianodantas.vercel.app/",
      tags: ['React', 'Vite', 'Responsivo', 'Portfolio']
    },
    {
      id: 2,
      title: "Inova Digital",
      description: "Landing page institucional moderna para agência de marketing e tecnologia, com seções de serviços, portfolio e CTA otimizado.",
      link: "https://inova-digital.vercel.app/",
      demo: "https://inova-digital.vercel.app/",
      tags: ['React', 'Landing Page', 'UI/UX', 'Conversão']
    },
    {
      id: 3,
      title: 'Bikecraft',
      description: 'Landing page para loja de bicicletas customizadas, com layout responsivo e animações modernas.',
      tags: ['HTML5', 'CSS Grid', 'UI/UX', 'Flexbox'],
      link: 'https://github.com/leomatth/bikecraft.github.io',
      demo: 'https://bikecraft-github-io.vercel.app/'
    },
    {
      id: 4,
      title: 'Euro Wine Experience',
      description: 'Vitrine digital para experiências enogastronômicas com design premium, animações suaves e galeria interativa',
      tags: ['React', 'Vite', 'Animações', 'Design Premium'],
      link: 'https://github.com/leomatth',
      demo: 'https://eurowineexperience.vercel.app/'
    },
    {
      id: 5,
      title: 'Ygor Azevedo Nutri',
      description: 'Plataforma completa para nutricionista com seções de planos alimentares, depoimentos de pacientes e formulário de contato',
      tags: ['JavaScript', 'Bootstrap', 'Responsivo', 'Forms'],
      link: 'https://github.com/leomatth/YgorAzevedoNutri',
      demo: 'https://ygorazevedo.vercel.app/'
    },
    {
      id: 6,
      title: 'Glamuor Flor Salão',
      description: 'Landing page de alta conversão para salão de beleza com catálogo de serviços, preços e botão de agendamento direto',
      tags: ['Landing Page', 'CSS3', 'Conversão', 'Mobile First'],
      link: 'https://github.com/leomatth',
      demo: 'https://glamuorflor-landing-page.vercel.app/'
    },
    {
      id: 7,
      title: 'Elias Lanches',
      description: 'Cardápio digital interativo com categorias, fotos dos pratos e integração para pedidos via WhatsApp',
      tags: ['Cardápio Digital', 'WhatsApp API', 'Mobile First', 'UI/UX'],
      link: 'https://github.com/leomatth',
      demo: 'https://elias-lanches.ola.click/'
    },
    {
      id: 8,
      title: 'Landing Page Ygor Azevedo',
      description: 'Página de captura com copy persuasiva, CTA estratégicos, prova social e design focado em conversão de leads',
      tags: ['React', 'Vite', 'Copywriting', 'Conversão'],
      link: 'https://github.com/leomatth/landing-page-ygor-azevedo',
      demo: 'https://landing-page-ygor-azevedo.vercel.app/'
    }
  ]

  const getItemsPerPage = () => {
    if (window.innerWidth <= 768) return 1
    if (window.innerWidth <= 1024) return 2
    return 3
  }

  const [flipped, setFlipped] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage())
      setCurrentIndex(0)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % totalPages)
  }, [currentIndex, totalPages, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + totalPages) % totalPages)
  }, [currentIndex, totalPages, goToSlide])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
  }

  const toggleFlip = (id, e) => {
    e.stopPropagation()
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="projects" className="projects">
      <h2>Projetos em Destaque</h2>
      <div
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide} aria-label="Anterior">
          ‹
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="carousel-slide">
                {projects.slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage).map((project) => (
                  <div
                    key={project.id}
                    className={`project-card ${flipped[project.id] ? 'flipped' : ''}`}
                    onClick={(e) => toggleFlip(project.id, e)}
                  >
                    <div className="project-card-inner">
                      <div className="project-card-front">
                        <div className="project-content">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <div className="project-tags">
                            {project.tags.map((tag, index) => (
                              <span key={index} className="tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flip-icon">↻</div>
                      </div>
                      <div className="project-card-back">
                        <div className="project-links">
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link github-link" onClick={(e) => e.stopPropagation()}>
                            GitHub
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link" onClick={(e) => e.stopPropagation()}>
                              Demo
                            </a>
                          )}
                        </div>
                        <div className="flip-icon">↻</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide} aria-label="Próximo">
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para página ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
