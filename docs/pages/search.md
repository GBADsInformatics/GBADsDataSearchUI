# Search Page Documentation

## Description
This React component serves as the parent page for searching within the application. It includes a search navigation component, a keyword sidebar, and the main grid for displaying search results.

## Component Functionality

### State Variables
- `searchWas`: Holds the current search query entered by the user.
- `keywords`: Stores the list of keywords fetched from the API based on the user's search query.

### Functions
- `IdentifyURL`: Identifies the current URL and extracts the search query part.
- `createParams`: Creates search parameters for the URL based on the search query and keywords.
- `resetKeywords`: Updates the keywords in the state and navigates to the updated URL with the new search parameters.
- `receiveKeywordsFromChild`: Receives keywords from the child component (SearchNav) and updates the state. It then fetches keywords from the API and resets the keywords.
- `optionChange`: Handles changes in search options and navigates to the updated URL with the new search parameters.
- `fetchKeywordsFromApi`: Makes an asynchronous API call to fetch keywords based on the search query using Axios. Upon successful response, it updates the `keywords` state variable.

### Render Method
The `render` method returns JSX elements representing the structure of the search page:
- `SearchNav`: Renders the search navigation component.
- `Container` (keyword sidebar): Renders the keyword sidebar component with fetched data or loading placeholders.
- `Container` (main grid): Renders the main grid component to display search results.
