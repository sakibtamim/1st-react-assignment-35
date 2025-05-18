import React from "react";
import "./form.css";
import FormImg from "../../assets/form_img.png";
import Arrow from "../../assets/Arrow.png";

const Form = () => {
  return (
    <>
      <section id="form">
        <div className="container">
          <div className="form_main">
            <div className="form_img">
              <img src={FormImg} alt="form_img" />
              <div className="form_img_txt">
                <h2>Building stellar websites for early startups</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </div>
            <div className="form_input">
              <form action="">
                <h5>Send inquiry</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <input type="text" placeholder="Your Name" required />
                <input type="text" placeholder="Email" required />
                <input
                  type="text"
                  placeholder="Paste your Figma design URL"
                  required
                />
                <button>Send an Inquiry</button>
                <div className="get_touch">
                  <a href="html/contact_us.html">
                    Get in touch with us
                    <img src={Arrow} alt="Arrow" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
