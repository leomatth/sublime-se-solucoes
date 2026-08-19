import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Results from './components/Results'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Results />
      <Skills />
      <Projects />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
