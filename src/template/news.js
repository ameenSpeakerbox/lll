import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../Components/Layout/Layout';
import NewsTemplate from '../pages/News/NewsTemplate';

const News = ({ data }) => {
    // console.log(data)
    return (
        <Layout>
            <NewsTemplate data={data.contentfulNewsAndInformation} />
        </Layout>
    )
}
export default News
export const PageQuery = graphql`
  query($slug: String!){
    contentfulNewsAndInformation( slug: {eq: $slug})
    {
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
        createdDate(formatString: "Do MMMM yyyy")
  }
   
}`