import React, { useEffect } from "react";
import "./Portfolio.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Portfolio_main_heading">
        <h1 className="Portfolio_main_heading_inner">Portfolio</h1>
      </div>
      <div className="Portfolio_main">
        <div className="tges_main">
          <div className="tges_desc">
            <div>
              <h1>ERP</h1>
            </div>
            <div>
              <p>
                A responsive design adapting to any mobile device and an amazing
                website with clear, well-organized navigation which is
                compatible with responsive frameworks. With very precise and
                easy login criteria for parents, employees and for new
                admissions, it provides customized school ERP for 12k+ students
                and 1k+ teachers. It features all the primary requirements such
                as admission form, class section management, teacher management,
                online fee collection etc. An android and IOS button on the top
                right allows each parent to engage with this school closely. It
                allows them to download the mobile app and view their kid’s
                attendance and performance.There is an uncluttered openness to
                the TGES site that, besides looking great, allows it to work
                well across all mobile devices as well.{" "}
              </p>
            </div>
            <div>
              <Link
                to="https://tgesconnect.org"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "800",
                }}>
                tgesconnect.org
              </Link>
            </div>
          </div>
          <div className="tges_image_main">
            <Link to="https://tgesconnect.org">
              <img src={images.tges} className="tges_image" alt="tgesimage" />
            </Link>
          </div>
        </div>
        <div className="dronstudy_main">
          <div className="dronstudy_image_main">
            <Link to="https://course.dronstudy.com/">
              <img
                src={images.dronstudy}
                className="dronstudy_image"
                alt="dronstudyimage"
              />
            </Link>
          </div>
          <div className="dronstudy_desc">
            <div>
              <h1>Educational LMS</h1>
            </div>
            <div>
              <p>
                This Educational LMS website keeps things fresh. It has a clean
                and simple interface with features such as Subject courses,
                Study material, Doubt resolution, Test series and Live online
                tutor. The color matching, icons, and pictures on this website
                are quite eye-catching.
              </p>
              <br />
              <p>
                This website have 100k+ visitors daily, and they have their
                offline portal from where they can study at their home.
              </p>
              <br />
              <p>
                They help students get help / direction / guidence in a very
                affordable way. They have their spread in all over India.
              </p>
            </div>
            <div>
              <Link
                to="https://course.dronstudy.com/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "800",
                }}>
                course.dronstudy.com
              </Link>
            </div>
          </div>
        </div>
        <div className="grandtrunk_main">
          <div className="grandtrunk_desc">
            <div>
              <h1>eCommerce</h1>
            </div>
            <div>
              <p>
                The Grand Trunk is one of the very prestigious client we have.
                They have official online store for best of the Indian designers
                like Sabyasachi, Anamika Khanna, Payal Singhal, Masaba Gupta,
                Anushree Reddy and many more.
              </p>
              <br />
              <p>
                They always have state of the art collection from all big shot
                designers. We have created their ecommerce platform and people
                from entire globe can purchase the designer outfits from them
              </p>
            </div>
            <div>
              <Link
                to="https://www.thegrandtrunkus.com"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "800",
                }}>
                thegrandtrunkus.com
              </Link>
            </div>
          </div>
          <div className="grandtrunk_image_main">
            <Link to="https://www.thegrandtrunkus.com">
              <img
                src={images.grandtrunk}
                className="grandtrunk_image"
                alt="grandtrunkimage"
              />
            </Link>
          </div>
        </div>
        <div className="greenchoicenow_main">
          <div className="greenchoicenow_image_main">
            <Link to="https://www.greenchoicenow.com">
              <img
                src={images.greenchoicenow}
                alt="greenchoicenowimage"
                className="greenchoicenow_image"
              />
            </Link>
          </div>
          <div className="greenchoicenow_desc">
            <div>
              <h1>Health & Fitness</h1>
            </div>
            <div>
              <p>
                Green Choice is a unique app which helps you improve your food
                buying habits, you can set your preferences of diets, allergies
                and your vital stats. Green choice will help suggesting the best
                shopping choices for you from your regular stores.{" "}
              </p>{" "}
              <br />
              <p>
                It will help you buy groceries that meet your dietary needs,
                values, and budget. You can see products' impact on your health
                and the environment by simply searching or scanning.
              </p>{" "}
              <br />
              <p>
                Stop spending your time analyzing ingredient lists, doing
                calculus on nutrition labels, and Googling claims. Green Choice
                will curate and suggest products based on your personal dietary
                needs and preferences.
              </p>
            </div>
            <div>
              <Link
                to="https://www.greenchoicenow.com"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "800",
                }}>
                www.greenchoicenow.com
              </Link>
            </div>
          </div>
        </div>
        <div className="bsgforsdg_main">
          <div className="bsgforsdg_desc">
            <div>
              <h1>Humanity</h1>
            </div>
            <div>
              <p>
                The 'BSG for SDG' app is a one-stop-platform for all things
                related to SDGs. Be it enhancing your knowledge and
                understanding of the SDGs, reflecting on your daily actions,
                understanding what changes you can make in your everyday life to
                live sustainably; or uploading your own actions on SDGs to
                empower countless others to adapt sustainability as a way of
                life; - this app can help you do all this and so much more.
              </p>
              <br />
              <p>
                The app serves as a platform to help adopt ‘Sustainable Human
                Behaviour’ as a way of life – an essential requirement to
                achieve the SDGs.
              </p>
            </div>
            <div>
              <Link
                to="https://www.bsgforsdg.org/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "800",
                }}>
                www.bsgforsdg.org
              </Link>
            </div>
          </div>
          <div className="bsgforsdg_image_main">
            <Link to="https://www.bsgforsdg.org/">
              <img
                src={images.bsgforsdg}
                alt="bsgforsdgimg"
                className="bsgforsdg_image"
              />
            </Link>
          </div>
        </div>
        <div className="elderaid_main">
          <div className="elderaid_image_main">
            <Link to="https://www.elderaid.in/">
              <img
                src={images.elderaid}
                alt="elderaidimg"
                className="elderaid_image"
              />
            </Link>
          </div>
          <div className="elderaid_desc">
            <div>
              <h1>Humanity</h1>
            </div>
            <div>
              <p>
                Whether it is your daily Sudoku or a daily diet tip; from water
                reminders to a thought for the day; news articles to Crossword
                puzzles, the ElderAid Wellness app is about holistic health and
                wellness. Our aim is to help you take care of your body and your
                mind, in a fun, accessible, and easy way.
              </p>
              <br />
              <p>
                In keeping with ElderAid’s mission to help elders live life
                fully, our app has been carefully designed and built to ensure
                maximum ease of use for senior citizens, while still being
                relevant and enjoyable to all. Holistic wellness has no age bar,
                and we are here to champion that!
              </p>
            </div>
            <div>
              <Link
                to="https://www.elderaid.in/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "800",
                }}>
                www.elderaid.in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
