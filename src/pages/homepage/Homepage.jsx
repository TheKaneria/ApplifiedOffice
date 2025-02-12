import React from "react";
import HomeHero from "../../components/home_hero/HomeHero";
import images from "../../constants/images";
import Strategy from "../../components/strategy/Strategy";
import ServicesHome from "../../components/services_home/ServicesHome";
import Tools from "../../components/tools/Tools";
import OurMission from "../../components/OurMission/OurMission";
import OurMethodology from "../../components/OurMethodology/OurMethodology";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Home | AppliFied</title>
      </Helmet>
      <HomeHero />
      <OurMission />
      <Strategy />
      <Tools />
      <ServicesHome />
      <OurMethodology />
    </>
  );
};

export default Homepage;
