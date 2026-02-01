import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' }
]

export default function NavBar() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    if (theme === 'dark') document.body.setAttribute('data-theme', 'dark')
    else document.body.removeAttribute('data-theme')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className="nav">
      <div className="nav-inner container">
        <div>
          <Link to="/" className="brand">Venkata Sai Dheeraj N</Link>
          <div className="muted" style={{fontSize:12, marginTop:4}}>Software Engineer</div>
        </div>
        <nav style={{display:'flex',alignItems:'center',gap:8}}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {l.label}
            </NavLink>
          ))}
          <button aria-label="Toggle theme" className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}
