import React, { useRef } from 'react'
import './Intro.css'
import logo from '../images/dev.png'
import Typed from 'typed.js';

export default function Intro() {
    const design = useRef(null);

    React.useEffect(() => {
        const typed = new Typed(design.current, {
            strings: ['Web Development.', 'Frontend Development.', 'Backend Development.', 'Full Stack Development.'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1200,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });

        return () => {
            typed.destroy();
        };
    }, []);
  return (
    <>
    <div className='container'>
        <div className="left">
            Hello This is <span className='name'>Sajid-Ul Islam</span>. I am Passionate about <br></br>
             <span ref={design} className='design'></span>
            
        </div>
        <div className="right">
            <img src={logo} alt=""/>
        </div>
    </div>
    </>
  )
}
