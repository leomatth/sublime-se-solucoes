import './QASection.css'

const checks = [
  { label: 'Responsive Design', detail: 'Funciona em todos os tamanhos de ecrã' },
  { label: 'Cross-browser', detail: 'Testado em Chrome, Firefox, Safari e Edge' },
  { label: 'Performance', detail: 'Carregamento optimizado para velocidade' },
  { label: 'Acessibilidade', detail: 'Navegação por teclado e leitores de ecrã' },
  { label: 'Functional Testing', detail: 'Formulários, links e interacções validados' },
]

export default function QASection() {
  return (
    <section id="qa" className="qa-section" aria-labelledby="qa-heading">
      <div className="qa-layout">
        {/* Left: text */}
        <div className="qa-text reveal">
          <span className="section-label">Quality Assurance</span>
          <h2 id="qa-heading" className="qa-title">
            Além de desenvolver,<br />nós testamos.
          </h2>
          <p className="qa-body">
            O nosso background em QA significa que cada projecto passa por validações
            antes de ser entregue. Não apenas "parece bom no nosso ecrã" — funciona
            correctamente para todos os seus utilizadores.
          </p>
          <p className="qa-body">
            Testes funcionais, validação de responsividade, compatibilidade entre
            browsers e auditoria de performance fazem parte do processo padrão.
          </p>

          <div className="qa-tools" aria-label="Ferramentas de QA">
            <p className="qa-tools-label">Ferramentas</p>
            <div className="qa-tools-list">
              {['Playwright', 'Cypress', 'Selenium', 'Jest', 'Lighthouse', 'DevTools'].map((tool) => (
                <span key={tool} className="qa-tool">{tool}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: quality check card */}
        <div className="qa-card-col reveal">
          <div className="qa-card" role="region" aria-label="Lista de verificações de qualidade">
            <div className="qa-card-header">
              <div className="qa-card-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.21.45 4.54 1.24"/>
                </svg>
                Quality Check
              </div>
              <div className="qa-status" aria-label="Estado: Todos os testes passaram">
                <span className="qa-status-dot"></span>
                All passed
              </div>
            </div>

            <ul className="qa-checks" aria-label="Verificações de qualidade realizadas">
              {checks.map((check, i) => (
                <li
                  key={check.label}
                  className="qa-check-item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="check-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5 6.5-7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="check-content">
                    <span className="check-label">{check.label}</span>
                    <span className="check-detail">{check.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
