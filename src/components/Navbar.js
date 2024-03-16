import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TalentBids</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Company</a></li>
            <li><a className="dropdown-item" href="/">What we do</a></li>
            <li><a className="dropdown-item" href="/">Why us</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Apply as Developer</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hire Developer
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Hire Freelancer</a></li>
            <li><a className="dropdown-item" href="/">Hire Full Time Developer</a></li>
            <li><a className="dropdown-item" href="/">Hire Developer on Contract</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Insights</a></li>
            <li><a className="dropdown-item" href="/">Tranding</a></li>
            <li><a className="dropdown-item" href="/">Industry News</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
    
    </>
  )
}
