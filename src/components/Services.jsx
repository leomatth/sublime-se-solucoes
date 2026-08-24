import './Services.css'

const services = [
  {
    id: 'websites',
    number: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Websites Profissionais',
    description: 'Websites modernos e responsivos para empresas, profissionais e marcas que precisam de uma presença digital profissional.',
    tags: ['React', 'Next.js', 'HTML/CSS', 'Responsivo'],
  },
  {
    id: 'landing',
    number: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Landing Pages',
    description: 'Páginas focadas em apresentar serviços, gerar contactos, reservas, leads ou vendas. Estruturadas para converter visitantes em clientes.',
    tags: ['Copywriting', 'Conversão', 'CTA', 'A/B Testing'],
  },
  {
    id: 'performance',
    number: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    title: 'Performance & SEO',
    description: 'Experiências rápidas, responsivas e estruturadas para oferecer uma boa experiência ao utilizador e melhorar a presença nos motores de busca.',
    tags: ['Core Web Vitals', 'Lighthouse', 'SEO Técnico', 'Acessibilidade'],
  },
  {
    id: 'qa',
    number: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.21.45 4.54 1.24"/>
      </svg>
    ),
    title: 'QA & Qualidade',
    description: 'Testes e validações para garantir que o projecto funciona correctamente em diferentes dispositivos, browsers e tamanhos de ecrã.',
    tags: ['Cross-browser', 'Responsive Testing', 'Functional Testing', 'Bug Reports'],
  },
  {
    id: 'analytics',
    number: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Análise de Dados & Dashboards',
    description: 'Transformamos dados em decisões. Dashboards interativos (Power BI), implementação de Google Analytics e análise de métricas de marketing para o seu negócio.',
    tags: ['Power BI', 'Google Analytics', 'Métricas', 'Leads'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="services-header reveal">
        <span className="section-label">O que nós fazemos</span>
        <h2 id="services-heading" className="services-title">
          Serviços para o seu negócio
        </h2>
        <p className="services-subtitle">
          Desde a primeira impressão até à conversão — cada projecto é pensado para ajudar o seu negócio a crescer online.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <article
            key={service.id}
            id={`service-${service.id}`}
            className="service-card reveal"
            style={{ animationDelay: `${i * 0.1}s` }}
            aria-labelledby={`service-title-${service.id}`}
          >
            <div className="service-header">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <span className="service-number" aria-hidden="true">{service.number}</span>
            </div>
            <h3 id={`service-title-${service.id}`} className="service-title-text">
              {service.title}
            </h3>
            <p className="service-description">{service.description}</p>
            <div className="service-tags" aria-label="Tecnologias e abordagens">
              {service.tags.map((tag) => (
                <span key={tag} className="service-tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
