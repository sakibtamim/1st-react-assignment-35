import React from "react";
import "./testimonials.css";
import TestProfile from "../../assets/Test_propic.png";
const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <div className="container">
          <div className="test_main">
            <div className="test_left">
              <h3>What our clients say about us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </div>
            <div className="test_right">
              <h5>
                "The best agency we’ve worked with so far. They understand our
                product and are able to add new features with a great focus."
              </h5>
              <div className="test_inner">
                <div className="profile">
                  <div className="pro_logo">
                    <img srcName={TestProfile} alt=" Test_propic" />
                  </div>
                  <div className="pro_text">
                    <h5>Jenny Wilson</h5>
                    <h6>Vice President</h6>
                  </div>
                </div>
                <div className="btns">
                  <a>
                    <i className="fa-sharp fa-solid fa-chevron-left fa-xl"></i>
                  </a>
                  <a>
                    <i className="fa-sharp fa-solid fa-chevron-right fa-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
