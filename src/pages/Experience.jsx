import React from 'react'

export default function Experience() {
  return (
    <section className="section">
      <div className="container">
      <h1>Experience</h1>

      <div className="timeline">
          <div className="timeline-item">
            <h3>Senior Software Engineer</h3>
            <div className="company muted">Bristol Myers Squibb</div>
            <div className="date">Sept 2024 – Current</div>
            <ul>
              <li>Designed and implemented a RAG-based agentic AI solution for inventory search and management using LangGraph and Bedrock integrations for LIMS/ELN.</li>
              <li>Implemented integrations with legacy chemical registration using AWS Lambda and Step Functions to validate structures and generate harmonized tariff codes.</li>
              <li>Built a migration tool to export legacy experiments and attachments — helped migrate 25k+ experiments and 100k+ files to a unified platform.</li>
              <li>Implemented health monitoring and anomaly detector AI agent using Strands and Bedrock to track healthchecks and CloudWatch logs.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>Cloud Developer</h3>
            <div className="company muted">Bristol Myers Squibb</div>
            <div className="date">Jul 2023 – Aug 2024</div>
            <ul>
              <li>Upgraded legacy systems from Java 8 to Java 17 and removed outdated libraries for sustainability.</li>
              <li>Re-architected asynchronous processing for chemical property calculations.</li>
              <li>Setup CI/CD using CodeBuild/CodePipeline and used CloudFormation for automated deployments.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>Software Engineer – II / I / Intern</h3>
            <div className="company muted">NCR Corporation, Hyderabad, India</div>
            <div className="date">May 2019 – Dec 2021</div>
            <ul>
              <li>Improved payment application performance and availability; reduced latency to below 50ms by improving pod replicas and graceful shutdown.</li>
              <li>Implemented externalized configuration and TLS certificate management using Spring Cloud and HashiCorp Vault.</li>
              <li>Integrated RabbitMQ for inter-service communication and containerized applications with Docker; provisioned infrastructure using Terraform for cloud-agnostic deployments.</li>
              <li>Worked on an NLP-based Spring Boot project to retrieve database info from natural language queries (internship).</li>
            </ul>
          </div>
      </div>
      </div>
    </section>
  )
}
