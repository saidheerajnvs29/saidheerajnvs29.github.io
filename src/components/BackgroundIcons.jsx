import React from 'react'

const Icon = ({ children, style, className='' }) => (
  <div className={`bg-icon ${className}`} style={style} aria-hidden>
    {children}
  </div>
)

export default function BackgroundIcons(){
  return (
    <div className="bg-icons" aria-hidden>
      {/* angle brackets </> */}
      <Icon style={{left:'8%', top:'10%', '--i': 0, color: 'var(--accent)'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 7l-6 10" />
          <path d="M6 7l6 10" />
        </svg>
      </Icon>

      {/* code file icon */}
      <Icon style={{left:'60%', top:'18%', '--i': 2, color: 'var(--accent)'}}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="14" height="18" rx="2" />
          <path d="M7 7h6" />
          <path d="M7 11h6" />
        </svg>
      </Icon>

      {/* terminal prompt >_ */}
      <Icon style={{left:'80%', top:'68%', '--i': 3, color: 'var(--accent-2)'}}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="M6 9l3 3-3 3" />
          <path d="M14 15h4" />
        </svg>
      </Icon>

      {/* angle bracket pair */}
      <Icon style={{left:'45%', top:'78%', '--i': 4, color: 'var(--accent)'}}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 17l-4-5 4-5" />
          <path d="M14 7l4 5-4 5" />
        </svg>
      </Icon>

      {/* AI / robot head */}
      <Icon style={{left:'10%', top:'72%', '--i': 5, color: 'var(--ai-accent)'}}>
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M8 10h.01M16 10h.01" />
          <path d="M9 15h6" />
          <path d="M12 3v2" />
          <path d="M7 4l2 2" />
          <path d="M17 4l-2 2" />
        </svg>
      </Icon>

      {/* AWS-like cloud (simple cloud, orange) */}
      <Icon style={{left:'72%', top:'8%', '--i': 6, color: 'var(--aws-accent)'}}>
        <svg width="64" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 17.5A4.5 4.5 0 0 0 15.5 13H15a4 4 0 1 0-7.9.9A3.5 3.5 0 0 0 6 20h13a1 1 0 0 0 1-1.5z" />
        </svg>
      </Icon>

    </div>
  )
}
