import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import Header from '../Components/Header/Header'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

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

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li className='list-disc flex ml-3'>{children}</li>
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className='text-4xl font-bold py-3'>{children}</h1>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h1 className='text-2xl font-bold py-3'>{children}</h1>
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h1 className='text-xl font-bold py-3 '>{children}</h1>
    },
  
  },
}
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