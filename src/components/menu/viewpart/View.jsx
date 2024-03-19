import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa"
import ViewImg from "../../../assets/view_ban.png"
import ViewTwo from "../../../assets/view2.png"
import "./view.css"

const View = () => {
  return (
    <section id='view'>
        <Container>
            <Row>
          <Col lg={12}>
          <div className='view_left_right justify-content-space-between'>
              <div className='view_top_left'>
                <h2>View our projects</h2>
              </div>
            <div className='view_top_right'>
              <a href="#"><h4>view more &nbsp;&nbsp;< FaArrowRight /> </h4> </a>
            </div>
            </div>
          </Col>
            </Row>

            <Row>
                <Col lg={8}>
                <div className='view_left'>
              <img src={ ViewImg}  alt="view_ban"/>
              <div className='view_left_text'>
                <h4>Workhub office Webflow <br/>Webflow Design </h4>
                <a href="#"><p>View project &nbsp;&nbsp; < FaArrowRight /> </p> </a>
              </div>
            </div>
                </Col>
                <Col lg={4}>
                <div class="view_right">
              <div class="top_part"> 
                <img src={ ViewTwo } alt="view_hover1"/>
                <div class="top_part_text">
                  <h4>Unisaas Website <br/> Design </h4>
                  <a href="#"><p>View project &nbsp;	&nbsp; < FaArrowRight /></p></a>
                </div>
              </div>
              </div>
              <div class="down_part">
                <img src={ViewTwo } alt="view_hover2"/>
                <div class="down_part_text">
                  <h4>Unisaas Website <br/> Design </h4>
                  <a href="#"><p>View project &nbsp;	&nbsp; < FaArrowRight /></p></a>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default View