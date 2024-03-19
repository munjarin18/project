import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PointerImg from "../../../assets/pointer 1(1).png"
import { FaArrowRight } from "react-icons/fa"
import "./home_text.css"

const HomeText = () => {
  return (
  <section id='home_text'>
    <Container>
   <Row>
  <Col lg={4}>

  <div class="background_text">
                <h2>How we work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
              <div class="one">
                <a class="btn_text" href="#">
                  Get in touch with us < FaArrowRight />
                  </a>
              </div>
  </Col>
  <Col lg={{span:4,offset:1}}>
    <Row>
      <Col lg={6}>
      <div class="card_two">
                    <img src={PointerImg} alt="pointer1"/>
                    <h3>Design</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
      </Col>
      <Col lg={6}>
      <div class="card_two">
                    <img src={PointerImg} alt="pointer1"/>
                    <h3>Design</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
      </Col>
      <Col lg={6}>
      <div class="card_two">
                    <img src={PointerImg} alt="pointer1"/>
                    <h3>Design</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
      </Col>
      <Col lg={6}>
      <div class="card_two">
                    <img src={PointerImg} alt="pointer1"/>
                    <h3>Design</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
      </Col>
    </Row>
  </Col>
   </Row>
    </Container>
  </section>
  )
}

export default HomeText