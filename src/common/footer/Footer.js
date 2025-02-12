import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import images from "../../constants/images";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [comment, setComment] = useState("");

  return (
    <section className="Footer_main_upper" id="bottom-of-page">
      <div className="Footer_main">
        <div className="links_sec_footer">
          {/* <h3>APPLIFIED</h3> */}
          <img src={images.newlogo} alt="" className="logo_nav" />

          {/* <div className="links_sec_footer_inner">
            <Link to="/" className="link_decor">
              <h4 className="footer_link_color">Home</h4>
            </Link>
            <Link to="/Products" className="link_decor">
              <h4 className="footer_link_color">Products</h4>
            </Link>
            <Link to="/Portfolio" className="link_decor">
              <h4 className="footer_link_color">Portfolio</h4>
            </Link>

            <Link to="contact" className="link_decor">
              <h4 className="footer_link_color">Contact us</h4>
            </Link>
          </div> */}
        </div>
        <div className="social_sec_footer">
          <div className="socialfooter_icons">
            <h3 className="fs20">SOCIAL SHARING</h3>
            <div className="socialicon_footer_main">
              <Link
                to="/"
                className="link_decor socialicon_footer socialicon_footer_twitter"
              >
                <BsTwitter className="socialicon_footer_inner" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/kedar-dave-applified/"
                className="link_decor socialicon_footer socialicon_footer_linkdin"
              >
                <FaLinkedinIn className="socialicon_footer_inner" />
              </Link>
              <Link
                to="http://api.whatsapp.com/send?phone=9099040407&text=Let%27s%20Get%20in%20Touch"
                className="link_decor socialicon_footer socialicon_footer_whatsapp"
              >
                <IoLogoWhatsapp className="socialicon_footer_inner" />
                {/* <BsWhatsapp className="socialicon_footer_inner" /> */}
              </Link>
            </div>
          </div>
          <div className="address_sec_main_footer">
            <div>
              <h3 className="fs20">ADDRESS</h3>
              <p style={{ color: "#000", marginTop: 10 }}>
                Applified, 301 Pride Square,
                <br /> Opp. Aalap Avenue,
                <br /> Pushkardham Main Road,,
                <br /> Rajkot-360 005
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <h3 style={{ marginBottom: "10px" }} className="fs20">
                FOR INQUIRES PLEASE CALL ON
              </h3>
              <a href="tel:9099040407" className="link_decor footer_link_color">
                {/* <span>
                  <FaPhone size={20} color="green" />{" "}
                </span>{" "} */}
                +91 90990 40407
              </a>
            </div>
            <div style={{ marginTop: 20 }}>
              <h3 style={{ marginBottom: "10px" }} className="fs20">
                MAIL US AT
              </h3>
              <a
                href="mailto:kedar@applified.in"
                className="link_decor footer_link_color"
                style={{ height: 20 }}
              >
                kedar@applified.in
              </a>
            </div>
          </div>
        </div>
        <div className="contact_sec_footer">
          <div className="contact_sec_footer_inner">
            <h3 className="fs20">CONTACT US</h3>
          </div>
          <iframe
            width="100%"
            height="450"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2205.889487473447!2d70.75455027781317!3d22.285721400358863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbb81c917bb5%3A0x815d45b2c4636adc!2sApplified!5e1!3m2!1sen!2sin!4v1736602744231!5m2!1sen!2sin"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            allowFullScreen
          ></iframe>
          {/* <div
            className="contact_sec_footer_inner inputText"
            // style={{ width: "325px" }}
          >
            <h4 className="fieldname">Name</h4>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="input_contact"
            />
          </div>
          <div
            className="contact_sec_footer_inner inputText"
            // style={{ width: "325px" }}
          >
            <h4 className="fieldname">Organization/Company Name</h4>
            <input
              value={organization}
              type="text"
              onChange={(e) => setOrganization(e.target.value)}
              className="input_contact"
            />
          </div>
          <div
            className="contact_sec_footer_inner inputText"
            // style={{ width: "325px" }}
          >
            <h4 className="fieldname">Email</h4>
            <input
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="input_contact"
            />
          </div>
          <div
            className="contact_sec_footer_inner inputText"
            // style={{ width: "325px" }}
          >
            <h4 className="fieldname">Mobile No.</h4>
            <input
              value={mobile}
              type="text"
              onChange={(e) => setMobile(e.target.value)}
              className="input_contact"
            />
          </div>
          <div
            className="contact_sec_footer_inner inputText"
            // style={{ width: "325px" }}
          >
            <h4 className="fieldname">Comment</h4>
            <input
              value={comment}
              type="text"
              onChange={(e) => setComment(e.target.value)}
              className="input_contact"
            />
          </div>
          <div className="contact_sec_footer_inner">
            <button className="button">SUBMIT</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
