import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/MainpageNav.css";

function MainNav() {
  return (
    <Navbar fixed="top" id='main-nav'>
        <Container>
          <Navbar.Brand href="/search" id='brand-title'>GBAD<span style={{color: '#FF8029'}}>s</span> TAIL</Navbar.Brand>
          <Nav className="me-auto-right">
            <Nav.Link href="https://animalhealthmetrics.org/" className='nav-link'>GBADs</Nav.Link>
            <Nav.Link href="/search/faq" className='nav-link'>Support</Nav.Link>
            <Nav.Link href="https://www.gbadske.org/" className='nav-link'>Informatics</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainNav;