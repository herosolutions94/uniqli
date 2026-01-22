import React from "react";
import Banner from "./homepage/banner";
import Grids from "./homepage/grids";
import ImageGrid from "./homepage/image_grid";
import Works from "./homepage/works";
import Cta from "@/components/cta";
import Measurements from "./homepage/measurements";
import Made from "./homepage/made";
import Testimonials from "@/components/testimonials";

const Index = () => {
  return (
    <>
      <Banner />
      <Grids />
      <section className="sec_about">
        <div className="contain">
          <div className="main_heading">
            <h2>About Uniqli</h2>
          </div>
          <div className="content">
            <div className="mini_title">
              <p>Uniqli was created for one purpose:</p>
            </div>
            <p className="up_space">
              to make custom fashion accessible, modern, and beautifully
              tailored.
            </p>

            <p>
              We work with skilled tailors, premium materials, and AI-assisted
              design tools to bring your ideas to life.Every piece is crafted
              individually — no mass production, no shortcuts, no guessing.Just
              your design, your fit, your style.
            </p>
          </div>
        </div>
      </section>
      <ImageGrid />
      <Works />
      <Measurements />
      <Made />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Index;
