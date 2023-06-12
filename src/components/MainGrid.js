import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ButtonGroup, Container } from 'react-bootstrap';
import "./styles/MainGrid.css";
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

function MainGrid() {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    const [checked, setChecked] = useState(false);
    return (
        <Container className='main-table'>
            <ButtonGroup>
                <ToggleButton
                    // className="mb-2"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                > Has PDF
                </ToggleButton>
                <Button variant="outline-secondary">Filter</Button>{' '}
                <Button variant="outline-secondary">Sort By</Button>{' '}
                <Button variant="outline-secondary">Export As</Button>{' '}
            </ButtonGroup>
            <Table responsive>
            <thead>
                <tr>
                <th>Paper Title</th>
                <th>Abstract Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{lorem}</td>
                    <td>{lorem}</td>
                </tr>
                <tr>
                    <td>{lorem}</td>
                    <td>{lorem}</td>
                </tr>
                <tr>
                    <td>{lorem}</td>
                    <td>{lorem}</td>
                </tr>
            </tbody>
            </Table>
        </Container>
    );
}

export default MainGrid;