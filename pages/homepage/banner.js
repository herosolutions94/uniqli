import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="contain">
          <div className="content">
            <h1>
              Start Creating <br />
              Your Custom Outfit
            </h1>
            <p>
              Upload your inspiration or describe your idea — we’ll help you
              turn it into a perfectly tailored design.
            </p>
            <ul className="bTn">
              <li>
                <Link href="" className="site_btn">
                  Upload Inspiration
                </Link>
              </li>
              <li>
                <Link href="" className="site_btn">
                  Write Your Vision
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
