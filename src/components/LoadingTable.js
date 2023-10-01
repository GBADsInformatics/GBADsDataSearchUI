import Table from 'react-bootstrap/Table';
import Placeholder from 'react-bootstrap/Placeholder';

function LoadingTable(){
    return(
        <Table responsive>
                <thead>
                    <tr>
                        <th style={{color: "grey"}}>Dataset</th>
                        <th style={{color: "grey"}}>Description</th>
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
    );
}

export default LoadingTable;