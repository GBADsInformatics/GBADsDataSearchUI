import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { createSearchParams, useNavigate } from 'react-router-dom';
import "./styles/MainpageSearchBar.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
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
    <Container className='main-search-container'>
        <Form onSubmit={handleSearch}>
        <div className="input-group">
            <FormControl id="main-search-text" type="text" name="search" placeholder="Search" className="mr-sm-2 rounded-left mainpage-search" value={searchText} onChange={handleSearchChange} />
            <div className="input-group-append">
            <Button type="submit" variant="outline-secondary rounded-right" onClick={handleSearch} id="search-icon">
                <FontAwesomeIcon icon={faSearch} />
            </Button>
            </div>
        </div>
        <Button variant="secondary" id="search-g-data" onClick={handleSearch}>Search GBADs Data</Button>
        <Container id="mainpage-link">
            <a href="https://gbadske.org" target="_blank" rel="noreferrer" >Data, metadata, models, and more!</a>
        </Container>
        </Form>
    </Container>
  );
};

export default SearchBar;

