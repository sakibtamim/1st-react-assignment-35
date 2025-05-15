import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <section id="footer_body">
        <div class="container">
          <div class="footer_body_main">
            <div class="fo_ma_left">
              <a href="#">
                <img src={Logo} alt="logo" />
              </a>
              <p>
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>
            <div class="fo_ma_right">
              <h2>Lets Talk!</h2>
              <p>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>

              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="footer_body_bottom">
            <div class="body_bottom_left">
              <h3>Email me at</h3>
              <p>contact@website.com</p>
            </div>
            <div class="body_bottom_right">
              <h3>Call us</h3>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div class="container">
          <div class="footer_main">
            <div class="footer_copyright">
              <p>Copyright 2022, Finsweet.com</p>
            </div>
            <div class="footer_menu">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="html/about_us.html">About us</a>
                </li>
                <li>
                  <a href="html/features.html">Features</a>
                </li>
                <li>
                  <a href="html/pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="html/privacy_policy.html">FAQ</a>
                </li>
                <li>
                  <a href="html/blog_page.html">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
