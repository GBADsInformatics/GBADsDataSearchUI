
import SearchBar from "../components/MainpageSearchBar";
import MainpageNav from "../components/MainpageNav";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <MainpageNav></MainpageNav>
      <Container id="mainpage-main-content">
        <Image src="https://i0.wp.com/animalhealthmetrics.org/wp-content/uploads/2019/10/GBADs-LOGO-Black.png?ssl=1" fluid />
        <p>Ask a question about data</p>
        <SearchBar></SearchBar>
      </Container>
    </div>
  );
}

export default Home;
