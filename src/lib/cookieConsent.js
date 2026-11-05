// Escolha de cookies do visitante. Mesma chave usada no Soluções Hub.
const KEY = 'sublime-cookie-consent'
const CHANGE = 'sublime-cookie-change'
let reopened = false

export function readChoice() {
  try { return localStorage.getItem(KEY) } catch { return null }
}

export function saveChoice(value) {
  const previous = readChoice()
  try { localStorage.setItem(KEY, value) } catch { /* armazenamento bloqueado: o aviso volta na próxima visita */ }
  reopened = false
  window.dispatchEvent(new Event(CHANGE))
  if (value === 'accepted') window.loadSublimeAnalytics?.()
  // Retirar o consentimento só tem efeito real depois de recarregar a página sem o script.
  else if (previous === 'accepted') window.location.reload()
}

export function openCookieSettings() {
  reopened = true
  window.dispatchEvent(new Event(CHANGE))
}

export function subscribe(callback) {
  window.addEventListener(CHANGE, callback)
  window.addEventListener('storage', callback)
  return () => {
    window.removeEventListener(CHANGE, callback)
    window.removeEventListener('storage', callback)
  }
}

/** 'pending' quando o aviso deve aparecer; 'server' durante a geração estática. */
export const snapshot = () => (reopened || !readChoice() ? 'pending' : 'decided')
export const serverSnapshot = () => 'server'
