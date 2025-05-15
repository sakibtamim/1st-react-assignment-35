import React from "react";
import "./project.css";
import ArrowDark from "../../assets/Arrow_dark_blue.png";
import ArrowYellow from "../../assets/Arrow_yellow.png";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
const Project = () => {
  return (
    <>
      <section id="project">
        <div class="container">
          <div class="project_head">
            <h2>View our projects</h2>
            <div class="view_more">
              <a href="#">
                View More
                <img src={ArrowDark} alt="Arrow" />
              </a>
            </div>
          </div>
          <div class="project_main">
            <div class="project_main_left">
              <div class="card1">
                <img src={Card1} alt="card1" />
              </div>
              <div class="card1_overlay">
                <div class="card1_inner">
                  <h3>Workhub office Webflow Webflow Design</h3>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam
                  </p>
                  <div class="view_project">
                    <a href="#">
                      View project
                      <img src={ArrowYellow} alt="Arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="project_main_right">
              <div class="card2">
                <div class="card2_img">
                  <img src={Card2} alt="card2" />
                </div>
                <div class="card2_overlay">
                  <div class="card2_inner">
                    <h3>Unisaas Website Design</h3>
                    <div class="view_project">
                      <a href="#">
                        View project
                        <img src={ArrowYellow} alt="Arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card3">
                <div class="card3_img">
                  <img src={Card3} alt="card3" />
                </div>
                <div class="card3_overlay">
                  <div class="card3_inner">
                    <h3>Church Website Design</h3>
                    <div class="view_project">
                      <a href="#">
                        View project
                        <img src={ArrowYellow} alt="Arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
