import React from 'react'
import { IconGitHub, IconLinkedIn, IconMail } from './Icons'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Dheeraj — Built with React & Vite</div>
        <div className="socials">
          <a href="https://github.com/saidheerajnvs29" target="_blank" rel="noreferrer" aria-label="GitHub"><IconGitHub /></a>
          <a href="https://linkedin.com/in/dheeraj-narayanabhatla/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconLinkedIn /></a>
          <a href="mailto:saidheerajnvs1998@gmail.com" aria-label="Email"><IconMail /></a>
        </div>
      </div>
    </footer>
  )
}

