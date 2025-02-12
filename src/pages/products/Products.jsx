import React, { useEffect } from "react";
import "./Products.css";
import images from "../../constants/images";
import { FaAngleDoubleRight } from "react-icons/fa";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Products_main_heading">
        <h1 className="Products_main_heading_inner">Products</h1>
      </div>
      <div className="Products_main">
        <div className="Ecommerce_main">
          <div className="Ecommerce_img_main">
            <img
              src={images.ecommerce}
              alt="Ecommerce"
              className="Ecommerce_img_inner"
            />
          </div>
          <div className="Ecommerce_details">
            <div className="drop-in">
              <h1 style={{ color: "var(--color-darkolivegreen-shade)" }}>
                Ecommerce
              </h1>
            </div>
            <div className="Products_details_points drop-in-2">
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Single / Multi vendor options</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Almost all payment gateways integration possible</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Custom Laravel based front-end & back-end</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Complete solution with Web / Android / iOS</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Customization Possible</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>B2B / B2C possible</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Promo code, Discounts, Unlimited Categories</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Hospital_main">
          <div className="Hospital_details">
            <div>
              <h1 style={{ color: "var(--color-darkolivegreen-shade)" }}>
                Online Hospital Management
              </h1>
            </div>
            <div className="Products_details_points">
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Patient Dashboard</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Doctors Dashboard</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Reception/Manager Dashboard</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>1 to 1 chatbox/conference</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Prescription Screen</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Diagnosis Screen</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Payment Gateway</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <p>Payments / Invoices</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                  <FaAngleDoubleRight />
                </div>
                <b>Individual clinics with data privacy</b>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <b>Unlimited Patient, Case History, Appointments</b>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <b>15+ clinics and hospitals are using the same</b>
              </div>
            </div>
          </div>
          <div className="hospital_img_main">
            <img
              src={images.hospital}
              className="hospital_img_inner"
              alt="hospitalmanagement"
            />
          </div>
        </div>
        <div className="Entertainment_main">
          <div className="Entertainment_img_main">
            <img
              src={images.Entertainment}
              alt="Ecommerce"
              className="Entertainment_img_inner"
            />
          </div>
          <div className="Entertainment_details">
            <div>
              <h1 style={{ color: "var(--color-darkolivegreen-shade)" }}>
                Entertainment Zone Management
              </h1>
            </div>
            <div className="Products_details_points">
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Unlimited rides</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Unlimited Consumers</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Schemes Creation for recharge.</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>
                  Facility to keep different prices on weekends and holidays.
                </p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Mobile app and QR code base transactions from consumers. </p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>
                  Admin Panel for backend maintenance and changes in price,
                  holidays, customers.
                </p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Refund functionality for the consumers.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Admin Application for the management. </p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>
                  Ledger for all 4 transaction heads for allotment of the
                  collection on a daily basis.{" "}
                </p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Admin reports</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Push Notification</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <b>7+ Entertainment zone are using the same</b>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="channel_main">
          <div className="channel_details">
            <div>
              <h1 style={{ color: "var(--color-darkolivegreen-shade)" }}>
                Distribution channel App
              </h1>
            </div>
            <div className="Products_details_points">
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Mobile app for Salesmen.</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Mobile app for Deliverymen.</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Inventory Management.</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Customer Management.</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Printing the Bill and Receipt.</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Integration with accounting software.</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Reports</p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Owner, Distributor, Partner.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                </div>
                <p>Channel Management</p>{" "}
              </div>
            </div>
          </div>
          <div className="channel_img_main">
            <img
              // src={images.hospital}
              src={images.Distribution}
              alt="Ecommerce"
              className="channel_img_inner"
            />
          </div>
        </div>
        <div className="Franchise_main">
          <div className="Franchise_img_main">
            <img
              src={images.Franchise}
              className="Franchise_img_inner"
              alt="hospitalmanagement"
            />
          </div>
          <div className="Franchise_details">
            <div>
              <h1 style={{ color: "var(--color-darkolivegreen-shade)" }}>
                Franchise Management App
              </h1>
            </div>
            <div className="Products_details_points">
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>Purchase Order and Sales Order From Vendor to Franchise.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>
                  Purchase Order and Sales Order From Franchise to Customer.
                </p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>Inventory Management With Unquie Code.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>Price Management according to Franchise Relations.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>Web Attendance Management with Live Image.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>MOQ (Minimum Order Qty) Management.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>Cash, Expense History Masters.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>
                  Happy Hours, Coupon Code, Target Based, Gift Voucher, all for
                  Billing.
                </p>
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>Incentive Calculation for Employee.</p>{" "}
              </div>
              <div className="pro_list_main">
                <div className="tick_inner_main">
                  <FaAngleDoubleRight />
                  {/* <img src={images.tick} className="tick_inner" alt="tick" /> */}
                </div>
                <p>All Track Record For each and every single Codes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Products;
