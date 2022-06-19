import React from 'react'
import Layout from '../components/layout'
import {Row, Col, Container} from 'react-bootstrap'
import {Link} from 'gatsby'
import '../styles/gatsby.scss'
import GatbsyWhite from '../images/Gatsby_Logo_White 1.png'
import lightingIcon from '../images/features-icon/bi_lightning-fill.png'
import searchIcon from '../images/features-icon/Vector (5).png'
import desktopIcon from '../images/features-icon/gg_screen.png'
import securityIcon from '../images/features-icon/gg_screen (1).png'
import speedIcon from '../images/features-icon/gg_screen (2).png'
import contentfulIcon from '../images/features-icon/347971-contentful-logo-wordmark-white_700x149px-1230a0-original-1582670058 1.png'
import wordpressIcon from '../images/features-icon/WordPress-logotype-standard-white 1.png'
import strapiIcon from '../images/features-icon/PNG.logo.purple 1.png'
import prismicIcon from '../images/features-icon/Group 715.png'
import netlifyIcon from '../images/features-icon/PngItem_231951 1.png'
import firebaseIcon from '../images/features-icon/NicePng_google-logo-white-png_124521 1.png'
import digitaloceanIcon from '../images/features-icon/DO_Logo_Horizontal_White 1.png'
import gatsbyIcon from '../images/gatsby-ico.png'
import groupIcon from '../images/features-icon/Group.png'
import technologyIcon from '../images/features-icon/grommet-icons_technology.png'
import { Helmet } from 'react-helmet'




const Gatsby = (probs) =>{
    return(
        <Layout>
            <Helmet htmlAttributes ={{lang:'en'}} title="Gatsby Partner Agency | Gatsby Website Development | Speakerbox"
                meta={[
                    {
                        name:'charSet',
                        content:'utf-8',
                    },
                    {
                        name:'description',
                        content:'We are a Gatsby Partner Agency and our developers have been working on Gatsby since its existence.',
                    }
                ]}
                
                
            />
            <div className="gatsby" style={{overflow:'hidden'}}>
                    <Row className="first-section" style={{background:'black'}}>
                        <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-center" style={{alignItems:"center"}}>
                            <img src={GatbsyWhite} alt="gatsby logo" height="65"/>
                            
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-4 justify-content-center d-flex">
                            <p className="desc clr-white">
                            <>Want to get more visits thanks to blazing-fast and SEO-friendly websites?</>
                            </p>
                        </Col>

                        <Col className="d-flex justify-content-center">
                            
                        </Col>
                    </Row>

                    <div style={{background: '#EE3958'}} className="ftr-top-border"></div>
{/* 2nd section */}
                    <div className="sec-section">
                        <Container>
                            <h2 className="title pt-5" style={{fontWeight:'400'}}><>What is</><span style={{color:'#EE3958',fontWeight:'600'}}><>Gatsby JS?</></span></h2>
                            <p className="content" ><>GatsbyJS is a React-based GraphQL powered static site generator What does that even mean?  Well it weaves together the best parts of React webpack react-router GraphQL and other front-end tools in to one ultimate package</></p>

                            <h2 className="title pt-3" style={{fontWeight:'400'}}><>Why do we use</><span style={{color:'#EE3958',fontWeight:'600'}}><>Gatsby JS?</></span></h2>
                            <p className="content" ><>Below are the list of advantages of hiring a Gatsby development agency for your next web development project</></p>

                                <div className="features mt-4">
                                    <div className="d-flex">
                                        <img src={lightingIcon} alt="flash icon" className="icon"></img>
                                        <h3 className="title"><>Lightning Fast</></h3>
                                    </div>
                                    <p className="content"><>Now stop losing clients and business due to poor performing websites with too much loading time Delight users with a website that works with a blink of an eye</></p>
                                </div>

                                <div className="features mt-4">
                                    <div className="d-flex">
                                        <img src={searchIcon} alt="search icon" className="icon"></img>
                                        <h3 className="title"><>SEO Friendly</></h3>
                                    </div>
                                    <p className="content"><>Rank your page easier and higher than your competition Google favours static pages as they are fast light and easy to scan</></p>
                                </div>

                                <div className="features mt-4">
                                    <div className="d-flex">
                                        <img src={desktopIcon} alt="desktop icon" className="icon"></img>
                                        <h3 className="title"><>Ultimate User Experience</></h3>
                                    </div>
                                    <p className="content"><>UX can make or break your business performance Now you can deliver a truly outstanding and customized page without compromising the performance</></p>
                                </div>

                                <div className="features mt-4">
                                    <div className="d-flex">
                                        <img src={securityIcon} alt="flash icon" className="icon"></img>
                                        <h3 className="title"><>Rock Solid Security</></h3>
                                    </div>
                                    <p className="content"><>Gatsby’s serverless rendering generates static HTML at build time No server and no reachable database equals no malicious requests DDOS attacks or accidental exposure</><span style={{fontWeight:'600'}}><> A Gatsby site’s attack surface is nonexistent</></span></p>
                                </div>

                                <div className="features mt-4 pb-5">
                                    <div className="d-flex">
                                        <img src={speedIcon} alt="rocket icon" className="icon"></img>
                                        <h3 className="title"><>Futuristic</></h3>
                                    </div>
                                    <p className="content"><>Every website is an app and every app is a website Gatsbyjs is a future maker It makes the web a better place Less noisy more readable and much faster</></p>
                                </div>

                                <div className="pb-5 mx-auto d-block">
                                    
                                        <Link to="" className="button pink-btn"><>Let’s Start a Project!</></Link>
                                    
                                </div>
                        </Container>
                    </div>
{/* 3rd section */}
<div style={{background: '#EE3958'}} className="ftr-top-border"></div>
                    <div className="third-section">
                        <Container>
                            <h2 className="head clr-white"><>Tech Stack and Tools</></h2>
                            <p className="desc clr-white"><>A list of</> <b><>tech</></b><>we use for building</><b><>Gatsby</></b> <>websites</></p>
                            <p className="data-source clr-white"><>DATA SOURCES</></p>
                            <Row className="justify-content-center">
                                <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <img src={contentfulIcon} alt="contentful Icon" className="icon"></img>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <img src={wordpressIcon} alt="wordpress Icon" className="icon"></img>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <img src={strapiIcon} alt="strapi Icon" className="icon"></img>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <img src={prismicIcon} alt="prismic Icon" className="icon"></img>
                                </Col>
                            </Row>

                            <p className="data-source clr-white pt-3"><>DEPLOY & CDN</></p>
                            <Row className="justify-content-center">
                                <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                                    <img src={netlifyIcon} alt="netlify Icon" className="icon"></img>
                                </Col>
                                <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                                    <img src={firebaseIcon} alt="firebase Icon" className="icon"></img>
                                </Col>
                                <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                                    <img src={digitaloceanIcon} alt="digitalocean Icon" className="icon"></img>
                                </Col>
                                
                            </Row>
                        </Container>
                    </div>
<div style={{background: '#EE3958'}} className="ftr-top-border"></div>

{/* fourth section */}
                        <div className="fourth-section">
                            <Container className="py-5">
                                <h2  className="title"><>Why</><span style={{color:'#744C9E'}}> <>Gatsby</></span> <>Developers from</> <span style={{color:'#EE3958'}}><>speakerbox ?</></span></h2>

                                    
                                        <Row className="my-3">
                                            <Col className="icon-col">
                                                <img src={groupIcon} alt="groupIcon" className="icon d-block m-auto" />
                                            </Col>

                                            <Col >
                                             
                                                <h4 className="head"><>Efficient Experienced and Innovative Team of Developers</></h4>
                                        
                                                <p><>Our team has been working on Gatsby since its existence and we have a team of young energetic UI/UX Designers and Developers who work under the same roof to bring out optimal results</></p>
                                    
                                            </Col>
                                        </Row>
                                        <Row className="my-3">
                                            <Col className="icon-col">
                                                <img src={technologyIcon} alt="technologyIcon" className="icon d-block m-auto" />
                                            </Col>

                                            <Col >
                                             
                                                <h4 className="head"><>Aligning Technology to your Business</></h4>
                                        
                                                <p><>Gatsby’s flexibility allows you to do online business easier and much more efficient We know how to use this unfair advantage a lot</></p>
                                    
                                            </Col>
                                        </Row>
                                        <Row className="my-3">
                                            <Col className="icon-col">
                                                <img src={gatsbyIcon} alt="gatsbyIcon" className="icon d-block m-auto" />
                                            </Col>

                                            <Col >
                                             
                                                <h4 className="head"><>We’re Gatsby Partner Agency</></h4>
                                        
                                                <p><>We are one of the only few partner agencies in the region with 100% customer satisfaction Our team’s broad understanding of gatsby makes us the perfect choice for your next project</></p>
                                    
                                            </Col>
                                        </Row>
                                           
                                    
                            </Container>
                        </div>

            </div>
        </Layout>
    )
}

export default (Gatsby)
