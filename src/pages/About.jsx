import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="container">
      <div className="hero" style={{paddingTop:24}}>
        <div className="hero-left">
          <h1 className="hero-title">About me</h1>
          <p className="hero-sub">Short bio placeholder — add your background, education, and interests here.</p>

          <div style={{marginTop:20}}>
            <h3>Background</h3>
            <p className="muted">Add your education, notable roles, and a brief story about how you arrived where you are.</p>
          </div>

          <div style={{marginTop:18}}>
            <h3>What I'm working on</h3>
            <p className="muted">Describe current projects, experimentation areas, or what you're learning right now.</p>
            <div style={{marginTop:12}}>
              <Link to="/experience" className="btn btn-ghost">See experience</Link>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="card" style={{width:320,maxWidth:'90%'}}>
            <h3 style={{marginTop:0}}>Quick facts</h3>
            <p className="muted">Location • Open to remote • Languages: English</p>
            <hr />
            <p style={{marginTop:12}}>Replace this card with a photo and contact CTA or a short highlight.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
