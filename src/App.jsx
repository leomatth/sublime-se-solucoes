import { useRoutes, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import ConceptProjects from './components/ConceptProjects'
import About from './components/About'
import WhyMe from './components/WhyMe'
import QASection from './components/QASection'
import Process from './components/Process'
import ContactForm from './components/ContactForm'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import LP48h from './pages/LP48h'
import PlanoFundador from './pages/PlanoFundador'

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <ConceptProjects />
        <About />
        <WhyMe />
        <QASection />
        <Process />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/lp", element: <LandingPage /> },
  { path: "/lp/48h", element: <LP48h /> },
  { path: "/48h", element: <LP48h /> },
  { path: "/landing-pages-48h", element: <LP48h /> },
  { path: "/plano-fundador", element: <PlanoFundador /> },
  { path: "*", element: <Navigate to="/" replace /> }
];

function App() {
  return useRoutes(routes);
}

export default App;
