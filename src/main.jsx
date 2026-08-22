import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/tokens.css'

// HashRouter is used so project detail pages (e.g. /#/projects/vetrihub)
// work on GitHub Pages without server-side rewrite rules.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
