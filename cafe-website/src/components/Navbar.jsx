import { useEffect, useState } from "react";
import { motion, AnimatePresence, hover } from 'framer-motion'
import {Menu,  X } from 'lucide-react'

export default function Navbar() {

  //stores which section is currently active, "home" by default
  const [active, setActive] = useState("home");
  //this controls whether the menu is open on small screens
  const [open, setOpen] = useState(false);

  //runs after components load
  useEffect(() => {
    //grabs all sections/divs with an id, ex: <section id="menu">
  const sections = document.querySelectorAll("section[id], div[id]");

  //when a section is visible, it becomes active, entry.target.id = "menu" etc
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      //adjusts when a section becomes active, -30% -> triggers earlt, -60% -> prevents fast switch
      rootMargin: "-30% 0px -60% 0px",
    }
  );
  //starts to observer each section
  sections.forEach((section) => observer.observe(section));

  // Force home active at top
  const onScroll = () => {
    if (window.scrollY < 100) setActive("home");
  };

  window.addEventListener("scroll", onScroll);

  //this will prevent memory leaks
  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", onScroll);
  };
}, []);

//close menu when resizing to desktop, will prevent weird states
useEffect(() => {
  const handleResize = () => {
    if(window.innerWidth >= 768) setOpen(false);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [])

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Product Menu" },
  { id: "about", label: "About Us" },
  { id: "gallery", label: "Cafe Gallery" },
  { id: "reviews", label: "Cafe Reviews" },
  { id: "contact", label: "Contact Us" },
];



  return (
    <header>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-espresso/60">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-6 flex justify-between items-center">
        
      <button
        className="md:hidden text-latte"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait"> {/**ensure that one icon finishes exiting before other enters */}
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

        
        <h1 className="text-xl font-semibold text-latte">
          <a href="#home" className="Decoration-none">
            Café DrasZil
          </a>
    
        </h1>

        {/**desktop menu,
         * hidden md:flex - hidden on mobile, visible in md
         */}
        
        <ul className="hidden md:flex gap-8 text-sm text-cream/80">
          {NAV_LINKS.map(({ id, label }) => (
            <motion.li
              key={id}
              className="group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`#${id}`}
                className="relative text-muted hover:text-latte transition-colors duration-300"
              >
                {label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-latte transition-all duration-300
                    ${active === id ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </a>
            </motion.li>
          ))}
      </ul>

      </div>

      <AnimatePresence>
        {/**drops down, closes when link is clicked */}
      {open && (
        <motion.div
          className="md:hidden bg-espresso/95 backdrop-blur-md"
          initial={{ opacity: 0, y: -20}} //slightly above and transparent
          animate={{ opacity: 1, y: 0}} //slides down, fades in
          exit={{ opacity: 0, y: -20}} //slides up, fades out
          transition={{ duration: 0.25, ease: "easeOut"}}
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-cream">
            {NAV_LINKS.map(({ id, label }) => (
              <motion.li
                key={id}
                className="relative"
                whileHover="hover"
                initial="rest"
              >
                {/* background highlight */}
                <motion.span
                  variants={{
                    rest: { opacity: 0, scaleX: 0 },
                    hover: { opacity: 1, scaleX: 1 },
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 bg-latte/10 rounded-md origin-left"
                />

                <motion.a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`relative z-10 block px-6 py-2 text-lg cursor-pointer ${
                    active === id ? "text-latte" : "text-cream"
                  }`}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {label}
                </motion.a>
              </motion.li>
            ))}
          </ul>

        </motion.div>
      )}  
      </AnimatePresence>
    </nav>
    </header>
    
    )
}
