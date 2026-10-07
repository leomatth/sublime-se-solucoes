import './WhyMe.css'

const reasons = [
  {
    number: '01',
    title: 'Design pensado para o negócio',
    body: 'Não criamos apenas páginas bonitas. Estruturamos a experiência para que o visitante saiba o que fazer — e o que sentir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Performance real',
    body: 'Sites rápidos, responsivos e preparados para diferentes dispositivos. A velocidade de carregamento afecta directamente a experiência e os resultados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'QA como diferencial',
    body: 'O nosso background em QA permite olhar para o projeto do ponto de vista de testes, bugs e experiência do utilizador — antes de entregar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.21.45 4.54 1.24"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Desenvolvimento moderno',
    body: 'Uso tecnologias actuais para criar soluções fáceis de manter, evoluir e escalar conforme o negócio cresce.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="16,18 22,12 16,6"/>
        <polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
  },
]

export default function WhyMe() {
  return (
    <section id="why-me" className="why-section" aria-labelledby="why-heading">
      <div className="why-header reveal">
        <span className="section-label">Diferenciais</span>
        <h2 id="why-heading" className="why-title">
          Por que trabalhar conosco?
        </h2>
        <p className="why-subtitle">
          Algumas razões pelas quais empresas escolhem trabalhar com um developer que também conhece QA.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <div
            key={r.number}
            className="why-card reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="why-card-header">
              <div className="why-icon" aria-hidden="true">
                {r.icon}
              </div>
              <span className="why-number" aria-hidden="true">{r.number}</span>
            </div>
            <h3 className="why-card-title">{r.title}</h3>
            <p className="why-card-body">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
