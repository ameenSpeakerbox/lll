import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import gatsbyLogo from "../images/Gatsby-Logo.svg";
import "../styles/gatsbyShowcase.scss";
import {
  ausflug,
  ays,
  cargotrack,
  efs,
  freezone,
  grafixy,
  lineTouch,
  pixls,
  taasco,
  tagsten,
  yuraco,
} from "../images/webistes";
import { Link } from "gatsby";

const websiteData = [
  {
    id: 1,
    title: "EFS Logistics",
    image: efs,
    link: "",
  },
  {
    id: 2,
    title: "Pixzl",
    image: pixls,
    link: "",
  },
  {
    id: 3,
    title: "Grafixy",
    image: grafixy,
    link: "",
  },
  {
    id: 4,
    title: "AYS Jewels",
    image: ays,
    link: "",
  },
  {
    id: 5,
    title: "YuRaCo Constructions",
    image: yuraco,
    link: "",
  },
  {
    id: 6,
    title: "Taasco Engineering",
    image: taasco,
    link: "",
  },
  {
    id: 7,
    title: "Cargotrack",
    image: cargotrack,
    link: "",
  },
  {
    id: 8,
    title: "Freezeon",
    image: freezone,
    link: "",
  },
  {
    id: 9,
    title: "Tagsten",
    image: tagsten,
    link: "",
  },
  {
    id: 10,
    title: "Ausflug Holidays",
    image: ausflug,
    link: "",
  },
  {
    id: 11,
    title: "Line Touch",
    image: lineTouch,
    link: "",
  },
];
const GatsbyShowcase = () => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Gatsby Partner Agency | Gatsby Website Development | Speakerbox"
        meta={[
          {
            name: "charSet",
            content: "utf-8",
          },
          {
            name: "description",
            content:
              "We are a Gatsby Partner Agency and our developers have been working on Gatsby since its existence.",
          },
        ]}
      />
      <div className="gatsbyShowcase">
        <div className="gatsbyShowcase__header">
          <MainImage src={gatsbyLogo} alt="logo" width={200} height={55} />
          <h1>Website Showcase</h1>
          <p>
            Our research team will study your brand, rediscover its core tenets,
            and reintegrate its identity. We will then repackage and reposition
            your brand in a manner that complements your company’s{" "}
          </p>
        </div>

        <div className="gatsbyShowcase__websites">
          {websiteData.map((item) => (
            <div key={item.id} className="gatsbyShowcase__website">
              <div className="gatsbyShowcase__website--image">
                <MainImage
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  loading="lazy"
                />
              <span>
                <Link to={item.link} target="_blank">
                  Visit Website
                </Link>
              </span>
              </div>
              <h2>{item.title}</h2>

            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GatsbyShowcase;
