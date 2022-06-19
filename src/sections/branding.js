import React from 'react'
import { Row, Image, Col, Container } from 'react-bootstrap';
import vector from "../images/Design Process-pana 1.webp"
import Layout from '../components/layout';
import "../styles/strategy.scss";



const BrandIdentity = () => {
  return (
    <Layout>
      <div className="Strategy" style={{ background: 'black' }}>

        <Container className="wrapper">
          <div className="headDiv">
            <h2 className="heading">
              BRAND IDENTITY DEVELOPMENT
          </h2>
          </div>
          <Row className="sections">

            <Col className="imageSec" xl={6} lg={6} md={6} sm={6} xs={12}>
              <Image className="vectorImage" src={vector} alt="vectorImage" />
            </Col>

            <Col className="contentSec" xl={6} lg={6} md={6} sm={6} xs={12}>
              <h2 className="subHeading">
                At the heart of branding lies a journey of self-discovery.
            </h2>
              <p className="content1">
                A brand’s identity is the visual expression of a brand that is communicated to the outside world, and includes its name, logo, communications, and visual appearance. A brand identity creates an emotional connection and reflects the brand positioning and desired image.
            </p>
            </Col>

          </Row>

          <div className="contents">

            <p className="content2">
              Our branding services are tried and tested, yet flexible enough to accommodate your unique and optimum needs. By adopting a strong brand strategy and digital marketing plan, we facilitate a strong connect between your consumers and your brand, ultimately leading to a better brand experience and improved brand recall.
          </p>
            <h2 className="subHeading2">
              What you can expect from the team?
          </h2>
            <p className="content3">
              Our research team will study your brand, rediscover its core tenets, and reintegrate its identity. We will then repackage and reposition your brand in a manner that complements your company’s futuristic vision and strategic goals. Our strategic design and communication team get on the job, and rake up a series of impressive creatives that are bound to captivate and stimulate your consumer group.
          </p>
            <p className="content4">
              We conduct regular meetings with our clients to ensure that our client makes the best strategic move as we navigate through the ever evolving market.
          </p>

          </div>
        </Container>


      </div>
    </Layout>
  )
}

export default BrandIdentity
