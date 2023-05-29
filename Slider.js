import React from "react";
import "../App.css";
function Slider() {
  return (
    <div>
      <section className="w3l-main-slider position-relative" id="home">
        <div className="companies20-content">
          <div className="owl-one owl-carousel owl-theme">
            <div className="item">
              <li>
                <div className="slider-info banner-view bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>For the world of Fitness.</h5>
                        <a
                          className="btn btn-style btn-primary mt-md-5 mt-4"
                          href="services.html"
                        >
                          View classes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info  banner-view banner-top1 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>For those who Work out the Hardest!</h5>
                        <a
                          className="btn btn-style btn-primary mt-md-5 mt-4"
                          href="services.html"
                        >
                          View classes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top2 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>15% Off for All New Attendees!</h5>
                        <a
                          className="btn btn-style btn-primary mt-md-5 mt-4"
                          href="services.html"
                        >
                          View classes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top3 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Best fitness centre for Men & Women.</h5>
                        <a
                          className="btn btn-style btn-primary mt-md-5 mt-4"
                          href="services.html"
                        >
                          View classes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;
