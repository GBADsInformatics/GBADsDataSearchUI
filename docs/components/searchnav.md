
## SearchNav Component

The `SearchNav` component represents the navigation bar used for searching within the application.

### Props

- `search`: The initial search text.
- `sendDataToParent`: A function for sending search data to the parent component.

### State

- `searchText`: Stores the search text entered by the user.

### Functions

- `handleSearchChange(event)`: Handles changes in the search input field.
- `handleSearch(e)`: Handles the search event.

### Rendering

- Displays the application logo and navigation links.
- Provides a search input field for users to enter search queries.
- Allows users to submit the search query.

### Dependencies

- `react-bootstrap`: Used for styling and UI components.