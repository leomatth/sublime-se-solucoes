import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Vamos Conversar?</h2>
      <p className="contact-subtitle">
        Escolha o canal que preferir para entrar em contato conosco
      </p>

      <div className="contact-methods">
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp">
          <div className="contact-icon">💬</div>
          <h3>WhatsApp</h3>
          <p>Conversa rápida e direta</p>
          <span className="contact-link">Enviar Mensagem →</span>
        </a>

        <a href="https://instagram.com/sublimese.oficial" target="_blank" rel="noopener noreferrer" className="contact-card instagram">
          <div className="contact-icon">📸</div>
          <h3>Instagram</h3>
          <p>Acompanhe nosso trabalho</p>
          <span className="contact-link">Visitar Perfil →</span>
        </a>

        <a href="mailto:diretoria@solucoes.sublime-se.com" className="contact-card email">
          <div className="contact-icon">✉️</div>
          <h3>Email</h3>
          <p>Envie uma mensagem detalhada</p>
          <span className="contact-link">Enviar Email →</span>
        </a>
      </div>

      <div className="contact-cta">
        <p>Ou preencha o formulário acima para descrever seu projeto em detalhes</p>
      </div>
    </section>
  )
}
