import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Topbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Daniel Wellington</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Hot Items</Nav.Link>
              <Nav.Link href="#pricing">Best Sellers</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Watches</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Jewellary</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fashion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Soldout Items</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                Waheed Shahzad
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>        
        );
}

export default Topbar;