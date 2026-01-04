import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="title">Portfolio</div>
      <nav className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
