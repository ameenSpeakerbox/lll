import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Layout from '../components/layout'
import '../styles/caseStudy.scss'
import {graphql,useStaticQuery} from 'gatsby'
// import Img from 'gatsby-image'
import {Link} from 'gatsby'

import {Helmet} from 'react-helmet'



const CaseStudies = (probs) => {
 const data = useStaticQuery(graphql`
 query {
  allContentfulCaseStudies{
    edges {
      node {
        client
        typeOfWork
        slug
        featuredImage {
          file{
            url
          }
        }
      }
    }
  }
}`)
    return(
        <Layout>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Speakerbox | Social Media Agency | Branding | Web Design Agency</title>

          </Helmet>
            <div className="section-c-one">
                <Container className="txt-area"> 
                    
                          <h5 className="clr-white text-center  cs-title" style={{letterSpacing: '0.11em',fontWeight:'400'}}><>CASE STUDIES</></h5>
                          <h1 className="clr-white text-center  cs-content" style={{letterSpacing: '-0.045em',fontWeight:'700'}}>
                            <>Every</>
                            <span style={{color:'#EE3958'}}><>brand has its own story, its own ambience</></span>
                            <>and it is our job to</>
                            <span style={{color:'#EF484C'}}><>convey that as best as possible</></span>
                          </h1>
                    
                </Container>
            </div>

            <div style={{background:'white'}}>
              <Container>
                  <Row className="py-5">
                    {data.allContentfulCaseStudies.edges.map(edge =>{
                      return(
                        
                      <Col xl={4} lg={4} md={6} sm={6} xs={12} className="m-auto">
                        <Link to={edge.node.slug}>
                        <div className="cs-card p-3">
                    <h2 className="card-title" style={{letterSpacing: '-0.03em',textTransform:'capitalize'}}>{edge.node.client}</h2>
                            <img className="w-100 m-auto d-block" src={edge.node.featuredImage.file.url} loading="lazy" alt=""></img>
                    <p className="card-text" style={{letterSpacing: '0.11em',fontWeight:'400',textTransform:'uppercase'}}>{edge.node.typeOfWork}</p>
                        </div>
                        </Link>
                      </Col>
                      
                    )})}
                      
                  </Row>
                  {/* <Pagination /> */}
              </Container>                            
            </div>
            
        </Layout>
    )
}

export default (CaseStudies)
