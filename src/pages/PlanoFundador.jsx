import React, { useEffect, useState } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import './PlanoFundador.css';

const WA_NUMBER = '351935327289';

export default function PlanoFundador() {
  const [isAnnual, setIsAnnual] = useState(true);

  useEffect(() => {
    document.title = 'Plano Fundador — Site Profissional Grátis + Manutenção | Sublime-se Soluções';
  }, []);

  const getWaLink = (plan) => {
    const msg = `Olá! Vi o Plano Fundador no Instagram e quero garantir uma das vagas (${plan}).`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const trackConversion = (planName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'WhatsApp',
        event_label: `Plano Fundador - ${planName}`,
        value: planName === 'Anual' ? 490 : 49
      });
    }
  };

  return (
    <div className="fundador-page">
      {/* HEADER */}
      <header className="fundador-header">
        <div className="container">
          <a href="/" aria-label="Página inicial Sublime-se"><img src="/logo.png" alt="Sublime-se Soluções" className="logo" /></a>
          <div className="urgency-badge">
            <span className="dot pulse"></span>
            Apenas 5 vagas disponíveis
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="fundador-hero">
        <div className="container">
          <span className="eyebrow">🚀 LANÇAMENTO: PLANO FUNDADOR</span>
          <h1>Site profissional a partir de <strong>99€</strong>.<br/> Sem surpresas no orçamento.</h1>
          <p className="subtitle">
            Cansado de orçamentos de 1000€ para um site? No Plano Fundador, criamos a sua presença digital de topo por um valor simbólico de entrada. Depois, apenas paga a manutenção mensal para o mantermos rápido, seguro e atualizado.
          </p>
          <div className="hero-cta">
            <a href="#planos" className="btn-primary">Ver Planos e Preços <ChevronRight size={20} /></a>
          </div>
        </div>
      </section>

      {/* O QUE INCLUI */}
      <section className="fundador-features">
        <div className="container">
          <h2>Tudo o que o seu negócio precisa</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎨 Design Premium e Rápido</h3>
              <p>Site desenhado para telemóvel e computador, otimizado para carregar em menos de 2 segundos.</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Domínio e Alojamento</h3>
              <p>Incluímos alojamento rápido e configuração de domínio (.com) para a sua marca.</p>
            </div>
            <div className="feature-card">
              <h3>🔄 4 Alterações por Mês</h3>
              <p>Precisa de mudar um preço, texto ou foto? Tem direito a 4 alterações incluídas na mensalidade.</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Segurança e Backups</h3>
              <p>Certificado SSL, backups regulares e atualizações de segurança tratadas por nós.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="planos" className="fundador-pricing">
        <div className="container">
          <h2>Escolha o seu plano</h2>
          <p className="pricing-subtitle">Preços bloqueados para os 5 primeiros clientes. Sem surpresas.</p>
          
          <div className="pricing-toggle">
            <button className={!isAnnual ? 'active' : ''} onClick={() => setIsAnnual(false)}>Mensal</button>
            <button className={isAnnual ? 'active' : ''} onClick={() => setIsAnnual(true)}>Anual (2 Meses Oferta)</button>
          </div>

          <div className="pricing-cards">
            {/* Mensal */}
            <div className={`pricing-card ${!isAnnual ? 'highlight' : ''}`}>
              <div className="card-header">
                <h3>Plano Mensal</h3>
                <div className="price">
                  <span className="currency">€</span>
                  <span className="amount">49</span>
                  <span className="period">/mês</span>
                </div>
                <p className="fee">+ 99€ taxa única de criação</p>
              </div>
              <ul className="features-list">
                <li><CheckCircle2 size={18} /> Criação do site profissional</li>
                <li><CheckCircle2 size={18} /> Domínio (.com) no 1º ano*</li>
                <li><CheckCircle2 size={18} /> Alojamento de alta velocidade</li>
                <li><CheckCircle2 size={18} /> Certificado de Segurança SSL</li>
                <li><CheckCircle2 size={18} /> 4 alterações mensais</li>
              </ul>
              <a href={getWaLink('Mensal')} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('Mensal')} className="btn-secondary">Garantir Vaga Mensal</a>
            </div>

            {/* Anual */}
            <div className={`pricing-card ${isAnnual ? 'highlight popular' : ''}`}>
              {isAnnual && <div className="popular-badge">Mais Escolhido</div>}
              <div className="card-header">
                <h3>Plano Anual</h3>
                <div className="price">
                  <span className="currency">€</span>
                  <span className="amount">490</span>
                  <span className="period">/ano</span>
                </div>
                <p className="fee">Sem taxa de criação (poupa 99€)</p>
              </div>
              <ul className="features-list">
                <li><CheckCircle2 size={18} /> Criação do site profissional</li>
                <li><CheckCircle2 size={18} /> Domínio (.com) no 1º ano*</li>
                <li><CheckCircle2 size={18} /> Alojamento de alta velocidade</li>
                <li><CheckCircle2 size={18} /> Certificado de Segurança SSL</li>
                <li><CheckCircle2 size={18} /> 4 alterações mensais</li>
                <li><CheckCircle2 size={18} /> Suporte prioritário via WhatsApp</li>
              </ul>
              <a href={getWaLink('Anual')} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('Anual')} className="btn-primary">Garantir Vaga Anual</a>
            </div>
          </div>
          <p className="pricing-note">* A renovação do domínio no ano seguinte tem o custo de 20€ anuais. Alterações não utilizadas não acumulam para o mês seguinte.</p>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="fundador-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Sublime-se Soluções</p>
        </div>
      </footer>
    </div>
  );
}
