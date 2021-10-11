import React from "react";
import "slick-carousel";
import { Link } from "react-router-dom";
export function Header() {
  let login = JSON.parse(localStorage.getItem("login"));
  let access_token = localStorage.getItem("access_token");
  let facebook_login = localStorage.getItem("facebook_login");
  let facebook_name = localStorage.getItem("facebook_name");
  let google_name = localStorage.getItem("access_name");

  function logout() {
    localStorage.clear("access_token");
    localStorage.clear("login");
    localStorage.clear("facebook_login");
    window.location = "/Login";
  }
  // function glogout() {

  //   window.location = "/Login";
  // }

  return (
    <div>
      <section class="wrapper">
        <header>
          <nav class="navbar navbar-light navbar-expand-md navigation">
            <div class="container">
              <Link class="navbar-brand" to="/">
                <img src="images/logo.jpg" alt="" />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/Post">
                      Our Blog
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/About">
                      About Us
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Contact">
                      Contact Us
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/allproducts">
                      All-Product
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="header-icons">
                <Link to="/">
                  <img src="images/search-icon.svg" alt="" />
                </Link>
                <a href=" ">
                  <span class="cart-value">2</span>
                  <img src="images/cart-icon.svg" alt="" />
                </a>
                {login ? (
                  <React.Fragment>
                    <span className="m-5"> {login.token.user["name"]}</span>
                    <span onClick={logout}>Logout</span>
                  </React.Fragment>
                ) : access_token ? (
                  <React.Fragment>
                    <span className="m-1"> {google_name}</span>
                    <span className="m-5" onClick={logout}>
                      Logout
                    </span>
                  </React.Fragment>
                ) : facebook_login ? (
                  <React.Fragment>
                    <span className="m-1"> {facebook_name}</span>
                    <span className="m-5" onClick={logout}>
                      Logout
                    </span>
                  </React.Fragment>
                ) : (
                  <Link to="/Registration">
                    <img src="images/user-icon.svg" alt="" />
                  </Link>
                )}
                {/* {!access_token ? (
                  <Link to="/Registration">
                    <img src="images/user-icon.svg" alt="" />
                  </Link>
                ) : (
                  <React.Fragment>
                    <span className="m-5"></span>
                    <span onClick={glogout}>Logout</span>
                  </React.Fragment>
                )} */}
              </div>
            </div>
          </nav>
        </header>
      </section>
    </div>
  );
}
