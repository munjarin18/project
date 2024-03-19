import React from 'react'
import "./menu.css"
import { Navbar,Container,Nav} from 'react-bootstrap'
import Logo from "../../assets/logo.png"

const Menu = () => {
  return (
    <Navbar expand="lg" className='menu_bg'>
    <Container>
      <Navbar.Brand href="#home">
        < img src={Logo} alt=""/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Features</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
        </Nav>
        <div className="contact">
                    <a href="#">Contact us</a>
              </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu