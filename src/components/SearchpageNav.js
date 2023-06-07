import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

function SearchNav(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">GBADs Data</Navbar.Brand>
        <Form className="d-flex align-items-start">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={props.search}
            />
            <Button variant="outline-secondary">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', marginLeft: '80%' }} navbarScroll>
                <Nav.Link href="#action1">FAQ</Nav.Link>
                <Nav.Link href="#action2">GBADs</Nav.Link>
                <Nav.Link href="#">Informatics</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SearchNav;
