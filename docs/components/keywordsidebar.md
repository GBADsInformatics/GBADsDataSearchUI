# KeywordSidebar Component Documentation

## Description
The KeywordSidebar component provides a sidebar interface for managing keywords. It allows users to add new keywords, view existing keywords, and remove keywords if needed.

## Component Functionality

### State Variables
- `showModal`: Manages the visibility of the modal for adding keywords.
- `newKeyword`: Stores the new keyword entered by the user.
- `keywords`: Stores the list of keywords.
- `selectedOption`: Stores the type of keyword selected by the user (species, country, year).
- `collectiveKeywordList`: Stores the collective list of keywords.
- `collectiveToArray`: Converts the collective list of keywords to an array.

### Render Method
The `render` method returns JSX elements representing the sidebar interface, including the list of keywords and the modal for adding new keywords.

### Functionality
- `addToJsonKeywords`: Adds the new keyword to the list of keywords based on the selected option.
- `closeModal`: Closes the modal for adding new keywords.
- `saveChanges`: Saves the new keyword and its type to the list of keywords.
- `handleKeyPress`: Handles the "Enter" key press event to trigger saving changes.
- `convertCollectiveToArray`: Converts the collective list of keywords to an array.
- `useEffect`: Handles updates to the component state and props.
