import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import Intro from './components/Intro.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2800) //duration of the intro

    return () => clearTimeout(timer);
  }, []);

 return (
    <div className='bg-espresso text-latte font-sans min-h-screen'>
      <Intro show={showIntro} />
      <Navbar />


    <Hero />

    <Section>
      <Menu />
    </Section>
    <Section>
      <About />
    </Section>
    <Section>
      <Contact />
    </Section>

    <Footer />
    
    </div>
 )
}

export default App
