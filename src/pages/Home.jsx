import React from 'react'

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <div className="hero">
          <div className="hero-left">
            <h1>Hi, I'm Dheeraj</h1>
            <p className="lead">Software engineer with experience in backend systems, distributed architectures, and cloud-native platforms.</p>

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
          </div>

          <aside className="hero-right">
            <img src="/dheeraj.JPG" alt="Dheeraj" className="profile" onError={(e)=>{e.currentTarget.src='/profile.svg'}} />
            <div className="card">
              <h3 style={{marginTop:0}}>Contact</h3>
              <p className="muted">Email: <a href="mailto:saidheerajnvs1998@gmail.com">saidheerajnvs1998@gmail.com</a></p>
              <p className="muted">LinkedIn: <a href="https://www.linkedin.com/in/dheeraj-narayanabhatla/">Dheeraj Narayanabhatla</a></p>
            </div>
            <div style={{height:16}} />
            <div className="card">
              <h4 style={{marginTop:0}}>Selected Projects</h4>
              <ul className="muted">
                <li><strong>OneDataShare</strong> — Spring Batch based large-file transfer research project.</li>
                <li><strong>Multi-topic IR Chatbot</strong> — Flask + SOLR + Sentence-BERT semantic search.</li>
                <li><strong>Maternal Health App</strong> — Full stack messaging system using WebSockets.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
