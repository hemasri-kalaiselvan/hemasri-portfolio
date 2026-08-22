import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a href="#home" className="visually-hidden">
        Skip to content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* Fallback shows the portfolio */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
