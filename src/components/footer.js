import React from 'react'
import { Row,Col,Navbar } from 'react-bootstrap'
import {Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'
import '../styles/header.scss'
import '../styles/footer.scss'
import spklogo2 from '../images/Speakerbox_CorpLogo-02 1.png'
import spklogo from '../images/logo.png'
import locationIcon from '../images/location.png'

const footer =() =>{

    
    return(
        <footer style={{background: '#040404',overflow:'hidden'}}>
            <div style={{background: '#EE3958'}} className="ftr-top-border"></div>
            <div className="pt-5">
                <Row className="footer-row">
                    <Col xl={4} lg={4} md={3} sm={12} xs={12} className="ftr-col-4">
                        <Navbar>
                            <ul className="nav-item" > 
                            
                                <li className="nav-link">
                                    <Link className="color-white" to="/">home</Link>
                                    </li>
                                
                                {/* <li className="nav-link">
                                    <Link className="color-white" to="/">about</Link>
                                    </li> */}
                                
                                <li className="nav-link">
                                    <Link  className="color-white" to="/#services">service</Link>
                                    </li>
                                
                                <li className="nav-link">
                                    <Link  className="color-white" to="/caseStudies">case studies</Link>
                                    </li>
                                
                                

                                
                            </ul>
                        </Navbar>
                    </Col>

                    <Col xl={2} lg={2} md={2} sm={6} xs={6} className="my-auto col-logos">
                            <img src={spklogo2} alt="" className="spk-logos media-llp"></img>
                    </Col>
                    {/* <div className="vertical-line"></div> */}
                    <Col xl={2} lg={2} md={2} sm={5} xs={5} className="my-auto ">
                            <img src={spklogo} alt="" className="spk-logos" ></img>
                    </Col>

                    <Col xl={4} lg={4} md={4} sm={12} xs={12}  className="ftr-col-4">
                        <div className="address">
                            <div className="d-flex">
                                <img src={locationIcon} alt="location icon" height="20px" className="location-icon ml-3 mr-2"></img>
                            
                                <p style={{textTransform:'capitalize',fontSize:'medium'}} className="color-white">
                                <span style={{fontWeight:'700'}}>india</span><br></br>
                                Building No 42/219,<br></br>
                                KP Tower, Thurakkal Bypass Junction,<br></br>
                                Manjeri, Malappuram, Kerala<br></br>
                                PO 676121
                                </p>
                            </div>
                        </div>
                    </Col>


                </Row>

                <Row style={{borderTop:'1px solid #5F5F5F',marginTop:'15px'}}>
                    <Col>
                    <p className="color-white copyright-txt">© 2020 Speakerbox Media LLP ©  All Rights Reserved</p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}
export default footer