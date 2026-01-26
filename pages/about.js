import Cta from "@/components/cta";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <main>
        <section className="sub_banner">
          <div className="contain">
            <div className="inner">
              <h2>About Uniqli</h2>
              <p>Where your ideas meet expert craftsmanship.</p>
            </div>
          </div>
        </section>
        <section className="about sec_choose">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <h2>Why Choose Uniqli</h2>
                  <p>
                    Uniqli gives you complete control over your style — from the
                    first design idea to the final tailored piece. Every outfit
                    is made to your exact measurements,{" "}
                  </p>
                  <ul>
                    <li>
                      <h5>Perfect Fit, No Guessing</h5>
                      <p>Tailored to your exact measurements.</p>
                    </li>
                    <li>
                      <h5>One-of-a-Kind Fashion</h5>
                      <p>You create it. We make it real.</p>
                    </li>
                    <li>
                      <h5>Quality Fabrics & Skilled Tailors</h5>
                      <p>Professional craftsmanship for every piece.</p>
                    </li>
                    <li>
                      <h5>Fast Price Determination</h5>
                      <p>
                        Submit your idea and receive your quote within 24 hours.
                      </p>
                    </li>
                    <li>
                      <h5>Secure & Transparent</h5>
                      <p>
                        Clear pricing, no surprises, and free standard shipping
                        above €150.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="images/about1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about sec_vision">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <h2>Our Vision</h2>
                  <p>
                    Every great outfit begins with an idea — and at Uniqi, your
                    vision leads the way. Whether you upload an inspiration
                    image, share a hand-drawn sketch, or describe your dream
                    outfit in words, we transform your imagination into a clear
                    design direction.
                  </p>
                  <p>
                    You can also explore our AI-assisted design experience to
                    generate new concepts, experiment with styles, silhouettes,
                    fabrics, and colors, and refine your look before production
                    begins. Our goal is to give you creative freedom without
                    complexity.
                  </p>
                  <div className="cta">
                    <Link href="" className="site_btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="images/about2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about tail_sec">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <h2>Tailored Just for You</h2>
                  <p>
                    We believe great fashion starts with a perfect fit. That’s
                    why every Uniqi piece is tailored individually, based on
                    your personal measurements and design preferences.
                  </p>
                  <p>
                    From structure to flow, every detail is adjusted to
                    complement your body — delivering a garment that feels
                    effortless, refined, and truly yours.
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Individually tailored garments
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Precision fitting techniques
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Designed to move with you
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="images/about3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about sec_perfect">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <h2>Perfect fit garments, to your specifications</h2>
                  <p>
                    From fabrics and buttons to pocket styles and lining colors,
                    personalize your handcrafted look. Take control and feel
                    confident with our Perfect Fit Guarantee.
                  </p>
                  <div className="cta">
                    <Link href="" className="siteBtn">
                      Learn More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="images/about4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work_grids">
          <div className="contain">
            <div className="main_heading">
              <h2>What Makes Uniqli Different</h2>
            </div>
            <div className="text">
              <p>
                Uniqli makes custom fashion simple: share your design idea
                through a sketch, photo, or AI-generated concept, and our team
                reviews it to prepare an accurate quote.
              </p>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/wd-1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Designed by You</h4>
                    <p>
                      You don’t choose from templates. You create your own
                      design — we help refine and craft it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/wd-2.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Perfect Fit, No Guessing</h4>
                    <p>
                      Every garment is tailored using your measurements,
                      ensuring comfort and confidence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/wd-3.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Crafted by Experts</h4>
                    <p>
                      We work with skilled tailoring partners who focus on
                      quality, detail, and precision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/wd-4.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>AI-Assisted Creativity</h4>
                    <p>
                      Our AI tools help transform ideas into design concepts —
                      faster and smarter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </main>
    </>
  );
};

export default About;
