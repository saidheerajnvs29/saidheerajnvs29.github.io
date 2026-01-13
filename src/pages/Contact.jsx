import React from 'react'

export default function Contact() {
  return (
    <section className="container">
      <div style={{paddingTop:24}}>
        <h1 style={{marginTop:0}}>Contact</h1>
        <p className="lead">I'd love to hear from you — replace with your preferred contact methods.</p>

        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20,marginTop:18}}>
          <div>
            <div className="card">
              <h3 style={{marginTop:0}}>Send a message</h3>
              <p className="muted">This is a placeholder contact form — replace with your form handler or use a mailto link.</p>

              <form onSubmit={(e)=>{e.preventDefault();alert('Replace with real submit')}} style={{marginTop:12,display:'grid',gap:8}}>
                <input name="name" placeholder="Your name" style={{padding:10,borderRadius:8,border:'1px solid #e6e9ef'}} />
                <input name="email" placeholder="Your email" style={{padding:10,borderRadius:8,border:'1px solid #e6e9ef'}} />
                <textarea name="message" rows={5} placeholder="Message" style={{padding:10,borderRadius:8,border:'1px solid #e6e9ef'}} />
                <button className="btn btn-primary" type="submit">Send message</button>
              </form>
            </div>
          </div>

          <aside>
            <div className="card">
              <h4 style={{marginTop:0}}>Other ways to reach me</h4>
              <ul className="muted" style={{marginTop:8}}>
                <li>Email: <a href="mailto:saidheerajnvs1998@gmail.com">saidheerajnvs1998@gmail.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/dheeraj-narayanabhatla/">Profile</a></li>
                <li>GitHub: <a href="#">Your GitHub</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
