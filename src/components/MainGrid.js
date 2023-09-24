// import { useState } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { ButtonGroup, Container } from 'react-bootstrap';
import "./styles/MainGrid.css";
import Button from 'react-bootstrap/Button';
import CellData from './CellData';
import Placeholder from 'react-bootstrap/Placeholder';

import { createSearchParams, useNavigate } from 'react-router-dom';

function MainGrid(props) {
    const [selectedOption, setSelectedOption] = useState('data');
    // Used to choose which option to see (Data, Literature, Query)
    const [checked, setChecked] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [reqData, setRequestedData] = useState();

    const navigate = useNavigate();

    
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        props.sendDataFromMaingrid(`/search/query/${option}`);
      };
    
    // TO BE USED ONCE THE API IS COMPLETE
    // try{
    //     useEffect(() => {
    //         axios.get("https://gbadske.org/meta-api/datasets?countries=Canada&species=Cattle").then(response => {
    //         // axios.get("https://pokeapi.co/api/v2/pokemon/4").then(response => {
    //         setRequestedData(response.data);
    //         setLoading(false);
    //         console.log(response.data);
    //         });
    //     }, []);
    // }
    // catch (exception) {
    //     return(
    //         <div>{exception.message}</div>
    //     );
    // }

    if (isLoading) {
        
        return(

            <Container className='main-table'>
            <div className="d-flex justify-content-end inner-table">
                <ButtonGroup>
                    {/* <ToggleButton
                        // className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    > Has PDF
                    </ToggleButton> */}
                    <Button
                    className={selectedOption === 'data' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('data')}>Data</Button>{' '}

                    <Button
                    className={selectedOption === 'literature' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('literature')}>Literature</Button>{' '}
                     <Button
                    className={selectedOption === 'query' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('query')}>Query</Button>{' '}
                    {/* <Button className="main-option-button btn-outline">Query</Button>{' '} */}
                    {/* <Button variant="outline-secondary">Export As</Button>{' '} */}
                </ButtonGroup>
            </div>
            <Table responsive>
                <thead>
                    <tr>
                        <th style={{color: "grey"}}>Dataset</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='parent-cell'>
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
                        </td>
                    </tr>
                    <tr>
                    <td className='parent-cell'>
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
                        </td>
                    </tr>
                    <tr>
                    <td className='parent-cell'>
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
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        );
    }

    if (reqData == null){
        return(
            <div>
                <p>No data</p>
            </div>
        );
    }



    return (
        <Container className='main-table'>
            <div className="d-flex justify-content-end">
                <ButtonGroup>
                    {/* <ToggleButton
                        // className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    > Has PDF
                    </ToggleButton> */}
                    <Button variant="outline-secondary">Filter</Button>{' '}
                    <Button variant="outline-secondary">Sort By</Button>{' '}
                    {/* <Button variant="outline-secondary">Export As</Button>{' '} */}
                </ButtonGroup>
            </div>
            <Table responsive>
                <thead>
                    <tr>
                        <th style={{color: "grey"}}>Paper title</th>
                    </tr>
                </thead>
                <tbody>
                    {reqData.map((item) => (
                        <tr>
                            <td className='parent-cell'>
                            <CellData 
                            title={item.name}
                            desc={item.description}
                            startYear= "2018" 
                            csvDownloadlink={item.contentUrl[1]}
                            nameOfDataSet={item.sourceTable} // Fix for future
                            authors="Example authors" // Fix for future
                            nameOfDataSource="Example name of data source" // Fix this for future
                            endYear="2021" // Fix this for future
                            tableName={item.sourceTable} 
                            apiCall="Example API Call script" // Fix for future
                            metadataDownloadLink={item.contentUrl[0]} // Not sure this is right
                            columnsIncluded="Example columns included" // Fix for future
                            measured="Example species 1, species 2, etc"
                            spatialRange={item.spatialCoverage}
                            temporalRange={item.temporalCoverage}
                            source="Example source"
                            contactPoint="Example contact point"
                            licence={item.license}
                            />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default MainGrid;