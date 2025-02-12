import React, { useEffect, useState } from "react";
import "./Tools.css";
import images from "../../constants/images";
import { FaLaptopCode } from "react-icons/fa";
import {
  TbDeviceMobileCode,
  TbSettingsCode,
  TbAppsFilled,
} from "react-icons/tb";

const Tools = () => {
  const [faqData, setFaqData] = useState([
    {
      // id: 0,
      icon: <FaLaptopCode />,
      question: "Member-Centric",
      answer:
        "We prioritize our team and clients, fostering strong relationships and delivering solutions that meet their unique needs.",
    },
    {
      // id: 1,
      icon: <TbDeviceMobileCode />,
      question: "Transparent",
      answer:
        " Open communication and integrity guide everything we do, ensuring trust and clarity at every step.",
    },
    {
      icon: <TbSettingsCode />,
      question: "Persistent",
      answer:
        "We embrace challenges with determination, continuously striving for excellence and innovation.",
    },
    {
      icon: <TbAppsFilled />,
      question: "Better Together",
      answer:
        "Collaboration is at our core; we believe teamwork drives the best ideas and outcomes.",
    },
  ]);

  const [expanded, setExpanded] = useState(0);

  const toggleAccordion = (index) => {
    setExpanded((prevExpanded) => (prevExpanded === index ? null : index));
  };

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
    <div className="Tools_main">
      <div>
        <h1 className="heading_components">Our Values / Principles</h1>
      </div>
      <div className="Tools_sections_main">
        <div className="tools_img_main">
          <img
            src={images.tools}
            alt=""
            className={`tools_img ${
              scrollPosition > 1350 || scrollPosition > 2000
                ? "animate__animated animate__zoomIn"
                : ""
            }`}
          />
        </div>
        <div className="faq_services_main">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="faq_services_inner"
              onClick={() => {
                toggleAccordion(index);
              }}
            >
              <div className="faq-question">
                <div className="icon_main" style={{ marginBottom: 10 }}>
                  {item.icon}
                </div>
                <div className="" style={{ marginBottom: 10 }}>
                  <h3 className="question_h3">{item.question}</h3>
                </div>
              </div>
              <div
                className={`faq-answer ${
                  expanded === index
                    ? "visible"
                    : "hidden faq-answer_margin_not"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
