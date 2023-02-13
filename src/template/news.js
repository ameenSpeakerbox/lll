import { graphql } from "gatsby";
import React from "react";
import Layout from "../Components/Layout/Layout";
import NewsTemplate from "../pages/News/NewsTemplate";

const News = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <NewsTemplate data={data.contentfulNewsAndInformation} />
    </Layout>
  );
};

export function Head() {


const isBrowser = () => typeof window !== "undefined"
  const title = isBrowser() &&  window.location.pathname
    .split("/")
    .slice(2)
    .toLocaleString()
    .toUpperCase()
    .replace("-", " ");

  return <title>{title} | EFS Logistics KSA</title>;
}
export default News;
export const PageQuery = graphql`
  query ($slug: String!) {
    contentfulNewsAndInformation(slug: { eq: $slug }) {
      cta
      id
      slug
      title
      description {
        description
      }
      image {
        file {
          url
        }
      }
      secondDescription {
        secondDescription
      }
      createdDate(formatString: "Do MMMM yyyy")
    }
  }
`;
