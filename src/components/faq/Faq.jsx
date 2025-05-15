import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <>
      <section id="faq">
        <div class="container">
          <div class="faq_main">
            <div class="faq_left">
              <h3>Frequently asked questions</h3>
              <a href="#">Contact us for more info</a>
            </div>
            <div class="faq_right">
              <div class="faq_body">
                <div class="faq_num">
                  <h6>01</h6>
                </div>
                <div class="faq_text">
                  <h6>How much time does it take?</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div class="faq_last">
                  <i class="fa-sharp fa-solid fa-x fa-sm"></i>
                </div>
              </div>
              <div class="faq_body">
                <div class="faq_num">
                  <h6>02</h6>
                </div>
                <div class="faq_text">
                  <h6>What is your class naming convention?</h6>
                </div>
                <div class="faq_last">
                  <i class="fa-sharp fa-solid fa-plus fa-sm"></i>
                </div>
              </div>
              <div class="faq_body">
                <div class="faq_num">
                  <h6>03</h6>
                </div>
                <div class="faq_text">
                  <h6>How do you communicate?</h6>
                </div>
                <div class="faq_last">
                  <i class="fa-sharp fa-solid fa-plus fa-sm"></i>
                </div>
              </div>
              <div class="faq_body">
                <div class="faq_num">
                  <h6>04</h6>
                </div>
                <div class="faq_text">
                  <h6>I have a bigger project. Can you handle it?</h6>
                </div>
                <div class="faq_last">
                  <i class="fa-sharp fa-solid fa-plus fa-sm"></i>
                </div>
              </div>
              <div class="faq_body">
                <div class="faq_num">
                  <h6>05</h6>
                </div>
                <div class="faq_text">
                  <h6>What is your class naming convention?</h6>
                </div>
                <div class="faq_last">
                  <i class="fa-sharp fa-solid fa-plus fa-sm"></i>
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
