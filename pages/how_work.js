import Cta from "@/components/cta";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
const HowWork = () => {
  return (
    <>
      <main>
        <section
          className="sub_banner"
          style={{ background: "url(images/how_bg.png)" }}
        >
          <div className="contain">
            <div className="inner">
              <h2>How It Works</h2>
              <p>
                From your idea to a custom-made garment — simple, <br/>guided, and
                personal.
              </p>
            </div>
          </div>
        </section>
        <section className="how_work">
          <div className="contain">
            <div className="text">
              <p>
                Uniqli lets you create custom clothing without guesswork. You
                start with an idea — we guide you through design, fit, and
                production. <br/>No pressure. No obligation before approval.
              </p>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/work-1.png" alt="" />
                </div>
              </div>
              <div className="col2">
                <div className="inner">
                  <div className="title">
                    <h6>Start with Your Idea</h6>
                    <h2>
                      Upload or Create 
                      Your Design
                    </h2>
                    <p>
                      Upload a sketch, photo, or create a design using AI by
                      describing what you imagine.
                    </p>
                    <p>
                      You don’t need technical fashion knowledge — simple ideas
                      work perfectly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/work-2.png" alt="" />
                </div>
              </div>
              <div className="col2">
                <div className="inner">
                  <div className="title">
                    <h6>Review Design Suggestions</h6>
                    <h2>
                      Explore Design
                       Options
                    </h2>
                    <p>We generate design suggestions based on your input.</p>
                    <p>
                      You can review, refine, and choose the option that fits
                      your vision best.
                    </p>
                    <p>
                      Nothing is final yet — this step is all about exploration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/work-3.png" alt="" />
                </div>
              </div>
              <div className="col2">
                <div className="inner">
                  <div className="title">
                    <h6>Add Details & Measurements</h6>
                    <h2>Personalize the Fit</h2>
                    <p>
                      Choose colors, fabric preferences, and enter your
                      measurements using our simple measurement guide.
                    </p>
                    <p>
                      Our team reviews everything to ensure accuracy before
                      production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/work-4.png" alt="" />
                </div>
              </div>
              <div className="col2">
                <div className="inner">
                  <div className="title">
                    <h6>Get Your Price</h6>
                    <h2>
                      Receive a
                      Personalized Quote
                    </h2>
                    <p>
                      Once your design and details are complete, we prepare a
                      custom price for your garment.
                    </p>
                    <p>
                      You’ll receive the quote via email or WhatsApp — usually
                      within 24 hours.
                    </p>
                    <p>No commitment required.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/work-5.png" alt="" />
                </div>
              </div>
              <div className="col2">
                <div className="inner">
                  <div className="title">
                    <h6>Confirm & Pay</h6>
                    <h2>
                      Approve and Place
                      Your Order
                    </h2>
                    <p>
                      If you’re happy with the price, you can confirm your order
                      and complete payment securely.
                    </p>
                    <p>We’ll then start crafting your garment.</p>
                    <p>No commitment required.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/work-6.png" alt="" />
                </div>
              </div>
              <div className="col2">
                <div className="inner">
                  <div className="title">
                    <h6>Production & Delivery</h6>
                    <h2>Crafted Just for You</h2>
                    <p>
                      Your garment is made by skilled tailoring partners and
                      delivered directly to your address.
                    </p>
                    <p>You’ll receive updates throughout the process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="two_grids">
          <div className="contain">
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <h2>Why We Are Different</h2>
                  <ul>
                    <li>
                      <FaChevronRight />
                      Designed by you — not templates
                    </li>
                    <li>
                      <FaChevronRight />
                      Tailored to your measurements
                    </li>
                    <li>
                      <FaChevronRight />
                      Reviewed by experts before production
                    </li>
                    <li>
                      <FaChevronRight />
                      No obligation before approval
                    </li>
                    <li>
                      <FaChevronRight />
                      One-of-a-kind pieces
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <h2>What to Expect</h2>
                  <ul>
                    <li>
                      <FaChevronRight />
                      Design review & pricing: within 24 hours
                    </li>
                    <li>
                      <FaChevronRight />
                      Production time varies by garment
                    </li>
                    <li>
                      <FaChevronRight />
                      Each piece is made individually
                    </li>
                    <li>
                      <FaChevronRight />
                      We contact you if clarification is needed
                    </li>
                  </ul>
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

export default HowWork;
