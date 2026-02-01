import React from 'react'

export default function Achievements() {
  return (
    <section className="section">
      <div className="container">
        <h1>Achievements & Certifications</h1>

        <div className="card-grid" style={{marginTop:18}}>
          <article className="card">
            <h4>Certifications</h4>
            <p className="muted">AWS Certified Solutions Architect - Associate (Issued June 2023, valid through June 2026)</p>
          </article>

          <article className="card">
            <h4>Awards</h4>
            <ul className="muted">
              <li>AppSec Guardians White Belt — 2025 (BMS Research IT)</li>
              <li>Star of the Cadence — Q2 2020 (NCR Corporation)</li>
              <li>Distinguished Technical Achievement — SW R&amp;D Excellence Awards 2020 (NCR Corporation)</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
