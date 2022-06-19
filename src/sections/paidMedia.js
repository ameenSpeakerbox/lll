import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import '../styles/paidMedia.scss'
// import image1 from "../images/Social Dashboard.png"
// import image2 from "../images/Social strategy.png"
import gif1 from '../images/Social Dashboard (1).gif'
import gif2 from '../images/Social strategy.gif'
import Layout from "../components/layout"



const PaidMedia = () => {
  return(
    <Layout>

      <div className="fullPage" style={{backgroundColor:'black'}}>
        <Container className="container">
          
          <div className="headingSection">
            <h3 className="mainHeading">PAID MEDIA CAMPAIGNS</h3>
          </div>

          <div className="sections">

          {/* section One */}

            <div className="section1">

            
            
              <Row className="row1">
                <Col className="firstSec" xl = {6} lg = {6} md={6} sm = {6} xs={12}>
                  <img className="img1" src={gif1} alt=""/>
                  {/* <Image className="image1" src={image1}  alt="image1" /> */}
                </Col>
                
                <Col className="secondSec" xl = {6} lg = {6} md={6} sm = {6} xs={12}>
                  
                    <h3 className="subHead1">
                      We’re sales and ROI obsessed.
                    </h3>
                    <p className="paragraph1">
                      Our team of paid media practicioners with vast understanding digital platforms helpls you adopt the right strategy for your brand to run paid campaigns.For an immediate campaign boost and fast results, pay-per-click or paid campaigns are a profitable choice. PPC is one of the best and most cost-effective online marketing strategies. Pay-per-click ( PPC) advertising allows your business to take the charge of ad spend and get their brand offering in front of the right people at the right time and right place. 
                    </p>

                  
                </Col>
              </Row>
            </div>

            {/* section Two */}

            <div className="section2">
              <h3 className="subHead2">
                What do we offer you?
              </h3>
              <p className="paragraph2">
                Through PPC we test, research, and analyse, building winning strategies across all paid channels. 
              </p>
            </div>

            {/* section Three */}

            <div className="section3">
              <Row className="row3">
                
                <Col className="thirdSec" xl = {6} lg = {6} md={6} sm = {6} xs={12}>
                  <h3 className="subHead3">
                    Paid Media Strategy & Planning
                  </h3>
                  <p className="paragraph3">
                    Design your ad campaign objectives  
                    Find keyword relevant to your business goals 
                    Competitive analysis 
                    Campaign structure optimization 
                    Ad creative 
                    Landing page analysis 
                    Behavioural targeting 
                    Campaign optimization
                  </p>

                  <h3 className="subHead4">
                    Paid Media Management
                  </h3>
                  <p className="paragraph4">
                    Advanced bid strategies 
                    Creation of ad copy 
                    Audience segmentation 
                    Negative keyword management 
                    New campaign/product launches 
                    Daily, manual, budget management 
                    Conversion & ROI analysis 
                    Reporting & analysis
                  </p>
                  
                </Col>
                
                <Col className="fourthSec" xl = {6} lg = {6} md={6} sm = {6} xs={12}>
                  <img className="img2" src={gif2} alt=""/>
                  {/* <Image className="image2" src={image2}  alt="image2" /> */}
                </Col>
              </Row>
            </div>
            
          
            </div>
          </Container>
      </div>



    </Layout>
  )
}
  

export default (PaidMedia)
