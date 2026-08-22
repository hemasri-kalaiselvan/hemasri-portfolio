import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navItems } from '../data/nav'
import { profile } from '../data/profile'
import Icon from './Icon'
import './Navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy for active section (home page only)
  useEffect(() => {
    if (location.pathname !== '/') return
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goToSection = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      // wait for home to mount, then scroll
      setTimeout(() => scrollToId(id), 60)
    } else {
      scrollToId(id)
    }
  }

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <button
          className="nav__brand"
          onClick={() => goToSection('home')}
          aria-label="Go to top"
        >
          <span className="nav__brand-name">{profile.brandShort}</span>
          <span className="nav__brand-role">Technology&nbsp;Professional</span>
        </button>

        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav__link${active === item.id && location.pathname === '/' ? ' nav__link--active' : ''}`}
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
          </button>
          <button
            className="nav__icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`nav__burger-box${open ? ' is-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav__drawer${open ? ' is-open' : ''}`}
        role="dialog"
        aria-label="Menu"
        aria-hidden={!open}
      >
        <nav className="nav__drawer-links" aria-label="Mobile">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav__drawer-link"
              onClick={() => goToSection(item.id)}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div
        className={`nav__scrim${open ? ' is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </header>
  )
}
