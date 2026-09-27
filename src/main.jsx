import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/tokens.css'

// Take control of scroll position ourselves. Mobile browsers otherwise
// restore the previous scroll position per-URL after React renders, which
// can leave a freshly-opened project page parked mid-way (at "About").
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  try { window.history.scrollRestoration = 'manual' } catch (e) {}
}

// HashRouter is used so project detail pages (e.g. /#/projects/vetrihub)
// work on GitHub Pages without server-side rewrite rules.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
