import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="/" className="logo d-flex align-items-center me-auto">
          <img src="assets/img/logo.png" alt=""></img>
          <h1 className="sitename">CaptionSurf</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>            
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>        
            {/* <li><Link to="/about">Testimonials</Link></li> */}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link to="/login" className="btn-getstarted">Get Started</Link>

      </div>
    </header>
  )
}

export default Header