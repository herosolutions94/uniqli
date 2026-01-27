import Cta from "@/components/cta";
import Link from "next/link";
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
        <section className="sec_how">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <ul>
                    <li className="head">
                      <p>Measurement</p>
                      <p>How to Measure</p>
                    </li>
                    <li>
                      <p>Chest</p>
                      <p>
                        Measure around the fullest part of your chest, keeping
                        the tape level.{" "}
                      </p>
                    </li>
                    <li>
                      <p>Waist</p>
                      <p>
                        Measure around your natural waistline — usually the
                        narrowest part.{" "}
                      </p>
                    </li>
                    <li>
                      <p>Shoulder Width</p>
                      <p>
                        {" "}
                        Measure from the edge of one shoulder to the other
                        across your back.{" "}
                      </p>
                    </li>
                    <li>
                      <p>Sleeve Length</p>
                      <p>Measure from the shoulder seam down to the wrist. </p>
                    </li>
                    <li>
                      <p>Jacket / Shirt Length</p>
                      <p>
                        Measure from the top of the shoulder down to your
                        desired length.{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col2">
                <div className="main_heading">
                  <h2>Upper Body Measurements</h2>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <ul>
                    <li className="head">
                      <p>Measurement</p>
                      <p>How to Measure</p>
                    </li>
                    <li>
                      <p>Hip</p>
                      <p>Measure around the fullest part of your hips.</p>
                    </li>
                    <li>
                      <p>Inseam</p>
                      <p>
                        Measure from the top of the inner thigh down to the
                        ankle.
                      </p>
                    </li>
                    <li>
                      <p>Outseam</p>
                      <p>Measure from the waist down to the ankle.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col2">
                <div className="main_heading">
                  <h2>Lower Body Measurements</h2>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="inner">
                  <ul>
                    <li className="head">
                      <p>Measurement</p>
                      <p>How to Measure</p>
                    </li>
                    <li>
                      <p>Bust</p>
                      <p>Measure around the fullest part of the bust.</p>
                    </li>
                    <li>
                      <p>Waist</p>
                      <p>Measure at the natural waistline.</p>
                    </li>
                    <li>
                      <p>Hip</p>
                      <p>Measure around the fullest part of the hips.</p>
                    </li>
                    <li>
                      <p>Dress Length</p>
                      <p>
                        Measure from shoulder (or waist) down to the desired
                        length.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col2">
                <div className="main_heading">
                  <h2>
                    Dress <br />
                    Measurements
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_enter">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/m-2.png" alt="" />
                </div>
              </div>
              <div className="col2 ">
                <div className="inner">
                  <div className="main_heading">
                    <h2>How to Enter Your Measurements</h2>
                  </div>

                  <ul>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Enter measurements in centimeters
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Use whole numbers if possible
                    </li>
                    <li>
                      {" "}
                      <FaChevronRight />
                      Double-check before submitting
                    </li>
                  </ul>
                  <p>Your measurements are saved only for your order.</p>
                  <div className="cta">
                    <Link href="" className="site_btn">
                      Contact Us
                    </Link>
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

export default MeasurementGuide;
