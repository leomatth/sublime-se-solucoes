import { Link } from 'react-router-dom'
import Seo from './Seo'
import './Legal.css'

// Moldura comum das páginas legais (privacidade e termos).
export default function LegalLayout({ path, title, description, updated, children }) {
  return (
    <div className="legal">
      <Seo path={path} title={`${title} · Sublime-se Soluções`} description={description} />
      <header className="legal-header">
        <Link to="/" className="legal-brand" aria-label="Sublime-se Soluções, página inicial">
          <img src="/logo.png" alt="" width="40" height="40" />
          <span>Sublime-se Soluções</span>
        </Link>
        <Link to="/" className="legal-back">Voltar ao site</Link>
      </header>
      <main className="legal-main">
        <article className="legal-article">
          <h1>{title}</h1>
          <p className="legal-updated">Última atualização: {updated}</p>
          {children}
        </article>
      </main>
      <footer className="legal-footer">
        <p>
          © {new Date().getFullYear()} Sublime-se Soluções ·{' '}
          <Link to="/privacidade">Privacidade</Link> · <Link to="/termos">Termos de serviço</Link> ·{' '}
          <a href="mailto:diretoria@solucoes.sublime-se.com">diretoria@solucoes.sublime-se.com</a>
        </p>
      </footer>
    </div>
  )
}
