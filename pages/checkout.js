import Link from "next/link";
import React, { useState } from "react";


const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <>
      <main>
        <section className="sec_checkout">
          <div className="contain">
            <div className="main_heading">
              <h2>Checkout</h2>
              <p>Review your custom order and complete payment securely.</p>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="form">
                  <div className="form">
                    <form>
                      {/* ================= Shipping Address ================= */}
                      <div className="block">
                        <h3>Shipping Address</h3>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                First Name <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Last Name <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Email{" "}
                                <span className="asteric"> (optional)</span>
                              </label>
                              <input type="email" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Phone Number <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="txtGrp">
                              <label>
                                Street Address{" "}
                                <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="txtGrp">
                              <label>
                                Apartment / Unit
                                <span className="asteric"> (optional)</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                City <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Postal Code <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Country <span className="asteric">*</span>
                              </label>
                              <select className="input">
                                <option value="">Select Country</option>
                                <option>Pakistan</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <label className="checkbox">
                              <input type="checkbox" /> Billing address same as
                              shipping
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* ================= Billing Address ================= */}
                      <div className="block">
                        <h3>Billing Address</h3>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                First Name <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Last Name <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>Email</label>
                              <input type="email" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Phone Number <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="txtGrp">
                              <label>
                                Street Address{" "}
                                <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="txtGrp">
                              <label>Apartment / Unit</label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                City <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Postal Code <span className="asteric">*</span>
                              </label>
                              <input type="text" className="input" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="txtGrp">
                              <label>
                                Country <span className="asteric">*</span>
                              </label>
                              <select className="input">
                                <option value="">Select Country</option>
                                <option>Pakistan</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ================= Payment ================= */}

                      <div className="checkout-form block">
                        <h3>Payment Method</h3>

                        {/* Credit Card Option */}
                        <div className="checkout inner_bulk">
                          <div className="head_">
                            <div className="checkbox">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="credit-card"
                                  checked={paymentMethod === "card"}
  onChange={() => setPaymentMethod("card")}
                              />
                              <label
                                htmlFor="credit-card"
                                className="head_card"
                              >
                                <div className="head_pay">
                                  <h4>Pay with Credit/Debit Card</h4>
                                  <div className="images flex">
                                    <img src="/images/card1.svg" alt="Card 1" />
                                    <img src="/images/card2.svg" alt="Card 2" />
                                    <img src="/images/card3.svg" alt="Card 3" />
                                  </div>
                                </div>
                                <p>Fast, secure payments via Stripe.</p>
                              </label>
                            </div>
                          </div>

                          {/* Card Details */}
                         {paymentMethod === "card" && (
  <div className="row margin-it">
    <div className="col-md-6">
      <div className="txtGrp">
        <input
          type="text"
          className="input"
          placeholder="Card Number"
        />
      </div>
    </div>

    <div className="col-md-6">
      <div className="txtGrp">
        <input
          type="text"
          className="input"
          placeholder="Card holder name"
        />
      </div>
    </div>

    <div className="col-md-6">
      <div className="txtGrp">
        <input
          type="text"
          className="input"
          placeholder="Expiry Date (MM/YY)"
        />
      </div>
    </div>

    <div className="col-md-6">
      <div className="txtGrp">
        <input
          type="text"
          className="input"
          placeholder="CVC"
        />
      </div>
    </div>
  </div>
)}

                        </div>
                        {/* PayPal Option */}
                        <div className="checkout inner_bulk">
                          <div className="head_">
                            <div className="checkbox">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paypal"
                                  checked={paymentMethod === "paypal"}
  onChange={() => setPaymentMethod("paypal")}
                              />
                              <label htmlFor="paypal">
                                <div className="head_pay">
                                  <h4>PayPal</h4>
                                  <div className="images paypal">
                                    <img src="/images/card4.svg" alt="PayPal" />
                                  </div>
                                </div>
                                <p>
                                  Securely Pay with Your Card – Effortless
                                  Transactions Await!
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Saved Card Option */}
                        <div className="checkout inner_bulk">
                          <div className="head_">
                            <div className="checkbox">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="saved-card"
                                checked={paymentMethod === "bank"}
  onChange={() => setPaymentMethod("bank")}
                              />
                              <label htmlFor="saved-card" className="head_card">
                                <div className="head_pay">
                                  <h4>Manual Bank Transfer</h4>
                                  <div className="images flex">
                                    <img src="/images/card5.svg" alt="Card 1" />
                                  </div>
                                </div>
                                <p>Transfer the amount manually.</p>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ================= Confirm ================= */}
                      <div className="confirm">
                        <div className="row">
                          <div className="col-md-12">
                            <label>
                              <input type="checkbox" /> I confirm that my
                              measurements are correct
                            </label>
                          </div>

                          <div className="col-md-12">
                            <label>
                              <input type="checkbox" /> I agree to{" "}
                              <Link href="">Terms & Conditions</Link> and
                              <Link href="">Privacy Policy</Link>
                            </label>
                          </div>

                          <div className="col-md-12">
                            <label>
                              <input type="checkbox" /> I have read the Imprint
                            </label>
                          </div>

                          <div className="col-md-12">
                            <div className="Btn">
                              <button className="site_btn">Pay Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col2">
                <h3>Order Summary</h3>
                <div className="cm_block">
                  <div className="image">
                    <img src="images/r-5.png" alt="" />
                    <div className="tag">
                      <p>Based on Your Sketch</p>
                    </div>
                  </div>
                  <ul className="text">
                    <li>
                      {" "}
                      <h5>Description</h5>
                      <p>
                        Long beige dress with loose sleeves and minimal
                        embroidery.
                      </p>
                    </li>
                    <li>
                      {" "}
                      <h5>Color:</h5>
                      <p>Beige</p>
                    </li>
                  </ul>
                </div>
                <div className="cols">
                  <h4>Measurements Summary</h4>
                  <p>Measurements provided and confirmed.</p>
                  <Link href="">View measurements</Link>
                </div>
                <div className="cols">
                  <h4>Production Details</h4>
                  <ul>
                    <li>Handmade, made to order</li>
                    <li>Estimated production time (e.g. 7–14 days)</li>
                    <li>Free standard shipping over €150 (if applicable)</li>
                  </ul>
                </div>
                <div className="cols">
                  <h4>Payment Info</h4>
                  <div className="Blk">
                    <h6>Custom tailoring</h6>
                    <p>€XXX</p>
                  </div>
                  <div className="Blk">
                    <h6>Fabric & materials</h6>
                    <p>€XXX</p>
                  </div>
                  <div className="Blk">
                    <h6>Design processing</h6>
                    <p>€XXX</p>
                  </div>
                  <div className="Blk">
                    <h6>Shipping</h6>
                    <p>€XXX</p>
                  </div>
                  <div className="Blk colored">
                    <h6>Total Pay</h6>
                    <p>€XXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
