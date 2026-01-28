import Cta from "@/components/cta";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <main>
      <section className="terms">
        <div className="contain">
          <div className="main_heading">
            <h2>Privacy Policy</h2>
            <p>
              Your privacy matters to us. This policy explains how Uniqli
              collects, uses, and protects your information.
            </p>
          </div>

          <div className="content">
            <div className="listing">
              <div className="cols">
                <h5>1. INTRODUCTION</h5>
                <p>
                  Uniqli values your privacy and is committed to protecting your
                  personal information. This Privacy Policy outlines how we
                  collect, use, and safeguard your data when you use our website
                  and services.
                </p>
              </div>

              <div className="cols">
                <h5>2. INFORMATION WE COLLECT</h5>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>
                    Personal details such as name, email address, phone number,
                    and shipping address
                  </li>
                  <li>Design details, images, or inspirations you upload</li>
                  <li>
                    Measurement information provided for tailoring purposes
                  </li>
                  <li>Payment and order-related information</li>
                </ul>
              </div>

              <div className="cols">
                <h5>3. HOW WE USE YOUR INFORMATION</h5>
                <p>Your information is used to:</p>
                <ul>
                  <li>Create and deliver custom outfits</li>
                  <li>Generate AI-based design previews</li>
                  <li>
                    Communicate with you regarding orders, measurements, and
                    updates
                  </li>
                  <li>Improve our services and website experience</li>
                </ul>
              </div>

              <div className="cols">
                <h5>4. AI-GENERATED DESIGNS</h5>
                <p>
                  When you use our AI features, your prompts and uploaded
                  content may be processed to generate design previews. These
                  designs are used solely to assist in creating your custom
                  outfit and are not shared publicly without your consent.
                </p>
              </div>

              <div className="cols">
                <h5>5. SHARING OF INFORMATION</h5>
                <p>
                  We do not sell your personal information. Your data may be
                  shared only with:
                </p>
                <ul>
                  <li>Our internal design and tailoring team</li>
                  <li>
                    Trusted service providers involved in order fulfillment
                  </li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </div>

              <div className="cols">
                <h5>6. DATA SECURITY</h5>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  loss, or misuse.
                </p>
              </div>

              <div className="cols">
                <h5>7. COOKIES</h5>
                <p>
                  Our website uses cookies to enhance your browsing experience,
                  analyze site traffic, and personalize content. You may choose
                  to disable cookies through your browser settings.
                </p>
              </div>

              <div className="cols">
                <h5>8. YOUR RIGHTS</h5>
                <p>You have the right to:</p>
                <ul>
                  <li>Access or update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>

              <div className="cols">
                <h5>9. THIRD-PARTY LINKS</h5>
                <p>
                  Our website may contain links to third-party sites. We are not
                  responsible for the privacy practices of these external
                  websites.
                </p>
              </div>

              <div className="cols">
                <h5>10. POLICY UPDATES</h5>
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page.
                </p>
              </div>

              <div className="cols">
                <h5>11. CONTACT US</h5>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p>
                  {" "}
                  Email: <Link href="">support@uniqli.com</Link>
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

export default PrivacyPolicy;
