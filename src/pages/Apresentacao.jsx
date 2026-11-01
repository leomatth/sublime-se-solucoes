import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Bot, Clapperboard, MessageCircle, Search, Clock, Zap, CalendarCheck,
  Workflow, Sparkles, MessagesSquare, ShieldCheck, Rocket, Wrench, Maximize, Minimize,
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import './Apresentacao.css';
import Seo from '../components/Seo';

import imgEuroWine from '../assets/projects/euro_wine.jpg';
import imgYgorNutri from '../assets/projects/ygor_nutri.jpg';
import imgMendozaWine from '../assets/projects/mendoza_wine.jpg';
import imgAdriano from '../assets/projects/adriano.jpg';
import imgInovaDigital from '../assets/projects/inova_digital.jpg';
import imgGlamuor from '../assets/projects/glamuor.jpg';

// Apresentação para a Carla mostrar no tablet, presencialmente.
// Navegação: toque na metade direita/esquerda, swipe ou setas.
// ?precos=1 (ou segurar o logo da capa ~1s) mostra o slide de preços.
// ?roteiro=1 mostra a fala de cada slide em baixo, para ensaiar.
// A fala de cada slide (notes) é a mesma do ROTEIRO_APRESENTACAO.md.

const WA_NUMBER = '351935327289';
const WA_MESSAGE = 'Olá! Vi a apresentação da Sublime-se com a Carla e quero um diagnóstico gratuito para o meu negócio.';
const SITE_SHORT = 'solucoes.sublime-se.com';

// Valores de referência (Catálogo Geral da planilha). Validar antes de mostrar.
const PRICES = [
  { label: 'Site vitrine', value: 'R$ 1.500', note: 'implantação' },
  { label: 'Landing page de campanha', value: 'R$ 300', note: 'por página' },
  { label: 'Chatbot de atendimento', value: 'R$ 400', note: 'implantação' },
  { label: 'Agente de IA no WhatsApp', value: 'R$ 3.500', note: 'implantação' },
  { label: 'Reels editados', value: 'R$ 450', note: 'por mês (2 vídeos)' },
  { label: 'Hospedagem + manutenção', value: 'R$ 60', note: 'por mês' },
];

const PORTFOLIO = [
  { img: imgEuroWine, name: 'Euro Wine Experience' },
  { img: imgYgorNutri, name: 'Ygor Azevedo Nutri' },
  { img: imgMendozaWine, name: 'Mendoza Wine' },
  { img: imgGlamuor, name: 'Glamuor' },
  { img: imgAdriano, name: 'Adriano Dantas' },
  { img: imgInovaDigital, name: 'Inova Digital' },
];

const SLIDES = [
  {
    id: 'capa',
    notes: 'Oi, tudo bem? Eu sou a Carla, da Sublime-se Soluções. Posso te mostrar em dois minutinhos o que a gente faz? A gente ajuda negócios como o seu a aparecer melhor na internet e, principalmente, a transformar quem aparece em cliente de verdade.',
  },
  {
    id: 'problema',
    eyebrow: 'O cenário de hoje',
    title: 'O cliente procura você na internet antes de comprar.',
    items: [
      { icon: Search, text: 'Pesquisa no Google e no Instagram' },
      { icon: MessageCircle, text: 'Chama no WhatsApp e espera resposta' },
      { icon: Clock, text: 'Se demora ou não encontra, vai pro concorrente' },
    ],
    notes: 'Hoje quase todo cliente pesquisa antes de comprar: olha o Instagram, procura no Google, chama no WhatsApp. Se ele não encontra um site, se a página está desatualizada ou se a resposta demora, ele simplesmente vai para o concorrente. E o pior: o dono do negócio nem fica sabendo que perdeu essa venda. Me conta: hoje, como os clientes chegam até você?',
  },
  {
    id: 'servicos',
    eyebrow: 'O que fazemos',
    title: 'Três frentes para o seu negócio vender mais.',
    cards: [
      { icon: Globe, title: 'Sites e Landing Pages', text: 'Sua vitrine profissional, aberta 24h.' },
      { icon: Bot, title: 'Automação e IA', text: 'Atendimento rápido, mesmo quando você está ocupado.' },
      { icon: Clapperboard, title: 'Conteúdo', text: 'Reels e Instagram com constância.' },
    ],
    notes: 'A gente trabalha em três frentes. Primeiro, o site: a sua vitrine profissional, que funciona 24 horas. Segundo, automação e inteligência artificial, para o seu atendimento responder rápido mesmo quando você está ocupado. E terceiro, conteúdo, para o seu Instagram ter constância sem tomar o seu tempo. Você pode contratar só uma delas ou combinar.',
  },
  {
    id: 'sites',
    eyebrow: '01 · Sites e Landing Pages',
    title: 'Um site que leva o cliente direto para o WhatsApp.',
    bullets: [
      'Site vitrine com sua história, serviços ou produtos',
      'Botão de WhatsApp e agendamento integrados',
      'Landing pages de campanha: Natal, Dia das Mães, promoções',
      'Rápido no celular e encontrado no Google',
    ],
    notes: 'O site é a base de tudo. Ele conta a sua história, mostra os seus serviços ou produtos e tem um botão direto para o WhatsApp ou para agendar. Para datas especiais, como Natal ou Dia das Mães, a gente cria páginas de campanha rápidas, algumas entregues em até 48 horas. E tudo é pensado primeiro para o celular, que é onde o seu cliente está.',
  },
  {
    id: 'automacao',
    eyebrow: '02 · Automação e IA',
    title: 'Seu atendimento respondendo em segundos.',
    items: [
      { icon: Bot, text: 'Agente de IA no WhatsApp que atende e qualifica clientes' },
      { icon: MessagesSquare, text: 'Chatbot para dúvidas, horários e agendamentos' },
      { icon: Zap, text: 'Respostas automáticas em comentários e directs' },
      { icon: Workflow, text: 'Integração entre formulário, planilha e e-mail' },
    ],
    notes: 'Aqui é onde a gente economiza o seu tempo. Dá para ter um assistente com inteligência artificial no WhatsApp que responde na hora, tira as dúvidas mais comuns e já separa quem está pronto para comprar. Também fazemos chatbots mais simples, respostas automáticas no Instagram e ligamos as suas ferramentas, para nenhum contato se perder. Quantas mensagens você recebe por dia, mais ou menos?',
  },
  {
    id: 'conteudo',
    eyebrow: '03 · Conteúdo',
    title: 'Instagram ativo, sem tomar o seu dia.',
    items: [
      { icon: Clapperboard, text: 'Reels mensais: você grava, a gente roteiriza, edita e legenda' },
      { icon: CalendarCheck, text: 'Calendário de conteúdo do mês' },
      { icon: Sparkles, text: 'Consultoria de perfil: bio, destaques e linha de conteúdo' },
    ],
    notes: 'Sabemos que manter o Instagram dá trabalho. Então funciona assim: a gente te entrega o roteiro, você só grava pelo celular, e nós editamos e escrevemos a legenda. Também montamos o calendário do mês e, se quiser, fazemos uma revisão completa do seu perfil: bio, destaques e o tipo de conteúdo que mais combina com o seu público.',
  },
  {
    id: 'portfolio',
    eyebrow: 'Alguns projetos',
    title: 'Negócios reais, resultados reais.',
    portfolio: true,
    notes: 'Esses são alguns projetos que a gente já entregou: vinícolas, nutricionista, consultoria, marcas pessoais. Cada um com uma necessidade diferente, mas todos com o mesmo objetivo: passar confiança e trazer contato. Se quiser, depois eu te mostro algum deles funcionando.',
  },
  {
    id: 'processo',
    eyebrow: 'Como funciona',
    title: 'Simples, do primeiro papo à entrega.',
    steps: [
      { icon: MessageCircle, title: 'Diagnóstico', text: 'Conversa gratuita sobre o seu negócio' },
      { icon: CalendarCheck, title: 'Proposta', text: 'Escopo, prazo e valor claros' },
      { icon: Rocket, title: 'Entrega', text: 'Construímos e testamos tudo' },
      { icon: Wrench, title: 'Manutenção', text: 'Ajustes mensais e suporte' },
    ],
    badge: { icon: ShieldCheck, text: 'Todo projeto passa por testes de qualidade antes de ir ao ar' },
    notes: 'O processo é simples. Começa com um diagnóstico gratuito, uma conversa para entender o seu negócio. Depois você recebe uma proposta clara, com prazo e valor. A gente constrói e, antes de colocar no ar, testa tudo: no celular, no computador, em vários navegadores. Esse é um diferencial nosso, porque a equipe vem da área de qualidade de software. E depois da entrega você não fica sozinha: a manutenção mensal cuida das alterações.',
  },
  {
    id: 'precos',
    hidden: true,
    eyebrow: 'Investimento',
    title: 'Valores de referência',
    prices: true,
    notes: 'Para você ter uma ideia de investimento, esses são os valores de partida. O valor final depende do que o seu negócio precisa, por isso o diagnóstico é importante. E se fizer sentido juntar mais de um serviço, a gente monta um pacote anual que pode ser parcelado em até 12 vezes, com desconto em relação aos serviços avulsos.',
  },
  {
    id: 'contato',
    eyebrow: 'Próximo passo',
    title: 'Vamos marcar o seu diagnóstico gratuito?',
    cta: true,
    notes: 'O próximo passo é bem simples: um diagnóstico gratuito, sem compromisso. Eu já te mando uma mensagem agora pelo WhatsApp e a gente combina um horário. Qual é o melhor dia para você essa semana?',
  },
];

const MotionSection = motion.section;

const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

function SlideContent({ slide, onLogoPressStart, onLogoPressEnd }) {
  if (slide.id === 'capa') {
    return (
      <div className="apr-cover">
        <img
          src="/logo.png"
          alt="Sublime-se Soluções"
          className="apr-cover-logo"
          draggable="false"
          onPointerDown={onLogoPressStart}
          onPointerUp={onLogoPressEnd}
          onPointerLeave={onLogoPressEnd}
          onContextMenu={(e) => e.preventDefault()}
        />
        <h1>Presença digital que <strong>vira cliente.</strong></h1>
        <p className="apr-lead">Sites, automação com IA e conteúdo para pequenos negócios.</p>
      </div>
    );
  }

  return (
    <div className="apr-content">
      {slide.eyebrow && <span className="apr-eyebrow">{slide.eyebrow}</span>}
      <h2>{slide.title}</h2>

      {slide.items && (
        <ul className="apr-items">
          {slide.items.map((item) => (
            <li key={item.text}><span className="apr-icon"><item.icon size={26} /></span>{item.text}</li>
          ))}
        </ul>
      )}

      {slide.bullets && (
        <ul className="apr-bullets">
          {slide.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}

      {slide.cards && (
        <div className="apr-cards">
          {slide.cards.map((card) => (
            <div key={card.title} className="apr-card">
              <span className="apr-icon apr-icon-lg"><card.icon size={34} /></span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      )}

      {slide.portfolio && (
        <div className="apr-portfolio">
          {PORTFOLIO.map((p) => (
            <figure key={p.name}>
              <img src={p.img} alt={p.name} loading="lazy" draggable="false" />
              <figcaption>{p.name}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {slide.steps && (
        <>
          <ol className="apr-steps">
            {slide.steps.map((step, i) => (
              <li key={step.title}>
                <span className="apr-step-num">0{i + 1}</span>
                <span className="apr-icon"><step.icon size={26} /></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          {slide.badge && (
            <p className="apr-badge"><slide.badge.icon size={22} /> {slide.badge.text}</p>
          )}
        </>
      )}

      {slide.prices && (
        <>
          <div className="apr-prices">
            {PRICES.map((p) => (
              <div key={p.label} className="apr-price">
                <span className="apr-price-label">{p.label}</span>
                <span className="apr-price-value"><small>a partir de</small> {p.value}</span>
                <span className="apr-price-note">{p.note}</span>
              </div>
            ))}
          </div>
          <p className="apr-footnote">Valores de referência. A proposta final depende do escopo. Pacotes anuais em até 12x.</p>
        </>
      )}

      {slide.cta && (
        <div className="apr-cta">
          <QrCode />
          <div className="apr-cta-actions">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="apr-btn">
              <MessageCircle size={22} /> Falar no WhatsApp
            </a>
            <span className="apr-site">{SITE_SHORT}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Mostra o QR só se public/qr-apresentacao.svg existir.
function QrCode() {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <img
      src="/qr-apresentacao.svg"
      alt={`QR code para ${SITE_SHORT}`}
      className="apr-qr"
      draggable="false"
      onError={() => setOk(false)}
    />
  );
}

export default function Apresentacao() {
  const [showPrices, setShowPrices] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [toast, setToast] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const pointerStart = useRef(null);
  const suppressClick = useRef(false);
  const pressTimer = useRef(null);

  const slides = SLIDES.filter((s) => !s.hidden || showPrices);
  const slide = slides[Math.min(index, slides.length - 1)];

  // Lê os parâmetros só no browser (o SSG gera a página sem window).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prices = params.get('precos') === '1';
    // eslint-disable-next-line react-hooks/set-state-in-effect -- só existe window depois da hidratação
    setShowPrices(prices);
    setShowNotes(params.get('roteiro') === '1');
    const visible = SLIDES.filter((s) => !s.hidden || prices);
    const fromHash = visible.findIndex((s) => s.id === window.location.hash.slice(1));
    if (fromHash > 0) setIndex(fromHash);
  }, []);

  useEffect(() => {
    if (!slide) return;
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${slide.id}`);
  }, [slide]);

  const go = useCallback((delta) => {
    setDirection(delta);
    setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + delta)));
  }, [slides.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(1); }
      if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(-1); }
    };
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    window.addEventListener('keydown', onKey);
    document.addEventListener('fullscreenchange', onFs);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('fullscreenchange', onFs);
    };
  }, [go]);

  const flash = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 1600);
  };

  const togglePrices = () => {
    suppressClick.current = true;
    flash(showPrices ? 'Preços ocultos' : 'Preços visíveis');
    setShowPrices(!showPrices);
  };

  const onLogoPressStart = () => {
    clearTimeout(pressTimer.current);
    pressTimer.current = setTimeout(togglePrices, 1000);
  };
  const onLogoPressEnd = () => clearTimeout(pressTimer.current);

  const onPointerDown = (e) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      suppressClick.current = true;
      go(dx < 0 ? 1 : -1);
    }
  };

  const onStageClick = (e) => {
    if (suppressClick.current) { suppressClick.current = false; return; }
    if (e.target.closest('a, button')) return;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    go(e.clientX - left > width / 2 ? 1 : -1);
  };

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      flash('No iPad: Compartilhar → Adicionar à Tela de Início');
    }
  };

  return (
    <div className={`apr-page${showNotes ? ' with-notes' : ''}`}>
      <Seo
        path="/apresentacao"
        title="Apresentação · Sublime-se Soluções"
        description="Apresentação dos serviços da Sublime-se Soluções: sites, automação com IA e conteúdo."
      />
      <Head>
        <html lang="pt-BR" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main
        className="apr-stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onClick={onStageClick}
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <MotionSection
            key={slide.id}
            className={`apr-slide apr-slide-${slide.id}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <SlideContent
              slide={slide}
              onLogoPressStart={onLogoPressStart}
              onLogoPressEnd={onLogoPressEnd}
            />
          </MotionSection>
        </AnimatePresence>
      </main>

      <nav className="apr-dots" aria-label="Slides">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={i === index ? 'active' : ''}
            aria-label={`Ir para o slide ${i + 1}`}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
          />
        ))}
      </nav>

      <button className="apr-fs" onClick={toggleFullscreen} aria-label="Tela cheia">
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>

      {toast && <div className="apr-toast" role="status">{toast}</div>}

      {showNotes && (
        <aside className="apr-notes">
          <span>Roteiro · {index + 1}/{slides.length}</span>
          <p>{slide.notes}</p>
        </aside>
      )}
    </div>
  );
}
