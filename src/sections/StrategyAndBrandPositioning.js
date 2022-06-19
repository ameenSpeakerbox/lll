import React from "react"
import { Row, Image, Col, Container } from 'react-bootstrap';
import "../styles/strategy.scss";
import vector from "../images/Business Plan-bro 1.webp"
import Layout from '../components/layout'



const Strategy = () => {



    return (
        <Layout>
            <div className="Strategy" style={{ background: 'black' }}>

                <Container className="wrapper">
                    <div className="headDiv">
                        <h2 className="heading">
                            STRATEGY AND BRAND POSITIONING
                        </h2>
                    </div>
                    <Row className="sections">
                        <Col className="imageSec" xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Image className="vectorImage" src={vector} alt="vectorImage" />
                        </Col>

                        <Col className="contentSec" xl={6} lg={6} md={6} sm={6} xs={12}>
                            <h2 className="subHeading">
                                We’re the actual strategists you’re looking for.
                            </h2>
                            <p className="content1">
                                Our deep understanding of current and emerging digital platforms allows us to study and evaluate your strategic outlook, identify gaps in branding, and recommend revisions that will allow you to fully capitalize on the power of your brand.
                            </p>
                        </Col>

                    </Row>

                    <div className="contents">

                        <p className="content2">
                            Our team is commited to help you reach breakthrough results by assessing your brand perfomance metrics and harness it deliver to creative insights about the unmet needs of your customers, and the most authentic ways to reach them.
                        </p>
                        <p className="content2">
                            We conduct regular meetings with our clients to ensure that our client makes the best strategic move as we navigate through the ever evolving market.
                        </p>

                    </div>
                </Container>


            </div>
        </Layout>
    )
}

export default (Strategy)