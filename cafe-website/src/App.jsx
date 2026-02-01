import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import Intro from './components/Intro.jsx'
import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [loading, setLoading] = useState(true);

  
  //loading
  useEffect(() => {
const timer = setTimeout(() => {
      setLoading(false);
    }, 1200) //duration of the intro

    return () => clearTimeout(timer);
  }, []);

  //intro
    // INTRO SCREEN (runs AFTER loading finishes)
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 3000); // intro duration

      return () => clearTimeout(timer);
    }
  }, [loading]);


 return (
  
    <div className="bg-espresso text-latte font-sans min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div key="app">
            <Intro show={showIntro} />

            {!showIntro && (
              <>
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
              </>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default App
