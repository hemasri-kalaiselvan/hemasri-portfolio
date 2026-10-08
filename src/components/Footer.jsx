import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <button className="footer__brand" onClick={scrollTop}>
            {profile.name}
          </button>
          <p className="footer__tag">
            Mainframe & Big Data - Developer & Production Support | Exploring AI
          </p>
        </div>
        <p className="footer__copy">© {year} {profile.name}</p>
      </div>
    </footer>
  )
}
