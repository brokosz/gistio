import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Gist from './components/Gist'
import Home from './components/Home'
import Settings from './components/settings/Settings'

export default function App() {  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/@:user/:id' element={<Gist />} />
        {/* Legacy support for the directly entered URL without encoding @ */}
        <Route path='/%40:user/:id' element={<Gist />} />
      </Routes>
      <Settings />
    </Router>
  )
}
