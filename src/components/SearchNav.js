import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button, FormControl } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles/SearchNav.css";

function IdentifyURL(){
  try{
    // Get the current URL
    const currentUrl = window.location.href;
    // Split the URL by '/' to extract the parts
    const urlParts = currentUrl.split('/');
    // Find the index of 'query' in the URL
    const queryIndex = urlParts.indexOf('query');
    // Check if 'query' is found in the URL
    if (queryIndex !== -1 && queryIndex + 1 < urlParts.length) {
      // Get the value after 'query'
      var valueAfterQuery = urlParts[queryIndex + 1];
      // Check if the value contains a '?'
      if (valueAfterQuery.includes('?')) {
        // Split the value to remove everything after '?'
        valueAfterQuery = valueAfterQuery.split('?')[0];
      }
      return ("/" + valueAfterQuery);
    } else {
      return "/data";
    }
  }
  catch (error){
    // console.log("ERROR:")
    // console.log(error)
    return "/data";
  }
}

function SearchNav(props) {
  const [searchText, setSearchText] = useState(props.search);


  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    var path = '/search/query' + IdentifyURL();
    props.sendDataToParent(path, searchText);
  };

  return (
    <Navbar expand="lg" sticky='top' id="main-nav">
      <Container className='nav-content'>
        <Row id='search-nav-text'>
          <Col style={{marginTop: "1.2%"}}>
          <Navbar.Brand href="/search" id='brand-title'>GBAD<span style={{color: '#FF8029'}}>s</span> TAIL</Navbar.Brand>
          </Col>
          <Col>
          <Nav className="me-auto fix-search-nav">
            <Nav.Link href="https://animalhealthmetrics.org/">GBADs</Nav.Link>
            <Nav.Link href="/search/faq">Support</Nav.Link>
            <Nav.Link href="https://www.gbadske.org/">Informatics</Nav.Link>
          </Nav>
          </Col>
        </Row>
        <Row>
        <Form onSubmit={handleSearch} className="d-flex align-items-start">
            <div className="input-group">
              <Button type="submit" id='search-b' variant="outline-secondary rounded" onClick={handleSearch}>Search</Button>
              <FormControl id="main-search-text" type="text" name="search" placeholder="Search" className="mr-sm-2 rounded mainpage-search" value={searchText} onChange={handleSearchChange} />
            </div>
          </Form>
        </Row>
      </Container>
    </Navbar>
  );
}

export default SearchNav;
