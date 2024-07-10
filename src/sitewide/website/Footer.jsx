import React from 'react'

const Footer = () => {

  return (
    <footer id="footer" className="footer position-relative">

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">Caption Surf</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Avenue D'Vogue</p>
              <p>Jalan 13/2, Section 13, 46200 PJ</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+60126145179</span></p>
              <p><strong>Email:</strong> <span>hello@marvelop.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href=""><i className="bi bi-twitter"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="newsletter-form">
                <input type="email" name="email"></input>
                <input type="submit" value="Subscribe"></input>
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright 2024</span> <strong className="px-1 sitename">CaptionSurf</strong><span>All Rights Reserved</span></p>       
      </div>

    </footer>
  )
}

export default Footer