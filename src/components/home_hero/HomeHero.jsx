import React, { useEffect, useState } from "react";
import "./HomeHero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

const HomeHero = () => {
  const scrollToBottom = () => {
    const element = document.getElementById("bottom-of-page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    // Track the button click event
    ReactGA.event({
      category: "Button", // Event category (e.g., 'Button')
      action: "Click", // Event action (e.g., 'Click')
      label: "Contact Us Button", // Event label (optional)
    });

    // Scroll to the bottom of the page
    scrollToBottom();
  };

  return (
    <>
      <div
        className={"home-hero-bg drop-in"}
        style={{
          backgroundSize: "cover",
          backgroundColor: "transparent",
        }}
      >
        <div className="HomeHero_main drop-in-2">
          <div className="heading_main_hero">
            <img
              src={images.newlogo}
              className="d-none d-lg-block"
              style={{ height: "100px", width: "100px", objectFit: "contain" }}
              alt="Logo"
            />
            <h1 className="heading_main_h1">
              Simplified Web & Mobile Applications for Business.
            </h1>
            <p className="heading_main_p">
              Streamline your digital presence with our seamless web and mobile
              app development solutions. We craft captivating user experiences
              that drive business growth.
            </p>
            <div className="hero_btn_main">
              <Link>
                <button className="button" onClick={handleButtonClick}>
                  Contact us
                </button>
              </Link>
            </div>
          </div>
          <div className="women_hero_main">
            <img src={images.web_elements} alt="" className="women_hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
