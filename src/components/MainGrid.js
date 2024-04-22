// import { useState } from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { ButtonGroup, Container } from 'react-bootstrap';
import "./styles/MainGrid.css";
import Button from 'react-bootstrap/Button';
import CellData from './CellData';
import DatasetCell from './DatasetCell';

import LoadingTable from './LoadingTable';

function MainGrid(props) {
    const [selectedOption, setSelectedOption] = useState('data');
    // Used to choose which option to see (Data, Literature, Query)

    const [isLoading, setLoading] = useState(true);
    const [reqData, setRequestedData] = useState();

    const [keywords, setKeywords] = useState(props.keywords);
    
    // Used to show which row was selected
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

      const handleRowClick = (rowIndex) => {
        if (!modalOpen) {
            setSelectedRowIndex(rowIndex);
            setModalOpen(true);
        }
      };

    const handleCloseModal = () => {
        setSelectedRowIndex(null); // Reset the selectedRowIndex to close the modal
        setModalOpen(false);
    };

    const optionChangeApiCall = useCallback(() => {
        // ONCE WE HAVE A WAY TO CHECK WHERE TO SEARCH FOR LITERATURE, QUERY, AND DATA WE CAN MODIFY THE CALL
        try {
            const apiUrl = 'https://gbadske.org/meta-api/datasets';
            const params = {
                countries: keywords.countries.join(','),
                species:  keywords.species.join(','),
              };
            
            axios.get(apiUrl, { params })
              .then(response => {
                // console.log(apiUrl, {params});
                const originalData = response.data;
                // Set the merged data in the state
                // console.log(originalData);
                setRequestedData(originalData);
                setLoading(false);
              });
            
          } catch (exception) {
            console.error(exception);
          }
    }, [keywords]);

    
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        props.sendDataFromMaingrid(`/search/query/${option}`);
        setLoading(true);
        optionChangeApiCall();
      };
    
    // TO BE USED ONCE THE API IS COMPLETE
//     useEffect(() => {
//         optionChangeApiCall();
//   }, [optionChangeApiCall]);

  useEffect(() => {
    setKeywords(props.keywords);
}, [props.keywords]);

useEffect(() =>{
    optionChangeApiCall();
}, [keywords, optionChangeApiCall])

    if (isLoading) {
        
        return(

            <Container className='main-table'>
            <div className="d-flex justify-content-end inner-table">
                <ButtonGroup>
                    <Button
                    className={selectedOption === 'data' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('data')}>Data</Button>{' '}

                    {/* <Button
                    className={selectedOption === 'literature' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('literature')}>Literature</Button>{' '} */}
                     <Button
                    className={selectedOption === 'query' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('query')}>Query</Button>{' '}
                    {/* <Button className="main-option-button btn-outline">Query</Button>{' '} */}
                    {/* <Button variant="outline-secondary">Export As</Button>{' '} */}
                </ButtonGroup>
            </div>
            {/* The element below holds the loading table */}
            <LoadingTable/>
        </Container>
        );
    }

    if (reqData === null || reqData === undefined || reqData.length === 0){
        return(
            <Container className='main-table'>
            <div className="d-flex justify-content-end inner-table">
                <ButtonGroup>
                    <Button
                    className={selectedOption === 'data' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('data')}>Data</Button>{' '}

                    {/* <Button
                    className={selectedOption === 'literature' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('literature')}>Literature</Button>{' '} */}
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
                        <th style={{color: "grey"}}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='data-row'>
                        <td className='parent-cell'>
                            No results. Please search again.
                        </td>
                        <td className='parent-cell'> </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        );
    }



    return (
        <Container className='main-table'>
            <div className="d-flex justify-content-end inner-table">
                <ButtonGroup>
                    <Button
                    className={selectedOption === 'data' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('data')}>Data</Button>{' '}

                    {/* <Button
                    className={selectedOption === 'literature' ? 'main-option-button-selected' : 'main-option-button '}
                    onClick={() => handleOptionClick('literature')}>Literature</Button>{' '} */}
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
                        <th style={{color: "grey"}}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(reqData) ? reqData.map((item, index) => (
                        <tr className='data-row' key={index} onClick={() => handleRowClick(index)}>
                            <td className='parent-cell'>
                                <DatasetCell
                                title={item.name}
                                authors={item.provider.name}
                                // source="Example source"
                                temporalRange={item.temporalCoverage}
                                />
                            </td>
                            <td className='parent-cell'>
                                <CellData 
                                title={item.name}
                                desc={item.description}
                                species={item.species}
                                startYear={item.startYear}
                                csvDownloadlink={
                                    item.DataDownload.find(download => download.encodingFormat === "csv") 
                                        ? item.DataDownload.find(download => download.encodingFormat === "csv").contentUrl 
                                        : undefined
                                }
                                nameOfDataSet={item.sourceTable}
                                provider={item.provider}
                                nameOfDataSource={item.nameOfDataSource} // Fix this for future
                                endYear={item.endYear} // Fix this for future
                                tableName={item.sourceTable} 
                                apiCall={item.DataDownload.find(download => download.encodingFormat === "API") 
                                ? item.DataDownload.find(download => download.encodingFormat === "API").contentUrl 
                                : undefined} // Fix for future
                                metadataDownloadLink={item.DataDownload.encodingFormat === "API" ? item.DataDownload.contentUrl : undefined} // Not sure this is right
                                columnsIncluded={item.columnsIncluded} // Fix for future
                                measured={item.measured}
                                spatialRange={item.spatialCoverage}
                                temporalRange={item.temporalCoverage}
                                source={item.source}
                                contactPoint={item.contactPoint}
                                licence={item.license}
                                isOpen={selectedRowIndex === index}
                                onCloseModal={handleCloseModal}
                                />
                            </td>
                        </tr>
                    ))
                    : 
                    <Container className='main-table'>
                        <div className="d-flex justify-content-end inner-table">
                            <ButtonGroup>
                                <Button
                                className={selectedOption === 'data' ? 'main-option-button-selected' : 'main-option-button '}
                                onClick={() => handleOptionClick('data')}>Data</Button>{' '}

                                {/* <Button
                                className={selectedOption === 'literature' ? 'main-option-button-selected' : 'main-option-button '}
                                onClick={() => handleOptionClick('literature')}>Literature</Button>{' '} */}
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
                                    <th style={{color: "grey"}}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='data-row'>
                                    <td className='parent-cell'>
                                        No results. Please search again.
                                    </td>
                                    <td className='parent-cell'> </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default MainGrid;
