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

function App() {
  // Scroll reveal
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

export default App
