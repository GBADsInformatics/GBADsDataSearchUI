import React, { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button, FormControl } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles/SearchNav.css";

function SearchNav(props) {
  const [searchText, setSearchText] = useState(props.search);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    // You can access the search query using e.target.elements.search.value
    console.log('Search query:', searchText);
    navigate({
      pathname: '/search/query',
      search: createSearchParams({
        criteria: searchText
      }).toString()
    })
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container className='nav-content'>
        <Row>
          <Col style={{marginTop: "1.2%"}}>
          <Navbar.Brand href="/search">GBADs</Navbar.Brand>
          </Col>
          <Col>
          <Nav className="me-auto fix-search-nav">
            <Nav.Link href="/search/faq">FAQ</Nav.Link>
            <Nav.Link href="#features">GBADs</Nav.Link>
            <Nav.Link href="#pricing">Informatics</Nav.Link>
          </Nav>
          </Col>
        </Row>
        <Row>
        <Form onSubmit={handleSearch} className="d-flex align-items-start">
            <div className="input-group">
              <Button type="submit" variant="outline-secondary rounded" onClick={handleSearch}>Search</Button>
              <FormControl id="main-search-text" type="text" name="search" placeholder="Search" className="mr-sm-2 rounded mainpage-search" value={searchText} onChange={handleSearchChange} />
            </div>
          </Form>
        </Row>
      </Container>
    </Navbar>
  );
}

export default SearchNav;
