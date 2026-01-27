import Cta from "@/components/cta";
import Link from "next/link";
import { useState } from "react";
const Gallery = () => {
  const [active, setActive] = useState("All");
  return (
    <>
      <main>
        <section
          className="sub_banner"
          style={{ background: "url(images/gallery.png)" }}
        >
          <div className="contain">
            <div className="inner">
              <h2>Our Creations</h2>
              <p>Designed by our customers. Crafted by our artisans.</p>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="contain">
            <div className="main_heading">
              <div className="headings">
                <h2>Bespoke from head to toe</h2>
                <p>
                  Uniqli was founded to redefine custom fashion by combining
                  human craftsmanship with modern technology. We empower
                  customers to transform inspiration—whether a sketch, photo, or
                  AI-generated concept—into beautifully tailored garments.
                </p>
              </div>
            </div>
            <div className="tabs">
              <button
                onClick={() => setActive("All")}
                className={active === "All" ? "tab active" : "tab"}
              >
                All
              </button>
              <button
                onClick={() => setActive("Sketched")}
                className={active === "Sketched" ? "tab active" : "tab"}
              >
                Sketched by You
              </button>
              <button
                onClick={() => setActive("Seen")}
                className={active === "Seen" ? "tab active" : "tab"}
              >
                Seen & Snapped
              </button>
              <button
                onClick={() => setActive("AI")}
                className={active === "AI" ? "tab active" : "tab"}
              >
                Dream with AI
              </button>
              <button
                onClick={() => setActive("Dresses")}
                className={active === "Dresses" ? "tab active" : "tab"}
              >
                Dresses
              </button>
              <button
                onClick={() => setActive("Suits")}
                className={active === "Suits" ? "tab active" : "tab"}
              >
                Suits
              </button>
              <button
                onClick={() => setActive("Casual")}
                className={active === "Casual" ? "tab active" : "tab"}
              >
                Casual
              </button>
              <button
                onClick={() => setActive("Formal")}
                className={active === "Formal" ? "tab active" : "tab"}
              >
                Formal
              </button>
            </div>
            {active === "All" && (
              <div className="grid">
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-1.jpg" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-2.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/r-5.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-4.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-5.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-6.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-7.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/banner_bg.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-9.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-10.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-11.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/r-6.png" alt="" />
                  </div>
                </div>
              </div>
            )}

            {active === "Sketched" && (
              <div className="grid">
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-1.jpg" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-2.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/r-5.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-4.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-5.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-6.png" alt="" />
                  </div>
                </div>
              </div>
            )}

            {active === "Seen" && (
              <div className="grid">
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-10.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-11.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/r-6.png" alt="" />
                  </div>
                </div>
              </div>
            )}

            {active === "AI" && (
              <div className="grid">
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-2.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/r-5.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-4.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  {" "}
                  <div className="image">
                    <img src="images/testi-5.png" alt="" />
                  </div>
                </div>
              </div>
            )}

            {active === "Dresses" && (
              <div className="grid">
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-10.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-11.png" alt="" />
                  </div>
                </div>
              </div>
            )}

            {active === "Suits" && (
              <div className="grid">
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-6.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-7.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/banner_bg.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-9.png" alt="" />
                  </div>
                </div>
              </div>
            )}

            {active === "Casual" && (
              <div className="grid">
                <div className="cols">
                  <div className="image">
                    <img src="images/banner_bg.png" alt="" />
                  </div>
                </div>
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-9.png" alt="" />
                  </div>
                </div>
              </div>
            )}

            {active === "Formal" && (
              <div className="grid">
                <div className="cols">
                  <div className="image">
                    <img src="images/testi-9.png" alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="sec_enter">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/last.png" alt="" />
                </div>
              </div>
              <div className="col2 ">
                <div className="inner">
                  <div className="main_heading">
                    <h2>Looks that last</h2>
                  </div>
                  <p>
                    You’re all about the finer details, and so are we. From
                    fabrics tested for endurance to our meticulous tailoring
                    standards, we deliver enduring style. Sample any of our 150+
                    fabrics to see for yourself—your wardrobe deserves nothing
                    less than timeless.
                  </p>
                  <p>
                    Your design is never automated or mass-produced. Every
                    garment is thoughtfully crafted using premium materials,
                    precise techniques, and human expertise — ensuring a result
                    that feels personal, intentional, and made just for you.
                  </p>
                  <div className="cta">
                    <Link href="" className="site_btn">
                      Contact Us
                    </Link>
                  </div>
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

export default Gallery;
