import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' }
]

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <div>
          <Link to="/" className="brand">Venkata Sai Dheeraj N</Link>
          <div className="muted" style={{fontSize:12, marginTop:4}}>Software Engineer</div>
        </div>
        <nav>
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
        </nav>
      </div>
    </header>
  )
}
