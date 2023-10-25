import React, { useState, useEffect } from "react";
import "./styles/KeywordSidebar.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function KeywordSidebar(props) {
    const [showModal, setShowModal] = useState(false);
    const [newKeyword, setNewKeyword] = useState("");
    const [keywords, setKeywords] = useState(props.keywords || []);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const openModal = () => {
        setNewKeyword(""); // Clear the input field when opening the modal
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const saveChanges = () => {
        if (newKeyword) {
            // Update the list of keywords with the new one
            setKeywords([...keywords, newKeyword]);
        }
        closeModal();
        console.log("Child:");
        console.log(newKeyword);
        console.log(keywords);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent page reload
            saveChanges(); // Execute the saveChanges function
        }
    };

    const handleKeywordClick = (index) => {
        // Remove the clicked keyword from the list
        const updatedKeywords = [...keywords];
        updatedKeywords.splice(index, 1);
        setKeywords(updatedKeywords);
    };

    useEffect(() => {
        console.log("USEEFFECT: ");
        props.setNewKeywords(keywords);
  }, [keywords]);

  useEffect(() => {
    setKeywords(props.keywords);
  }, [props.keywords])

    return (
        <>
            <div className="keyword-sidebar-parent">
                <div className="title-and-add-button">
                    <p><b><u>Keywords</u></b></p>
                    <Button id="add-button" onClick={openModal}>+</Button>
                </div>
                <div className="keyword-parent">
                    {keywords!==undefined && keywords.length > 0 && keywords[0] !== ""
                        ? keywords.map((item, index) => (
                        <div
                        key={index}
                        className="keyword"
                        onClick={() => handleKeywordClick(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <p>{hoveredIndex === index ? "Click to remove" : item}</p>
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

export default KeywordSidebar;
