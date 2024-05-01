# HomeKeywordOptions Component Documentation

## Description
This React component provides options for refining search queries by adding keywords. It includes functionality to update the search query, add new keywords, and select from existing keywords.

## Component Functionality

### State Variables
- `query`: Stores the search query entered by the user.
- `keywords`: Stores the list of keywords.
- `showModal`: Manages the visibility of the modal for adding keywords.
- `newKeyword`: Stores the new keyword entered by the user.
- `selectedOption`: Stores the type of keyword selected by the user (species, country, year).
- `collectiveKeywordList`: Stores the collective list of keywords.
- `enrichedKeywords`: Stores the list of enriched keywords from the semantic layer.
- `buttonStates`: Manages the state of toggle buttons for keyword selection.

### Render Method
The `render` method returns JSX elements representing the search query input field, keyword selection toggle buttons, and modal for adding new keywords.

### Functionality
- `updateQuery`: Updates the search query based on user input.
- `openModal`: Displays the modal for adding new keywords.
- `closeModal`: Closes the modal for adding new keywords.
- `handleInputChange`: Updates the `query` state based on user input.
- `handleOptionClick`: Toggles the state of keyword selection buttons.
- `saveChanges`: Saves the new keyword and its type to the `keywords` state.
- `fetchKeywordsFromApi`: Fetches keywords from an API based on the search query.
- `performLegitSearch`: Performs a legitimate search based on selected keywords and the search query.
