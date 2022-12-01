import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import Header from '../Components/Header/Header'
import { options } from '../template/Service'

const PrivacyPolicy = () => {

    const data = useStaticQuery(graphql`
    query{
        allContentfulPrivacyPolicy {
            edges {
              node {
                content {
                  raw
                }
              }
            }
          }
}`)
    return (
        <>
            <Header />
            <div className='container lg:py-20 md:py-16 py-12'>
                {renderRichText(data.allContentfulPrivacyPolicy.edges[0].node.content, options)}
            </div>
        </>
    )
}

export default PrivacyPolicy