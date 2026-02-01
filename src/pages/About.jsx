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
            <div className="card-grid">
              <div className="card">
                <h4>Master of Science in Computer Science</h4>
                <p className="muted">State University of New York at Buffalo, Buffalo, NY, USA — Jan 2022 - May 2023</p>
                <p>GPA: 4/4</p>
              </div>

              <div className="card">
                <h4>Bachelor of Science in Computer Science and Engineering</h4>
                <p className="muted">Chaitanya Bharathi Institute of Technology, Hyderabad, India — Aug 2015 - May 2019</p>
                <p>GPA: 8.76/10</p>
              </div>
            </div>

            <h2 style={{marginTop:18}}>Interests</h2>
            <p className="muted">Distributed systems, cloud migrations, event-driven architectures, and developer productivity/automation.</p>
          </div>

          <aside>
            <div className="card">
              <h3 style={{marginTop:0}}>Quick facts</h3>
              <p className="muted">Open to remote work • Based in (add location) • Languages: English</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
