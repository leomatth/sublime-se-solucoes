import { useEffect, useState } from 'react'
import '../landing/LandingPage.css'

const WA_LINK = 'https://wa.me/351935327289?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Sublime-se%20Solu%C3%A7%C3%B5es%20e%20quero%20saber%20mais%20sobre%20criar%20um%20site%20profissional%20para%20o%20meu%20neg%C3%B3cio.'

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

const problems = [
  {
    emoji: '😟',
    title: 'Perde clientes para a concorrência',
    desc: 'Quando o cliente pesquisa no Google, encontra o concorrente — não você. Sem site, você é invisível.',
  },
  {
    emoji: '📱',
    title: 'Responde preços pelo WhatsApp manualmente',
    desc: 'Todos os dias, as mesmas perguntas. Horários, preços, serviços. O seu tempo vale mais do que isso.',
  },
  {
    emoji: '😰',
    title: 'Parece menos profissional do que é',
    desc: 'O seu serviço é excelente — mas quem vê só o perfil do Instagram pode não perceber isso.',
  },
]

const deliverables = [
  { icon: '🌐', title: 'Site Profissional', desc: 'Design moderno, rápido e adaptado ao seu negócio.' },
  { icon: '💬', title: 'WhatsApp Integrado', desc: 'Botão direto para o WhatsApp em cada página. Mais contactos, menos esforço.' },
  { icon: '🖼️', title: 'Galeria de Serviços', desc: 'Fotos e descrições dos seus serviços ou produtos em destaque.' },
  { icon: '📍', title: 'Google Maps', desc: 'O cliente sabe onde encontrá-lo. Essencial para negócios locais.' },
  { icon: '🔍', title: 'SEO Local', desc: 'Apareça quando alguém pesquisar o seu tipo de negócio na sua cidade.' },
  { icon: '⚡', title: 'Entrega em 7 dias', desc: 'Não espera meses. Em uma semana, o seu site está no ar.' },
]

const steps = [
  { num: '01', title: 'Fale connosco', desc: 'Mande mensagem agora. Respondemos em menos de 2 horas.' },
  { num: '02', title: 'Proposta em 24h', desc: 'Analisamos o seu negócio e enviamos uma proposta personalizada e sem compromisso.' },
  { num: '03', title: 'Site no ar em 7 dias', desc: 'Cuidamos de tudo: design, textos, domínio e publicação.' },
]

const faqs = [
  {
    q: 'Preciso saber de tecnologia?',
    a: 'Não. Você nos conta sobre o seu negócio e nós tratamos de tudo: design, textos, publicação e configuração técnica.',
  },
  {
    q: 'Quanto tempo demora?',
    a: 'O site fica pronto em até 7 dias úteis após a aprovação da proposta e do conteúdo.',
  },
  {
    q: 'Preciso assinar algum contrato?',
    a: 'Não. A consulta é gratuita e sem compromisso. Só avançamos se fizer sentido para você.',
  },
  {
    q: 'O site fica sendo meu?',
    a: 'Sim, 100%. Depois de entregue, o site é seu e pode fazer o que quiser com ele.',
  },
  {
    q: 'Funciona para o meu tipo de negócio?',
    a: 'Criamos sites para salões, clínicas, restaurantes, barbearias, prestadores de serviço, lojas e muito mais.',
  },
]

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    // Scroll reveal for LP
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('lp-visible')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.lp-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="lp-root">

      {/* ── TOPBAR (minimal, no nav) ── */}
      <header className="lp-topbar">
        <img src="/logo.png" alt="Sublime-se Soluções" className="lp-topbar-logo" />
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-topbar-cta" aria-label="Falar no WhatsApp">
          <WhatsAppIcon /> Falar no WhatsApp
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="lp-hero" aria-labelledby="lp-hero-heading">
        {/* Background orbs */}
        <div className="lp-orb lp-orb-1" aria-hidden="true" />
        <div className="lp-orb lp-orb-2" aria-hidden="true" />

        <div className="lp-container">
          <div className="lp-hero-inner">
            <span className="lp-eyebrow">✦ Sites para Pequenos Negócios Locais</span>
            <h1 id="lp-hero-heading" className="lp-hero-title">
              O seu negócio perde clientes<br />
              <span className="lp-highlight">todos os dias</span> por não ter<br />
              um site profissional.
            </h1>
            <p className="lp-hero-sub">
              Em menos de 7 dias, criamos o site da sua empresa com WhatsApp integrado, galeria de serviços e Google Maps — tudo pronto para atrair e converter clientes.
            </p>
            <div className="lp-hero-ctas">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-btn-wa lp-btn-lg" id="lp-hero-cta">
                <WhatsAppIcon /> Quero o meu site agora
              </a>
              <p className="lp-hero-trust">🔒 Orçamento gratuito · Sem compromisso · Resposta em 2h</p>
            </div>
            {/* Social proof bar */}
            <div className="lp-social-proof-bar">
              <div className="lp-avatar-stack" aria-label="Clientes satisfeitos">
                {['S', 'B', 'R', 'C'].map((l) => (
                  <div key={l} className="lp-avatar">{l}</div>
                ))}
              </div>
              <p><strong>+27 negócios</strong> já transformaram a presença digital com a Sublime-se</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section className="lp-section lp-problems" aria-labelledby="lp-problems-heading">
        <div className="lp-container">
          <div className="lp-reveal">
            <span className="lp-section-label">O problema</span>
            <h2 id="lp-problems-heading" className="lp-section-title">
              Reconhece alguma destas situações?
            </h2>
          </div>
          <div className="lp-problems-grid">
            {problems.map((p, i) => (
              <div key={i} className="lp-problem-card lp-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="lp-problem-emoji" aria-hidden="true">{p.emoji}</span>
                <h3 className="lp-problem-title">{p.title}</h3>
                <p className="lp-problem-desc">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="lp-problem-bridge lp-reveal">
            <p>Se se identificou com pelo menos uma dessas situações, <strong>um site profissional é o próximo passo para o seu negócio crescer.</strong></p>
          </div>
        </div>
      </section>

      {/* ── SOLUÇÃO ── */}
      <section className="lp-section lp-solution" aria-labelledby="lp-solution-heading">
        <div className="lp-container">
          <div className="lp-reveal">
            <span className="lp-section-label">A solução</span>
            <h2 id="lp-solution-heading" className="lp-section-title">
              Tudo o que o seu negócio precisa,<br />entregue em 7 dias
            </h2>
          </div>
          <div className="lp-deliverables-grid">
            {deliverables.map((d, i) => (
              <div key={i} className="lp-deliverable-card lp-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="lp-deliverable-icon" aria-hidden="true">{d.icon}</span>
                <div>
                  <h3 className="lp-deliverable-title">{d.title}</h3>
                  <p className="lp-deliverable-desc">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <section className="lp-section lp-proof" aria-labelledby="lp-proof-heading">
        <div className="lp-container">
          <div className="lp-reveal">
            <span className="lp-section-label">Projetos reais</span>
            <h2 id="lp-proof-heading" className="lp-section-title">Sites que já criámos</h2>
          </div>
          <div className="lp-proof-grid">
            <a href="https://eurowineexperience.vercel.app/" target="_blank" rel="noopener noreferrer" className="lp-proof-card lp-reveal" aria-label="Ver projeto Euro Wine Experience">
              <div className="lp-proof-img-wrap">
                <img src="/logo.png" alt="Euro Wine Experience" className="lp-proof-placeholder" aria-hidden="true" />
                <div className="lp-proof-overlay"><span>Ver site ↗</span></div>
              </div>
              <div className="lp-proof-info">
                <span className="lp-proof-tag">Vitrine Digital</span>
                <h3 className="lp-proof-name">Euro Wine Experience</h3>
                <p className="lp-proof-desc">Site de experiências vínicas com galeria, reservas e integração de WhatsApp.</p>
              </div>
            </a>
            <a href="https://ygorazevedo.vercel.app/" target="_blank" rel="noopener noreferrer" className="lp-proof-card lp-reveal" style={{ animationDelay: '0.1s' }} aria-label="Ver projeto Ygor Azevedo Nutrição">
              <div className="lp-proof-img-wrap">
                <img src="/logo.png" alt="Ygor Azevedo Nutrição" className="lp-proof-placeholder" aria-hidden="true" />
                <div className="lp-proof-overlay"><span>Ver site ↗</span></div>
              </div>
              <div className="lp-proof-info">
                <span className="lp-proof-tag">Landing Page</span>
                <h3 className="lp-proof-name">Ygor Azevedo — Nutrição</h3>
                <p className="lp-proof-desc">Landing page de alta conversão para profissional liberal com agenda e WhatsApp direto.</p>
              </div>
            </a>
            {/* Depoimento */}
            <div className="lp-testimonial lp-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="lp-testimonial-stars" aria-label="5 estrelas">★★★★★</div>
              <blockquote className="lp-testimonial-text">
                "Antes do site, os clientes perguntavam o preço pelo Instagram e muitos desistiam. Depois do site, as reservas aumentaram e os clientes chegam já prontos para marcar."
              </blockquote>
              <cite className="lp-testimonial-author">
                <div className="lp-testimonial-avatar" aria-hidden="true">M</div>
                <div>
                  <strong>Maria S.</strong>
                  <span>Salão de Beleza — Lisboa</span>
                </div>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section className="lp-section lp-process" aria-labelledby="lp-process-heading">
        <div className="lp-container">
          <div className="lp-reveal">
            <span className="lp-section-label">Como funciona</span>
            <h2 id="lp-process-heading" className="lp-section-title">Simples. Rápido. Sem complicações.</h2>
          </div>
          <div className="lp-steps">
            {steps.map((s, i) => (
              <div key={i} className="lp-step lp-reveal" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="lp-step-num" aria-hidden="true">{s.num}</div>
                <div className="lp-step-connector" aria-hidden="true" />
                <div className="lp-step-body">
                  <h3 className="lp-step-title">{s.title}</h3>
                  <p className="lp-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFERTA / CTA CENTRAL ── */}
      <section className="lp-section lp-offer" aria-labelledby="lp-offer-heading">
        <div className="lp-container">
          <div className="lp-offer-box lp-reveal">
            <div className="lp-orb lp-orb-offer" aria-hidden="true" />
            <span className="lp-section-label" style={{ color: '#f19f00' }}>Pacote de entrada</span>
            <h2 id="lp-offer-heading" className="lp-offer-title">
              Site profissional completo<br />a partir de <span style={{ color: '#f19f00' }}>R$&nbsp;997</span>
            </h2>

            {/* Price anchor */}
            <div className="lp-price-anchor lp-reveal">
              <div className="lp-price-block">
                <div className="lp-price-from">A partir de</div>
                <div className="lp-price-value">R$ 997</div>
                <div className="lp-price-note">pagamento único · sem mensalidades</div>
              </div>
              <div className="lp-price-divider" aria-hidden="true" />
              <ul className="lp-price-includes" aria-label="O que está incluído">
                <li><CheckIcon /> Site profissional com design personalizado</li>
                <li><CheckIcon /> WhatsApp integrado e Google Maps</li>
                <li><CheckIcon /> SEO local configurado</li>
                <li><CheckIcon /> Entrega em até 7 dias úteis</li>
                <li><CheckIcon /> 30 dias de suporte após entrega</li>
              </ul>
            </div>

            <p className="lp-offer-sub">
              Não sabe ainda o que precisa? Peça uma <strong>análise gratuita</strong> do seu negócio — identificamos o que falta e enviamos uma proposta personalizada em 24 horas, sem compromisso.
            </p>
            <ul className="lp-offer-checklist" aria-label="Garantias">
              {[
                'Orçamento gratuito e sem compromisso',
                'Proposta personalizada para o seu negócio',
                'Transparência total — sem surpresas no preço',
                'Resposta garantida em até 2 horas',
              ].map((item) => (
                <li key={item}><CheckIcon /> {item}</li>
              ))}
            </ul>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-btn-wa lp-btn-xl" id="lp-offer-cta">
              <WhatsAppIcon /> Quero a minha consulta gratuita
            </a>
            <p className="lp-offer-note">🔒 Os seus dados são usados apenas para responder ao seu pedido.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lp-section lp-faq" aria-labelledby="lp-faq-heading">
        <div className="lp-container">
          <div className="lp-reveal">
            <span className="lp-section-label">Dúvidas frequentes</span>
            <h2 id="lp-faq-heading" className="lp-section-title">Perguntas e respostas</h2>
          </div>
          <div className="lp-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`lp-faq-item lp-reveal ${openFaq === i ? 'lp-faq-open' : ''}`} style={{ animationDelay: `${i * 0.07}s` }}>
                <button
                  className="lp-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`lp-faq-answer-${i}`}
                  id={`lp-faq-btn-${i}`}
                >
                  {faq.q}
                  <span className="lp-faq-icon" aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div
                  id={`lp-faq-answer-${i}`}
                  className="lp-faq-a"
                  role="region"
                  aria-labelledby={`lp-faq-btn-${i}`}
                  hidden={openFaq !== i}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER MINIMAL ── */}
      <footer className="lp-footer">
        <div className="lp-container">
          <img src="/logo.png" alt="Sublime-se Soluções" className="lp-footer-logo" />
          <p className="lp-footer-text">
            © {new Date().getFullYear()} Sublime-se Soluções · <a href="mailto:diretoria@solucoes.sublime-se.com">diretoria@solucoes.sublime-se.com</a>
          </p>
          <a href="/" className="lp-footer-link">Ver site completo →</a>
        </div>
      </footer>

      {/* ── FLOATING WhatsApp BUTTON ── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="lp-float-wa"
        aria-label="Falar no WhatsApp"
        id="lp-float-cta"
      >
        <WhatsAppIcon />
      </a>

    </div>
  )
}
