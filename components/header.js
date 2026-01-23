import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [toggle, setToggle] = useState(false);
  const [userDrop, setUserDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ToggleAction = () => setToggle(!toggle);
  const ToggleUserDrop = () => setUserDrop(!userDrop);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
    header 
    ${isHome ? "home-header" : "inner-header"} 
    ${scrolled ? "scrolled" : ""}
  `}
    >
      <div className="top_nav">
        <div className="contain">
          <p>
            Free shipping on orders over $50 • Easy returns within 7 days •
            Worldwide delivery
          </p>
        </div>
      </div>

      <div className="contain">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>

        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>

        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
            <li>
              <Link href="/compare">About Us</Link>
            </li>
            <li>
              <Link href="">How It Works</Link>
            </li>
            <li>
              <Link href="">Measurement Guide</Link>
            </li>
            <li>
              <Link href="">Gallery</Link>
            </li>
          </ul>

          <div className="bTn">
            <div className="col">
              <div className="search">
                <button>
                  <FaSearch />
                </button>
                <input type="text" placeholder="search" />
              </div>
            </div>
            <div className="col">
              <Link href="">
                <img src="/images/user.png" alt="" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <img src="/images/box.png" alt="" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="clearfix"></div>
      </div>
    </header>
  );
}
