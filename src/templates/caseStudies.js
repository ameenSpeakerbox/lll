import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/temp.scss'
import Img from 'gatsby-image'
import Cursor from '../components/cursor'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Footer from '../components/footer'

const Template = ({ data }) => {
  // console.log(pageContext)
  // const {prev,next}=pageContext
  // console.log(data.contentfulCaseStudies.portfolioImages);
  return (
    <div>
      <BackgroundImage
        fluid={data.contentfulCaseStudies.backgroundImage.fluid}
        style={{ width: '100%', borderBottomRightRadius: '100px' }}
        className="temp-bg"
      >
        <Container className="h-100 d-table">


          <Row className="my-10 csTemp-box" >

            {/* <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                          
                          

                           {prev &&
                          <Link to={prev.slug} className="clr-white" style={{float:'left'}}>previous</Link>
                          }

                          {next &&
                            <Link to={next.slug} className="clr-white" style={{float:'right'}}>next</Link>
                            }
                               
                          
                           
                        
                        </Col> */}

            <Col xl={5} lg={5} md={12} sm={12} xs={12}>
              <Img className="d-block ml-auto featured-img"
                fixed={data.contentfulCaseStudies.featuredImage.fixed}
              />
            </Col>
            <Col xl={7} lg={7} md={12} sm={12} xs={12} className="d-block mr-auto my-auto post-content-body">
              <h5 className="clr-white cs-title" style={{ letterSpacing: '0.11em', fontWeight: '300', textTransform: 'uppercase' }}>
                {data.contentfulCaseStudies.typeOfWork}
              </h5>
              <h1 className="clr-white cs-content" style={{ letterSpacing: '-0.045em', textTransform: 'capitalize', fontSize: 'xxx-large', fontWeight: '900' }}>
                {data.contentfulCaseStudies.client}
              </h1>
            </Col>

            <Col xl={10} lg={10} md={12} sm={12} xs={12} className="d-block m-auto pt-3">
              <p className="clr-white">
                {data.contentfulCaseStudies.content.content}
              </p>
            </Col>
          </Row>

        </Container>
      </BackgroundImage>

      <div style={{ background: ' #171717' }}>
        <Container className="py-5" >


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%' }}>
              {/* <Img fluid={data.contentfulCaseStudies.image.fluid} /> */}
              <img src={data.contentfulCaseStudies.image.file.url} alt="" className="w-100" />
            </div>

          </div>

        </Container>
      </div>



      <Footer />
      <Cursor />

    </div>
  )
}

export default Template
export const query = graphql`
query($slug: String!){
    contentfulCaseStudies( slug: {eq: $slug})
    {
        client
        backgroundImage{
          file{
            url
          }
        }
        
        typeOfWork
        featuredImage {
          
            file{
              url
            }
          
        }
        slug
        content {
          content
      }
      image {
        file {
          url
        }
      }
  }

  imgWeb: file(relativePath: {eq:"SUPRABADHAM 7.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`