import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <div className="brand">Dheeraj</div>
        <nav>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
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
