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
    const [keywords, setKeywords] = useState(searchParams.get('keywordList') ? searchParams.get('keywordList').split(',') : []);

  const createParams = (aQuery) => {
    const queryParams = {
      criteria: aQuery,
      keywordList: keywords
    };
    queryParams.keywordList = queryParams.keywordList.join(',');
    return queryParams;
  }

  const resetKeywords = (keywordsFromChild) =>{
    setKeywords(keywordsFromChild);
    const queryParams = {
      criteria: searchWas,
      keywordList: keywordsFromChild
    };
    queryParams.keywordList = queryParams.keywordList.join(',');
    navigate({
      pathname: '/search/query' + IdentifyURL(),
      search: createSearchParams(queryParams).toString()
    })
  }

  // Function to receive keywords from SearchNav component
  const receiveKeywordsFromChild = (path, theSearchQuery) => {
    // Update the keywords in the parent component's state
    setSearchWas(theSearchQuery);
    fetchKeywordsFromApi(theSearchQuery);
    
    const queryParams = createParams(theSearchQuery);
    console.log("FOLLOWING:")
    console.log(theSearchQuery)
    console.log(keywords);

    navigate({
      pathname: path,
      search: createSearchParams(queryParams).toString()
    });
  };

  // Function to receive keywords from SearchNav component
  const optionChange = (path) => {
    console.log("New Options");
    console.log(keywords);
    console.log(path);

    const queryParams = createParams(searchWas);
    navigate({
      pathname: path,
      search: createSearchParams(queryParams).toString()
    })
  };

  const refineApiResults = (result) => {
    var mergedList = [];
    for (var key in result) {
      if (Array.isArray(result[key])) {
        // Check if the property is an array
        mergedList = mergedList.concat(result[key]);
      }
    }
    return mergedList;  
  }

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
      const refinedResults = refineApiResults(data);
      setKeywords(refinedResults);
      // Call sendDataToParent to send keywords back to the parent
    } catch (error) {
      console.error('Error fetching keywords:', error);
    }
  };

  // useEffect(() => {
  //   // Fetch keywords from the API once the component has loaded
  //   fetchKeywordsFromApi(searchWas)
  //     .then(() => {
  //       console.log('Keywords fetched successfully:', keywords);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching keywords:', error);
  //     });
  // }, []);

  useEffect(() => {
    console.log("KEYWORDS RESET");
    console.log(keywords);
}, [keywords]);


  return (
    <div>
      <SearchNav
        search={searchWas}
        sendDataToParent={receiveKeywordsFromChild} // Pass the function to the child component
      />
      <Container id="organize-main-search">
        <Container className='keyword-sidebar-main-parent'>
        {keywords.length!=undefined ? (
            // Render the child component with the fetched data
            <KeywordSidebar setNewKeywords={resetKeywords} keywords={keywords} />
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
        <Container id="main-grid-container">
          <MainGrid sendDataFromMaingrid={optionChange} theSearch={searchWas} />
        </Container>
      </Container>
    </div>
  );
}

export default Search;
