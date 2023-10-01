import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import "./styles/HomeKeywordOptions.css";
import { Form, FormControl, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import 'animate.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


function HomeKeywordOptions(props){
    const [query, setQuery] = useState(props.query);
    const [keywords, setKeywords] = useState(props.keywords);
    const countries = keywords.country;
    const species = keywords.species;
    const years = keywords.year;
    const navigate = useNavigate();

    // Just a list of all the keywords rather than an object
    const collectiveKeywordList = countries.concat(species, years);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    // Function to fetch keywords from an API
    const fetchKeywordsFromApi = async (theSearchQuery) => {
        try {
        // Replace this with your actual API call to fetch keywords
        const baseUrl = "https://www.gbadske.org/search/api/search";
        // Encode the sentence to ensure it's safe for use in a URL
        const encodedSentence = encodeURIComponent(theSearchQuery);

        // Combine the base URL with the query parameter
        const urlWithQuery = `${baseUrl}?query=${encodedSentence}`;

        const response = await axios.get(urlWithQuery);

        const data = response.data;
        setKeywords(data);
        // Call sendDataToParent to send keywords back to the parent
        } catch (error) {
        console.error('Error fetching keywords:', error);
        }
    };

    const updateQuery = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        fetchKeywordsFromApi(query);
    }

    // useEffect(() => {
    //     // Fetch keywords from the API once the component has loaded
    //     keywords = props.keywords;
    //   }, []);

    const initialState = collectiveKeywordList.reduce((acc, option) => {
        acc[option] = true;
        return acc;
      }, {});

    const [buttonStates, setButtonStates] = useState(initialState);
    
    // Function to handle button click and update the state
    const handleOptionClick = (value) => {
        setButtonStates((prevState) => ({
          ...prevState,
          [value]: !prevState[value], // Toggle the checked state
        }));
      };  
      
    const performLegitSearch= (e) => {
        e.preventDefault();
        var sendKeywords = [];
        for (const [key, value] of Object.entries(buttonStates)) {
            if (value === true){
                sendKeywords.push(key);
            }
        }
        const queryParams = {
            criteria: query,
            keywordList: sendKeywords
          };
          queryParams.keywordList = queryParams.keywordList.join(',');
        navigate({
            pathname: '/search/query/data',
            search: createSearchParams(queryParams).toString()
            })
    }


    return(
        <Container className="main-keyword-container">
            <Form onSubmit={updateQuery} className='main-options-form'>
                <Form.Group className="mb-3">
                    <Form.Label><b>Your Query</b></Form.Label>
                    <InputGroup>
                        <Form.Control
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        onSubmit={updateQuery}
                        id="query-bar"
                        />
                        <Button variant="outline-secondary rounded-start" style={{borderRadius: '5%'}} onClick={updateQuery} id="update-query-b">Update Query</Button>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 keyword-home-form">
                    <Form.Label className='align-left'><b>Keywords</b></Form.Label>
                    {(collectiveKeywordList !== undefined && collectiveKeywordList.length !== 0) ? (
                        <ToggleButtonGroup name="ml-api" className="keyword-parent-homepage">
                            {collectiveKeywordList.map((item, index) => (
                                <div key={index} className="keyword-wrapper">
                                    <ToggleButton onClick={() => handleOptionClick(item)} className={`btn ${buttonStates[item] ? 'keyword-homepage-selected' : 'keyword-homepage-disabled'}`}>{item}</ToggleButton>
                                </div>
                            ))}
                        </ToggleButtonGroup>
                    ) : (
                        <div>No keywords detected. Please enhance your query and try again.</div>
                    )}
                </Form.Group>

                <Container className='semantic-layer-parent'>
                    <h2 style={{fontWeight: "normal", animationDelay: "1s"}} className='animate__animated animate__fadeIn'>We enriched your query with our semantic layer</h2>
                    <h3 style={{fontWeight: "lighter", animationDelay: "1.5s"}} className='animate__animated animate__fadeInUp'>Select more terms to expand your search</h3>
                    {/* {(collectiveKeywordList !== undefined && collectiveKeywordList.length !== 0) ? (
                    <Form.Group className="mb-3">
                        <ToggleButtonGroup name="ml-api">
                            <div className="keyword-parent-homepage">
                            {collectiveKeywordList.map((item) => (
                                <ToggleButton onClick={() => handleOptionClick(item)} className={`btn ${buttonStates[item] ? 'keyword-homepage-selected' : 'keyword-homepage-disabled'}`}>{item}</ToggleButton>
                            ))}
                            </div>
                        </ToggleButtonGroup>
                    </Form.Group>
                    ) : (
                    <div>No keywords detected. Please enhance your query and try again.</div>
                    )} */}
                </Container>
                <Button style={{marginTop: '2%', animationDelay: "2s"}} className="animate__animated animate__fadeIn" onClick={performLegitSearch}>Search</Button>
            </Form>
        </Container>
    );
}

export default HomeKeywordOptions;
