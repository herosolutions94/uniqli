import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <main>
        <section className="contact">
          <div className="contain">
            <div className="main_heading">
              <div className="headings">
                <h2>Contact Us</h2>
                <p>
                  Have a question or need help with your custom design? We’re
                  here to help. Whether you have questions about your design,
                  measurements, or an existing order, feel free to reach out.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <h3>We’d Love to Hear from You</h3>
                <p>
                  Whether you have a question, feedback, or just want to say
                  hello, our team is here to help. Fill out the form on the
                  right or use the contact details below to reach us.
                </p>
                <p>We usually respond within 24 hours.</p>
                <ul>
                  <li>
                    <div className="bold">
                      <img src="images/mail.svg" alt="" />
                      <h6>Email</h6>
                    </div>
                    <Link href="">support@uniqli.com</Link>
                  </li>
                  <li>
                    <div className="bold">
                      <img src="images/clock.svg" alt="" />
                      <h6>Support Hours</h6>
                    </div>
                    <Link href="">
                      Monday – Friday <br />
                      9:00 – 18:00 (CET)
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col2">
                <div className="form">
                  <form action="">
                    <h3>Send Us a Message</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="txtGrp">
                          <input
                            type="text"
                            className="input"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txtGrp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txtGrp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="txtGrp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            type="text"
                            className="input"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <textarea
                            className="input"
                            placeholder="Enter Your Message Here"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="Btn">
                          <button className="site_btn">Send message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <p>
                  <small>We’ll never share your contact details.</small>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="tailored">
          <div className="contain">
            <div className="main_heading">
              <div className="headings">
                <h2>Tailored Just for You</h2>
                <p>
                  Every piece is made with intention — from design to delivery.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/m-1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Custom Crafted</h4>

                    <p>
                      Each garment is made individually — no mass production, no
                      shortcuts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/m-2.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Premium Materials</h4>

                    <p>
                      We carefully select high-quality fabrics for comfort,
                      durability, and timeless style.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/m-3.png" alt="" />
                  </div>
                  <div className="content">
                    <h4>Ethical & Thoughtful</h4>

                    <p>
                      We focus on responsible production, fair practices, and
                      mindful craftsmanship.
                    </p>
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

export default Contact;
