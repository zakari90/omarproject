import { FacebookIcon, Phone, TwitterIcon } from 'lucide-react'
import React from 'react'

function Page() {
  return (
    <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">LOGO</a>
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="icon" />
            </a>
            <a  title="GitHub" target="_blank" rel="noopener noreferrer">
              <Phone className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you are curious.</p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://github.com/arkn98" target="_blank" rel="noopener noreferrer">arkn98</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/arkn98/coming-soon" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
  )
}

export default Page