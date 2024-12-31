import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost1 from './pages/BlogPost1.jsx'
import BlogPost2 from './pages/BlogPost2.jsx'
import Contact from './pages/Contact.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Router>
      <div className={`min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <Navbar onMenuClick={() => setIsOpen(true)} />
        <AnimatePresence>
          {isOpen && <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} isDark={isDark} onThemeToggle={toggleTheme} />}
        </AnimatePresence>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/1" element={<BlogPost1 />} />
            <Route path="/blog/2" element={<BlogPost2 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </div>
    </Router>
  )
}





