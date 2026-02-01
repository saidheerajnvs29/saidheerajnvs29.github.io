import React, {useEffect, useState} from 'react'
import { IconGitHub, IconLinkedIn, IconMail } from '../components/Icons'

export default function Contact() {
  const [resumeAvailable, setResumeAvailable] = useState(false)

  useEffect(()=>{
    // check if /resume.pdf exists
    fetch('/resume.pdf', {method:'HEAD'}).then(r=>{
      if(r.ok) setResumeAvailable(true)
    }).catch(()=>{
      setResumeAvailable(false)
    })
  },[])

  return (
    <section className="section">
      <div className="container">
        <h1>Contact</h1>
        <p className="lead">I'd love to hear from you — feel free to reach out via email, LinkedIn, or GitHub.</p>

        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20,marginTop:18}}>
          <div>
            <div className="card">
              <h3 style={{marginTop:0}}>Get in touch</h3>
              <p className="muted">Email: <a href="mailto:saidheerajnvs1998@gmail.com">saidheerajnvs1998@gmail.com</a></p>
              <p className="muted">LinkedIn: <a href="https://www.linkedin.com/in/dheeraj-narayanabhatla/">Profile</a></p>

              <div style={{marginTop:12,display:'flex',gap:8,alignItems:'center'}}>
                <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{display:'inline-flex',alignItems:'center',gap:8}}><IconGitHub /> GitHub</a>
                <a href="https://linkedin.com/in/dheeraj-narayanabhatla/" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{display:'inline-flex',alignItems:'center',gap:8}}><IconLinkedIn /> LinkedIn</a>
              </div>
            </div>
          </div>

          <aside>
            <div className="card">
              <h4 style={{marginTop:0}}>Resume</h4>
              {resumeAvailable ? (
                <a className="btn btn-primary" href="/resume.pdf" download>Download Resume</a>
              ) : (
                <p className="muted">No resume uploaded. Add a file at <code>public/resume.pdf</code> to enable download.</p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
