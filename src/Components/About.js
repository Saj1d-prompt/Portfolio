import './About.css'
import IUB from '../images/IUB.jpg'
import Islamia from '../images/Islamia.jpg'
import BL from '../images/BL.jpg'

export default function About() {
  return (
    <div>
      <h2>Academic Background</h2>
      <div className='certificates'>
        <div className='Info'>
            <h3>BSc. in Computer Science & Engineering</h3>
            <h4>Independent University Bangladesh</h4>
            <p>Location: Dhaka, Bangladesh</p>
            <p>Session 2022 - 2025</p>
        </div>
        <div className='schoolImage'>
            <img src = {IUB} alt="Independent University Bangladesh"/>
        </div>
      </div>
      <div className='certificates'>
        <div className='Info'>
            <h3>Higher Secondary Certificate in Science</h3>
            <h4>Islamia Govt College, Sirajganj</h4>
            <p>Location: Sirajganj, Bangladesh</p>
            <p>Session 2020</p>
        </div>
        <div className='schoolImage'>
            <img src = {Islamia} alt="Islamia Govt College, Sirajganj"/>
        </div>
      </div>
      <div className='certificates'>
        <div className='Info'>
            <h3>Secondary School Certificate</h3>
            <h4>B.L Govt. School, Sirajganj</h4>
            <p>Location: Sirajganj, Bangladesh</p>
            <p>Session 2018</p>
        </div>
        <div className='schoolImage'>
            <img src = {BL} alt="B.L Govt. School, Sirajganj"/>
        </div>
      </div>
      <h2>Experience</h2>
        <div className='experience'>
            <h3>Student on Duty</h3>
            <h4>Department of CSE</h4>
            <h5>Independent University Bangladesh</h5>
            <p>Duration: January 2025 - December 2025</p>
        </div>
    </div>
  )
}
