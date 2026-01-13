import React from 'react'

export default function Experience() {
  return (
    <section>
      <h1>Experience</h1>
      <p className="lead">List your work experience, roles, and responsibilities.</p>

      <div className="timeline">
        <div className="timeline-item">
          <h3>Software Engineer — Company ABC</h3>
          <p className="muted">Dates • Location</p>
          <p>Short summary of responsibilities and achievements.</p>
        </div>

        <div className="timeline-item">
          <h3>Another Role — Company XYZ</h3>
          <p className="muted">Dates • Location</p>
          <p>Short summary of responsibilities and achievements.</p>
        </div>
      </div>
    </section>
  )
}
