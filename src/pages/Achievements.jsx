import React from 'react'

export default function Achievements() {
  return (
    <section className="container">
      <div style={{paddingTop:24}}>
        <h1 style={{marginTop:0}}>Achievements</h1>
        <p className="lead">Awards, certifications, publications, and other recognitions.</p>

        <div className="card-grid" style={{marginTop:18}}>
          <article className="card">
            <h4>Certification: Cloud Architect</h4>
            <p className="muted">Issuing organization — Year</p>
          </article>

          <article className="card">
            <h4>Conference Talk: Scaling Event Systems</h4>
            <p className="muted">Conference Name — Year</p>
          </article>

          <article className="card">
            <h4>Open Source Contributor</h4>
            <p className="muted">Project name — Short summary of contribution</p>
          </article>
        </div>

        <p className="muted" style={{marginTop:18}}>Add links to certificates or slides where appropriate.</p>
      </div>
    </section>
  )
}
