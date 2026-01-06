import React from 'react'
import './Contact.css'
import img from '../images/sajid.jpg'
export default function Contact() {
  return (
    <>
    <div>
      <div className='contactInfo'>
            <div className='info'>
            If you have a project, internship opportunity or want to connect?
            Feel free to reach out to me.
            </div>
            <div className='image'>
                <img src={img} alt="Image of Sajid"/>
            </div>
        </div>
        <div className='details'>
            <div className='detailItem'>
                <h3>Email</h3>
                <p>sajidulislam2225@gmail.com</p>
                <div className = 'buttonContact'>
                    <a href="mailto:sajidulislam2225@gmail.com">Send Email</a>
                </div>
            </div>
            <div className='detailItem'>
                <h3>Github</h3>
                <p>Saj1d-prompt</p>
                <div className = 'buttonContact'>
                    <a href="https://github.com/Saj1d-prompt" target="_blank" rel='noopener noreferrer'>Visit Github</a>
                </div>
            </div>
            <div className='detailItem'>
                <h3>LinkedIn</h3>
                <p>Sajid Ul Islam</p>
                <div className = 'buttonContact'>
                    <a href="https://www.linkedin.com/in/sajid-ul-islam-682760389/" target="_blank" rel='noopener noreferrer'>Visit LinkedIn</a>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}
