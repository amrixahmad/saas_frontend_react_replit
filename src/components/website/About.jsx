import React from 'react'

const About = () => {


  return (
    <section id="about" className="about section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p className="who-we-are">Who We Are</p>
            <h3>Creative solutions for stubborn marketing problems</h3>
            <p className="fst-italic">
              We are a team of marketers who believe in using AI technology to automate the boring stuff.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>We work hard to build solutions that help small and medium business owners level the playing field with bigger players.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>We achieve this by leveraging a unique team of both marketing and tech experts.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Good marketing doesn't have to be the privilege of large corporations. We aim to democratize reach and brand awareness to businesses of any size.</span></li>
            </ul>
          </div>

          <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              <div className="col-lg-6">
                <img src="src/assets/img/website/about-company-1.jpg" className="img-fluid" alt=""></img>
              </div>
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img src="src/assets/img/website/about-company-2.jpg" className="img-fluid" alt=""></img>
                  </div>
                  <div className="col-lg-12">
                    <img src="src/assets/img/website/about-company-3.jpg" className="img-fluid" alt=""></img>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About