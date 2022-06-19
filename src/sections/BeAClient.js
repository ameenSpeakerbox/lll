import React from 'react'
import Layout from '../components/layout'
import '../styles/caseStudy.scss'
import BackgroundImage from 'gatsby-background-image'
import {graphql,useStaticQuery} from 'gatsby'
import { Button,Form, Container,Row,Col } from 'react-bootstrap'

import {Helmet} from 'react-helmet'

const Beaclient = () =>{
    const data = useStaticQuery(graphql`
    query{
        bg: file(relativePath: {eq:"background-img.jpg"}){
            childImageSharp{
                fluid(maxWidth:4000){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)
    return(
        <Layout >
            <Helmet>
              <meta charSet="utf-8" />
              <title>Speakerbox | Social Media Agency | Branding | Web Design Agency</title>

            </Helmet>
            <div className="section-c-one" style={{zIndex:'1000'}}>
                <Container className="txt-area"> 
                    <h5 className="clr-white text-center  cs-title" style={{letterSpacing: '0.11em',fontWeight:'400'}}><>GREAT! YOU’VE TAKEN ONE STEP AHEAD!</></h5>
                    <h1 className="clr-white text-center  cs-content" style={{letterSpacing: '-0.045em',fontWeight:'700'}}>
                        <>When you sign up for our services</>
                        <span style={{color:'#EE3958'}}><>you</><br></br>
                        <>sign up</>
                        </span><span style={{color:'#EF484C'}}><>for the best</></span></h1>
                </Container>
            </div>


        <BackgroundImage 
            fluid={data.bg.childImageSharp.fluid} >
                <Container className="p-5">
                    <Row className="py-5">
                        <Col xl={6} lg={7} md={9} className="d-block m-auto p-5 form-body-beaclient" >
                            <Form name="be a client" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

                                <Form.Group>
                                    <Form.Label><>Name</></Form.Label> 
                                    <Form.Control type="text" name="name" placeholder="eg. Ahmed Hussain" style={{color:'white'}}/>  
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><></>organization</Form.Label>
                                    <Form.Control type="text" name="organization"  placeholder="eg. Speakerbox Media" style={{color:'white'}}/> 
                                </Form.Group>
                                <input type="hidden" name="form-name" value="contact" />
                                <Form.Group>
                                    <Form.Label><>Email</></Form.Label> 
                                    <Form.Control type="email" name="email"  placeholder="eg. john@doe.com" style={{color:'white'}}/>  
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><>mobile</></Form.Label> 
                                    <Form.Control type="number" name="mobile" placeholder="eg. +91 8921208138" style={{color:'white'}}/>  
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><>i'm looking for</></Form.Label>  
                                        <Form.Control as="select" name="looking for[]" defaultValue="Select from List" >
                                            <option disabled>Select from List</option>
                                            <option value="Branding" style={{color:'black'}}>Branding</option>
                                            <option value="Web Designing" style={{color:'black'}}>Web Designing</option>
                                            <option value="Social Media Marketing" style={{color:'black'}}>Social Media Marketing</option>
                                        </Form.Control>
                                    
                                </Form.Group>
                                        <Button type="submit" className="d-block m-auto" style={{background:'white',color:'black',border:'0'}}><>submit</></Button>
                                </Form>
                        </Col>
                    </Row>
                        
 
                </Container>
        </BackgroundImage>
            
        </Layout>
    )
}

export default (Beaclient)
