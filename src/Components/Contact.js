import React from 'react'
import './Contact.css'
import img from '../images/sajid.jpg'
export default function Contact() {
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [msg,setMsg] = React.useState('');
    function handleChange(event) {
        const {name, value} = event.target;
        setUserInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    }
    function handleMassage() {
        setTimeout(() => {
            setMsg('');
        }, 4000);
        setMsg(`Thank You ${userInfo.name} for reaching out! But this form is currently non-functional.
            You can contact me via email.`);
    }

    return (
    <>
    <div className='contactContainer'>
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
        <div className='messageSection'>
            <div className='formContainer'>
                <h2 className='formTitle'>Send Me a Message</h2>
                <p className='msg'>{msg}</p>
                <div className='form'>
                    <label>Name</label>
                    <input type="text" name="name" value ={userInfo.name} onChange={handleChange} placeholder='Your Name' />
                    <label>Email</label>
                    <input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder='Your Email' />
                    <label>Message</label>
                    <textarea name="message" value={userInfo.message} onChange={handleChange} placeholder='Your Message' cols="20" rows="10"></textarea>
                    <button type="submit" onClick={handleMassage}>Submit</button>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}
