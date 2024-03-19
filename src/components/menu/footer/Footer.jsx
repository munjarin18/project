import React from 'react'
import { Container,Row,Col, } from 'react-bootstrap'
import Logo from "../../../assets/logo.png"
import { FaFacebook,FaTwitter,FaInstagramSquare,FaLinkedin} from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  return (
    <footer id='footer'>
        <Container>
            <Row>
            <Col lg={5}>
            <div class="footer_logo">
                    <img src={Logo} alt="logo"/>
                    <h6>We are always open to discuss your project and <br/>improve your online presence.</h6>
                  </div>
                  <div class="footer_details">
                    <div class="email">
                      <h5>Email me at</h5>
                      <a href="#">contact@website.com</a>
                    </div>
                    <div class="call">
                      <h5>Call us</h5>
                      <a href="#">0927 6277 28525</a>
                    </div>
                  </div>
            </Col>
            <Col lg={{span:4,offset:1}}>
            <div class="footer_talk">
                    <h2>Lets Talk!</h2>
                    <p>We are always open to discuss your project, 
                    improve your online presence and help with your UX/UI design challenges.</p>
                    <div class="icons">
                      <a href="#"><FaFacebook /></a>
                      <a href="#"> <FaTwitter /></a>
                      <a href="#"> <FaInstagramSquare /></a>
                      <a href="#"><FaLinkedin /></a>
                    </div>
                  </div>
            </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer