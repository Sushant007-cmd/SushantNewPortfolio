import { motion, useScroll, useTransform } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Arsenal from './components/Arsenal'
import Games from './components/Games'
import Trojan from './pages/Trojan'
import Footer from './components/Footer'
import { Linkedin } from 'lucide-react'

const Home = () => {
  return (
    <main>
      <Hero />
      <Arsenal />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

const NavigationWrapper = ({ textColor }) => {
  const location = useLocation();
  const isTrojanPage = location.pathname === '/trojan';

  // If on Trojan page, use white. Otherwise, use the dynamic textColor from scroll.
  const activeColor = isTrojanPage ? '#ffffff' : textColor;

  return (
    <>
      {/* LinkedIn Icon - Top Left */}
      <motion.a
        href="https://www.linkedin.com/in/sushant-devadhe/"
        target="_blank"
        rel="noreferrer"
        className="fixed top-8 left-8 z-[100] hover:scale-110 transition-transform duration-300"
        style={{ color: activeColor }}
      >
        <Linkedin
          size={28}
          strokeWidth={1.5}
        />
      </motion.a>

      <Navbar textColor={activeColor} />
    </>
  );
};

function App() {
  const { scrollYProgress } = useScroll();

  // Interpolate background color: Warm White -> Dark Cool Blue
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    ["#fff7ed", "#fff7ed", "#020617", "#020617"]
  );

  // Interpolate text color: Dark Brown -> White
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55, 1],
    ["#431407", "#431407", "#f8fafc", "#f8fafc"]
  );

  return (
    <Router>
      <motion.div
        style={{ backgroundColor, color: textColor }}
        className="min-h-screen transition-colors duration-0 ease-linear"
      >
        <NavigationWrapper textColor={textColor} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trojan" element={<Trojan />} />
        </Routes>
      </motion.div>
    </Router>
  )
}

export default App
