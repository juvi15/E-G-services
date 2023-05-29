import React from "react";
import "../App.css";
function Footer() {
  return (
    <div>
      {" "}
      <section className="w3l-footers-20">
        <div className="footers20">
          <div className="container">
            <div className="footers20-content">
              <div className="d-grid grid-col-4 grids-content">
                <div className="column">
                  <h4>Address</h4>
                  <p className="contact-para3">
                    New York, Alexandria, VA 2230, NY-90814 Hill Station 4th
                    Street
                  </p>
                  <a href="contact.html">
                    <p className="contact-map mt-2">
                      <span className="lnr lnr-map-marker"></span> Find us on map
                    </p>
                  </a>
                </div>
                <div className="column">
                  <h4>Get in touch</h4>
                  <p>Join the Best GYM in Your Town!</p>
                  <a href="tel:+1-2345-678-11">
                    <p className="contact-phone mt-2">
                      <span className="lnr lnr-phone-handset"></span> +1-2345-678-11
                    </p>
                  </a>
                  <a href="mailto:mail@example.com">
                    <p className="contact-mail mt-1">
                      <span className="lnr lnr-envelope"></span> mail@example.com
                    </p>
                  </a>
                </div>
                <div className="column">
                  <h4>Opening hours</h4>
                  <p>We are working on</p>
                  <p className="mt-1">
                    <span className="lnr lnr-clock"></span>{" "}
                    <strong>Mon - Fri</strong> : 7am to 9pm
                  </p>
                  <p className="mt-1">
                    <span className="lnr lnr-clock"></span>{" "}
                    <strong>Sat - Sun</strong> : 10 am to 8 pm
                  </p>
                </div>
              </div>
              <div className="d-grid grid-col-3 grids-content1 bottom-border">
                <div className="columns copyright-grid align-self">
                  <p className="copy-footer-29">
                    © 2020 Workout. All rights reserved | Designed by{" "}
                    <a href="https://w3layouts.com">W3layouts</a>
                  </p>
                </div>
                <div className="columns text-lg-right social-grid">
                  <ul className="social">
                    <li>
                      <a href="#url">
                        <span className="fa fa-facebook" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#url">
                        <span className="fa fa-instagram" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#url">
                        <span className="fa fa-twitter" aria-hidden="true"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick="topFunction()" id="movetop" title="Go to top">
          &#10548;
        </button>
      </section>
      <script src="../assets/js/jquery-3.3.1.min.js"></script>
      <script src="../assets/js/theme-change.js"></script>
      <script src="../assets/js/lightbox-plus-jquery.min.js"></script>
      <script src="../assets/js/owl.carousel.js"></script>
      <script src="../assets/js/jquery.waypoints.min.js"></script>
      <script src="../assets/js/jquery.countup.js"></script>
      <script src="../assets/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Footer;
