import React, { useState } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import './PlanoFundador.css';
import Seo from '../components/Seo';

const WA_NUMBER = '351937700520';

const BASE_FEATURES = [
  'Criação do site profissional',
  'Domínio (.com) no 1º ano*',
  'Hospedagem de alta velocidade',
  'Certificado de Segurança SSL',
  '4 alterações mensais',
];

const PLANS = {
  Mensal: {
    name: 'Mensal',
    title: 'Plano Mensal',
    amount: '140',
    value: 140,
    period: '/mês',
    fee: '+ R$ 500 de taxa única de criação',
    features: BASE_FEATURES,
  },
  Anual: {
    name: 'Anual',
    title: 'Plano Anual',
    amount: '1.400',
    value: 1400,
    period: '/ano',
    equiv: 'Equivale a R$ 116,67/mês',
    fee: 'Sem taxa de criação (economia de R$ 500)',
    features: [...BASE_FEATURES, 'Suporte prioritário via WhatsApp'],
  },
};

export default function PlanoFundador() {
  const [isAnnual, setIsAnnual] = useState(true);
  const plan = isAnnual ? PLANS.Anual : PLANS.Mensal;

  const getWaLink = (plan) => {
    const msg = `Olá! Vi o Plano Fundador no Instagram e quero garantir uma das vagas (${plan}).`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const trackConversion = (planName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'WhatsApp',
        event_label: `Plano Fundador - ${planName}`,
        value: PLANS[planName].value,
        currency: 'BRL'
      });
    }
  };

  return (
    <div className="fundador-page">
      <Seo
        path="/plano-fundador"
        title="Plano Fundador — Site Profissional por R$ 140/mês | Sublime-se Soluções"
        description="Site profissional para seu negócio por R$ 140/mês, com domínio, hospedagem, SSL e 4 alterações por mês incluídos. Pagamento por Pix ou MB WAY. Apenas 5 vagas."
      />
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
          <h1>Site profissional por <strong>R$ 140/mês</strong>.<br/> Sem surpresas no orçamento.</h1>
          <p className="subtitle">
            Cansado de orçamentos de R$ 5.000 por um site? No Plano Fundador, criamos uma presença digital de primeira para seu negócio com uma entrada acessível. Depois, você paga só a mensalidade para mantermos o site rápido, seguro e atualizado.
          </p>
          <div className="hero-cta">
            <a href="#planos" className="btn-primary">Ver Planos e Preços <ChevronRight size={20} /></a>
          </div>
        </div>
      </section>

      {/* O QUE INCLUI */}
      <section className="fundador-features">
        <div className="container">
          <h2>Tudo o que seu negócio precisa</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎨 Design Premium e Rápido</h3>
              <p>Site pensado para celular e computador, otimizado para carregar em menos de 2 segundos.</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Domínio e Hospedagem</h3>
              <p>Incluímos hospedagem rápida e a configuração do domínio (.com) da sua marca.</p>
            </div>
            <div className="feature-card">
              <h3>🔄 4 Alterações por Mês</h3>
              <p>Precisa mudar um preço, texto ou foto? Você tem 4 alterações incluídas na mensalidade.</p>
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
          <h2>Escolha seu plano</h2>
          <p className="pricing-subtitle">Preço garantido para os 5 primeiros clientes. Sem surpresas.</p>

          <div className="pricing-toggle">
            <button className={!isAnnual ? 'active' : ''} onClick={() => setIsAnnual(false)}>Mensal</button>
            <button className={isAnnual ? 'active' : ''} onClick={() => setIsAnnual(true)}>Anual (2 meses grátis)</button>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card highlight popular">
              {isAnnual && <div className="popular-badge">Mais Escolhido</div>}
              <div className="card-header">
                <h3>{plan.title}</h3>
                <div className="price">
                  <span className="currency">R$</span>
                  <span className="amount">{plan.amount}</span>
                  <span className="period">{plan.period}</span>
                </div>
                {plan.equiv && <p className="price-equiv">{plan.equiv}</p>}
                <p className="fee">{plan.fee}</p>
              </div>
              <ul className="features-list">
                {plan.features.map((f) => (
                  <li key={f}><CheckCircle2 size={18} /> {f}</li>
                ))}
              </ul>
              <a href={getWaLink(plan.name)} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion(plan.name)} className="btn-primary">Garantir Vaga {plan.name}</a>
            </div>
          </div>
          <p className="pricing-note">* A partir do 2º ano, a renovação do domínio custa R$ 60 por ano. Alterações não usadas não acumulam para o mês seguinte. Pagamento por Pix ou MB WAY.</p>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="fundador-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Sublime-se Soluções · <a href="/privacidade">Privacidade</a> · <a href="/termos">Termos</a></p>
        </div>
      </footer>
    </div>
  );
}
