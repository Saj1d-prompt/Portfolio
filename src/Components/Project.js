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
        <div className='projectItem'>
            <h3 className='projectH3'>Certificate Management System</h3>
            <p>A website to automate the certificate related task for both Student and Administration of SSC and HSC.</p>
            <p><span className='tech'>Technologies Used:</span> HTML, CSS, JavaScript, PHP, MySQL</p>
            <div className='buttons'>
                <a href="https://github.com/Saj1d-prompt/CertificateManagementSystem" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        </div>
        <div className='projectItem'>
            <h3 className='projectH3'>Complaint Management System</h3>
            <p>A website to automate the Complaint related task for the User and Administration and Staff.</p>
            <p><span className='tech'>Technologies Used:</span> HTML, CSS, PHP, MySQL</p>
            <div className='buttons'>
                <a href="https://github.com/Saj1d-prompt/ComplaintManagementSystem" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        </div>
        <div className='projectItem'>
            <h3 className='projectH3'>Birth Record Communication System</h3>
            <p>A website to automate the Birth Record and automatically apply for a birth certificate and also to keep track of the newborns vaccination reminders.</p>
            <p><span className='tech'>Technologies Used:</span> HTML, CSS, JavaScript, PHP, MySQL</p>
            <div className='buttons'>
                <a href="https://github.com/Saj1d-prompt/BirthRecordCommunicationSystem" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        </div>
        To view More Projects Please Click Below to visit my GitHub account:
        <div className='buttons'>
                <a href="https://github.com/Saj1d-prompt" target="_blank" rel='noopener noreferrer' className='moreProjects'>More</a>
        </div>
        
    </div>
  )
}
