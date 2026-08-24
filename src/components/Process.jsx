import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Conversamos',
    description: 'Entendo o seu negócio, objectivos e o que o seu cliente precisa de ver. Sem formulários genéricos — uma conversa real.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Planeamos',
    description: 'Definimos a estrutura, o conteúdo e a experiência que o projecto vai ter. Antes de escrever uma linha de código, temos um plano claro.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        <path d="M9 12h6M9 16h4"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Construímos',
    description: 'Desenvolvemos a solução com foco em qualidade e performance. Partilhamos o progresso ao longo do desenvolvimento para que esteja sempre a par.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="16,18 22,12 16,6"/>
        <polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Publicamos',
    description: 'Colocamos o projecto no ar e fazemos as validações finais — testes de responsividade, performance e funcionalidades — antes da entrega.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="process-section" aria-labelledby="process-heading">
      <div className="process-header reveal">
        <span className="section-label">Processo</span>
        <h2 id="process-heading" className="process-title">
          Como funciona
        </h2>
        <p className="process-subtitle">
          Um processo simples e transparente, do primeiro contacto à entrega do projecto.
        </p>
      </div>

      <div className="process-timeline" role="list" aria-label="Etapas do processo">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="process-step reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
            role="listitem"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="step-connector" aria-hidden="true"></div>
            )}

            <div className="step-icon-col">
              <div className="step-icon" aria-hidden="true">
                {step.icon}
              </div>
            </div>

            <div className="step-content">
              <div className="step-meta">
                <span className="step-number" aria-label={`Passo ${step.number}`}>{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
