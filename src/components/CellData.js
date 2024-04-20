import { useEffect, useState } from 'react';
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
    var descText = '';
    if (props.desc !== undefined){
        descText = ShortenDesc(props.desc);
    }


    // var formatDateRange = props.startYear + ' - ' + props.endYear

    const [showModal, setShowModal] = useState(false); // Initialize the modal state with the isOpen prop

    const [copied, setCopy] = useState(false);

    const copyText = () => {
        setCopy(true);

        navigator.clipboard.writeText(props.apiCall)
    
        setTimeout(() => {
            setCopy(false);
        }, 3000);
      };

      const openModal = () => {
        setShowModal(true);
      };

    
      const handleCloseModal = () => {
        setShowModal(false);
        props.onCloseModal();
    };

    useEffect(() => {
        if (props.isOpen === true) {
          // Execute the desired function in response to the message
          openModal();
        }
      }, [props.isOpen]);
      

    return(
        <>
        <div>
            <div className='title-and-desc'>
                <p>{descText}</p>
            </div>
            <div className='align-year-and-link'>
                <div id="quick-link-download">
                    <a href={props.csvDownloadlink} download>CSV
                        <FontAwesomeIcon icon={faCloudDownload} style={{ color: 'black'}}/>
                    </a>
                </div>
            </div>
        </div>

        <Modal show={showModal} onHide={handleCloseModal} animation={true} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* className='split-modal' INCLUDE THIS CLASS BELOW LATER WHEN WE WANT TO SPLIT THE CELLS AND UNCOMMENT THE DIV BELOW */}
            <div>
                <div>
                    {props.tableName && (
                        <div className='left-align-modal-icons'>
                            <FontAwesomeIcon icon={faPencil} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                            <p><b>Table Name:</b> {props.tableName}</p>
                        </div>
                    )}
                    {props.provider && (
                        <div className='left-align-modal-icons'>
                            <FontAwesomeIcon icon={faUsers} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                            <p><b>Provider:</b></p>
                            <Container style={{display: "flex", flexDirection: "column"}}>
                                <p>{props.provider.name}</p>
                                <p style={{marginTop: "-2%"}}>{props.provider.address}</p>
                                <a href={`${props.provider.url}`}target="_blank" rel="noopener noreferrer" style={{marginTop: "-2.5%", marginBottom: "2%"}}>Website</a>
                                <a href={`mailto:${props.provider.email}`}  target="_blank" rel="noopener noreferrer" style={{marginTop: "-2%", marginBottom: "2%"}}>Email: {props.provider.email}</a>
                            </Container>
                        </div>
                    )}
                    {props.species && (
                        <div className='left-align-modal-icons'>
                            <FontAwesomeIcon icon={faCow} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                            <p><b>Species:</b> {props.species.join(', ')}</p>
                        </div>
                    )}
                    {props.nameOfDataSource && (
                        <div className='left-align-modal-icons'>
                            <FontAwesomeIcon icon={faLaptop} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                            <p><b>Data source:</b> {props.nameOfDataSource}</p>
                        </div>
                    )}
                    {props.endYear && (
                        <div className='left-align-modal-icons'>
                            <FontAwesomeIcon icon={faCalendar} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                            <p><b>End year:</b> {props.endYear}</p>
                        </div>
                    )}
                </div>
                <Container style={{textAlign: "center"}}>
                    <ButtonGroup className="mb-2">
                        {props.csvDownloadlink && (
                            <Button variant="outline-primary" data-bs-toggle="tooltip" title="Download the CSV data" onClick={() => window.open(props.csvDownloadlink, '_blank')}>
                            CSV
                            </Button>
                        )}
                        {props.csvDownloadlink && (
                        <Button variant={copied ? 'success' : 'outline-secondary'} data-bs-toggle="tooltip" title="Copy code for API request" onClick={copyText}>
                            {copied ? 'Copied to clipboard!' : 'API CALL'}
                        </Button>
                        )}
                        {props.metadataDownloadLink && (
                            <Button variant="outline-secondary" data-bs-toggle="tooltip" title="Download the metadata" onClick={() => window.open(props.metadataDownloadLink, '_blank')}>
                            Download metadata
                            </Button>
                        )}
                    </ButtonGroup>
                </Container>
                <hr/>
                {props.desc && (
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faCommentAlt} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Description:</b> {props.desc}</p>
                    </div>
                )}
                {props.columnsIncluded && (
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faColumns} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Columns included:</b> {props.columnsIncluded}</p>
                    </div>
                )}
                {props.measured && (
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faCow} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Measured values:</b> {props.measured}</p>
                    </div>
                )}
                {props.spatialRange && (
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faGlobeAmericas} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Spatial Range:</b> {props.spatialRange}</p>
                    </div>
                )}
                {props.temporalRange && (
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faClock} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Temporal Range:</b> {props.temporalRange}</p>
                    </div>
                )}
                {props.source && (
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faLaptopHouse} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Source:</b> {props.source}</p>
                    </div>
                )}
                {props.contactPoint && (
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faPerson} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Contact point:</b> {props.contactPoint}</p>
                    </div>
                )}
                {props.licence && (
                    <div className='left-align-modal-icons'>
                        <FontAwesomeIcon icon={faCertificate} style={{ color: 'black', marginTop: "1%", marginRight: "1%" }}/>
                        <p><b>Licence:</b> {props.licence}</p>
                    </div>
                )}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}

export default CellData;