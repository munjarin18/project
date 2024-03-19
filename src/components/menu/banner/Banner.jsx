import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import BannerImg from "../../../assets/ban img.png"
import { FaArrowRight } from "react-icons/fa"
import "./banner.css"


const Banner = () => {
  return (
  <section id='home_hero'>
 <Container >
    <Row>
        <Col lg={5}>
        <div class="home_text">
                <h2>Building stellar websites for early startups</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt. </p>
                </div>
                <div class="home_btn">
                    <a href="#">View our work</a>
                </div>
                <div class="home_view">
                  <a class="view" href="#">
                  View Pricing < FaArrowRight />
                  </a>
                </div>
        </Col>
        <Col lg={6}>
        <div class="home_img" >
                <img src={BannerImg} class="w-100" alt="about" />
              </div>
        </Col>
    </Row>
   </Container>

  </section>
  )
}

export default Banner