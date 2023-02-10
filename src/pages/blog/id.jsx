import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import facebookIcon from "../../images/facebook.svg";
import whatsappIcon from "../../images/whatsapp.svg";
import instagramIcon from "../../images/instagram.svg";
import linkedinIcon from "../../images/linkedin.svg";
import headerImg from "../../images/single blog header image.webp";

const id = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Speakerbox | Social Media Agency | Branding | Web Design Agency
        </title>
      </Helmet>
      {/*  */}

      <div className="blog--single">
        <div className="blog--single__mainHead">
          <div className="blog--single__mainHead-left">
            <h1>At the heart of branding lies a journey of self-discovery.</h1>
            <div className="blog--single__mainHead-left-tags">
              <span style={{ backgroundColor: "#EBF3FF" }}>#branding</span>
              <span style={{ backgroundColor: "#FBEBFF" }}>#design</span>
              <span style={{ backgroundColor: "#EFEBFF" }}>#agency</span>
            </div>
            <p>
              A brand’s identity is the visual expression of a brand that is
              communicated to the outside world, and includes its name, logo,
              communications, and visual appearance. A brand identity creates an
              emotional connection and reflects the brand positioning and
              desired image.
            </p>
          </div>
          <MainImage
            src={headerImg}
            alt="img"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
        <div className="blog--single__bottom">
          <p className="desktop-hidden">
            A brand’s identity is the visual expression of a brand that is
            communicated to the outside world, and includes its name, logo,
            communications, and visual appearance. A brand identity creates an
            emotional connection and reflects the brand positioning and desired
            image.
          </p>
          <p>
            Our branding services are tried and tested, yet flexible enough to
            accommodate your unique and optimum needs. By adopting a strong
            brand strategy and digital marketing plan, we facilitate a strong
            connect between your consumers and your brand, ultimately leading to
            a better brand experience and improved brand recall.
          </p>
          <h2>What you can expect from the team?</h2>
          <p>
            Our research team will study your brand, rediscover its core tenets,
            and reintegrate its identity. We will then repackage and reposition
            your brand in a manner that complements your company’s futuristic
            vision and strategic goals. Our strategic design and communication
            team get on the job, and rake up a series of impressive creatives
            that are bound to captivate and stimulate your consumer group.
          </p>
          <div className="blog--single__bottom--share">
            Share it on:&nbsp;&nbsp;
            <button>
              <MainImage src={whatsappIcon} alt="whats app" loading="lazy" />
            </button>
            <button>
              <MainImage src={linkedinIcon} alt="whats app" loading="lazy" />
            </button>
            <button>
              <MainImage src={facebookIcon} alt="whats app" loading="lazy" />
            </button>
            <button>
              <MainImage src={instagramIcon} alt="whats app" loading="lazy" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default id;
