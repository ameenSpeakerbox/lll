import React from "react";
import Layout from "../Components/Layout/Layout";
import InfoIcon from '../Assets/images/entypo_info-with-circle.svg'
import NewsWide from "../Components/NewsComponent/NewsWide";
import { graphql } from "gatsby";

const NewsAndInformation = ({ data }) => {

  console.log({ data })
  const bgColor = {
    background: "linear-gradient(89.97deg, #D5E5F4 1.15%, rgba(68, 163, 255, 0) 99.52%)",
  }
  return (
    <Layout>
      <div
        style={bgColor}
        className={'w-full h-20 flex items-center mt-10'}
      >
        <div className="container flex items-center">
          <img src={InfoIcon} alt="" />
          <h1 className="text-4xl text-primary ml-3 fond-semibold ">
            News and Information
          </h1>

        </div>
      </div>
      <main className="container">
        <section className="grid grid-cols-1 gap-5 min-h-screen py-10">
          {data.allContentfulNewsAndInformation.edges?.map(item => (
            <NewsWide data={item.node} />
          ))}

        </section>
      </main>
    </Layout>
  );
};

export default NewsAndInformation;
export const PageQuery = graphql`
{
  allContentfulNewsAndInformation {
    edges {
      node {
        cta
        id
        slug
        title
        image {
          file {
            url
          }
          description
        }
        description {
          description
        }
        createdDate(formatString: "Do MMMM yyyy")
      }
    }
  }
}

`