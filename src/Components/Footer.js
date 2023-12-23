import React from 'react'

const Footer = () => {
  return (
    <>
       <footer id="footer" className="footer ">
    {/* Footer Top */}
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
              {/* Social */}
              <ul className="social">
                <li><a href="#"><i className="icofont-facebook" /></a></li>
                <li><a href="#"><i className="icofont-google-plus" /></a></li>
                <li><a href="#"><i className="icofont-twitter" /></a></li>
                <li><a href="#"><i className="icofont-vimeo" /></a></li>
                <li><a href="#"><i className="icofont-pinterest" /></a></li>
              </ul>
              {/* End Social */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer f-link">
              <h2>Quick Links</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <ul>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Home</a></li>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />About Us</a></li>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Services</a></li>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Our Cases</a></li>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Other Links</a></li>	
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <ul>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Consuling</a></li>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Finance</a></li>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Testimonials</a></li>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />FAQ</a></li>
                    <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" />Contact Us</a></li>	
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer">
              <h2>Open Hours</h2>
              <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
              <ul className="time-sidual">
                <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                <li className="day">Saturday <span>9.00-18.30</span></li>
                <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer">
              <h2>Newsletter</h2>
              <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
              <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                <input name="email" placeholder="Email Address" className="common-input" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required type="email" />
                <button className="button"><i className="icofont icofont-paper-plane" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ End Footer Top */}
    {/* Copyright */}
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="copyright-content">
              <p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</a> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ End Copyright */}
  </footer>
    </>
  )
}

export default Footer
