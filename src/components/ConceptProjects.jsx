import { useState } from 'react'
import './ConceptProjects.css'
import barbeariaImg from '../assets/concepts/barbearia.jpg'
import esteticaImg from '../assets/concepts/estetica.jpg'
import personalImg from '../assets/concepts/personal.jpg'
import DashboardModal from './DashboardModal'

const concepts = [
  {
    id: 'barbearia',
    niche: 'Barbearia',
    name: 'Barbearia Urban',
    tagline: 'A arte do corte perfeito',
    description: 'Website com design sóbrio e masculino, apresentação de serviços com preços, galeria de trabalhos e botão de agendamento directo.',
    image: barbeariaImg,
    color: '#c9a227',
    services: ['Corte Clássico', 'Barba & Bigode', 'Tratamento Capilar'],
    accentClass: 'accent-amber',
    type: 'website'
  },
  {
    id: 'estetica',
    niche: 'Estética & Salão',
    name: 'Studio Élite',
    tagline: 'Beleza com propósito',
    description: 'Website elegante para salão de beleza, com apresentação de serviços, galeria de resultados, horários e reservas online.',
    image: esteticaImg,
    color: '#c084a0',
    services: ['Cabelo', 'Estética', 'Unhas'],
    accentClass: 'accent-rose',
    type: 'website'
  },
  {
    id: 'personal',
    niche: 'Personal Trainer',
    name: 'João Silva Personal',
    tagline: 'Resultados reais. Método comprovado.',
    description: 'Landing page de alto impacto para personal trainer, com apresentação do método, serviços, pacotes e formulário de contacto.',
    image: personalImg,
    color: '#22c55e',
    services: ['Treino Presencial', 'Online Coaching', 'Avaliação Física'],
    accentClass: 'accent-green',
    type: 'website'
  },
  {
    id: 'dashboard-marketing',
    niche: 'Marketing & Vendas',
    name: 'Marketing Analytics Pro',
    tagline: 'Conversões e Leads em tempo real',
    description: 'Dashboard interativo para agências e equipas de marketing monitorizarem campanhas, ROI, custo por lead e tráfego.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#3b82f6',
    services: ['Análise de Leads', 'ROI de Campanhas', 'Tráfego Web'],
    accentClass: 'accent-blue',
    type: 'dashboard'
  },
  {
    id: 'dashboard-ecommerce',
    niche: 'E-commerce',
    name: 'Sales Control 360',
    tagline: 'O pulso da sua loja online',
    description: 'Dashboard financeiro focado em e-commerce. Acompanhe vendas diárias, produtos mais vendidos, margem de lucro e comportamento de clientes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#8b5cf6',
    services: ['Receita Diária', 'Top Produtos', 'Margem de Lucro'],
    accentClass: 'accent-purple',
    type: 'dashboard'
  },
  {
    id: 'dashboard-saude',
    niche: 'Saúde & Clínicas',
    name: 'Clinic Metrics',
    tagline: 'Gestão de pacientes e consultas',
    description: 'Dashboard analítico para gestão de clínicas. Visualize o volume de consultas, taxas de abstenção (no-show) e performance do corpo clínico.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    color: '#14b8a6',
    services: ['Gestão de Consultas', 'Análise de No-shows', 'Produtividade'],
    accentClass: 'accent-teal',
    type: 'dashboard'
  },
]

export default function ConceptProjects() {
  const [activeDashboard, setActiveDashboard] = useState(null);

  const openDashboard = (concept) => {
    setActiveDashboard(concept);
    document.body.style.overflow = 'hidden';
  };

  const closeDashboard = () => {
    setActiveDashboard(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="concept-projects" className="concepts-section" aria-labelledby="concepts-heading">
      <div className="concepts-header reveal">
        <span className="section-label">Demonstração & Dados</span>
        <h2 id="concepts-heading" className="concepts-title">
          Conceitos e Dashboards
        </h2>
        <p className="concepts-subtitle">
          O seu negócio pode ter uma presença digital e inteligência de dados exactamente assim. 
          Estes são projetos demonstrativos criados para mostrar o que é possível.
        </p>
        <div className="concepts-disclaimer" role="note" aria-label="Aviso sobre projetos demonstrativos">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4M12 16h.01"/>
          </svg>
          Projetos demonstrativos — não representam clientes reais
        </div>
      </div>

      <div className="concepts-grid">
        {concepts.map((concept, i) => (
          <article
            key={concept.id}
            id={`concept-${concept.id}`}
            className={`concept-card reveal ${concept.accentClass}`}
            style={{ '--concept-color': concept.color, animationDelay: `${i * 0.15}s` }}
            aria-labelledby={`concept-title-${concept.id}`}
          >
            {/* Badge */}
            <div className="concept-badge" aria-label={`Projeto demonstrativo: ${concept.niche}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Conceito Demonstrativo
            </div>

            {/* Image */}
            <div className="concept-image-wrapper">
              <img
                src={concept.image}
                alt={`Mockup do conceito de website para ${concept.niche}: ${concept.name}`}
                className="concept-image"
                loading="lazy"
                width="800"
                height="450"
              />
              <div className="concept-image-overlay" aria-hidden="true"></div>
            </div>

            {/* Content */}
            <div className="concept-content">
              <div className="concept-niche-label">{concept.niche}</div>
              <h3 id={`concept-title-${concept.id}`} className="concept-name">
                {concept.name}
              </h3>
              <p className="concept-tagline">"{concept.tagline}"</p>
              <p className="concept-description">{concept.description}</p>

              <div className="concept-services" aria-label={`Serviços no projeto ${concept.niche}`}>
                {concept.services.map((service) => (
                  <span key={service} className="concept-service-tag">{service}</span>
                ))}
              </div>

              <div className="concept-cta">
                <p className="concept-cta-text">
                  {concept.type === 'dashboard' ? 'Gostaria de ter estes dados?' : 'Tem um negócio neste nicho?'}
                </p>
                {concept.type === 'dashboard' ? (
                  <button
                    className="btn btn-primary concept-cta-btn"
                    onClick={() => openDashboard(concept)}
                    aria-label={`Ver dashboard para ${concept.niche}`}
                  >
                    Ver Dashboard
                  </button>
                ) : (
                  <button
                    className="btn btn-primary concept-cta-btn"
                    onClick={() => {
                      const el = document.getElementById('contact-form')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    aria-label={`Solicitar website para ${concept.niche}`}
                  >
                    Quero um website assim
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <DashboardModal
        isOpen={!!activeDashboard}
        onClose={closeDashboard}
        title={activeDashboard?.name || ''}
        image={activeDashboard?.image}
      />
    </section>
  )
}
