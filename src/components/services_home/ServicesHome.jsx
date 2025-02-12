import React, { useEffect, useState } from "react";
import "./ServicesHome.css";
import images from "../../constants/images";

const ServicesHome = () => {
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
    <section className="ServicesHome_main_sec">
      <div className="ServicesHome_main">
        <div>
          <div>
            <h1 className="heading_components">Our Services</h1>
          </div>
          <p className="ServicesHome_para">
            Empower your business with our comprehensive IT services. We provide
            tailored solutions, expert support, and cutting-edge technology to
            drive your success.
          </p>
        </div>
        <div>
          <div className="services_main">
            <div className="services_main_inner">
              <img
                src={images.webhost}
                alt="webapps"
                className="sevices_icon"
              />
              <h3>WEB HOSTING SERVICES</h3>
              <p className="ServicesHome_innerpara">
                If you own a business, Web Hosting is a necessity. Get a custom
                made home for your website. We provide Shared, Wordpress, VPS,
                Dedicated Hostings, Domain & other Web -Hosting service
                solutions.
              </p>
            </div>
            <div className="services_main_inner">
              <img
                src={images.webdevelopement}
                alt="webapps"
                className="sevices_icon"
              />
              <h3>Web APP Development</h3>
              <p className="ServicesHome_innerpara">
                We specialize in designing and developing dynamic, scalable, and
                user-friendly web applications tailored to your business needs.
                Our services include creating intuitive user interfaces,
                integrating APIs, building secure backend systems, and
                optimizing performance to ensure seamless user experiences.
              </p>
            </div>
          </div>
          <div className="services_main">
            <div className="services_main_inner">
              <img src={images.mobile} alt="brand" className="sevices_icon" />
              <h3>Mobile APP Developement</h3>
              <p className="ServicesHome_innerpara">
                We develop high-performing, user-friendly mobile applications
                for both Android and iOS platforms. Our team specializes in
                creating custom mobile apps that align with your business goals,
                featuring intuitive designs, seamless functionality, and
                top-notch performance.
              </p>
            </div>
            <div className="services_main_inner">
              <img
                src={images.erp}
                alt="social media icon"
                className="sevices_icon"
              />
              <h3>ERP Solution</h3>
              <p className="ServicesHome_innerpara">
                Social Media presence is an essential part in Brand Building. We
                help you create a powerful profile to engage customers & boost
                your Brand while integrating all your pages at one place
              </p>
            </div>
          </div>
        </div>
        <img
          src={images.costeffectivesol}
          alt="costeffectivesol.png"
          className={`costeffectivesol ${
            scrollPosition > 1650 || scrollPosition > 2850
              ? "animate__animated animate__shakeY"
              : ""
          }`}
        />
      </div>
    </section>
  );
};

export default ServicesHome;
