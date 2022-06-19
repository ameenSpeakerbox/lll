import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap'
import Link from 'gatsby-link'
import '../../styles/style.scss'
import '../../styles/header.scss'
import logo from '../../images/logo.png'
import strategyIcon from "../../images/service.png"
import brandDevpIcon from "../../images/service(1).png"
import webIcon from "../../images/service(2).png"
import socialIcon from "../../images/service(3).png"
import paidMediaIcon from "../../images/service(4).png"
import digitalIcon from "../../images/service(5).png"
import uiIcon from "../../images/service(6).png"
import seoicon from "../../images/service(7).png"
import videoIcon from "../../images/service(8).png"
// import { LanguageContext } from '../../context/SwitchLang/LanguageContext';



const Header = (props) => {
    // const { Language, setLanguage } = useContext(LanguageContext)




    const dropDownItems = [
        { icon: strategyIcon, title: 'Strategy and Brand Positioning', url: 'StrategyAndBrandPositioning', },
        { icon: brandDevpIcon, title: 'Brand identity development', url: 'branding', },
        { icon: webIcon, title: 'Web Design and Development', url: 'webAndSeo', },
        { icon: socialIcon, title: 'Social Media Management', url: 'socialMediaMarketing', },
        { icon: paidMediaIcon, title: 'Paid Media Campaigns', url: 'paidMedia', },
        { icon: digitalIcon, title: 'Digital Solutions and Ecommerce', url: 'StrategyAndBrandPositioning', },
        { icon: uiIcon, title: 'UI/UX Design', url: 'StrategyAndBrandPositioning', },
        { icon: seoicon, title: 'Search Engine Optimization', url: 'StrategyAndBrandPositioning', },
        { icon: videoIcon, title: 'Video Ad Production', url: 'StrategyAndBrandPositioning', },
    ]


    return (
        <header>
            <Container fluid>
                <Navbar expand="lg" >

                    <Navbar.Brand>

                        <Link to="/">

                            <img className="logo-icon" style={{ height: "75px" }} src={logo} alt=""></img>

                        </Link>
                    </Navbar.Brand>

                    <div className="toggle-lang-btn">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav d-flex" style={{ justifyContent: 'flex-end' }}>
                            <Nav className="">
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link to="/" className="nav-link"><>home</></Link>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link>

                                        <NavDropdown title={<>Services</>} id="basic-nav-dropdown" className="service-dropdown" >
                                            {dropDownItems.map(value => {
                                                return (
                                                    <NavDropdown.Item >
                                                        <Link to={`/${value.url}`} style={{ color: 'white' }}>
                                                            <span>
                                                                <img src={value.icon} alt="" width="25" className="m-2" />
                                                            </span>
                                                            <>{value.title}</></Link>
                                                    </NavDropdown.Item>
                                                )
                                            })}


                                        </NavDropdown>
                                    </Nav.Link>

                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link>
                                        <Link to="/caseStudies" className="nav-link mr-2"><>case studies</></Link>
                                    </Nav.Link>

                                </Nav.Item>




                                <Nav.Link>
                                    <Link to="/BeAClient" className="nav-link btn btn-outline-danger"><>Be A Client</></Link>
                                </Nav.Link>

                            </Nav>
                            <Nav.Item className="mr-3">




                            </Nav.Item>
                        </Navbar.Collapse>

                        
                    </div>

                </Navbar>
            </Container>


        </header>
    )
}


export default (Header)
