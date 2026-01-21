import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Made = () => {
  function NextArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="slick-arrow custom-next"
        aria-label="Next slide"
      >
        <FaChevronRight size={18} />
      </button>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="slick-arrow custom-prev"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={18} />
      </button>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <>
      <section className="sec_made">
        <div className="contain">
          <div className="main_heading">
            <h2>Created by Our Customers, Made by Us</h2>
            <p>
              See what others have designed — sketches, photos, and AI ideas
              turned into beautiful outfits.
            </p>
          </div>
          <Slider {...settings}>
            <div className="image">
              <img src="images/made-1.png" alt="" />
            </div>
            <div className="image">
              <img src="images/made-1.png" alt="" />
            </div>
            <div className="image">
              <img src="images/made-1.png" alt="" />
            </div>
            <div className="image">
              <img src="images/made-1.png" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Made;
