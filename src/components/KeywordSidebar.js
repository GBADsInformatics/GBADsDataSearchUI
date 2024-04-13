import React, { useState, useEffect } from "react";
import "./styles/KeywordSidebar.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function KeywordSidebar(props) {
    const [showModal, setShowModal] = useState(false);
    const [newKeyword, setNewKeyword] = useState("");
    const [keywords, setKeywords] = useState(props.keywords);
    // const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedOption, setSelectedOption] = useState("NA");
    const [collectiveKeywordList, setCollectiveKeywordList] = useState(props.keywords);
    const [collectiveToArray, setCollectiveArray] = useState([...props.keywords.countries, ...props.keywords.species, ...props.keywords.years]);

    // const openModal = () => {
    //     setNewKeyword(""); // Clear the input field when opening the modal
    //     setShowModal(true);
    // };

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

    const closeModal = () => {
        setShowModal(false);
        setSelectedOption("NA");
    }

    const saveChanges = () => {
        if (selectedOption === "NA") {
            alert("Please select a valid option."); // Set showAlert to true to trigger the alert
        }
        else{
            if (newKeyword) {
                // Update the list of keywords with the new one
                addToJsonKeywords();
            }
            closeModal();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent page reload
            saveChanges(); // Execute the saveChanges function
        }
    };

    // const removeWordFromCollective = (toRemove) => {

    // }

    const convertCollectiveToArray = () => {
        const collectiveArray = [];
      
        if (collectiveKeywordList && collectiveKeywordList.species) {
          collectiveArray.push(...(collectiveKeywordList.species));
        }
      
        if (collectiveKeywordList && collectiveKeywordList.countries) {
          collectiveArray.push(...(collectiveKeywordList.countries));
        }
      
        if (collectiveKeywordList && collectiveKeywordList.years) {
          collectiveArray.push(...(collectiveKeywordList.years));
        }
        return collectiveArray;
      };      

    // const handleKeywordClick = (index) => {
    //     // Remove the clicked keyword from the list
    //     const removedValue = collectiveKeywordList.splice(index, 1)[0];
    //     const copyKeywords = keywords;
    //     for (const key in copyKeywords) {
    //         if (copyKeywords.hasOwnProperty(key) && Array.isArray(copyKeywords[key])) {
    //           const list = copyKeywords[key];
    //         //   console.log(`List for ${key}:`);
    //           const updatedList = list.filter(item => item !== removedValue);
    //           copyKeywords[key] = updatedList;
    //         }
    //       }
    //     setKeywords(copyKeywords);
    //     const updatedCollectiveKeywordList = [...copyKeywords.countries, ...copyKeywords.species, ...copyKeywords.years];
    //     setCollectiveKeywordList(updatedCollectiveKeywordList);
    //     props.setNewKeywords(copyKeywords);
    // };

    useEffect(() => {
        props.setNewKeywords(keywords);
        // if (keywords.countries !== undefined){
        //     const updatedCollectiveKeywordList = [...keywords.countries, ...keywords.species, ...keywords.years];
        //     setCollectiveKeywordList(updatedCollectiveKeywordList);
        // }
        setCollectiveKeywordList(props.keywords);
        setCollectiveArray([...keywords.countries, ...keywords.species, ...keywords.years]);
  }, [keywords]);

  useEffect(() => {
    setKeywords(props.keywords);
    // const updatedCollectiveKeywordList = [...keywords.countries, ...keywords.species, ...keywords.years];
    setCollectiveKeywordList(props.keywords);
    setCollectiveArray([...keywords.countries, ...keywords.species, ...keywords.years]);
  }, [props.keywords])


//   useEffect(() => {
//     setCollectiveArray(convertCollectiveToArray());
//   }, [convertCollectiveToArray, collectiveKeywordList])




    return (
        <>
            <div className="keyword-sidebar-parent">
                <div className="title-and-add-button">
                    <p><b><u>Keywords</u></b></p>
                    {/* UNCOMMENT THE LINE BELOW FOR VERSION 1.1 */}
                    {/* <Button id="add-button" onClick={openModal}>+</Button> */}
                </div>
                <div className="keyword-parent">
                    {collectiveKeywordList!==undefined
                        ? collectiveToArray.map((item, index) => (
                        <div
                        key={index}
                        className="keyword"
                        // UNCOMMENT IN VERSION 1.1
                        // onClick={() => handleKeywordClick(index)}
                    >
                        <p className="keyword-inner-text">{item}</p>
                        {/* UNCOMMENT keyword-sidebar-hide in version 1.1 */}
                        <i className="ico-times keyword-sidebar-hide" role="img" aria-label="Cancel"></i>
                    </div>
                    ))
                    : <p>No keywords available. Add keywords or enhance the query for better results!</p>
                    }
                </div>
            </div>
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
                        </Form.Group>
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

export default KeywordSidebar;
