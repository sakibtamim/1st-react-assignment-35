import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <>
      <section id="faq">
        <div className="container">
          <div className="faq_main">
            <div className="faq_left">
              <h3>Frequently asked questions</h3>
              <a href="#">Contact us for more info</a>
            </div>
            <div className="faq_right">
              <div className="faq_body">
                <div className="faq_num">
                  <h6>01</h6>
                </div>
                <div className="faq_text">
                  <h6>How much time does it take?</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="faq_last">
                  <i className="fa-sharp fa-solid fa-x fa-sm"></i>
                </div>
              </div>
              <div className="faq_body">
                <div className="faq_num">
                  <h6>02</h6>
                </div>
                <div className="faq_text">
                  <h6>What is your class naming convention?</h6>
                </div>
                <div className="faq_last">
                  <i className="fa-sharp fa-solid fa-plus fa-sm"></i>
                </div>
              </div>
              <div className="faq_body">
                <div className="faq_num">
                  <h6>03</h6>
                </div>
                <div className="faq_text">
                  <h6>How do you communicate?</h6>
                </div>
                <div className="faq_last">
                  <i className="fa-sharp fa-solid fa-plus fa-sm"></i>
                </div>
              </div>
              <div className="faq_body">
                <div className="faq_num">
                  <h6>04</h6>
                </div>
                <div className="faq_text">
                  <h6>I have a bigger project. Can you handle it?</h6>
                </div>
                <div className="faq_last">
                  <i className="fa-sharp fa-solid fa-plus fa-sm"></i>
                </div>
              </div>
              <div className="faq_body">
                <div className="faq_num">
                  <h6>05</h6>
                </div>
                <div className="faq_text">
                  <h6>What is your class naming convention?</h6>
                </div>
                <div className="faq_last">
                  <i className="fa-sharp fa-solid fa-plus fa-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
