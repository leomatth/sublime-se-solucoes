import { Outlet } from 'react-router-dom'
import CookieBanner from './CookieBanner'

// Rota de layout: todas as páginas mostram o aviso de cookies.
export default function SiteShell() {
  return (
    <>
      <Outlet />
      <CookieBanner />
    </>
  )
}
