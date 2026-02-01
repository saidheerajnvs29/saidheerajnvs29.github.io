import React from 'react'

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <div className="hero">
          <div className="hero-left">
            <h1>Hi, I'm <span className="accent-name">Dheeraj</span></h1>
            <p className="lead">Software engineer with experience in backend systems, distributed architectures, and cloud-native platforms.</p>

            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:saidheerajnvs1998@gmail.com">Email</a>
              <a className="btn btn-ghost" href="/resume.pdf">Resume</a>
            </div>

            <div style={{marginTop:18}}>
              <h3>Key Skills</h3>
              <div className="card">
                <p>
                  <strong>Languages:</strong> C, C++, Core Java, Python, SQL<br/>
                  <strong>Frameworks:</strong> FastAPI, Spring Cloud, Spring Boot, Spring Batch, Apache Camel, Flask, Mockito, Elasticsearch, Nginx<br/>
                  <strong>Tools:</strong> Docker, Kubernetes, Maven, Git, Terraform, Helm, RabbitMQ, ActiveMQ<br/>
                  <strong>Cloud:</strong> AWS Lambda, Step Functions, API Gateway, SQS/SNS, EC2, S3, DynamoDB, EKS, RDS, CloudWatch, ECR
                </p>
              </div>
            </div>
            <div style={{marginTop:16}}>
              <h4>Projects</h4>
              <div className="card">
                <ul className="muted">
                  <li><strong>OneDataShare</strong> — Spring Batch based large-file transfer research project.</li>
                  <li><strong>Multi-topic IR Chatbot</strong> — Flask + SOLR + Sentence-BERT semantic search.</li>
                  <li><strong>Maternal Health App</strong> — Full stack messaging system using WebSockets.</li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="hero-right">
            <img src="/dheeraj.JPG" alt="Dheeraj" className="profile" onError={(e)=>{e.currentTarget.src='/profile.svg'}} />
          </aside>
        </div>
      </div>
    </section>
  )
}
