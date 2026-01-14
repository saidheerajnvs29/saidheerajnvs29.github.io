import React from 'react'

export default function Home() {
  return (
    <section>
      <img src="/profile.svg" alt="Dheeraj" className="profile" />
      <h1>Hi, I'm Dheeraj.</h1>
      <p className="lead">Software engineer — backend, distributed systems, and cloud.</p>

      <h2>Key Skills</h2>
      <p>Java · Python · Kafka · PostgreSQL · AWS · System Design</p>

      <h2>Projects</h2>
      <div className="card-grid">
        <article className="card">
          <h3>Distributed Task Scheduler</h3>
          <p>Event-driven scheduler built with Kafka and Redis.</p>
          <a href="#">GitHub →</a>
        </article>

        <article className="card">
          <h3>Event-Driven Order System</h3>
          <p>Microservices-based order processing with Kafka and PostgreSQL.</p>
          <a href="#">GitHub →</a>
        </article>
      </div>

      <p className="muted">Replace this content with your own projects and links.</p>
    </section>
  )
}
