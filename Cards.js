import React from "react";
import "../App.css";
import blog1 from "../assets/images/blog1.jpg";
import a1 from "../assets/images/a1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import a2 from "../assets/images/a2.jpg";
import blog4 from "../assets/images/blog4.jpg";
import a3 from "../assets/images/a3.jpg";

function Cards() {
  return (
    <div>
      <section className="w3l-blog-block py-5">
        <div className="container py-lg-5 py-md-4">
          <div className="heading text-center mx-auto">
            <h5 className="title-small text-center mb-2">Blog posts</h5>
            <h3 className="title-big title-big-center mb-md-5 mb-4">
            What is Lorem Ipsum?
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 item">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <a href="#blog-single">
                    <img
                      className="card-img-bottom d-block"
                      src={blog1}
                      alt="Card image cap"
                    />
                  </a>
                  <ul className="location-top">
                    <li className="new">Public</li>
                  </ul>
                </div>
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                    The heavy weight of olympics: power lifting for the pros
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet ipsum elit. Qui eligendi vitae
                    sit isque male suada.
                  </p>
                  <div className="author align-items-center mt-3 mb-1">
                    <div className="img-circle">
                      <img src={a1} className="mr-3 img-fluid" alt="..." />
                    </div>
                    <div className="author-info">
                      <a href="#author">Maxwell ker</a> <br />{" "}
                      <span className="meta-value">July 1, 2020 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <a href="#blog-single">
                    <img
                      className="card-img-bottom d-block"
                      src={blog2}
                      alt="Card image cap"
                    />
                  </a>
                  <ul className="location-top">
                    <li className="tip">Farmer</li>
                  </ul>
                </div>
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                    If my last day of CrossFit were Tomorrow
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet ipsum elit. Qui eligendi vitae
                    sit isque male suada.
                  </p>
                  <div className="author align-items-center mt-3 mb-1">
                    <div className="img-circle">
                      <img src={a2} className="mr-3 img-fluid" alt="..." />
                    </div>
                    <div className="author-info">
                      <a href="#author">Maxwell ker</a> <br />{" "}
                      <span className="meta-value">July 1, 2020 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <a href="#blog-single">
                    <img
                      className="card-img-bottom d-block"
                      src={blog4}
                      alt="Card image cap"
                    />
                  </a>
                  <ul className="location-top">
                    <li className="design">Student</li>
                  </ul>
                </div>
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                    Keeping your Fitness Goals on Track at Work
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet ipsum elit. Qui eligendi vitae
                    sit isque male suada.
                  </p>
                  <div className="author align-items-center mt-3 mb-1">
                    <div className="img-circle">
                      <img
                        src={a3}
                        className="mr-3 img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="author-info">
                      <a href="#author">Maxwell ker</a> <br />{" "}
                      <span className="meta-value">July 1, 2020 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
