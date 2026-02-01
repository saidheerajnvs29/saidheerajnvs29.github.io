import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import BackgroundIcons from './components/BackgroundIcons'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app-root">
      <BackgroundIcons />
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
        <Footer />
    </div>
  )
}
