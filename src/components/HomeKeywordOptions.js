import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import "./styles/HomeKeywordOptions.css";
import { Form, Button, Modal } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import 'animate.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { createSearchParams, useNavigate } from 'react-router-dom';


function HomeKeywordOptions(props){
    const [query, setQuery] = useState(props.query);
    const [keywords, setKeywords] = useState(props.keywords);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [newKeyword, setNewKeyword] = useState("");

    // Just a list of all the keywords rather than an object
    const [collectiveKeywordList, setCollectiveKeywordList] = useState([]);
    // const collectiveKeywordList = [...keywords.countries, ...keywords.species, ...keywords.years];

    const openModal = () => {
        setNewKeyword(""); // Clear the input field when opening the modal
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const saveChanges = () => {
        console.log("SAVE CHANGES");
        console.log(collectiveKeywordList);
        if (newKeyword) {
            // Update the list of keywords with the new one
            setCollectiveKeywordList([...collectiveKeywordList, newKeyword]);
        }
        closeModal();
        console.log("Child:");
        console.log(newKeyword);
        console.log(collectiveKeywordList);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && showModal===true) {
            e.preventDefault(); // Prevent page reload
            saveChanges(); // Execute the saveChanges function
        }
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

    const updateQuery = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        await fetchKeywordsFromApi(query);
        resetButtonStates();
    }

    // useEffect(() => {
    //     // Fetch keywords from the API once the component has loaded
    //     keywords = props.keywords;
    //   }, []);

    // const initialState = collectiveKeywordList.reduce((acc, option) => {
    //     acc[option] = true;
    //     return acc;
    //   }, {});

    
    const [buttonStates, setButtonStates] = useState({});
    // const [buttonStates, setButtonStates] = useState(initialState);


    const resetButtonStates = () => {
        var newState = collectiveKeywordList.reduce((acc, option) => {
            acc[option] = true;
            return acc;
          }, {});
          setButtonStates(newState);
    }
    
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

    useEffect(() => {
        if (keywords.countries !== undefined){
            const updatedCollectiveKeywordList = [...keywords.countries, ...keywords.species, ...keywords.years];
            setCollectiveKeywordList(updatedCollectiveKeywordList);
        }
      }, [keywords]);

      useEffect(() => {
        const initialState = collectiveKeywordList.reduce((acc, option) => {
          acc[option] = true;
          return acc;
        }, {});
      
        setButtonStates(initialState);
      }, [collectiveKeywordList]);


    return(
        <>
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
                    <div className="d-flex align-items-center check">
                        <Form.Label className='align-left'><b>Keywords</b></Form.Label>
                        {/* Add your button here */}
                        <Button id="add-button-home" onClick={openModal}>+</Button>
                    </div>
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
                </Container>
                <Button style={{marginTop: '2%', animationDelay: "2s"}} className="animate__animated animate__fadeIn" onClick={performLegitSearch}>Search</Button>
            </Form>
        </Container>
        <Modal animation={true} size="lg" show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add keyword</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>New keyword</Form.Label>
                            <Form.Control
                                type="keyword"
                                placeholder="Camels"
                                autoFocus
                                value={newKeyword}
                                onChange={(e) => setNewKeyword(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button className="branded-orange" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HomeKeywordOptions;
