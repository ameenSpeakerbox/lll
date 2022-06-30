import React from "react"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import strategyIcon from "../images/service.png"
import brandDevpIcon from "../images/service(1).png"
import webIcon from "../images/service(2).png"
import socialIcon from "../images/service(3).png"
import paidMediaIcon from "../images/service(4).png"
import digitalIcon from "../images/service(5).png"
import uiIcon from "../images/service(6).png"
import seoicon from "../images/service(7).png"
import videoIcon from "../images/service(8).png"
// import slideImg from "../images/bg.jpg"
import roundedImg from "../images/Ellipse.jpg"
import performanceIcon from "../images/icon(3).png"
import securityIcon from "../images/icon(4).png"
import cmsIcon from "../images/icon(5).png"
import seoIcon from "../images/icon(6).png"
import responsiveIcon from "../images/icon(7).png"
import quotes from '../images/quotes.png'
import video from "../videos/gif.mp4"

import designDevelopImg from '../images/DD_SPK.png'
import { Helmet } from 'react-helmet'
import '../styles/ourLeadership.scss'
// import vector from '../images/Vector 3.svg'
// import vector2 from '../images/Vector 2.svg'
// import vector3 from '../images/Vector 4.svg'
// import testimonialFigure from '../images/Ellipse 34.png'



const Index = (probs) => {

  






  const data = useStaticQuery(graphql`
  query{
    imgOne: file(relativePath: {eq:"ezgif.com-gif-maker (2).webp"}){
      childImageSharp{
        fixed(quality:100){
          ...GatsbyImageSharpFixed
        }
      }
    }

    imgTwo: file(relativePath: {eq:"ezgif.com-gif-maker.webp"}){
      childImageSharp{
        fixed(quality:100){
          ...GatsbyImageSharpFixed
        }
      }
    }

    imgThree: file(relativePath: {eq:"peter-olexa-pL7IreX9AGY-unsplash-11.jpg"}){
      childImageSharp{
        fixed{
          ...GatsbyImageSharpFixed
        }
      }
    }

    imgFour: file(relativePath: {eq:"peter-olexa-pL7IreX9AGY-unsplash-8.jpg"}){
      childImageSharp{
        fixed{
          ...GatsbyImageSharpFixed
        }
      }
    }

    imgWeb: file(relativePath: {eq:"png_web.png"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }

    imgLeaders: file(relativePath: {eq:"Rectangle-41.jpg"}){
      childImageSharp{
          fluid(maxWidth:1000,quality:100){
              ...GatsbyImageSharpFluid
          }
      }
    }
    
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "slider-img"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
  `)


  // const ourLeadership = [
  //   { name: 'Abshar Ahmed Hussain', pos: 'Founder and Director of Operations', image: data.imgLeaders.childImageSharp },
  //   { name: 'Abshar Ahmed Hussain', pos: 'Founder and Director of Operations', image: data.imgLeaders.childImageSharp },
  //   { name: 'Abshar Ahmed Hussain', pos: 'Founder and Director of Operations', image: data.imgLeaders.childImageSharp },
  //   { name: 'Abshar Ahmed Hussain', pos: 'Founder and Director of Operations', image: data.imgLeaders.childImageSharp },
  // ]

  // const testimonial = [
  //   { name: 'Andry Ford', pos: 'CEO at Whatever', feedback: "Every single person comes away and says - wow that's a really slick experience, that was so easy to use. I feel so much less stressed as I now know we’re doing everything by the book ", figure: testimonialFigure },
  //   { name: 'Andry Ford', pos: 'CEO at Whatever', feedback: "I feel so much less stressed ❤️ as I now know we’re doing everything by the book.", figure: testimonialFigure }
  // ]


  // const rotate180deg = {
  //   transform: 'scale(-1,1)'
  // }
  // const rotate0deg = {
  //   transform: 'scale(1)'
  // }


  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Speakerbox | Social Media Agency | Branding | Web Design Agency</title>
      </Helmet>
      <div className="index">
        <div className="section pb-5">

          <Row className="mt-10 frst-sec-row">

            <Col xl={8} lg={8} md={8} sm={10} xs={12} className="d-flex" style={{ justifyContent: 'center' }}>
              <div className="intro-text-body">
                <h6 className="clr-grey"   style={{ letterSpacing: ' 0.11em' }}>
                  <>CREATE, PUBLISH, AMPLIFY</>
                </h6>
                <h4 className="clr-white content-body" style={{ letterSpacing: ' -0.045em' }}>
                  <>A full service agency, built to represent the revolutionary transition from traditional advertising to modern digital marketing</>
                </h4>
                <Link to="/BeAClient" className="btn btn-danger my-3"><>Get In Touch</></Link>

              </div>
            </Col>

            <Col xl={4} lg={4} md={12} className="d-flex" style={{ justifyContent: 'flex-end', padding: '0' }}>
              <div className="carousel-body">
                <div className="image-border d-flex">
                  <div className="img-border-red "></div>
                  <div className="img-border-white "></div>
                </div>


                <Carousel>
                  {data.allFile.edges.map(edge => {
                    return (
                      <Carousel.Item>
                        <Img
                          className="d-block slider-img w-100"
                          fluid={edge.node.childImageSharp.fluid}
                          alt="First slide"
                        />

                      </Carousel.Item>
                    )
                  })}

                </Carousel>
              </div>

            </Col>
          </Row>


        </div>

        {/* 2nd section */}
        <div className="py-4 second-section">
          <Row>
            <Col xl={8} lg={8} md={8} sm={10} xs={12} className="d-flex" style={{ justifyContent: 'center' }}>
              <div className="intro-text-body d-flex">
                <h4 className="content-body ">
                  <>We are a group of individuals that are working towards a very common goal – to propel your brand into the intersection where trends, culture and attention meet</>
                </h4>
                <img src={quotes} alt="quotes icon" height="40" />
              </div>
            </Col>
            <Col xl={7} lg={7} md={7} sm={11} xs={11} className="d-flex pt-3" style={{ justifyContent: 'center' }}>
              <Row className="pt-1">
                <Col xl={3} lg={3} md={3} sm={3} xs={3} className=" m-auto">
                  <img src={roundedImg} alt="co-founder of speakerbox" className="rounded-circle" width="75"></img>
                </Col>
                <Col xl={9} lg={9} md={9} sm={9} xs={9} className="">
                  <p className="clr-white mt-3" style={{ letterSpacing: ' -0.03em', marginBottom: '0', fontSize: 'large', fontWeight: "500" }}><>Abshar Ahmed Hussain</></p>
                  <p className="clr-white size-medium mt-10px" style={{ fontWeight: '300' }}><>Co-Founder and Director of Operations</></p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        {/* 3rd section */}
        <div className="third-section py-5" >
          <Container>
            <Row>
              <Col xl={6} lg={6}>

              </Col>

              <Col>
                <h2 className="clr-white sec-two-head"><>A team that understands your Brand</></h2>
                <p className="clr-white pb-5 sec-two-cont">
                  <>Our combined creative and production team consists of writers, designers, art directors, editors – all working to produce quality content for every relevant social network keeping up with the rapid speed of culture, everything from video commercials to Snapchat filters</>
                </p>
              </Col>
            </Row>
          </Container>

        </div>

        {/* 4th section */}
        <div className="fourth-section pb-5">
          <Container>
            <Row className="d-flex image-section">
              <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                <Img fixed={data.imgOne.childImageSharp.fixed} className="image-one"></Img>
              </Col>
              {/* <Col xl={1} lg={1} md={1} sm={1} xs={1} className="display-none"></Col> */}
              <Col xl={7} lg={7} md={7} sm={7} xs={6}>
                <Img fixed={data.imgTwo.childImageSharp.fixed} className="image-two"></Img>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xl={5} lg={5} md={4}>
                {/* <img src={gif} alt="" className="image-three"></img> */}
                <video autoPlay loop muted className="image-three">
                  <source src={video} type="video/mp4"></source>
                </video>
                {/* <div className="embed-responsive embed-responsive-1by1">
                  <iframe className="embed-responsive-item" src={video}></iframe>
                </div> */}
                {/* <Img fixed={data.imgThree.childImageSharp.fixed} className="image-three"></Img> */}
              </Col>

              <Col xl={1} lg={1} md={1}></Col>
              <Col xl={6} lg={6} md={7}>
                <h3 className="clr-white sec-two-head"><>Your brand deserves more</></h3>
                <p className="clr-white pt-3 sec-two-cont">
                  <>With Social Media Management, Brand Positioning and Consulting, Paid Media Campaigns, Content Creation, Video Production, and much more, we have all the tools in-store to propel your brand off the roof</>
                </p>
              </Col>
            </Row>
          </Container>

        </div>

        <div className="btm-border">

        </div>


        <div style={{ backgroundColor: 'white' }}>
          <Container>
            <Row className="py-5">
              <Col xl={6} lg={6} md={7}>
                <p className=" size-large mt-5" style={{ color: '#EF484C', letterSpacing: ' 0.11em', marginBottom: '0', textTransform: 'uppercase' }}><>The future is digital</></p>
                <h3 className="h1-heading " style={{ letterSpacing: '-0.045em', fontWeight: '700' }}><>Positioning your business for the post-COVID-19 world</></h3>
                <p className="pt-3 sec-two-cont">
                  <>The pandemic exposed the lack of importance given by businesses towards digital media and technology, We at Speakerbox, are committed to providing our clients the best digital solutions to navigate their business into the next era of human civilization</></p>
              </Col>

              <Col xl={6} lg={6} md={5}>
                <Img fixed={data.imgFour.childImageSharp.fixed} className="image-four d-block m-auto"></Img>
              </Col>
            </Row>

            <Row className="py-4" id="services">
              <Col xl={12}>
                <h6 className="text-center" style={{ letterSpacing: '.11em' }}><>OUR SERVICES AT A GLANCE</></h6>
                <h2 className=" text-center sec-two-head">
                  <>We </> <span className="clr-red"><>work differently </></span><>because </><br></br><>we’re </> <span className="clr-red"><>built differently</></span>
                </h2>
              </Col>

            </Row>

            <Row className="py-4 d-flex justify-content-center services" >
              <Link to="/StrategyAndBrandPositioning" className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={strategyIcon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>Strategy and Brand Positioning</></h4>
                <p className=" size-medium services-content"><>An effective brand positioning strategy will maximize customer relevancy and competitive distinctiveness, in maximizing brand value</></p>
              </Link>

              {/* <Col xl={4} lg={4} md={6} sm={6}> */}
              <Link to="/branding" className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={brandDevpIcon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>Brand identity development</></h4>
                <p className=" size-medium services-content"><>Branding involves creating a seal of trust and consistency and conveying it among your audience, on how you want your brand to be represented</></p>
              </Link>
              {/* </Col> */}
              <Link to="/webAndSeo" className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={webIcon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>Web Design and Development</></h4>
                <p className=" size-medium services-content"><>Premium purpose built websites with optimum perfomance  and rock solid security features</></p>
              </Link>
              <Link to="/socialMediaMarketing" className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={socialIcon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>Social Media Marketing</></h4>
                <p className=" size-medium services-content"><>Posts that inspire, educate and entertain, brand advocate generating community management, meticulously measured and reported upon in a simple to understand way</></p>
              </Link>
              <Link className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={paidMediaIcon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>Paid Media Campaigns</></h4>
                <p className=" size-medium services-content"><>Involves targeting regional or national channels, B2C or B2B initiatives, external or internal audiences, we will work in partnership with you to ensure a successful result</></p>
              </Link>

              <Link className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={digitalIcon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>Digital Solutions and Ecommerce</></h4>
                <p className=" size-medium services-content"><>Our team is well equipped to help to thrive in ecommerce as well as several other customer-experience-enhancing digital solutions</></p>
              </Link>

              <Link className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={uiIcon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>UI/UX Design</></h4>
                <p className=" size-medium services-content"><>Our UI/UX team designs user interfaces for mobile apps and web products that increase conversion, reduce cost of maintenance and build a consistent user experience</></p>
              </Link>

              <Link className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={seoicon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>Search Engine Optimization</></h4>
                <p className=" size-medium services-content"><>Our team of expert SEOs brings proven SEO strategies & tactics to help your business not only grow impression share and website traffic but also conversions</></p>
              </Link>

              <Link className="card col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <img src={videoIcon} alt="strategy icon" style={{ width: '2rem' }}></img>
                <h4 className="pt-3 card-head"><>Video Ad Production</></h4>
                <p className=" size-medium services-content"><>Using state-of-the-art equipment, we shoot on location or in studio and edit content from concept through final production</></p>
              </Link>


            </Row>


          </Container>
        </div>



        <div className="web-section">
          <div className="box-web clr-white">

            <Row className="justify-content-center">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="col">

                <Row>
                  <Col xl={7} lg={9} md={8} sm={9} xs={12}>

                    <p style={{ letterSpacing: ' 0.11em', marginBottom: '0', textTransform: 'uppercase' }}>
                      <>Web Design and Development</>
                    </p>

                    <h1 className="" style={{ letterSpacing: " -0.045em", fontSize: 'xx-large' }}>
                      <>Premium Bespoke Web Development</>
                    </h1>
                    <p>
                      <>Premium purpose built websites with optimum perfomance  and rock solid security features</>
                    </p>
                  </Col>
                </Row>

                <Row >
                  <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                    <img src={performanceIcon} alt="performance Icon" style={{ width: '75%' }} ></img>
                  </Col>
                  <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                    <p className="web-features" style={{ marginBottom: '0' }}><>Performance</></p>
                  </Col>

                  <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                    <img src={securityIcon} alt="performance Icon" style={{ width: '75%' }}></img>
                  </Col>
                  <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                    <p className="web-features" style={{ marginBottom: '0' }}><>Solid Security</></p>
                  </Col>

                  <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                    <img src={cmsIcon} alt="performance Icon" style={{ width: '75%' }}></img>
                  </Col>
                  <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                    <p className="web-features" style={{ marginBottom: '0' }}><>Headless CMS</></p>
                  </Col>

                  <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                    <img src={seoIcon} alt="performance Icon" style={{ width: '75%' }}></img>
                  </Col>
                  <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                    <p className="web-features" style={{ marginBottom: '0' }}><>SEO Friendly</></p>
                  </Col>
                  <Col xl={2} lg={2} md={2} sm={2} xs={3} className="py-3">
                    <img src={responsiveIcon} alt="performance Icon" style={{ width: '75%' }}></img>
                  </Col>
                  <Col xl={10} lg={10} md={10} sm={10} xs={9} className="my-auto">
                    <p className="web-features" style={{ marginBottom: '0' }}><>Responsive</></p>
                  </Col>

                </Row>

              </Col>

              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="col">
                <div className="d-flex justify-content-center " style={{ alignItems: 'center' }}>
                  <div style={{ width: '100%' }}>
                    <Img fluid={data.imgWeb.childImageSharp.fluid} className="m-auto d-block" />

                  </div>
                </div>
                <img src={designDevelopImg} alt="" height="95px" className="m-auto d-block"></img>
              </Col>
            </Row>

          </div>
        </div>


        {/* <section style={{ background: '#fff' }} className="py-5 our-leadership">
          <Container>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12} className="text-center">
                <h1 className="text-700 title">Our Team</h1>
                <p className="text-500 desc">
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                     </p>
              </Col>


              {ourLeadership.map(data => {
                return (
                  <Col xl={3} lg={3} md={3} sm={6} xs={6} className="flex justify-content-center leaders" style={{ alignItems: 'center' }}>
                    <Img fluid={data.image.fluid} className="w-100 images" />
                    <h2 className="name text-700">{data.name}</h2>
                    <p className="pos text-500">{data.pos}</p>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </section>

        <section style={{ background: '#fff' }} className="py-4 testimonial">
          <Row style={{ justifyContent: 'space-between' }}>
            <Col xl={2} lg={2} md={2} sm={2} xs={1} >
              <img
                src={vector}
                alt=""
                className="vector-1"
                style={currentLang === 'en' ? rotate0deg : rotate180deg}
              />
            </Col>
            <Col xl={6} lg={6} md={6} sm={7} xs={9}>
              {testimonial.map(data => {
                return (
                  <div className="py-4 testimonial-body">
                    <p className="text-700 feedback">{data.feedback}</p>
                    <div className="d-flex" style={{ alignItems: 'center' }}>
                      <img src={data.figure} alt="" className="figure" />
                      <p className="mx-2 text-700 name">{data.name} <br></br>
                        <span className="text-300 pos">{data.pos}</span>
                      </p>
                    </div>
                  </div>

                )
              })}
            </Col>
            <Col xl={2} lg={2} md={2} sm={2} xs={1} className="d-flex" style={{ justifyContent: 'flex-end' }}>
              <img
                src={vector2}
                alt=""
                className="vector-2"
                style={currentLang === 'en' ? rotate0deg : rotate180deg}
              />
            </Col>
          </Row>

          <Row className="justify-content-center py-5" >
            <Col xl={8} lg={8} md={8} sm={9} xs={10} className="wrapper ">
              <div className="col1">
                <div>
                  <p className="text-700 m-0 title">Found what your’re looking for?</p>
                  <p className="desc text-400">Great! Now let us know </p>
                </div>

              </div>

              <div className="col2">
                <img
                  src={vector3}
                  alt=""
                  className="vector"
                  style={currentLang === 'en' ? rotate0deg : rotate180deg}
                />
                <Link to="" className="btn">Get in Touch</Link>
              </div>
            </Col>
          </Row>
        </section> */}



      </div>
    </Layout>
  )
}



export default (Index)
