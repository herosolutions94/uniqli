import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="contain">
          <div className="main_heading">
            <h2>What Our Customers Say</h2>
            <p>
              Our customers love the freedom to create outfits that truly match
              their style. From perfect fits to flawless craftsmanship, every
              review reflects real experiences and real confidence. See what
              people are saying about their Uniqli creations.
            </p>
          </div>
          <div className="item">
            <div className="inner">
              <ul className="list">
                <li>
                  <img src="images/banner_bg.png" alt="" />
                </li>
                <li>
                  <img src="images/t-1.jpg" alt="" />
                </li>
                <li>
                  <img src="images/testi-3.jpg" alt="" />
                </li>
              </ul>
              <div className="content">
                <p>
                  being able to upload my own sketch and fine-tune fabrics and
                  colors. made the result truly mine.
                </p>
                <div className="stars">
                  <ul>
                    <li>
                      <img src="images/star.svg" alt="" />
                    </li>
                    <li>
                      <img src="images/star.svg" alt="" />
                    </li>
                    <li>
                      <img src="images/star.svg" alt="" />
                    </li>
                    <li>
                      <img src="images/star.svg" alt="" />
                    </li>
                    <li>
                      <img src="images/star.svg" alt="" />
                    </li>
                  </ul>
                  <p>4,6 von 5 Sternen · basierend auf 17.000+ Bewertungen</p>
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
