import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import Gist from './components/Gist'
import Home from './components/Home'
import Settings from './components/settings/Settings'
import './styles/settings.css'
import './styles/main.css'
import './styles/themes.css'

export default function App() {  
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/@:user/:id' element={<Gist />} />
          {/* Legacy support for the directly entered URL without encoding @ */}
          <Route path='/%40:user/:id' element={<Gist />} />
        </Routes>
        <Settings />
      </Router>
    </HelmetProvider>
  )
}
