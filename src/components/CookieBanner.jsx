import { useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { saveChoice, serverSnapshot, snapshot, subscribe } from '../lib/cookieConsent'
import './CookieBanner.css'

// Mesmo padrão visual e de texto do aviso do Soluções Hub.
export default function CookieBanner() {
  const state = useSyncExternalStore(subscribe, snapshot, serverSnapshot)
  if (state !== 'pending') return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p className="cookie-banner-text">
        Usamos cookies de análise (Google Analytics) para entender como o site é usado, só se você aceitar.
        Os essenciais guardam apenas sua escolha. <Link to="/privacidade">Política de privacidade</Link>
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="cookie-banner-secondary" onClick={() => saveChoice('essential')}>Recusar</button>
        <button type="button" className="cookie-banner-primary" onClick={() => saveChoice('accepted')}>Aceitar</button>
      </div>
    </div>
  )
}
