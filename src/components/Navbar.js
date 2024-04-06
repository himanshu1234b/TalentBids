import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-primary" data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand" to="/">TalentBids</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/About" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/About">About us</Link></li>
            <li><Link className="dropdown-item" to="/Whatwedo">What we do</Link></li>
            <li><Link className="dropdown-item" to="/Whyus">Why us</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Aasdev">Apply as Developer</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hire Developer
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Hire Freelancer</Link></li>
            <li><Link className="dropdown-item" to="/">Hire Full Time Developer</Link></li>
            <li><Link className="dropdown-item" to="/">Hire Developer on Contract</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Insights</Link></li>
            <li><Link className="dropdown-item" to="/">Tranding</Link></li>
            <li><Link className="dropdown-item" to="/">Industry News</Link></li>
          </ul>
        </li>
      </ul>
      <button type="button" class="btn btn-light" >Contact us <i class="fa-solid fa-arrow-right" ></i> </button>
    </div>
  </div>
</nav>
    
    </>
  )
}
