// Search.js (Parent Component)
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchNav from '../components/SearchNav';
import MainGrid from '../components/MainGrid';
import './styles/Search.css';
import { Container } from 'react-bootstrap';
import KeywordSidebar from '../components/KeywordSidebar';
import axios from 'axios';
import Placeholder from 'react-bootstrap/Placeholder';

function Search() {
    const [searchParams] = useSearchParams();

    const [searchWas, setSearchWas] = useState(searchParams.get('criteria'));
    console.log(searchParams.get('criteria'));
    const [keywords, setKeywords] = useState([]);

  // Function to receive keywords from SearchNav component
  const receiveKeywordsFromChild = (theSearchQuery) => {
    // Update the keywords in the parent component's state
    console.log("WE GOT IT:")
    console.log(theSearchQuery);
    setSearchWas(theSearchQuery);
    fetchKeywordsFromApi(theSearchQuery);
  };

  // Function to fetch keywords from an API
  const fetchKeywordsFromApi = async (theSearchQuery) => {
    try {
      console.log("MAKING THE FOLLOWING CALL TO API WITH:")
      console.log(theSearchQuery);
      // Replace this with your actual API call to fetch keywords
      const baseUrl = "https://www.gbadske.org/search/api/search";
      // Encode the sentence to ensure it's safe for use in a URL
      const encodedSentence = encodeURIComponent(theSearchQuery);

      // Combine the base URL with the query parameter
      const urlWithQuery = `${baseUrl}?query=${encodedSentence}`;

      const response = await axios.get(urlWithQuery);

      const data = response.data;
      console.log(data);
      setKeywords(data);
      console.log("COUNT IS:")
      console.log(data.length);
      // Call sendDataToParent to send keywords back to the parent
    } catch (error) {
      console.error('Error fetching keywords:', error);
    }
  };

  useEffect(() => {
    // Fetch keywords from the API once the component has loaded
    fetchKeywordsFromApi(searchWas)
      .then(() => {
        console.log('Keywords fetched successfully:', keywords);
      })
      .catch((error) => {
        console.error('Error fetching keywords:', error);
      });
  }, []);


  return (
    <div>
      <SearchNav
        search={searchWas}
        sendDataToParent={receiveKeywordsFromChild} // Pass the function to the child component
      />
      <Container id="organize-main-search">
        <Container style={{ width: '500px', paddingTop: '2%', marginTop: '3%' }}>
        {keywords.length!=0 ? (
            // Render the child component with the fetched data
            <KeywordSidebar keywords={keywords} />
        ) : (
            // Optionally, display a loading message or spinner while fetching data
            <div className="keyword-sidebar-parent sidebar-loading">
                <p><b><u>Keywords</u></b></p>
                <Placeholder.Button variant="warning" xs={6} className="sidebar-loading-cell"/>
                <Placeholder.Button variant="warning" xs={6} className="sidebar-loading-cell"/>
                <Placeholder.Button variant="warning" xs={6} className="sidebar-loading-cell"/>
            </div>
        )}
        </Container>
        <Container id="main-grid-container" style={{ width: '2900px', paddingTop: '2%', marginTop: '3%' }}>
          <MainGrid theSearch={searchWas} />
        </Container>
      </Container>
    </div>
  );
}

export default Search;
