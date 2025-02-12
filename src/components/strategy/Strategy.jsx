import React, { useEffect, useState } from "react";
import "./Strategy.css";
import images from "../../constants/images";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { SiOdoo } from "react-icons/si";

const Strategy = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // console.log(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Strategy_main">
      <div>
        <h1 className="heading_components">Technologies We Offer</h1>
        <p className="techpara">
          At AppliFied, we empower businesses to thrive in the digital era by
          delivering advanced technology solutions tailored to their unique
          needs. Specializing in custom software and intuitive mobile and web
          applications, ranging from small invoice software to large-scale ERP
          systems. We provide innovative services across diverse domains. From
          conceptualization to deployment and ongoing support, we excel at
          solving complex challenges with the latest technologies. Discover our
          expertise in the following areas
        </p>
      </div>

      <div className="Strategy_content_main">
        {/* <h1 className="Strategy_content_no">01</h1> */}
        <div className="Strategy_content_inner">
          {/* <img
            src={images.empathy_icon}
            alt="EMPATHIZE WITH THE CUSTOMER"
            className="empathy_icon"
          /> */}
          <FaReact
            className={`empathy_icon ${
              scrollPosition > 1050 ? "animate__animated animate__rotateIn" : ""
            }`}
            color="#58C4DC"
          />

          <h2 className="heading_inner_strategy">React JS</h2>
          {/* <p className="para_inner_strategy">
            We understand your needs, and we're here to make your experience
            exceptional. Your satisfaction is our priority, and we're committed
            to delivering the best for you.
          </p> */}
        </div>
        <div className="Strategy_content_inner">
          {/* <h1 className="Strategy_content_no">02</h1> */}
          {/* <img
            src={images.probem_icon}
            alt="DEFINE PROBLEM"
            className="empathy_icon"
          /> */}
          {/* <TbBrandReactNative
            className={`empathy_icon ${
              scrollPosition > 1050 ? "animate__animated animate__rotateIn" : ""
            }`}
            color="#55BCD3"
          /> */}
          <img
            src={images.native}
            className={`empathy_icon ${
              scrollPosition > 1050 ? "animate__animated animate__rotateIn" : ""
            }`}
          />
          <h2 className="heading_inner_strategy">React Native</h2>
          {/* <p className="para_inner_strategy">
            Defining the problem is our first step. We analyze and pinpoint the
            challenge, providing clarity for effective solutions that meet your
            specific needs.
          </p> */}
        </div>
        <div className="Strategy_content_inner">
          {/* <h1 className="Strategy_content_no">03</h1> */}

          {/* <img
            src={images.solution}
            alt="IDEATE SOLUTIONS"
            className="empathy_icon"
          /> */}
          <FaLaravel
            className={`empathy_icon ${
              scrollPosition > 1050 ? "animate__animated animate__jello" : ""
            }`}
            color="#F05340"
          />

          <h2 className="heading_inner_strategy">Laravel</h2>
          {/* <p className="para_inner_strategy">
            Inspired by your unique challenges, we ideate innovative solutions.
            Our creative minds explore possibilities to design custom strategies
            that drive success for your goals.
          </p> */}
        </div>
        <div className="Strategy_content_inner">
          {/* <h1 className="Strategy_content_no">04</h1> */}
          <img
            src={images.odoo}
            alt="odoo"
            className={`empathy_icon ${
              scrollPosition > 1050 ? "animate__animated animate__jello" : ""
            }`}
          />

          <h2 className="heading_inner_strategy">Odoo</h2>
          {/* <p className="para_inner_strategy">
            We believe in trials and rigorous testing. Before implementation, we
            validate our solutions, ensuring they perform optimally and exceed
            expectations for your peace of mind.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Strategy;
