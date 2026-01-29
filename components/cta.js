import React from "react";
import Link from "next/link";
const Cta = () => {
  return (
    <>
      <section className="sec_cta">
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <div className="main_heading">
                <h2>Ready to Create Your Custom Outfit?</h2>
              </div>
              <p>
                Upload your sketch, photo, or generate your design with AI — and
                receive your personalized price within 24 hours.
              </p>
            </div>
            <div className="col2">
              <div className="btn1">
                <Link href="#" className="site_btn">
                  Start Your Custom Order
                </Link>
              </div>
              <div className="btn2">
                <Link href="#" className="site_btn blur_btn">
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
