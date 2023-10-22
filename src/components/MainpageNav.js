import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNav() {
  return (
    <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="/search">GBADs TAIL</Navbar.Brand>
          <Nav className="me-auto-right">
            <Nav.Link href="/search/faq">FAQ</Nav.Link>
            <Nav.Link href="https://animalhealthmetrics.org/">GBADs</Nav.Link>
            <Nav.Link href="https://www.gbadske.org/">Informatics</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainNav;