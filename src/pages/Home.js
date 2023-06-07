
import React, { useState, useEffect } from 'react';
import SearchBar from "../components/MainpageSearchBar";
import MainpageNav from "../components/MainpageNav";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import './styles/Home.css';
import HomeKeywordOptions from '../components/HomeKeywordOptions';
import axios from 'axios';

function Home() {
  const [searchText, setSearchWas] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);

  const receiveSearchFromChild = (theSearchQuery) => {
    // Update the keywords in the parent component's state
    setSearchWas(theSearchQuery);
    fetchKeywordsFromApi(theSearchQuery);
  };

  const fetchKeywordsFromApi = async (theSearchQuery) => {
    try {
      // Replace this with your actual API call to fetch keywords
      const baseUrl = "https://www.gbadske.org/search/api/search";
      // Encode the sentence to ensure it's safe for use in a URL
      const encodedSentence = encodeURIComponent(theSearchQuery);

      // Combine the base URL with the query parameter
      const urlWithQuery = `${baseUrl}?query=${encodedSentence}`;

      const response = await axios.get(urlWithQuery);

      const data = response.data;
      setKeywords(data);
      // Call sendDataToParent to send keywords back to the parent
    } catch (error) {
      console.error('Error fetching keywords:', error);
    }
  };

  useEffect(() => {
    // Trigger the animation when searchText and keywords are not empty
    setShowAnimation(searchText.trim() !== '' && keywords.length !== 0);
  }, [searchText, keywords]);
  

  return (
    <div className="App">
      <MainpageNav></MainpageNav>
      <Container id="mainpage-main-content">
        <Container>
          <Image id="main-logo" src={process.env.PUBLIC_URL + '/imgs/GBADsLogoRedesign.webp'} alt="GBADs logo" fluid />
          <h2>Trusted Animal Information portaL</h2>
          <SearchBar recSearch={receiveSearchFromChild}></SearchBar>
        </Container>
        {(searchText!=='' && keywords.length!==0) &&(
          <Container
            className={`hidden-keyword-options ${showAnimation ? 'slide-up' : ''}`}
          >
            <HomeKeywordOptions query={searchText} keywords={keywords} />
          </Container>
        )}
      </Container>
    </div>
  );
}

export default Home;
