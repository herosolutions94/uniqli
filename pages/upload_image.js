import Link from "next/link";
import React from "react";

export default function upload_image() {
  return (
    <>
      <main>
        <section className="upload_image">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="cm_block">
                  <div className="image">
                    <img src="images/lr.png" alt="" />
                  </div>
                  <p>You can change this image anytime before submitting.</p>
                </div>
              </div>
              <div className="col2">
                <div className="grids">
                  <div className="cols">
                    <div className="left_side">
                      <h6>
                        Colour <span>(Optional)</span>
                      </h6>
                      <p>Example: Beige, Black, Ivory, Pastel Pink</p>
                    </div>
                    <div className="right">
                      <ul className="circle">
                        <li className="black"></li>
                        <li className="pinl"></li>
                        <li className="blue"></li>
                        <li className="green"></li>
                        <li className="purple"></li>
                        <li className="orange"></li>
                        <li className="yellow"></li>
                      </ul>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="left_side">
                      <h6>
                        Fabric <span>(Optional)</span>
                      </h6>
                      <p>Example: Silk, Cotton, Linen, Chiffon</p>
                    </div>
                    <div className="right">
                      <ul className="circle">
                        <li className="black"></li>
                        <li className="pinl"></li>
                        <li className="blue"></li>
                        <li className="green"></li>
                        <li className="purple"></li>
                        <li className="orange"></li>
                        <li className="yellow"></li>
                        <li className="orange2"></li>
                        <li className="orange3"></li>
                        <li className="orange4"></li>
                      </ul>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="left_side">
                      <h6>
                        Description of your outfit <span>*</span>
                      </h6>
                      <p>
                        Tell us about your outfit. Style, length, fit, sleeves,
                        neckline, embroidery, etc.
                      </p>
                    </div>
                    <div className="right">
                      <textarea className="input"></textarea>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="left_side">
                      <h6>
                        Type <span>* </span>
                      </h6>
                      <p>
                        Choose the clothing type to show the correct measurement
                        fields.
                      </p>
                    </div>
                    <div className="right">
                      <div className="types">
                        <div className="img">
                          <img src="images/u-1.png" />
                        </div>
                        <div className="img">
                          <img src="images/u-2.png" />
                        </div>
                        <div className="img">
                          <img src="images/u-3.png" />
                        </div>
                        <div className="img">
                          <img src="images/u-4.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
