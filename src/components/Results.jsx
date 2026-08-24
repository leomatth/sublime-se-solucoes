import './Results.css'

export default function Results() {
  // Valores marcados com placeholder:true são ilustrativos — substitua pelos números reais assim que tiver os dados dos clientes.
  const results = [
    {
      icon: '🚀',
      value: '8+',
      label: 'Projetos entregues'
    },
    {
      icon: '📈',
      value: '+40%',
      label: 'Aumento médio em conversão de leads',
      placeholder: true
    },
    {
      icon: '⚡',
      value: '-50%',
      label: 'Redução no tempo de carregamento',
      placeholder: true
    },
    {
      icon: '✅',
      value: '100%',
      label: 'Entregas dentro do prazo combinado',
      placeholder: true
    },
    {
      icon: '📱',
      value: '100%',
      label: 'Responsivo em todos os dispositivos'
    },
    {
      icon: '🤝',
      value: '24h',
      label: 'Tempo médio de resposta a propostas'
    }
  ]

  return (
    <section id="results" className="results">
      <h2>Resultados que Entrego</h2>
      <p className="results-subtitle">
        Alguns números que resumem o impacto do nosso trabalho para clientes e projetos.
      </p>
      <div className="results-grid">
        {results.map((item, index) => (
          <div key={index} className="result-card">
            <span className="result-icon">{item.icon}</span>
            <span className="result-value">{item.value}</span>
            <p className="result-label">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="results-note">
        * Alguns números acima são ilustrativos e serão atualizados com métricas reais à medida que novos projetos forem concluídos.
      </p>
    </section>
  )
}
