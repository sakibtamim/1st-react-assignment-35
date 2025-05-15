import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <>
      <header id="nav">
        <div class="container">
          <div class="nav_main">
            <div class="nav_logo">
              <a href="index.html">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div class="nav_menu">
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
                <li>
                  <a href="html/contact_us.html">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
