import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form, Button } from 'react-bootstrap';
// import "./PaperInformation.css";

function PaperInfo() {
  return (
    <Card style={{ width: '18rem', padding: "5%"}}>
    <Card.Title>Add information about all papers</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>Abstract Summary</ListGroup.Item>
        <ListGroup.Item>Intervention</ListGroup.Item>
        <ListGroup.Item>Outcomes measured</ListGroup.Item>
        <ListGroup.Item>Number of participants</ListGroup.Item>
        <Form className="d-flex align-items-start">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
        </Form>
      </ListGroup>
    </Card>
  );
}

export default PaperInfo;