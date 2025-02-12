import React, { useEffect, useState } from "react";
import "./ContactUsPage.css";
import { mobileValidate } from "../../utils/helpers";
import { Link } from "react-router-dom";
import {
  FaSquarePhone,
  FaSquareWhatsapp,
  FaLinkedin,
  FaAddressCard,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUsPage = () => {
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="ContactUsPage_main_heading">
        <h1 className="ContactUsPage_main_heading_inner">
          Why ain't you Get "APPLIFIED"!!
        </h1>
      </div>{" "}
      <div className="ContactUsPage_main">
        <div className="ContactUsPage_inner">
          <div className="ContactUsPage_form">
            <div className="">
              <h1>CONTACT US</h1>
            </div>
            <div>
              <form className="c_form">
                <h4 className="c-lbl">Name</h4>
                <input type="text" placeholder="" className="c-txt" />
                <h4 className="c-lbl">Number</h4>
                <input
                  type="text"
                  placeholder=""
                  name="field-name"
                  value={number}
                  maxLength={10}
                  className="c-txt"
                  //   onChange={(e) => {
                  //     if (mobileValidate(e.target.value)) {
                  //       setnumber(e.target.value);
                  //     }
                  //   }}
                />

                <h4 className="c-lbl">Email</h4>
                <input
                  type="text"
                  placeholder=""
                  value={email}
                  className="c-txt"
                />
                <h4 className="c-lbl">Subject</h4>
                <input
                  type="text"
                  placeholder=""
                  //   value={subject}
                  //   onChange={(e) => setsubject(e.target.value)}
                  className="c-txt"
                />
                <h4 className="c-lbl">Description</h4>
                <textarea
                  placeholder="Please leave message here..."
                  //   value={description}
                  className="c-msg-txt"
                  //   onChange={(e) => setdescription(e.target.value)}
                ></textarea>
              </form>
            </div>
            <div>
              <button className="button">SUBMIT</button>
            </div>
          </div>
          <div className="ContactUsPage_details">
            <div className="ContactUsPage_details_inner drop-in">
              <h1>REACHING TO US IS EASY...</h1>
            </div>
            <div className="ContactUsPage_details_inner drop-in-2">
              <div className="ContactUsPage_phoneno">
                <h4>PHONE</h4>
                <div className="react_icons_contactpg">
                  <FaSquarePhone />
                  <a href="tel:9099040407" className="link_decor">
                    +91 90990 40407
                  </a>
                </div>
              </div>
              <div className="ContactUsPage_email">
                <h4>EMAIL</h4>
                <div className="react_icons_contactpg">
                  <MdEmail />
                  <a href="mailto:info@applified.in" className="link_decor">
                    info@applified.in
                  </a>
                </div>
              </div>
              <div className="ContactUsPage_email">
                <h4>WHATSAPP</h4>
                <div className="react_icons_contactpg">
                  <FaSquareWhatsapp />
                  <Link
                    to="http://api.whatsapp.com/send?phone=9099040407&text=Let%27s%20Get%20in%20Touch"
                    className=""
                    style={{ textDecoration: "none", color: "black" }}>
                    +91 90990 40407
                  </Link>
                </div>
              </div>
              <div className="ContactUsPage_linkdin">
                <h4>LINKDIN</h4>
                <div className="react_icons_contactpg">
                  <FaLinkedin />
                  <Link
                    to="https://www.linkedin.com/in/kedar-dave-applified/"
                    style={{ textDecoration: "none", color: "black" }}>
                    https://www.linkedin.com/in/kedar-dave-applified
                  </Link>
                </div>
              </div>
              <div className="ContactUsPage_office">
                <h4>OFFICE</h4>
                <div
                  className="react_icons_contactpg"
                  style={{ alignItems: "start" }}>
                  <FaAddressCard />
                  301, Pride Square, JK Chowk,
                  <br /> Opp Pushkardham, University Road,
                  <br />
                  Rajkot, Gujarat, India
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="ContactUsPage_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14767.205165684476!2d70.7561212!3d22.2855158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbb81c917bb5%3A0x815d45b2c4636adc!2sApplified!5e0!3m2!1sen!2sin!4v1700463503767!5m2!1sen!2sin"
            width="90%"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            allowFullScreen
            className="ContactUsPage_map_inner"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
