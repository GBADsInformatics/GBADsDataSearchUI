# Loading Table Component

This component represents a loading table used for displaying datasets and their descriptions while data is being fetched.

## Props

This component does not accept any props.

## Description

The `LoadingTable` component renders a table structure using the `react-bootstrap/Table` component for displaying datasets and their descriptions. It is intended to be used as a placeholder or loading indicator while data is being fetched asynchronously.

## Structure

The table consists of two columns: "Dataset" and "Description". Each row represents a dataset, with each column cell containing placeholder content until the actual data is loaded.

## Styling

The component uses inline styles for coloring and layout adjustments, as follows:

- The headers of the table columns have a grey color.
- The table is responsive, adjusting to different screen sizes.
- Placeholder elements are used within the table cells to simulate loading animation.

## Components Used

- `react-bootstrap/Table`: Used for creating the table structure.
- `react-bootstrap/Placeholder`: Used for displaying loading placeholders within the table cells.