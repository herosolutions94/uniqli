import Cta from "@/components/cta";
import Link from "next/link";
import React from "react";

const Imprint = () => {
  return (
    <main>
      <section className="terms">
        <div className="contain">
          <div className="main_heading">
            <h2>Imprint</h2>
            <p>Complete company and contact information for Uniqli</p>
          </div>

          <div className="content">
            <div className="listing">
              <div className="cols">
                <h5>COMPANY INFORMATION</h5>
                <ul>
                  <li>
                    <strong>Company Name:</strong> Uniqli Inc.
                  </li>
                  <li>
                    <strong>Legal Form:</strong> Private Limited Company (or
                    your legal structure)
                  </li>
                  <li>
                    <strong>Registered Office:</strong> 4201 H Street,
                    Sacramento, CA 95819
                  </li>
                  <li>
                    <strong>Registration Number:</strong> 0664-457-42483
                  </li>
                  <li>
                    <strong>Tax Number:</strong> 83937383
                  </li>
                  <li>
                    <strong>CEO:</strong> Hurry Bone
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>CONTACT INFORMATION</h5>
                <ul>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <Link href="tel:066445742483">0664-457-42483</Link>
                  </li>
                  <li>
                    <strong>Business Hours:</strong> Daily, 6 AM – 8 PM
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <Link href="mailto:uniqli@info.com">uniqli@info.com</Link>
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>DISCLAIMER</h5>
                <p>
                  The information provided on this website is for general
                  purposes only.
                </p>
                <ul>
                  <li>
                    Uniqli makes no warranties regarding completeness, accuracy,
                    or reliability of the information.
                  </li>
                  <li>
                    We are not liable for damages resulting from the use of this
                    website.
                  </li>
                </ul>
              </div>

              <div className="cols">
                <h5>EXTERNAL LINKS</h5>
                <p>
                  Our website may contain links to third-party websites.Uniqli
                  is not responsible for the content or privacy practices of
                  external sites.
                </p>
              </div>

              <div className="cols">
                <h5>COPYRIGHT &amp; TRADEMARKS</h5>
                <ul>
                  <li>
                    All content on this website, including designs, images,
                    text, and graphics, is © 2025 Uniqli.
                  </li>
                  <li>
                    Unauthorized use, reproduction, or distribution is
                    prohibited.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
};

export default Imprint;
