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
        <div className="container">
          <div className="project_head">
            <h2>View our projects</h2>
            <div className="view_more">
              <a href="#">
                View More
                <img src={ArrowDark} alt="Arrow" />
              </a>
            </div>
          </div>
          <div className="project_main">
            <div className="project_main_left">
              <div className="card1">
                <img src={Card1} alt="card1" />
              </div>
              <div className="card1_overlay">
                <div className="card1_inner">
                  <h3>Workhub office Webflow Webflow Design</h3>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam
                  </p>
                  <div className="view_project">
                    <a href="#">
                      View project
                      <img src={ArrowYellow} alt="Arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_main_right">
              <div className="card2">
                <div className="card2_img">
                  <img src={Card2} alt="card2" />
                </div>
                <div className="card2_overlay">
                  <div className="card2_inner">
                    <h3>Unisaas Website Design</h3>
                    <div className="view_project">
                      <a href="#">
                        View project
                        <img src={ArrowYellow} alt="Arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card3">
                <div className="card3_img">
                  <img src={Card3} alt="card3" />
                </div>
                <div className="card3_overlay">
                  <div className="card3_inner">
                    <h3>Church Website Design</h3>
                    <div className="view_project">
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
