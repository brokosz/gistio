import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
// Load base styles first, then themes, then settings to ensure proper CSS precedence
import './styles/brutalist.css'
import './styles/themes.css'
import './styles/tailwind-theme.css' // Add Tailwind theme
import './styles/settings-safari.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)