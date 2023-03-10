import React from "react";
import Layout from "../Components/Layout/Layout";
import WhastappIcon from "../Components/Whatsapp/WhastappIcon";
import AboutSection from "./Home/AboutSection";
import HeroSection from "./Home/HeroSection";
import NewsSection from "./Home/NewsSection";
import ServiceSection from "./Home/Service";
import ThirdSection from "./Home/ThirdSection";
import "../styles/global.css";

function index() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ThirdSection />
      <NewsSection />
      <ServiceSection />

      <WhastappIcon />
    </Layout>
  );
}

export function Head() {
  return <title>EFS Logistics | Best Logistics Partner in KSA</title>;
}

export default index;
