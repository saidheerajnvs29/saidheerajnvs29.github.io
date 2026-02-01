import React from 'react'

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1>About</h1>
        <p className="lead">I am a software engineer focused on backend and cloud-native systems with experience building scalable, resilient platforms and integrations.</p>

        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20,marginTop:20}}>
          <div>
            <h2>Education</h2>
            <div style={{display:'flex',flexDirection:'column',gap:12,marginTop:12}}>
              <div className="card">
                <div className="edu-meta">
                  <h4 style={{margin:0}}>Master of Science in Computer Science</h4>
                  <div className="dates muted">Jan 2022 - May 2023</div>
                </div>
                <p className="muted">State University of New York at Buffalo, Buffalo, NY, USA</p>
                <p>GPA: 4/4</p>
              </div>

              <div className="card">
                <div className="edu-meta">
                  <h4 style={{margin:0}}>Bachelor of Science in Computer Science and Engineering</h4>
                  <div className="dates muted">Aug 2015 - May 2019</div>
                </div>
                <p className="muted">Chaitanya Bharathi Institute of Technology, Hyderabad, India</p>
                <p>GPA: 8.76/10</p>
              </div>
            </div>

            <h2 style={{marginTop:18}}>Interests</h2>
            <div style={{marginTop:12}}>
              <div className="card">
                <p className="muted">Agentic systems, RAG, Distributed systems, cloud migrations, event-driven architectures, and developer productivity/automation.</p>
              </div>
            </div>

            <h2 style={{marginTop:18}}>Quick facts</h2>
            <div style={{marginTop:12}}>
              <div className="card">
                
                <p className="muted">Based in Tampa, FL • Open to relocation across US • Languages: English, Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
