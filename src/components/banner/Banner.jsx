import React from "react";
import "./banner.css";
import BanImg from "../../assets/banner.png";
import BanArrow from "../../assets/Arrow.png";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <div class="container">
          <div class="banner_main">
            <div class="banner_txt">
              <h1>Building stellar websites for early startups</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div class="view">
                <div class="view_work">
                  <a href="#">View our work</a>
                </div>
                <div class="view_price">
                  <a href="#">
                    View Pricing <img src={BanArrow} alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div class="banner_img">
              <img src={BanImg} alt="banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
