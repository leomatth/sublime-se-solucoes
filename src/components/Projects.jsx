import { useState, useCallback } from 'react'
import CoverflowGallery from './CoverflowGallery'
import './Projects.css'

import imgYgorNutri from '../assets/projects/ygor_nutri.jpg'

import imgInovaDigital from '../assets/projects/inova_digital.jpg'
import imgEuroWine from '../assets/projects/euro_wine.jpg'
import imgAdriano from '../assets/projects/adriano.jpg'
import imgGlamuor from '../assets/projects/glamuor.jpg'
import imgEliasLanches from '../assets/projects/elias_lanches.jpg'
import imgBikecraft from '../assets/projects/bikecraft.jpg'
import imgTraceIstqb from '../assets/projects/trace_istqb.jpg'
import imgVioletribute from '../assets/projects/violetribute.jpg'
import imgMendozaWine from '../assets/projects/mendoza_wine.jpg'

const images = {
  'ygor-nutri': imgYgorNutri,
  'inova-digital': imgInovaDigital,
  'euro-wine': imgEuroWine,
  'adriano-portfolio': imgAdriano,
  'glamuor': imgGlamuor,
  'elias-lanches': imgEliasLanches,
  'bikecraft': imgBikecraft,
  'trace-istqb': imgTraceIstqb,
  'violetribute': imgVioletribute,
  'mendoza-wine': imgMendozaWine,
}

const projects = [
  {
    id: 'ygor-nutri',
    category: 'Website Profissional',
    title: 'Ygor Azevedo Nutri',
    problem: 'Nutricionista sem presença digital, dependente apenas de indicações e redes sociais.',
    solution: 'Website desenvolvido para apresentar os serviços profissionais, facilitar o contacto e criar uma presença digital mais profissional.',
    tags: ['JavaScript', 'Bootstrap', 'Responsivo'],
    link: 'https://github.com/leomatth/YgorAzevedoNutri',
    demo: 'https://ygorazevedo.vercel.app/',
    color: '#075384',
    gradient: 'linear-gradient(135deg, #0f1729 0%, #1a2347 50%, #0d1535 100%)',
  },
  {
    id: 'inova-digital',
    category: 'Landing Page Institucional',
    title: 'Inova Digital',
    problem: 'Agência de marketing precisava de uma presença online que transmitisse credibilidade.',
    solution: 'Landing page institucional moderna com secções de serviços, portefólio e CTA optimizado para gerar contactos.',
    tags: ['React', 'Landing Page', 'UI/UX'],
    link: 'https://inova-digital.vercel.app/',
    demo: 'https://inova-digital.vercel.app/',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #041f2e 0%, #0a3347 50%, #031825 100%)',
  },
  {
    id: 'euro-wine',
    category: 'Vitrine Digital',
    title: 'Euro Wine Experience',
    problem: 'Empresa de experiências enogastronómicas precisava de uma vitrine premium.',
    solution: 'Design premium com animações suaves, galeria interactiva e identidade visual sofisticada.',
    tags: ['React', 'Vite', 'Animações'],
    link: 'https://github.com/leomatth',
    demo: 'https://eurowineexperience.vercel.app/',
    color: '#c084fc',
    gradient: 'linear-gradient(135deg, #1e0a2e 0%, #350f52 50%, #18061f 100%)',
  },
  {
    id: 'adriano-portfolio',
    category: 'Portfólio',
    title: 'Portfólio Adriano Dantas',
    problem: 'Profissional de tecnologia precisava de um portfólio que destacasse a sua experiência.',
    solution: 'Portfólio responsivo com showcase de projetos, experiência profissional e formulário de contacto.',
    tags: ['React', 'Vite', 'Responsivo'],
    link: 'https://adrianodantas.vercel.app/',
    demo: 'https://adrianodantas.vercel.app/',
    color: '#4ade80',
    gradient: 'linear-gradient(135deg, #051a0f 0%, #0a2e1a 50%, #041208 100%)',
  },
  {
    id: 'glamuor',
    category: 'Landing Page',
    title: 'Glamuor Flor Salão',
    problem: 'Salão de beleza sem forma de mostrar serviços online.',
    solution: 'Landing page de alta conversão com catálogo de serviços, preços e botão de agendamento.',
    tags: ['Landing Page', 'CSS3', 'Mobile First'],
    link: 'https://github.com/leomatth',
    demo: 'https://glamuorflor-landing-page.vercel.app/',
    color: '#f472b6',
    gradient: 'linear-gradient(135deg, #250a1a 0%, #3d1030 50%, #1a0612 100%)',
  },
  {
    id: 'elias-lanches',
    category: 'Cardápio Digital',
    title: 'Elias Lanches',
    problem: 'Lanchonete sem forma digital de apresentar o cardápio e receber pedidos.',
    solution: 'Cardápio digital interactivo com categorias, fotos e integração para pedidos via WhatsApp.',
    tags: ['Cardápio Digital', 'WhatsApp', 'Mobile First'],
    link: 'https://github.com/leomatth',
    demo: 'https://elias-lanches.ola.click/',
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, #1f0e03 0%, #341803 50%, #180a01 100%)',
  },
  {
    id: 'bikecraft',
    category: 'E-commerce / Vitrine',
    title: 'Bikecraft',
    problem: 'Loja de bicicletas customizadas sem presença online.',
    solution: 'Landing page responsiva com layout moderno, galeria de produtos e animações de destaque.',
    tags: ['HTML5', 'CSS Grid', 'UI/UX'],
    link: 'https://github.com/leomatth/bikecraft.github.io',
    demo: 'https://bikecraft-github-io.vercel.app/',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #1f1503 0%, #342503 50%, #180e01 100%)',
  },
  {
    id: 'trace-istqb',
    category: 'Aplicação Web / QA',
    title: 'Trace — ISTQB',
    problem: 'Profissionais de QA precisam de uma forma estruturada de estudar e praticar os conceitos da certificação ISTQB.',
    solution: 'Aplicação web desenvolvida para apoiar o estudo da certificação ISTQB, com organização de conteúdos e prática de testes.',
    tags: ['QA', 'ISTQB', 'React', 'Aplicação Web'],
    link: 'https://github.com/leomatth/Trace-ISTQB',
    demo: null,
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, #031524 0%, #062538 50%, #021020 100%)',
  },
  {
    id: 'violetribute',
    category: 'Website Empresarial',
    title: 'Violetribute',
    problem: 'Empresa de limpeza profissional de escritórios sem presença digital para captar novos clientes B2B.',
    solution: 'Website premium desenvolvido para apresentar os serviços da empresa de forma profissional e gerar contactos comerciais.',
    tags: ['React', 'UI/UX', 'Design Premium', 'B2B'],
    link: 'https://github.com/leomatth/violetribute-premium-vision',
    demo: null,
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #12082e 0%, #1f1045 50%, #0d0520 100%)',
  },
  {
    id: 'mendoza-wine',
    category: 'Vitrine Premium',
    title: 'Mendoza Wine Dream',
    problem: 'Adega ou experiência vinícola da região de Mendoza sem uma vitrine digital à altura do produto.',
    solution: 'Website premium com design sofisticado, galeria de produtos e experiência visual que reflecte a qualidade e origem dos vinhos.',
    tags: ['React', 'Vite', 'Design Premium', 'UI/UX'],
    link: 'https://github.com/leomatth/mendoza-wine-dream',
    demo: null,
    color: '#e879a0',
    gradient: 'linear-gradient(135deg, #2a0a18 0%, #450f28 50%, #1f0612 100%)',
  },
]

// Map to slides format for CoverflowGallery
const slides = projects.map(p => ({
  title:    p.title,
  category: p.category,
  color:    p.color,
  gradient: p.gradient,
  image:    { src: images[p.id], alt: p.title },
}))

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = projects[activeIndex]

  const handleActiveChange = useCallback((i) => {
    setActiveIndex(i)
  }, [])

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">

      {/* Header */}
      <div className="projects-header reveal">
        <span className="section-label">Portfólio</span>
        <h2 id="projects-heading" className="projects-title">
          Projetos realizados
        </h2>
        <p className="projects-subtitle">
          Navegue pelos projetos e clique para ver os detalhes.
          Use as setas do teclado ou arraste no móvel.
        </p>
      </div>

      {/* Coverflow gallery */}
      <div className="projects-coverflow reveal">
        <CoverflowGallery
          slides={slides}
          cardWidth={400}
          cardHeight={270}
          radius={3}
          tilt={12}
          sideTilt={8}
          gap={8}
          opacity={60}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onActiveChange={handleActiveChange}
          initialActive={0}
        />
      </div>

      {/* Detail panel — animates when project changes */}
      <div
        className="projects-detail reveal"
        key={project.id}          /* re-mounts on change to trigger CSS animation */
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Detalhes do projeto: ${project.title}`}
      >
        <div className="detail-inner">
          {/* Left: info */}
          <div className="detail-info">
            <div className="detail-category-badge">
              <span className="detail-dot" style={{ background: project.color }}></span>
              {project.category}
            </div>

            <h3 className="detail-title">{project.title}</h3>

            <div className="detail-blocks">
              <div className="detail-block">
                <p className="detail-block-label">Contexto</p>
                <p className="detail-block-text">{project.problem}</p>
              </div>
              <div className="detail-block">
                <p className="detail-block-label">Solução</p>
                <p className="detail-block-text">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Right: tags + CTAs */}
          <div className="detail-side">
            <div className="detail-tags" aria-label="Tecnologias">
              {project.tags.map(tag => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>

            <div className="detail-ctas">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={`Ver projeto ${project.title} ao vivo`}
                >
                  Ver projeto ao vivo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
              {project.link && project.link !== 'https://github.com/leomatth' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label={`Ver código do projeto ${project.title} no GitHub`}
                >
                  Ver no GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* GitHub note */}
      <div className="projects-github-note reveal">
        <p>
          Quer conhecer o nosso lado técnico?{' '}
          <a href="https://github.com/leomatth" target="_blank" rel="noopener noreferrer" aria-label="Ver perfil GitHub">
            Veja os nossos projetos e código no GitHub →
          </a>
        </p>
      </div>
    </section>
  )
}
