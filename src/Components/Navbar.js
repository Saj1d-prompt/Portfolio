import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="title">Portfolio</div>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/">Contact</Link>
      </nav>
    </header>
  )
}
