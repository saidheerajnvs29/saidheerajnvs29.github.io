import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <div className="hero container">
        <div className="hero-left">
          <h1 className="hero-title">Hi, I'm Dheeraj — building resilient systems for scale.</h1>
          <p className="hero-sub">Software engineer focused on backend systems, distributed architectures, and cloud-native platforms.</p>

          <div className="cta-row">
            <Link to="/contact" className="btn btn-primary">Get in touch</Link>
            <Link to="/about" className="btn btn-ghost">About me</Link>
          </div>

          <div style={{marginTop:28}}>
            <h3 style={{margin:'14px 0 8px'}}>Selected projects</h3>
            <div className="card-grid">
              <article className="card">
                <h4>Distributed Task Scheduler</h4>
                <p className="muted">Event-driven scheduler built with Kafka & Redis — replaces legacy cron workflows.</p>
              </article>

              <article className="card">
                <h4>Order Processing Platform</h4>
                <p className="muted">Microservices based order processing with Kafka, Postgres, and observability tools.</p>
              </article>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div style={{width:320,maxWidth:'90%'}} className="card">
            <h3 style={{marginTop:0}}>Quick facts</h3>
            <p className="muted">Java · Python · Kafka · PostgreSQL · AWS · System Design</p>
            <hr />
            <p style={{marginTop:12}}>Open to collaboration and new opportunities. Replace this card with your photo or an illustration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
