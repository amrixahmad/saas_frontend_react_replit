import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {


  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src="src/assets/img/website/hero-bg-light.webp" alt=""></img>
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up" className="">Welcome to <span>Caption Surf</span></h1>
          <p data-aos="fade-up" data-aos-delay="100" className="">We make social media posting fun again :)<br></br></p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <Link to="/login" className="btn-get-started">Get Started</Link>
            <a href="https://www.youtube.com/shorts/xqnHOKqCz_4" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
          <img src="src/assets/img/website/hero-services-img.webp" className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300"></img>
        </div>
      </div>

    </section>
  )
}

export default Hero