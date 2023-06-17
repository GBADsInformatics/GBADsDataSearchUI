import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCalendar,
    faCloudDownload, 
    faPencil, 
    faUsers, 
    faLaptop, 
    faCommentAlt, 
    faColumns, 
    faCow, 
    faGlobeAmericas,
    faClock,
    faLaptopHouse,
    faPerson,
    faCertificate
} from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Placeholder from 'react-bootstrap/Placeholder';

import "./styles/CellData.css";

function ShortenDesc(text){
    const maxLength = 250;
    if (text.length <= maxLength) {
        return text;
    } else {
        const shortenedText = text.substr(0, maxLength);
        const lastWordBoundary = shortenedText.lastIndexOf(' ');
        return shortenedText.substr(0, lastWordBoundary) + "...";
    }
}

function CellData(props){
    const descText = ShortenDesc(props.desc);


    var formatDateRange = props.startYear + ' - ' + props.endYear

    const [show, setShow] = useState(false);

    const [copied, setCopy] = useState(false);

    const copyText = () => {
        setCopy(true);

        navigator.clipboard.writeText("testing GBADs")
    
        setTimeout(() => {
            setCopy(false);
        }, 3000);
      };

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        return setShow(true);
    };


    const [isLoading, setLoading] = useState(true);
    const [reqData, setRequestedData] = useState();

    useEffect(() => {
        axios.get("https://spacematters.ca/").then(response => {
        // axios.get("https://pokeapi.co/api/v2/pokemon/4").then(response => {
        setRequestedData(response.data);
        setLoading(false);
        });
    }, []);

    if (isLoading) {
        
        return(
        <div>
            <div className='title-and-desc'>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={4} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={10} />
                </Placeholder>
            </div>
            <div className='year-and-csv-loading-parent'>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={2} style={{marginLeft: "20%"}}/>
                <Placeholder xs={2} style={{marginLeft: "25%"}}/>
            </Placeholder>
            </div>
        </div>
        );
    }



    return(
        <>
        <div>
            <div onClick={handleShow} className='title-and-desc'>
                <p><b>{props.title}</b></p>
                <p>{descText}</p>
            </div>
            <div className='align-year-and-link'>
                <div className='align-icon-left'>
                    <FontAwesomeIcon icon={faCalendar} style={{ color: 'black', marginRight: "4%", marginTop: "2.2%" }}/>
                    <p style={{display: "inline"}}>{formatDateRange}</p>
                </div>
                <div id="quick-link-download">
                    <a href={props.csvDownloadlink} download>CSV
                        <FontAwesomeIcon icon={faCloudDownload} style={{ color: 'black'}}/>
                    </a>
                </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose} animation={true} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.nameOfDataSet}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='split-modal'>
                <div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faPencil} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Table Name:</b> {props.tableName}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faUsers} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Authors:</b> {props.authors}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faLaptop} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Data source:</b> {props.nameOfDataSource}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faCalendar} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>End year:</b> {props.endYear}</p>
                    </div>
                    <Container style={{textAlign: "center"}}>
                        <ButtonGroup className="mb-2">
                            <Button variant="outline-primary" onClick={handleClose}>
                                CSV
                            </Button>
                            <Button variant={ copied ? "success" : "outline-secondary"} onClick={copyText}>
                                { copied ? "Copied to clipboard!" : "API CALL" }
                            </Button>
                            <Button variant="outline-secondary" onClick={handleClose}>
                                Download metadata
                            </Button>
                        </ButtonGroup>
                    </Container>
                    <hr/>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faCommentAlt} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Description:</b> {props.desc}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faColumns} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Columns included:</b> {props.columnsIncluded}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faCow} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Measured values:</b> {props.measured}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faGlobeAmericas} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Spatial Range:</b> {props.spatialRange}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faClock} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Temporal Range:</b> {props.temporalRange}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faLaptopHouse} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Source:</b> {props.source}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faPerson} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Contact point:</b> {props.contactPoint}</p>
                    </div>
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faCertificate} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Licence:</b> {props.licence}</p>
                    </div>
                </div>
                <div>ASK DEB WHAT SHE WANTS HERE</div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}

export default CellData;