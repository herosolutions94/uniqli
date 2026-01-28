import Cta from "@/components/cta";
import Link from "next/link";
import React from "react";

const Terms = () => {
  return (
    <main>
      <section className="terms">
        <div className="contain">
          <div className="main_heading">
            <h2>Terms & Conditions</h2>
            <p>
              Welcome to Uniqli! By using our website, services, or ordering
              custom designs, you agree to the following terms and conditions.
              Please read them carefully before using our platform.
            </p>
          </div>

          <div className="content">
            <div className="listing">
              <div className="cols">
                <h5>1. INTRODUCTION</h5>
                <p>
                  Uniqli provides custom fashion services, including
                  AI-generated designs, handcrafted garments, and tailor-made
                  outfits. These Terms & Conditions outline your rights and
                  responsibilities when interacting with our website, placing
                  orders, or using our services.
                </p>
              </div>

              <div className="cols">
                <h5>2. ORDERS & CUSTOM DESIGNS</h5>
                <ul>
                  <li>
                    All orders are for custom-made garments created from your
                    sketches, photos, or AI-generated ideas.
                  </li>
                  <li>
                    AI-generated design previews are for reference only; the
                    final product may vary slightly due to tailoring or material
                    differences.
                  </li>
                  <li>
                    By submitting a design, you confirm you have the right to
                    use any images or content uploaded.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>3. PAYMENT & PRICING</h5>
                <ul>
                  <li>
                    Prices listed on the website are in USD and may include
                    applicable taxes.
                  </li>
                  <li>
                    Payment must be completed at the time of placing the order.
                  </li>
                  <li>
                    Uniqli accepts major payment methods (credit/debit cards,
                    PayPal).
                  </li>
                  <li>
                    Once payment is made, your order will be processed for
                    production and cannot be canceled without our consent.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>4. SHIPPING & DELIVERY</h5>
                <ul>
                  <li>
                    We offer worldwide delivery. Shipping fees and times depend
                    on your location.
                  </li>
                  <li>Free shipping is available on orders over $50.</li>
                  <li>
                    Delivery estimates are approximate; Uniqli is not
                    responsible for delays caused by carriers or customs.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>5. RETURNS & REFUNDS</h5>
                <ul>
                  <li>
                    Custom garments cannot be returned unless there is a defect
                    or production error.
                  </li>
                  <li>
                    If your order has a defect, please contact us within 7 days
                    of delivery with images for evaluation.
                  </li>
                  <li>
                    Refunds or replacements are processed at Uniqli’s
                    discretion.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>6. INTELLECTUAL PROPERTY</h5>
                <ul>
                  <li>
                    All designs, including AI-generated previews, remain the
                    property of Uniqli and/or the designer unless explicitly
                    transferred.
                  </li>
                  <li>
                    You may use your purchased designs for personal use only.
                    Reproduction or resale without consent is prohibited.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>7. USER RESPONSIBILITIES</h5>
                <ul>
                  <li>
                    You are responsible for providing accurate measurements and
                    design details.
                  </li>
                  <li>
                    Ensure that uploaded images or content do not violate any
                    third-party rights.
                  </li>
                  <li>
                    Uniqli is not liable for errors caused by incorrect or
                    incomplete information provided by the user.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>8. LIMITATION OF LIABILITY</h5>
                <ul>
                  <li>
                    Uniqli is not liable for any indirect, incidental, or
                    consequential damages arising from the use of our website or
                    services.
                  </li>
                  <li>
                    We make reasonable efforts to ensure accurate previews and
                    quality tailoring, but exact outcomes may vary.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>9. CHANGES TO TERMS</h5>
                <ul>
                  <li>
                    Uniqli may update these Terms & Conditions from time to
                    time.
                  </li>
                  <li>
                    Changes will be posted on this page with the updated
                    effective date.
                  </li>
                  <li>
                    Continued use of our website or services constitutes
                    acceptance of any updates.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>10. CONTACT US</h5>
                <p>
                  For questions about these Terms & Conditions, please contact:
                </p>
                <p>
                  Email: <Link href="">support@uniqli.com</Link>
                </p>
                <p>
                  Phone: <Link href="">0664-457-42483</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
};

export default Terms;
