import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import { MainImage } from "gatsby-plugin-image";
import "../../styles/blog.scss";

const index = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Speakerbox | Social Media Agency | Branding | Web Design Agency
        </title>
      </Helmet>
      {/*  */}

      <div className="blog">
        <div>
          <div>
            <h1>At the heart of branding lies a journey of self-discovery.</h1>
          </div>
          <div>
            <MainImage
              src=""
              alt="img"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default index;
