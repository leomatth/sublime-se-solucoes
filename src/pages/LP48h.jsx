import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './LP48h.css'

import imgEuroWine from '../assets/projects/euro_wine.jpg'
import imgYgorNutri from '../assets/projects/ygor_nutri.jpg'
import imgInovaDigital from '../assets/projects/inova_digital.jpg'
import imgEliasLanches from '../assets/projects/elias_lanches.jpg'
import imgGlamuor from '../assets/projects/glamuor.jpg'
import imgMendozaWine from '../assets/projects/mendoza_wine.jpg'
import imgAdriano from '../assets/projects/adriano.jpg'
import imgBikecraft from '../assets/projects/bikecraft.jpg'

/* ─── CONFIGURAÇÃO DE ALTA CONVERSÃO & URGÊNCIA ─── */
const CONFIG = {
  wa_number: '351935327289',
  wa_message: 'Olá! Quero aproveitar a promoção da Landing Page em 48h por 39€ 🚀',
  vagas_mes_atual: 'Vagas limitadas', // Removido número fixo para cumprir regras PT
  vagas_proximo_mes: 'Abertas',    
  lps_entregues: 12,        // Total de LPs entregues
  preco_de: '99€',       
  preco_por: '39€',      
  preco_parcelado: 'Pagamento único', // Parcelamento
  obs_parcelamento: '*sem taxas ou mensalidades',
}

const WA_LINK = `https://wa.me/${CONFIG.wa_number}?text=${encodeURIComponent(CONFIG.wa_message)}`

/* ─── ÍCONES SVG ─── */
const IconWA = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="btn-icon">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="btn-arrow">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const IconFire = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 23c6.075 0 11-4.925 11-11 0-4.084-2.227-7.65-5.545-9.529a1 1 0 0 0-1.455.952c0 1.956-.84 3.73-2.22 4.966C13.2 4.7 11.8 2 9.5 0a1 1 0 0 0-1 1.2C9.5 4.5 9 7.2 7 9c-2 1.8-4 4.2-4 8 0 3.314 2.686 6 6 6h3z"/>
  </svg>
)

/* ─── DADOS DO CONTEÚDO ─── */
const problems = [
  {
    icon: '🚨',
    title: 'Campanha marcada sem página para receber o tráfego',
    desc: 'Investiu em anúncios ou agendou um evento — e não tem para onde enviar os clientes. Cada dia sem landing page é dinheiro desperdiçado.',
  },
  {
    icon: '💸',
    title: 'Anúncios no Instagram com conversão quase nula',
    desc: 'Enviar tráfego pago direto para o perfil ou direct perde mais da metade dos leads. Uma LP profissional direciona o cliente direto ao WhatsApp.',
  },
  {
    icon: '⏳',
    title: 'Agências cobrando caro e pedindo 3 a 4 semanas',
    desc: 'Não pode esperar 1 mês para começar a vender. O mercado é rápido e o seu negócio precisa de resultados agora.',
  },
]

const includes = [
  { icon: '🎨', title: 'Design Moderno & Responsivo', desc: 'Mobile-first com visual premium adaptado para carregar instantaneamente em qualquer telemóvel.' },
  { icon: '✍️', title: 'Copy Persuasiva Incluída', desc: 'Escrevemos os textos focados em conversão. Só nos diz o que vende.' },
  { icon: '💬', title: 'Botão WhatsApp Integrado', desc: 'Com mensagem pré-configurada para o cliente já chegar pronto para fechar negócio.' },
  { icon: '⚡', title: 'Alta Velocidade & SEO Base', desc: 'Carregamento leve que reduz o custo por clique dos seus anúncios no Meta e Google.' },
  { icon: '🌐', title: 'Publicação Pronta Online', desc: 'Publicado no seu domínio ou subdomínio exclusivo, pronto para receber visitantes.' },
  { icon: '🔄', title: '1 Ronda de Ajustes Incluída', desc: 'Apresentação em 24h + refinamento dentro do prazo estrito de 48 horas.' },
]

const steps = [
  { num: '01', title: '1. Envia o Briefing Hoje', desc: 'Mande uma mensagem no WhatsApp com seu nicho e proposta. Respondemos em menos de 2 horas para iniciar.' },
  { num: '02', title: '2. Aprova o Design em 24h', desc: 'Apresentamos a estrutura visual completa e os textos para validação rápida com seus ajustes.' },
  { num: '03', title: '3. LP no Ar em 48 Horas', desc: 'Publicamos o projeto online com domínio, SSL e WhatsApp configurado para receber clientes.' },
]

/* ─── SLIDER DE PROJETOS REAIS (SKIPER 54 STYLE) ─── */
const slideProjects = [
  {
    src: imgEuroWine,
    tag: 'Experiência & Eventos',
    title: 'Euro Wine Experience',
    desc: 'Reservas premium com agendamento direto.',
    result: '+120 reservas no 1º mês',
    link: 'https://eurowineexperience.vercel.app/',
  },
  {
    src: imgYgorNutri,
    tag: 'Saúde & Consultoria',
    title: 'Ygor Azevedo — Nutrição',
    desc: 'Captação de pacientes e consultas online.',
    result: 'Conversão acima de 14.8%',
    link: 'https://ygorazevedo.vercel.app/',
  },
  {
    src: imgInovaDigital,
    tag: 'Serviços & B2B',
    title: 'Inova Digital Solutions',
    desc: 'Página corporativa moderna com formulário.',
    result: '+45 propostas fechadas',
    link: 'https://inova-digital.vercel.app/',
  },
  {
    src: imgEliasLanches,
    tag: 'Gastronomia & Delivery',
    title: 'Elias Lanches & Burger',
    desc: 'Cardápio interativo e pedidos no WhatsApp.',
    result: '+300 pedidos semanais',
    link: '#',
  },
  {
    src: imgGlamuor,
    tag: 'Moda & Estética',
    title: 'Glamuor Studio VIP',
    desc: 'Catálogo de procedimentos e agendamentos.',
    result: 'Agenda lotada em 2 semanas',
    link: '#',
  },
  {
    src: imgMendozaWine,
    tag: 'Turismo & Viagens',
    title: 'Mendoza Wine Tour',
    desc: 'Roteiros internacionais e pacotes.',
    result: 'ROI de 6.4x no Meta Ads',
    link: '#',
  },
  {
    src: imgAdriano,
    tag: 'Profissional Liberal',
    title: 'Adriano Advocacia',
    desc: 'Consultoria jurídica e atendimento rápido.',
    result: '+60 contactos qualificados',
    link: '#',
  },
  {
    src: imgBikecraft,
    tag: 'E-commerce & Produtos',
    title: 'Bikecraft Elétricas',
    desc: 'Showroom de modelos e orçamento direto.',
    result: '+80 orçamentos no WhatsApp',
    link: '#',
  },
]

function ProjectSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  return (
    <div className="h48-slider-wrapper">
      <div className="h48-embla" ref={emblaRef}>
        <div className="h48-embla-container">
          {slideProjects.map((item, index) => {
            const isSelected = selectedIndex === index
            return (
              <div key={index} className={`h48-embla-slide ${isSelected ? 'is-selected' : ''}`}>
                <motion.div
                  initial={false}
                  animate={{
                    scale: isSelected ? 1 : 0.9,
                    opacity: isSelected ? 1 : 0.65,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="h48-slide-card"
                  onClick={() => scrollTo(index)}
                >
                  <div className="h48-slide-img-wrap">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h48-slide-img"
                      loading="lazy"
                    />
                    <div className="h48-slide-tag-badge">{item.tag}</div>
                  </div>

                  <div className="h48-slide-body">
                    <h3 className="h48-slide-title">{item.title}</h3>
                    <p className="h48-slide-desc">{item.desc}</p>
                    <div className="h48-slide-result">
                      <IconCheck /> {item.result}
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Controles de Navegação */}
      <div className="h48-slider-controls">
        <button
          onClick={scrollPrev}
          aria-label="Slide anterior"
          className="h48-slider-nav-btn"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="h48-slider-dots">
          {slideProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h48-slider-dot ${selectedIndex === i ? 'dot-active' : ''}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Próximo slide"
          className="h48-slider-nav-btn"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

/* ─── PROVA SOCIAL DE PORTUGAL ─── */
const testimonials = [
  {
    name: 'Dr. Rodrigo Meirelles',
    role: 'Clínica Dentária',
    location: 'Lisboa',
    avatar: 'RM',
    stars: 5,
    text: 'Precisava de arranjar clientes com urgência para um novo tratamento. Falei com a equipa na terça e na quinta-feira à tarde a Landing Page já estava online. No primeiro fim de semana conseguimos 28 contactos qualificados!',
  },
  {
    name: 'Camila Vasconcelos',
    role: 'Estética & Beleza',
    location: 'Porto',
    avatar: 'CV',
    stars: 5,
    text: 'Eu gastava imenso dinheiro em anúncios que iam parar ao Instagram e as pessoas só metiam gosto nas fotos. Com esta página em 48h, os clientes vão diretos ao WhatsApp para agendar. O investimento pagou-se logo nos primeiros dias.',
  },
  {
    name: 'Diogo Albuquerque',
    role: 'Restaurante & Delivery',
    location: 'Braga',
    avatar: 'DA',
    stars: 5,
    text: 'Fiquei impressionado com a rapidez e a qualidade no telemóvel. Uma agência aqui na zona pedia-me 3 semanas e um valor absurdo. A Sublime-se entregou em 48h e o design ficou espetacular.',
  },
  {
    name: 'Larissa Fontes',
    role: 'Consultoria',
    location: 'Faro',
    avatar: 'LF',
    stars: 5,
    text: 'O texto que escreveram encaixou perfeitamente no meu público-alvo. Tenho tido uma taxa de cliques excelente e o botão do WhatsApp já traz a mensagem pronta. Recomendo sem qualquer dúvida!',
  },
]

const faqs = [
  {
    q: 'Como conseguem entregar em apenas 48 horas?',
    a: 'Nosso fluxo é hiper focado exclusivamente em Landing Pages de 1 página. Eliminamos reuniões desnecessárias, usamos metodologia ágil e templates de alta performance pré-otimizados. Aprova a prévia em 24h e colocamos no ar em 48h.',
  },
  {
    q: 'É um site completo ou uma landing page?',
    a: 'É uma Landing Page profissional de página única (One-Page), com foco cirúrgico em conversão (venda de produto, serviço, agendamento ou captação de lead). Se precisar de um site institucional completo com múltiplas páginas, temos também o plano de 7 dias.',
  },
  {
    q: 'Preciso ter textos ou imagens prontas?',
    a: 'Não! Nós cuidamos da redação persuasiva (copywriting) e da seleção de imagens profissionais. Só nos envia informações básicas sobre seu negócio e proposta.',
  },
  {
    q: 'Como funciona o pagamento dos 39€?',
    a: 'O valor de 39€ é o preço promocional único (MBWay ou transferência bancária). Sem mensalidades, sem comissões ou taxas ocultas.',
  },
  {
    q: 'E se eu precisar de alterações depois?',
    a: 'Tem 1 ciclo completo de revisão incluído antes da entrega final. Além disso, damos 30 dias de suporte e garantia técnica para o site funcionar perfeitamente.',
  },
  {
    q: 'A landing page fica sendo minha propriedade?',
    a: 'Sim, 100% sua! O domínio, ficheiros e código pertencem-lhe. Sem contratos de fidelidade ou cobranças recorrentes.',
  },
]

/* ─── PÁGINA PRINCIPAL LP48H ─── */
export default function LP48h() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = 'Landing Page em 48h — De 99€ por apenas 39€ | Sublime-se Soluções'

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('h48-visible')
          observer.unobserve(entry.target)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const elements = document.querySelectorAll('.h48-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="h48-root">

      {/* ── TOPBAR COM URGÊNCIA REAL & BOTÃO COMPACTO ── */}
      <header className="h48-topbar">
        <div className="h48-container h48-topbar-inner">
          <a href="/" className="h48-logo-link" aria-label="Voltar ao início Sublime-se Soluções">
            <img src="/logo.png" alt="Sublime-se Soluções" className="h48-logo" />
          </a>
          <div className="h48-topbar-right">
            <div className="h48-scarcity-pill">
              <span className="h48-live-dot" />
              <span><strong>Vagas Limitadas</strong></span>
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="h48-btn-wa h48-btn-sm" id="h48-topbar-cta">
              <IconWA /> <span>Garantir vaga</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO DE ALTA CONVERSÃO ── */}
      <section className="h48-hero" aria-labelledby="h48-hero-heading">
        <div className="h48-orb h48-orb-1" aria-hidden="true" />
        <div className="h48-orb h48-orb-2" aria-hidden="true" />
        <div className="h48-orb h48-orb-3" aria-hidden="true" />

        <div className="h48-container h48-hero-inner">
          {/* Eyebrow & Badges de Escassez */}
          <div className="h48-eyebrow-wrap h48-reveal">
            <span className="h48-eyebrow">
              <IconFire /> OFERTA RELÂMPAGO 48 HORAS
            </span>
            <span className="h48-urgency-pill">
              🔴 {CONFIG.vagas_mes_atual} este mês
            </span>
          </div>

          {/* Headline de Alto Impacto */}
          <h1 id="h48-hero-heading" className="h48-hero-title h48-reveal">
            A sua Landing Page profissional,<br />
            <span className="h48-accent">pronta em <span className="h48-48">48 horas.</span></span>
          </h1>

          <p className="h48-hero-sub h48-reveal">
            Enquanto pensa se vale a pena, a sua LP já podia estar no ar a gerar contactos.<br />
            Design moderno, copy persuasiva, botão de WhatsApp integrado — entregue em 2 dias.
          </p>

          {/* Preço de Oferta em Destaque no Hero */}
          <div className="h48-hero-pricing-box h48-reveal">
            <div className="h48-hero-price-tag">
              <span className="h48-price-de">De {CONFIG.preco_de}</span>
              <span className="h48-price-por">Por apenas <strong>{CONFIG.preco_por}</strong></span>
              <span className="h48-price-parc">ou {CONFIG.preco_parcelado} <small>{CONFIG.obs_parcelamento}</small></span>
            </div>
          </div>

          {/* CTAs 100% Responsivos e Diretos (Sem quebras feias) */}
          <div className="h48-hero-ctas h48-reveal">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="h48-btn-wa h48-btn-xl" id="h48-hero-cta">
              <IconWA /> <span>Garantir minha LP por {CONFIG.preco_por}</span>
              <IconArrow />
            </a>
            <p className="h48-hero-trust">
              🔒 Orçamento imediato no WhatsApp · Resposta em menos de 2 horas
            </p>
          </div>

          {/* Barra de Prova Social com Texto Solicitado */}
          <div className="h48-proof-bar h48-reveal">
            <div className="h48-avatars" aria-label="Clientes atendidos em Portugal">
              {['LX', 'PT', 'BG', 'FR', 'CB'].map((l) => (
                <div key={l} className="h48-avatar">{l}</div>
              ))}
            </div>
            <div className="h48-proof-text">
              <strong>+{CONFIG.lps_entregues} Landing Pages entregues,</strong> confira alguns projetos.
            </div>
          </div>
        </div>
      </section>

      {/* ── SLIDE DE PROJETOS REAIS (SKIPER 54 STYLE) ── */}
      <section className="h48-section h48-projects-slide-section" aria-label="Projetos Entregues">
        <div className="h48-container">
          <div className="h48-slider-header h48-reveal">
            <span className="h48-label">Projetos Reais</span>
            <h2 className="h48-title">Páginas Criadas para Converter</h2>
            <p className="h48-slider-sub">
              Deslize para ver alguns dos projetos entregues para empresas e profissionais de vários segmentos.
            </p>
          </div>

          <div className="h48-reveal">
            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* ── O PROBLEMA (ESPELHO EMOCIONAL) ── */}
      <section className="h48-section h48-problems" aria-labelledby="h48-problems-heading">
        <div className="h48-container">
          <div className="h48-reveal">
            <span className="h48-label">O problema</span>
            <h2 id="h48-problems-heading" className="h48-title">
              Reconhece alguma destas situações?
            </h2>
          </div>
          <div className="h48-problems-grid">
            {problems.map((p, i) => (
              <div key={i} className="h48-problem-card h48-reveal">
                <span className="h48-problem-icon" aria-hidden="true">{p.icon}</span>
                <h3 className="h48-problem-title">{p.title}</h3>
                <p className="h48-problem-desc">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="h48-bridge h48-reveal">
            <p>Se se identificou com qualquer uma dessas situações, <strong>uma Landing Page entregue em 48h por 39€ é a solução mais rápida e rentável.</strong></p>
          </div>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUÍDO (SOLUÇÃO) ── */}
      <section className="h48-section h48-solution" aria-labelledby="h48-solution-heading">
        <div className="h48-container">
          <div className="h48-reveal">
            <span className="h48-label">O que está incluído</span>
            <h2 id="h48-solution-heading" className="h48-title">
              Tudo o que precisa para vender online,<br />entregue em 2 dias
            </h2>
          </div>
          <div className="h48-includes-grid">
            {includes.map((item, i) => (
              <div key={i} className="h48-include-card h48-reveal">
                <span className="h48-include-icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className="h48-include-title">{item.title}</h3>
                  <p className="h48-include-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROVA SOCIAL DO BRASIL: DEPOIMENTOS EM GRID (SP, RJ, CE, MG) ── */}
      <section className="h48-section h48-testimonials-section" aria-labelledby="h48-test-heading">
        <div className="h48-container">
          <div className="h48-reveal">
            <span className="h48-label">Depoimentos & Avaliações</span>
            <h2 id="h48-test-heading" className="h48-title">Quem contratou, aprovou em Portugal</h2>
          </div>
          <div className="h48-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="h48-test-card h48-reveal">
                <div className="h48-stars" aria-label="5 estrelas">★★★★★</div>
                <p className="h48-test-text">"{t.text}"</p>
                <div className="h48-test-author">
                  <div className="h48-test-avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role} · <span className="h48-badge-city">{t.location}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO RÁPIDO (3 PASSOS) ── */}
      <section className="h48-section h48-process" aria-labelledby="h48-process-heading">
        <div className="h48-container">
          <div className="h48-reveal">
            <span className="h48-label">Como funciona</span>
            <h2 id="h48-process-heading" className="h48-title">
              Da ideia ao ar em 48 horas úteis
            </h2>
          </div>
          <div className="h48-steps">
            {steps.map((s, i) => (
              <div key={i} className="h48-step h48-reveal">
                <div className="h48-step-num-wrap">
                  <div className="h48-step-num" aria-hidden="true">{s.num}</div>
                </div>
                <div className="h48-step-body">
                  <h3 className="h48-step-title">{s.title}</h3>
                  <p className="h48-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO DA OFERTA & ESCASSEZ DE VAGAS ── */}
      <section className="h48-section h48-offer" aria-labelledby="h48-offer-heading">
        <div className="h48-container">
          <div className="h48-offer-box h48-reveal">
            <div className="h48-orb h48-orb-offer" aria-hidden="true" />

            <div className="h48-offer-top">
              <div className="h48-offer-left">
                <div className="h48-offer-badge-promo">⚡ PROMOÇÃO POR TEMPO LIMITADO</div>
                <h2 id="h48-offer-heading" className="h48-offer-title">
                  Landing Page Profissional em 48h
                </h2>
                
                <div className="h48-pricing-display">
                  <div className="h48-price-cross">
                    De <span className="strikethrough">{CONFIG.preco_de}</span>
                  </div>
                  <div className="h48-price-highlight">
                    Por apenas <span className="h48-big-price">{CONFIG.preco_por}</span>
                    <span className="h48-price-type">pagamento único (MBWay)</span>
                  </div>
                  <div className="h48-price-installments">
                    ou <strong>{CONFIG.preco_parcelado}</strong> no cartão <br />
                    <small>{CONFIG.obs_parcelamento}</small>
                  </div>
                </div>

                <ul className="h48-checklist" aria-label="O que está incluído no pacote">
                  {[
                    'Design profissional responsivo (Mobile + Desktop)',
                    'Copywriting persuasivo incluído',
                    'Entrega pontual garantida em 48 horas',
                    'Integração direta com WhatsApp',
                    '1 ronda de refinamento e ajustes incluída',
                    'Sem mensalidade — o código e página são seus',
                  ].map((item) => (
                    <li key={item}><IconCheck /> {item}</li>
                  ))}
                </ul>
              </div>

              {/* Quadro de Urgência de Vagas */}
              <div className="h48-offer-right">
                <div className="h48-scarcity-card">
                  <div className="h48-scarcity-header">
                    <span className="h48-flame">🔥</span>
                    <h3>Quadro de Vagas</h3>
                  </div>

                  {/* Vagas Mês Atual */}
                  <div className="h48-month-slot urgent-slot">
                    <div className="slot-title">
                      <span>Mês Atual</span>
                      <strong className="red-badge">{CONFIG.vagas_mes_atual}</strong>
                    </div>
                    <div className="h48-slots-bar" aria-label="Vagas limitadas restantes">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h48-slot-dot ${i < 2 ? 'dot-urgent' : 'dot-filled'}`}
                        />
                      ))}
                    </div>
                    <p className="slot-note">Alta procura — encerramento iminente.</p>
                  </div>

                  {/* Vagas Próximo Mês */}
                  <div className="h48-month-slot next-slot">
                    <div className="slot-title">
                      <span>Próximo Mês</span>
                      <strong className="green-badge">{CONFIG.vagas_proximo_mes} vagas abertas</strong>
                    </div>
                    <div className="h48-slots-bar" aria-label="10 vagas abertas para o próximo mês">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h48-slot-dot dot-available" />
                      ))}
                    </div>
                    <p className="slot-note">Reserve antecipado para garantir o valor promocional.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h48-offer-cta-wrap">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="h48-btn-wa h48-btn-xl" id="h48-offer-cta">
                <IconWA /> <span>Garantir Minha Vaga por {CONFIG.preco_por}</span>
                <IconArrow />
              </a>
              <p className="h48-offer-note">🔒 Atendimento direto com o desenvolvedor · Sem burocracia</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ESPECÍFICO ── */}
      <section className="h48-section h48-faq" aria-labelledby="h48-faq-heading">
        <div className="h48-container">
          <div className="h48-reveal">
            <span className="h48-label">Dúvidas Frequentes</span>
            <h2 id="h48-faq-heading" className="h48-title">Tudo o que precisa de saber</h2>
          </div>
          <div className="h48-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`h48-faq-item h48-reveal ${openFaq === i ? 'h48-faq-open' : ''}`}
              >
                <button
                  className="h48-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`h48-faq-a-${i}`}
                  id={`h48-faq-btn-${i}`}
                >
                  {faq.q}
                  <span className="h48-faq-icon" aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div id={`h48-faq-a-${i}`} className="h48-faq-a" role="region" aria-labelledby={`h48-faq-btn-${i}`} hidden={openFaq !== i}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER MINIMALISTA ── */}
      <footer className="h48-footer">
        <div className="h48-container h48-footer-inner">
          <img src="/logo.png" alt="Sublime-se Soluções" className="h48-footer-logo" loading="lazy" />
          <p className="h48-footer-text">
            © {new Date().getFullYear()} Sublime-se Soluções ·{' '}
            <a href="mailto:diretoria@solucoes.sublime-se.com">diretoria@solucoes.sublime-se.com</a>
          </p>
          <a href="/" className="h48-footer-link">Ver Site Institucional Completo →</a>
        </div>
      </footer>

      {/* ── BOTÃO FLUTUANTE WHATSAPP ── */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="h48-float" aria-label="Falar no WhatsApp" id="h48-float-cta">
        <IconWA />
      </a>

    </div>
  )
}
