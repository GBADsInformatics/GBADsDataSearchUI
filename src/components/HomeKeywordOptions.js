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
    const [selectedOption, setSelectedOption] = useState("NA");
    const [collectiveKeywordList, setCollectiveKeywordList] = useState([]);

    const [enrichedKeywords, setEnriched] = useState([]);

    const animalData = {
        "Cattle": ["Bovine", "Cows", "Steers", "Heifers"],
        "Chicken": ["Poultry", "Hens", "Roosters", "Broilers"],
        "Dog": ["Canines", "Puppies", "Breeds", "Domestic Dogs"],
        "Cat": ["Felines", "Kittens", "Breeds", "Domestic Cats"],
        "Camel": ["Dromedaries", "Bactrian Camels", "Camelids", "Desert Animals"],
        "Sheep": ["Ovine", "Ewes", "Rams", "Lambs"],
        "Pig": ["Swine", "Sows", "Boars", "Piglets"],
        "Horse": ["Equine", "Mares", "Stallions", "Foals"],
        "Donkey": ["Equids", "Jennies", "Jacks", "Mules"],
    }

    function findMatchingTerms(userInput) {
        userInput = userInput.toLowerCase(); // Convert to lowercase for case-insensitive matching
      
        const results = [];
      
        // Check if the userInput matches the key exactly
        if (animalData.hasOwnProperty(userInput)) {
          results.push(animalData[userInput]);
        }
      
        // Check if the userInput is a substring of the key
        for (const key in animalData) {
          if (key.toLowerCase().includes(userInput)) {
            results.push(animalData[key]);
          }
        }
      
        // Check if the userInput is one of the values in the arrays
        for (const key in animalData) {
          const values = animalData[key];
          for (const value of values) {
            if (value.toLowerCase() === userInput) {
              results.push(values.filter((v) => v !== value));
            } else if (value.toLowerCase().includes(userInput)) {
              results.push(values.filter((v) => v !== value));
            }
          }
        }
      
        return results.flat();
      }


    // const collectiveKeywordList = [...keywords.countries, ...keywords.species, ...keywords.years];

    const openModal = () => {
        setNewKeyword(""); // Clear the input field when opening the modal
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedOption("NA");
    }

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const addToJsonKeywords = () =>{
        if (selectedOption==="species"){
            const updatedKeywords = { ...keywords };
            updatedKeywords.species.push(newKeyword);
            setKeywords(updatedKeywords);
        }
        if (selectedOption==="country"){
            const updatedKeywords = { ...keywords };
            updatedKeywords.countries.push(newKeyword);
            setKeywords(updatedKeywords);
        }
        if (selectedOption==="year"){
            const updatedKeywords = { ...keywords };
            updatedKeywords.years.push(newKeyword);
            setKeywords(updatedKeywords);
        }
    }

    const saveChanges = () => {
        if (selectedOption === "NA") {
            alert("Please select a valid option."); // Set showAlert to true to trigger the alert
        }
        else{
            if (newKeyword) {
            // Update the list of keywords with the new one
                setCollectiveKeywordList([...collectiveKeywordList, newKeyword]);
                addToJsonKeywords();
            }
            closeModal();
        }
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
      
      const performLegitSearch = (e) => {
        e.preventDefault();
        document.body.style.overflow = 'auto';
      
        const categorizedKeywords = {
          species: [],
          countries: [],
          years: [],
        };
      
        for (const [key, value] of Object.entries(buttonStates)) {
          if (value === true) {
            // Categorize the keywords based on the keyword type
            if (keywords.species.includes(key)) {
              categorizedKeywords.species.push(key);
            } else if (keywords.countries.includes(key)) {
              categorizedKeywords.countries.push(key);
            } else if (keywords.years.includes(key)) {
              categorizedKeywords.years.push(key);
            } else if (enrichedKeywords.includes(key)){
                categorizedKeywords.species.push(key);
            }
          }
        }
      
        const queryParams = {
          criteria: query,
          keywordList: JSON.stringify(categorizedKeywords),
        };
      
        // Serialize the queryParams object to a string for the URL
        const queryString = createSearchParams(queryParams).toString();
      
        navigate({
          pathname: '/search/query/data',
          search: queryString,
        });
      };      

    useEffect(() => {
        if (keywords.countries !== undefined){
            const updatedCollectiveKeywordList = [...keywords.countries, ...keywords.species, ...keywords.years];
            if (keywords.species !== undefined){
                var arrayOfEnriched = [];
                console.log("B4");
                console.log(keywords.species);
                for (var item of keywords.species) {
                    var matchedEnriched = findMatchingTerms(item);
                    arrayOfEnriched.push(...matchedEnriched);
                }
                setEnriched(arrayOfEnriched);
            }
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

                <Form.Group className="mb-3 shadow-box">
                    <Form.Label><b>Your Query</b></Form.Label>
                    <hr/>
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

                <Form.Group className="mb-3 keyword-home-form shadow-box">
                    <Form.Label className='center-title'><b>Keywords</b></Form.Label>
                    <hr/>
                    {(collectiveKeywordList !== undefined && collectiveKeywordList.length !== 0) ? (
                        <ToggleButtonGroup name="ml-api" className="keyword-parent-homepage">
                            {collectiveKeywordList.map((item, index) => (
                                <div key={index} className="keyword-wrapper">
                                    <ToggleButton onClick={() => handleOptionClick(item)} className={`btn ${buttonStates[item] ? 'keyword-homepage-selected' : 'keyword-homepage-disabled'}`}>
                                        {item}
                                        {(buttonStates[item]) ? (
                                        <i className="ico-times home-icon" role="img" aria-label="Cancel"></i>
                                    ) : (
                                        <i className="ico-check home-icon" role="img" aria-label="Accept"></i>
                                    )}
                                    </ToggleButton>
                                </div>
                            ))}
                            <div className='keyword-wrapper'>
                                <Button id="add-button-home" onClick={openModal}>Add a keyword</Button>
                            </div>
                        </ToggleButtonGroup>
                    ) : (
                        <div>No keywords detected. Please enhance your query and try again.</div>
                    )}
                <Container className='semantic-layer-parent'>
                    <h3 style={{fontWeight: "normal",animationDelay: "1s"}} className='animate__animated animate__fadeIn'>We enriched your query with our semantic layer</h3>
                    <h4 style={{fontWeight: "lighter", animationDelay: "1.5s"}} className='animate__animated animate__fadeInUp'>You can select more terms to help expand your search</h4>
                </Container>
                {(enrichedKeywords !== undefined && enrichedKeywords.length !== 0) ? (
                        <ToggleButtonGroup name="ml-api" className="keyword-parent-homepage">
                            {enrichedKeywords.map((item, index) => (
                                <div key={index} className="keyword-wrapper">
                                    <ToggleButton onClick={() => handleOptionClick(item)} className={`btn ${buttonStates[item] ? 'keyword-homepage-selected' : 'keyword-homepage-disabled'}`}>
                                        {item}
                                        {(buttonStates[item]) ? (
                                        <i className="ico-times home-icon" role="img" aria-label="Cancel"></i>
                                    ) : (
                                        <i className="ico-check home-icon" role="img" aria-label="Accept"></i>
                                    )}
                                    </ToggleButton>
                                </div>
                            ))}
                        </ToggleButtonGroup>
                    ) : (
                        <div>No enriched keywords detected. Please enhance your query and try again.</div>
                    )}
                <Button style={{marginTop: '2%', animationDelay: "2s"}} className="animate__animated animate__fadeIn" onClick={performLegitSearch}>Search</Button>
                </Form.Group>
            </Form>
        </Container>
        <Modal animation={true} size="lg" show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add keyword</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight: 'bold'}}>New keyword</Form.Label>
                            <Form.Control
                                type="keyword"
                                placeholder="Camels"
                                autoFocus
                                value={newKeyword}
                                onChange={(e) => setNewKeyword(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <br />
                            <Form.Select
                                aria-label="Default select example"
                                value={selectedOption}
                                onChange={(e) => {
                                    setSelectedOption(e.target.value);
                                }}
                                >
                                <option value="NA">Select an option</option>
                                <option value="species">Species</option>
                                <option value="country">Country</option>
                                <option value="year">Year</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button id="search-TAIL" className="branded-orange" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HomeKeywordOptions;
