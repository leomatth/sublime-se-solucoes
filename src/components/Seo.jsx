import { Head } from 'vite-react-ssg'

const SITE = 'https://solucoes.sublime-se.com'

// Título, descrição e canonical por página. Fica no HTML estático gerado pelo SSG,
// por isso o Google vê cada página como única (antes todas apontavam para "/").
export default function Seo({ title, description, path }) {
  const url = `${SITE}${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}
