import React from 'react'

export default function Experience() {
  return (
    <section className="container">
      <div style={{paddingTop:24}}>
        <h1 style={{marginTop:0}}>Experience</h1>
        <p className="lead">Roles, companies, and short summaries — replace these placeholders with your real entries.</p>

        <div style={{marginTop:18}}>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Senior Software Engineer — Company ABC</h3>
              <p className="muted">2022 — Present • Remote</p>
              <p>Led backend services for high-throughput event processing. Designed resilient retry and partitioning strategies.</p>
            </div>

            <div className="timeline-item">
              <h3>Software Engineer — Company XYZ</h3>
              <p className="muted">2019 — 2022 • City</p>
              <p>Built microservice components, improved observability, and helped migrate monolith to distributed services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
