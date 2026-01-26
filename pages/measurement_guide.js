import Cta from "@/components/cta";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
const MeasurementGuide = () => {
  return (
    <>
      <main>
        <section
          className="sub_banner"
          style={{ background: "url(images/measure_bg.png)" }}
        >
          <div className="contain">
            <div className="inner">
              <h2>Measurement Guide</h2>
              <p>
                Follow these simple steps to take accurate measurements for the
                perfect fit.
              </p>
            </div>
          </div>
        </section>
        <section className="need">
          <div className="contain">
            <div className="main_heading">
              <h2>No Experience Needed</h2>
              <p>
                Taking your measurements is easier than you think. You only need
                a measuring tape and a few minutes.
              </p>
              <p>
                Don’t worry — our garments are made with comfort in mind, and
                accuracy helps us tailor your piece perfectly.
              </p>
            </div>
          </div>
        </section>
        <section className="sec_start">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <h2>Before You Start</h2>

                  <ul>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Wear light, fitted clothing
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Stand straight and relaxed
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Use a soft measuring tape
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Measure snugly, not tightly
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      If unsure, measure twice
                    </li>
                  </ul>
                  <p>When in doubt, round up slightly for comfort.</p>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="images/start.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_start">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <h2>How to Enter Your Measurements</h2>

                  <ul>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Wear light, fitted clothing
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Stand straight and relaxed
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Use a soft measuring tape
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Measure snugly, not tightly
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      If unsure, measure twice
                    </li>
                  </ul>
                  <p>When in doubt, round up slightly for comfort.</p>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="images/start.png" alt="" />
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

export default MeasurementGuide;
