import React from "react";

export function Footer() {
  return (
    <div>
      <footer>
        <div class="footer">
          <div class="newsletter-wrapper">
            <div class="container">
              <div class="row newsletter-wrapper-inner">
                <div class="col-md-4">
                  <div class="subscribe-newsletter-label">
                    <label>Subscribe for a Newsletter</label>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="form-group newsletter-field-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your Email"
                      />
                      <button class="input-group-text" id="basic-addon2">
                        <img src="images/mail-icon.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <figure class="footer-logo">
                    <img
                      src="images/footer-logo.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </figure>
                </div>
                <div class="col-md-3">
                  <div class="footer-col">
                    <h3>Menu</h3>
                    <ul class="footer-links">
                      <li>
                        <a href=" ">Our Blog</a>
                      </li>
                      <li>
                        <a href=" ">About Us</a>
                      </li>
                      <li>
                        <a href=" ">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="footer-col">
                    <h3>About Us</h3>
                    <ul class="footer-links">
                      <li>
                        <a href=" ">Our Blog</a>
                      </li>
                      <li>
                        <a href=" ">About Us</a>
                      </li>
                      <li>
                        <a href=" ">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="footer-col">
                    <h3>Contact Us</h3>
                    <p>
                      <i>
                        <img
                          src="images/phone-icon.png"
                          class="img-fluid"
                          alt=""
                        />
                      </i>
                      <a href="tel:+1(578) 789-65-20">+1(578) 789-65-20</a>
                    </p>
                    <p>
                      <i>
                        <img
                          src="images/mail-icon.png"
                          class="img-fluid"
                          alt=""
                        />
                      </i>
                      <a href="mailto:support@kanify.com">support@kanify.com</a>
                    </p>
                    <p>
                      <i>
                        <img
                          src="images/address-icon.png"
                          class="img-fluid"
                          alt=""
                        />
                      </i>
                      <span>1149 NW 10th Ave, St John, KS</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href=" " class="scroll_to_top">
        <i></i>
      </a>
    </div>
  );
}
