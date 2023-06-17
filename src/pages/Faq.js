import MainpageNav from "../components/MainpageNav";
import Container from 'react-bootstrap/Container';
import './styles/Home.css';

function FAQ() {
  return (
    <div className="App">
      <MainpageNav></MainpageNav>
      <Container>
        <h1>FAQ Page</h1>
      </Container>
    </div>
  );
}

export default FAQ;
