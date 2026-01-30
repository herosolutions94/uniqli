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
                    <Link href="" className="edit">
                      <img src="images/pencil.png" />
                    </Link>
                  </div>
                  <p>You can change this image anytime before submitting.</p>
                </div>
              </div>
              <div className="col2">
                <form className="outfit-form">
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
                          <li>
                            <input
                              type="radio"
                              id="color-black"
                              name="color"
                              value="black"
                            />
                            <label
                              htmlFor="color-black"
                              className="black"
                            ></label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="color-pink"
                              name="color"
                              value="pink"
                            />
                            <label
                              htmlFor="color-pink"
                              className="pink"
                            ></label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="color-blue"
                              name="color"
                              value="blue"
                            />
                            <label
                              htmlFor="color-blue"
                              className="blue"
                            ></label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="color-green"
                              name="color"
                              value="green"
                            />
                            <label
                              htmlFor="color-green"
                              className="green"
                            ></label>
                          </li>
                           <li>
                            <input
                              type="radio"
                              id="color-mint"
                              name="color"
                              value="mint"
                            />
                            <label
                              htmlFor="color-mint"
                              className="mint"
                            ></label>
                          </li>
                           <li>
                            <input
                              type="radio"
                              id="color-yellow"
                              name="color"
                              value="yellow"
                            />
                            <label
                              htmlFor="color-yellow"
                              className="yellow"
                            ></label>
                          </li>
                           <li>
                            <input
                              type="radio"
                              id="color-mustard"
                              name="color"
                              value="mustard"
                            />
                            <label
                              htmlFor="color-mustard"
                              className="mustard"
                            ></label>
                          </li>
                           <li>
                            <input
                              type="radio"
                              id="color-orange"
                              name="color"
                              value="orange"
                            />
                            <label
                              htmlFor="color-orange"
                              className="orange"
                            ></label>
                          </li>
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
                          <li>
                            <input
                              type="radio"
                              id="fabric-silk"
                              name="fabric"
                              value="silk"
                            />
                            <label
                              htmlFor="fabric-silk"
                              className="silk"
                            ></label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="fabric-cotton"
                              name="fabric"
                              value="cotton"
                            />
                            <label
                              htmlFor="fabric-cotton"
                              className="cotton"
                            ></label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="fabric-linen"
                              name="fabric"
                              value="linen"
                            />
                            <label
                              htmlFor="fabric-linen"
                              className="linen"
                            ></label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="fabric-chiffon"
                              name="fabric"
                              value="chiffon"
                            />
                            <label
                              htmlFor="fabric-chiffon"
                              className="chiffon"
                            ></label>
                          </li>
                           <li>
                            <input
                              type="radio"
                              id="black1-chiffon"
                              name="black1"
                              value="black1"
                            />
                            <label
                              htmlFor="black1-chiffon"
                              className="black1"
                            ></label>
                          </li>
                           <li>
                            <input
                              type="radio"
                              id="black2-chiffon"
                              name="black2"
                              value="black2"
                            />
                            <label
                              htmlFor="black2-chiffon"
                              className="black2"
                            ></label>
                          </li>
                           <li>
                            <input
                              type="radio"
                              id="black3-chiffon"
                              name="black3"
                              value="black3"
                            />
                            <label
                              htmlFor="black3-chiffon"
                              className="black3"
                            ></label>
                          </li>
                        </ul>
                      </div>
                    </div>

                  
                    <div className="cols">
                      <div className="left_side">
                        <h6>
                          Description of your outfit <span>*</span>
                        </h6>
                        <p>
                          Tell us about your outfit. Style, length, fit,
                          sleeves, neckline, embroidery, etc.
                        </p>
                      </div>

                      <div className="right">
                        <textarea
                          className="input"
                          name="description"
                          required
                        ></textarea>
                      </div>
                    </div>

                 
                    <div className="cols">
                      <div className="left_side">
                        <h6>
                          Type <span>*</span>
                        </h6>
                        <p>
                          Choose the clothing type to show the correct
                          measurement fields.
                        </p>
                      </div>

                      <div className="right">
                        <div className="types">
                          <label className="type-item">
                            <input
                              type="radio"
                              name="type"
                              value="dress"
                              required
                            />
                            <span>
                              <img src="/images/u-1.png" />
                            </span>
                          </label>

                          <label className="type-item">
                            <input type="radio" name="type" value="gown" />
                            <span>
                              <img src="/images/u-2.png" />
                            </span>
                          </label>

                          <label className="type-item">
                            <input type="radio" name="type" value="lehenga" />
                            <span>
                              <img src="/images/u-3.png" />
                            </span>
                          </label>

                          <label className="type-item">
                            <input type="radio" name="type" value="saree" />
                            <span>
                              <img src="/images/u-4.png" />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
