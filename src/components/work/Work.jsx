import React from "react";
import "./work.css";
import ArrowBlue from "../../assets/Arrow_blue.png";
import Pointer1 from "../../assets/pointer1.png";
import Pointer2 from "../../assets/pointer2.png";
import Pointer3 from "../../assets/pointer3.png";
import Pointer4 from "../../assets/pointer4.png";
const Work = () => {
  return (
    <>
      <section id="work">
        <div className="container">
          <div className="work_main">
            <div className="work_left">
              <h2>How we work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="get_touch">
                <a href="#">
                  Get in touch with us <img src={ArrowBlue} alt="Arrow" />
                </a>
              </div>
            </div>
            <div className="work_right">
              <div className="body_inner">
                <div className="body_item">
                  <img src={Pointer1} alt="pointer" />
                  <h5>Strategy</h5>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </div>
              </div>
              <div className="body_inner">
                <div className="body_item">
                  <img src={Pointer2} alt="pointer" />
                  <h5>Strategy</h5>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </div>
              </div>
              <div className="body_inner">
                <div className="body_item">
                  <img src={Pointer3} alt="pointer" />
                  <h5>Strategy</h5>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </div>
              </div>
              <div className="body_inner">
                <div className="body_item">
                  <img src={Pointer4} alt="pointer" />
                  <h5>Strategy</h5>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
