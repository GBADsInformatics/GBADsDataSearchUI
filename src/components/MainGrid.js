// import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonGroup, Container } from 'react-bootstrap';
import "./styles/MainGrid.css";
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ToggleButton from 'react-bootstrap/ToggleButton';

import CellData from './CellData';

function MainGrid() {
    // const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
     
    // const [checked, setChecked] = useState(false);
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
                    <tr>
                        <td className='parent-cell'>
                            <CellData 
                            title="FAOSTAT Crops and livestock products - Stocks"
                            desc="Livestock population statistics covering the following categories: Animals live n.e.s.; Asses; Beehives; Buffaloes; Camelids, other; Camels; Cattle; Chickens; Ducks; Geese and guinea fowls; Goats; Horses; Mules; Pigeons, other birds; Pigs; Rabbits and hares; Rodents, other; Sheep; Turkeys."
                            startYear= "2018" 
                            csvDownloadlink="google.com" 
                            nameOfDataSet="Example Name of Dataset"
                            authors="Kassy Raymond, Deb Stacey, Matthew Szurkowski"
                            nameOfDataSource="Example name of data source"
                            endYear="2021"
                            tableName="Example Table Name"
                            apiCall="Example API Call script"
                            metadataDownloadLink="google.com"
                            columnsIncluded="Example columns included"
                            measured="Example species 1, species 2, etc"
                            spatialRange="Example spacial range"
                            />
                        </td>
                    </tr>
                    <tr>
                    <td className='parent-cell'>
                            <CellData 
                            title="FAOSTAT Crops and livestock products - Stocks"
                            desc="Livestock population statistics covering the following categories: Animals live n.e.s.; Asses; Beehives; Buffaloes; Camelids, other; Camels; Cattle; Chickens; Ducks; Geese and guinea fowls; Goats; Horses; Mules; Pigeons, other birds; Pigs; Rabbits and hares; Rodents, other; Sheep; Turkeys."
                            startYear= "2018" 
                            csvDownloadlink="google.com" 
                            nameOfDataSet="Example Name of Dataset"
                            authors="Kassy Raymond, Deb Stacey, Matthew Szurkowski"
                            nameOfDataSource="Example name of data source"
                            endYear="2021"
                            tableName="Example Table Name"
                            apiCall="Example API Call script"
                            metadataDownloadLink="google.com"
                            columnsIncluded="Example columns included"
                            measured="Example species 1, species 2, etc"
                            spatialRange="Example spacial range"
                            />
                        </td>
                    </tr>
                    <tr>
                    <td className='parent-cell'>
                            <CellData 
                            title="FAOSTAT Crops and livestock products - Stocks"
                            desc="Livestock population statistics covering the following categories: Animals live n.e.s.; Asses; Beehives; Buffaloes; Camelids, other; Camels; Cattle; Chickens; Ducks; Geese and guinea fowls; Goats; Horses; Mules; Pigeons, other birds; Pigs; Rabbits and hares; Rodents, other; Sheep; Turkeys."
                            startYear= "2018" 
                            csvDownloadlink="google.com" 
                            nameOfDataSet="Example Name of Dataset"
                            authors="Kassy Raymond, Deb Stacey, Matthew Szurkowski"
                            nameOfDataSource="Example name of data source"
                            endYear="2021"
                            tableName="Example Table Name"
                            apiCall="Example API Call script"
                            metadataDownloadLink="google.com"
                            columnsIncluded="Example columns included"
                            measured="Example species 1, species 2, etc"
                            spatialRange="Example spacial range"
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default MainGrid;