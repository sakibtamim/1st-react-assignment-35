import React from "react";
import "./blog.css";
import ArrowDark from "../../assets/Arrow_dark_blue.png";
import Blog1 from "../../assets/b01.png";
import Blog2 from "../../assets/b02.png";
import Blog3 from "../../assets/b03.png";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog_head">
            <h2>Our blog</h2>
          </div>
          <div className="blog_main">
            <div className="blog_body">
              <div className="blog_item">
                <img src={Blog1} alt="b01" />
                <span>19 Jan 2022</span>
                <h6>
                  How one Webflow user grew his single person consultancy from
                  $0-100K in 14 months
                </h6>
                <p>
                  See how pivoting to Webflow changed one person’s sales
                  strategy and allowed him to attract
                </p>
                <div className="read_more">
                  <a href="#">
                    Read more <img src={ArrowDark} alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog_body">
              <div className="blog_item">
                <img src={Blog2} alt="b02" />
                <span>19 Jan 2022</span>
                <h6>
                  How one Webflow user grew his single person consultancy from
                  $0-100K in 14 months
                </h6>
                <p>
                  See how pivoting to Webflow changed one person’s sales
                  strategy and allowed him to attract
                </p>
                <div className="read_more">
                  <a href="#">
                    Read more <img src={ArrowDark} alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog_body">
              <div className="blog_item">
                <img src={Blog3} alt="b03" />
                <span>19 Jan 2022</span>
                <h6>
                  How one Webflow user grew his single person consultancy from
                  $0-100K in 14 months
                </h6>
                <p>
                  See how pivoting to Webflow changed one person’s sales
                  strategy and allowed him to attract
                </p>
                <div className="read_more">
                  <a href="#">
                    Read more <img src={ArrowDark} alt="Arrow" />
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

export default Blog;
