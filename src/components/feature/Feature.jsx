import React from "react";
import "./feature.css";
import Feature1 from "../../assets/f01.png";
import Feature2 from "../../assets/f02.png";
import Feature3 from "../../assets/f03.png";
import Feature4 from "../../assets/f04.png";
import Feature5 from "../../assets/f05.png";
import Feature6 from "../../assets/f06.png";

const Feature = () => {
  return (
    <>
      <section id="feature">
        <div class="container">
          <div class="feature_head">
            <p>Features</p>
            <h2>Design that solves problems, one product at a time</h2>
          </div>
          <div class="feature_main">
            <div class="feature_body">
              <div class="feature_item">
                <img src={Feature1} alt="f01" />
                <h6>Uses Client First</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </div>
            <div class="feature_body">
              <div class="feature_item">
                <img src={Feature2} alt="f02" />
                <h6>Two Free Revision Round</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </div>
            <div class="feature_body">
              <div class="feature_item">
                <img src={Feature3} alt="f03" />
                <h6>Template Customization</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </div>
            <div class="feature_body">
              <div class="feature_item">
                <img src={Feature4} alt="f04" />
                <h6>24/7 Support</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </div>
            <div class="feature_body">
              <div class="feature_item">
                <img src={Feature5} alt="f05" />
                <h6>Quick Delivery</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </div>
            <div class="feature_body">
              <div class="feature_item">
                <img src={Feature6} alt="f06" />
                <h6>Hands-on approach</h6>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
