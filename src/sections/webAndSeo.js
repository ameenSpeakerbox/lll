import React from 'react'
import Layout from '../components/layout'
import { Row, Col, Container } from 'react-bootstrap'
import '../styles/service.scss'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import designDevelopImg from '../images/DD_SPK.png'
import '../styles/webAndSeo.scss'
import performanceIcon from "../images/icon(3).png"
import securityIcon from "../images/icon(4).png"
import cmsIcon from "../images/icon(5).png"
import seoIcon from "../images/icon(6).png"
import responsiveIcon from "../images/icon(7).png"
import uiIcon from '../images/ux-dev.png'
import gatsbyIcon from '../images/gatsby-ico.png'
import contentIcon from '../images/cont-icon.png'
import gatsbyColorIcon from '../images/Dependencies/gatsby.png'
import netlifyIcon from '../images/Dependencies/logos_netlify.png'
import reactIcon from '../images/Dependencies/vscode-icons_file-type-reactjs.png'
import prismicIcon from '../images/Dependencies/logos_prismic-icon.png'
import contentfulIcon from '../images/Dependencies/logos_contentful.png'
import angularIcon from '../images/Dependencies/logos_angular-icon.png'
import GatbsyWhite from '../images/file-icons_gatsby.png'
import ReactWhite from '../images/ion_logo-react.png'
import vector from '../images/JavaScript frameworks (1) 1.png'



const Services = (probs) => {
    const data = useStaticQuery(graphql`
    query{
        ServiceImgOne: file(relativePath: {eq:"webMockup.png"}){
            childImageSharp{
                fixed(quality:100){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)
    return (
        <Layout>
            <div className="webAndSeo pb-5" style={{ overflow: 'hidden', background: '#0a0a0a' }}>

                <Row className="py-4 justify-content-center">
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                        <img src={designDevelopImg} alt="" className="d-block m-auto" height="95px"></img>
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={6} xs={12} className="vertical-line d-flex" style={{ alignItems: "flex-end", flexDirection: 'column' }}>
                        <h1 className="clr-white  cs-content intro-heading" style={{ fontWeight: '900' }}>
                            <span style={{ color: '#EF484C' }}>
                                <>Premium</>
                                <br></br>
                            </span><>Bespoke</>
                            <span className="intro-heading-span-2"> <>Web</> </span>
                            <span className="intro-heading-span-3" ><> Development</></span>
                        </h1>
                        <h1 className="clr-white  cs-content intro-heading-right">
                            <>Purpose built websites with optimum perfomance  and rock solid security features</>
                        </h1>
                    </Col>

                    <Col className="my-auto right-heading-body d-flex" style={{alignItems:'center',justifyContent:'start'}} xl={6} lg={6} md={6} sm={6} xs={12}>
                        <img src={vector} alt="" className="vector"/>
                    </Col>

                </Row>

                <Row className="py-3 d-flex justify-content-center" >
                    <Col xl={6} lg={6} md={6} sm={6} xs={12} className="d-flex" style={{ justifyContent: 'flex-end' }}>
                        <Img fixed={data.ServiceImgOne.childImageSharp.fixed} className="web-mockup-img d-block"></Img>
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={6} xs={9} className="web-features-body">
                        <Row>
                            <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                                <img src={performanceIcon} alt="performance Icon" className="m-auto d-block web-feature-icon"></img>
                            </Col>
                            <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                                <p className="web-features clr-white" style={{ marginBottom: '0' }}><>10X Perfomance</></p>
                            </Col>

                            <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                                <img src={securityIcon} alt="performance Icon" className="m-auto d-block web-feature-icon"></img>
                            </Col>
                            <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                                <p className="web-features clr-white" style={{ marginBottom: '0' }}><>Solid Security</></p>
                            </Col>

                            <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                                <img src={cmsIcon} alt="performance Icon" className="m-auto d-block web-feature-icon"></img>
                            </Col>
                            <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                                <p className="web-features clr-white" style={{ marginBottom: '0' }}><>Headless CMS</></p>
                            </Col>

                            <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                                <img src={seoIcon} alt="performance Icon" className="m-auto d-block web-feature-icon"></img>
                            </Col>
                            <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                                <p className="web-features clr-white" style={{ marginBottom: '0' }}><>SEO Friendly</></p>
                            </Col>
                            <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                                <img src={responsiveIcon} alt="performance Icon" className="m-auto d-block web-feature-icon"></img>
                            </Col>
                            <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                                <p className="web-features clr-white" style={{ marginBottom: '0' }}><>Responsive</></p>
                            </Col>

                        </Row>
                    </Col>
                </Row>


            </div>

            <div style={{ background: '#EE3958' }} className="ftr-top-border"></div>

            <div className="webAndSeo-sect-two py-5" style={{ overflow: 'hidden', background: 'white' }}>
                <Container>
                    <Row>
                        <Col xl={6} lg={6} md={5} sm={11} xs={11} className="column-1 m-auto">
                            <h1 className="heading color-pink">
                                <>Web Design and Development</></h1>
                            <h1 className="heading"> <>Services</> <span className="smaller-heading"><>to help</><br></br><>deliver more</></span>
                            </h1>

                            <p className="description">
                                <>Our team is equipped with working on the latest technology stacks to build cutting edge websites and web solutions to align with your business goals</>
                            </p>
                        </Col>

                        <Col xl={6} lg={6} md={5} sm={11} xs={11} className="column-2 m-auto">
                            <h1 className="hire-us pb-3 ml-3"><>Why hire us?</></h1>
                            <div className="d-flex pb-4" style={{ alignItems: 'center' }}>
                                <img src={uiIcon} alt="ux ui development icon" className="icons" />
                                <h5 className="figcaption"><>Professional UI/UX Development</></h5>
                            </div>

                            <div className="d-flex pb-4" style={{ alignItems: 'center' }}>
                                <img src={contentIcon} alt="ux ui development icon" className="icons" />
                                <h5 className="figcaption"><>Content Strategy Development</></h5>
                            </div>

                            <div className="d-flex pb-4" style={{ alignItems: 'center' }}>
                                <img src={gatsbyIcon} alt="ux ui development icon" className="icons" />
                                <h5 className="figcaption"><>Embracing Next-gen Technology</></h5>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" tools-body">
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <p className="tools-heading"><>Tech Stack and Tools we</><span className="color-pink" style={{ fontWeight: '600' }}><>Love</></span></p>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={11} xs={11} className="tools-col">
                            <Row className="justify-content-center">
                                <Col xl={2} lg={2} md={3} sm={2} xs={2}>
                                    <img src={gatsbyColorIcon} alt="gatsby icon" className="tools-icons" />
                                </Col>

                                <Col xl={9} lg={9} md={9} sm={9} xs={10}>
                                    <h2 className="figCaption-heading" style={{ color: '#744C9E' }}><>Gatsby JS</></h2>
                                    <p className="figCaption-desc"><>Gatsby is a React-based open-source framework for creating websites and apps It's great whether you're building a portfolio site or blog or a high-traffic e-commerce store or company homepage</></p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={11} xs={11} className="tools-col">
                            <Row className="justify-content-center">
                                <Col xl={2} lg={2} md={3} sm={2} xs={2}>
                                    <img src={contentfulIcon} alt="contentful icon" className="tools-icons" />
                                </Col>

                                <Col xl={9} lg={9} md={9} sm={9} xs={10}>
                                    <h2 className="figCaption-heading" style={{ color: '#09ADF4' }}><>Contentful</></h2>
                                    <p className="figCaption-desc"><>More than a headless CMS Contentful is the API-first content management platform to create manage and publish content on any digital channel</></p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={11} xs={11} className="tools-col">
                            <Row className="justify-content-center">
                                <Col xl={2} lg={2} md={3} sm={2} xs={2}>
                                    <img src={angularIcon} alt="angular icon" className="tools-icons" />
                                </Col>

                                <Col xl={9} lg={9} md={9} sm={9} xs={10}>
                                    <h2 className="figCaption-heading" style={{ color: '#B52E31' }}><>Angular</></h2>
                                    <p className="figCaption-desc"><>Angular desc</></p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={11} xs={11} className="tools-col">
                            <Row className="justify-content-center">
                                <Col xl={2} lg={2} md={3} sm={2} xs={2}>
                                    <img src={prismicIcon} alt="prismic icon" className="tools-icons" />
                                </Col>

                                <Col xl={9} lg={9} md={9} sm={9} xs={10}>
                                    <h2 className="figCaption-heading" style={{ color: '#385AF5' }}><>Prismic</></h2>
                                    <p className="figCaption-desc"><>Prismic desc</></p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={11} xs={11} className="tools-col">
                            <Row className="justify-content-center">
                                <Col xl={2} lg={2} md={3} sm={2} xs={2}>
                                    <img src={reactIcon} alt="react icon" className="tools-icons" />
                                </Col>

                                <Col xl={9} lg={9} md={9} sm={9} xs={10}>
                                    <h2 className="figCaption-heading" style={{ color: '#04B3D2' }}><>React JS</></h2>
                                    <p className="figCaption-desc"><>React desc</></p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={11} xs={11} className="tools-col">
                            <Row className="justify-content-center">
                                <Col xl={2} lg={2} md={3} sm={2} xs={2}>
                                    <img src={netlifyIcon} alt="netlify icon" className="tools-icons" />
                                </Col>

                                <Col xl={9} lg={9} md={9} sm={9} xs={10}>
                                    <h2 className="figCaption-heading" style={{ color: '#4B839D' }}>Netlify</h2>
                                    <p className="figCaption-desc"><>Netlify desc</></p>
                                </Col>
                            </Row>
                        </Col>




                    </Row>
                </Container>
            </div>

            <div style={{ background: '#EE3958' }} className="ftr-top-border"></div>

            <div className="webAndSeo-sect-three py-5" style={{ background: 'black' }}>
                <Container>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="d-flex">
                            <img src={GatbsyWhite} alt="gatsby icon white" className="gatsby-icons" />

                            <img src={ReactWhite} alt="react icon white" className="react-icons" />
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                            <h2 className="heading"><>Gatsby JS Development</></h2>
                            <h3 className="sub-head clr-white pt-3"><>What is</><span style={{ color: '#EE3958', fontWeight: '600' }}><>Gatsby JS?</></span></h3>
                            <p className="desc clr-white"><>Gatsby JS Development desc</></p>
                            <Link to="/gatsby"><p className="learnMore-link clr-white unerline"><>Learn more about Gatsby JS Development</></p></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default (Services)
