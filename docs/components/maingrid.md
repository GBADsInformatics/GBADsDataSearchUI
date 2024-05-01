## MainGrid Component

The `MainGrid` component serves as the main interface for displaying datasets and their descriptions. It interacts with an API to fetch data based on selected options.

### Props

- `keywords`: An object containing keywords for filtering datasets.
- `sendDataFromMaingrid`: A function for sending data from the main grid.

### State

- `selectedOption`: Stores the currently selected option ('data', 'literature', or 'query').
- `isLoading`: Indicates whether data is being loaded.
- `reqData`: Stores the fetched data.
- `keywords`: Stores the keywords used for filtering datasets.
- `selectedRowIndex`: Stores the index of the selected row.
- `modalOpen`: Indicates whether the modal is open.

### Functions

- `handleRowClick(rowIndex)`: Handles the click event on a row.
- `handleCloseModal()`: Closes the modal.
- `optionChangeApiCall()`: Fetches data based on selected options.
- `handleOptionClick(option)`: Handles the click event on an option.

### Rendering

- If data is loading, it renders a loading table.
- If no data is available, it renders a message indicating no results.
- Otherwise, it renders a table with dataset information.

### Dependencies

- `axios`: Used for making HTTP requests.
- `react-bootstrap`: Used for styling and UI components.
- `CellData`: Component for displaying detailed dataset information.
- `DatasetCell`: Component for displaying dataset cells.