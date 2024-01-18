// Search.js (Parent Component)
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchNav from '../components/SearchNav';
import MainGrid from '../components/MainGrid';
import './styles/Search.css';
import { Container } from 'react-bootstrap';
import KeywordSidebar from '../components/KeywordSidebar';
import axios from 'axios';
import Placeholder from 'react-bootstrap/Placeholder';
import { createSearchParams, useNavigate } from 'react-router-dom';

function IdentifyURL(){
  try{
    // Get the current URL
    const currentUrl = window.location.href;
    // Split the URL by '/' to extract the parts
    const urlParts = currentUrl.split('/');
    // Find the index of 'query' in the URL
    const queryIndex = urlParts.indexOf('query');
    // Check if 'query' is found in the URL
    if (queryIndex !== -1 && queryIndex + 1 < urlParts.length) {
      // Get the value after 'query'
      var valueAfterQuery = urlParts[queryIndex + 1];
      // Check if the value contains a '?'
      if (valueAfterQuery.includes('?')) {
        // Split the value to remove everything after '?'
        valueAfterQuery = valueAfterQuery.split('?')[0];
      }
      return ("/" + valueAfterQuery);
    } else {
      return "/data";
    }
  }
  catch (error){
    console.log("ERROR:")
    console.log(error)
    return "/data";
  }
}

function Search() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [searchWas, setSearchWas] = useState(searchParams.get('criteria'));
    const [keywords, setKeywords] = useState(JSON.parse(searchParams.get('keywordList')));

  const createParams = (aQuery) => {
    const queryParams = {
      criteria: aQuery,
      keywordList: JSON.stringify(keywords)
    };
    return queryParams;
  }

  const resetKeywords = (keywordsFromChild) =>{
    setKeywords(keywordsFromChild);
  
    const queryParams = {
      criteria: searchWas,
      keywordList: JSON.stringify(keywords),
    };
  
    // Serialize the queryParams object to a string for the URL
    const queryString = createSearchParams(queryParams).toString();
  
    navigate({
      pathname: '/search/query' + IdentifyURL(),
      search: queryString,
    });
  }

  // Function to receive keywords from SearchNav component
  const receiveKeywordsFromChild = (path, theSearchQuery) => {
    // Update the keywords in the parent component's state
    setSearchWas(theSearchQuery);
    fetchKeywordsFromApi(theSearchQuery);
    resetKeywords(keywords);
    
  };

  // Function to receive keywords from SearchNav component
  const optionChange = (path) => {

    const queryParams = createParams(searchWas);
    navigate({
      pathname: path,
      search: createSearchParams(queryParams).toString()
    })
  };

  // const refineApiResults = (result) => {
  //   var mergedList = [];
  //   for (var key in result) {
  //     if (Array.isArray(result[key])) {
  //       // Check if the property is an array
  //       mergedList = mergedList.concat(result[key]);
  //     }
  //   }
  //   return mergedList;  
  // }

  // Function to fetch keywords from an API
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
      // const refinedResults = refineApiResults(data);
      setKeywords(data);
      // Call sendDataToParent to send keywords back to the parent
    } catch (error) {
      console.error('Error fetching keywords:', error);
    }
  };

  // useEffect(() => {
  //   // Trigger the animation when searchText and keywords are not empty
  //   console.log("HERE THEY ARE");
  //   console.log(keywords)
  // }, [keywords]);

  return (
    <div>
      <SearchNav
        search={searchWas}
        sendDataToParent={receiveKeywordsFromChild} // Pass the function to the child component
      />
      <Container id="organize-main-search">
        <Container className='keyword-sidebar-main-parent'>
        {keywords!==undefined ? (
            // Render the child component with the fetched data
            <KeywordSidebar setNewKeywords={resetKeywords} keywords={keywords} />
        ) : (
          // Show keywords loading
            <div className="keyword-sidebar-parent sidebar-loading">
                <p><b><u>Keywords</u></b></p>
                <Placeholder.Button variant="warning" xs={6} className="sidebar-loading-cell"/>
                <Placeholder.Button variant="warning" xs={6} className="sidebar-loading-cell"/>
                <Placeholder.Button variant="warning" xs={6} className="sidebar-loading-cell"/>
            </div>
        )}
        </Container>
        <Container id="main-grid-container">
          <MainGrid sendDataFromMaingrid={optionChange} theSearch={searchWas} keywords={keywords}/>
        </Container>
      </Container>
    </div>
  );
}

export default Search;
