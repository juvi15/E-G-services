import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke">
            <h1>
              {" "}
              <a className="navbar-brand" href="index.html">
                <span></span> Government Services
              </a>
            </h1>
            <a className="navbar-brand" href="#index.html"></a>
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item @@home__active">
                  <Link className="nav-link" to="/Public/publicHome">
                    Home<span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item @@about__active">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item @@classes__active">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="contact.html"></a>
                </li>
                <div className="search-right">
                  <a href="#search" title="search">
                    <span className="fa fa-search" aria-hidden="true"></span>
                  </a>

                  <div id="search" className="pop-overlay">
                    <div className="popup">
                      <form action="#" method="GET" className="search-box">
                        <input
                          type="search"
                          placeholder="Enter Keyword"
                          name="search"
                          required="required"
                          autofocus=""
                        />
                        <button type="submit" className="btn">
                          <span
                            className="fa fa-search"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </form>
                    </div>
                    <a className="close" href="#close">
                      ×
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="w3l-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-contact py-5">
          <div className="container py-lg-5 py-md-3">
            <h3 className="title-big text-center"></h3>
            <p className="mt-3"></p>
          </div>
        </div>
      </section>

      <script src="../assets/js/jquery-3.3.1.min.js"></script>
      <script src="../assets/js/theme-change.js"></script>
      <script src="../assets/js/lightbox-plus-jquery.min.js"></script>
      <script src="../assets/js/owl.carousel.js"></script>
      <script src="../assets/js/jquery.waypoints.min.js"></script>
      <script src="../assets/js/jquery.countup.js"></script>
    </div>
  );
}

export default Header;
