import React, { useEffect, useState } from "react";
import "./ourmission.css";
import "animate.css";
import images from "../../constants/images";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
function OurMission() {
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
    <div className="container">
      <div className="imageSide">
        <img
          src={images.ourmissionSvg}
          className={`ourMissionSvg ${
            scrollPosition > 100 ? "animate__zoomIn animate__animated" : ""
          }`}
        />
      </div>
      <div className="contentSide">
        <div className="ourmissionheading">
          <h1 className="outmissiontxt">OUR MISSION</h1>
        </div>
        <p className="ourmissionpara">
          <span>
            <ImQuotesLeft color="#f69220" className="leftquot" size={50} />{" "}
            <br />
          </span>
          Creating sustainable applications to empower businesses and
          organizations, enhancing their efficiency while contributing to
          India's Digital Growth Story.
          <span>
            <ImQuotesRight color="#f69220" className="rightquot" size={50} />
          </span>
        </p>
      </div>
    </div>
  );
}

export default OurMission;
