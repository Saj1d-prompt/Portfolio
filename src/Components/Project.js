import React from 'react'
import './Project.css'

export default function Project() {
  return (
    <div>
      <h2>Projects</h2>
        <div className='projectItem'>
            <h3 className='projectH3'>Portfolio Website</h3>
            <p>A personal portfolio website to showcase my skills, projects, and experience. Built using React.js.</p>
            <p><span className='tech'>Technologies Used:</span> React.js, CSS, HTML</p>
            <div className='buttons'>
                <a href="https://github.com/Saj1d-prompt/Portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">Live Netlify</a>
            </div>
        </div>
        <div className='projectItem'>
            <h3 className='projectH3'>Word Counter</h3>
            <p>A website that counts the words and characters along with making the sentences uppercase and lowercase. Built using React.js.</p>
            <p><span className='tech'>Technologies Used:</span> React.js, Bootstrap, HTML</p>
            <div className='buttons'>
                <a href="https://github.com/Saj1d-prompt/Word-Counter" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <a href="https://wordcounter25.netlify.app/" target="_blank" rel="noopener noreferrer">Live Netlify</a>
            </div>
        </div>
    </div>
  )
}
