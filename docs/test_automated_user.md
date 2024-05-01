# Automated Test Script

## Description

This Python script automates testing of a web application's search functionality using Selenium. It simulates user input and validates the application's responses against expected results.

### Dependencies

- **selenium**: Install via pip (`pip install selenium`)
- **colorama**: Install via pip (`pip install colorama`)

### Execution

1. **Installation**:
    - Install the required dependencies using pip:
      ```bash
      pip install selenium colorama
      ```

2. **Execution**:
    - Run the Python script using Python 3:
      ```bash
      python test_automated_user.py
      ```

## Test Queries and Expected Results

The script tests various search queries against the web application and compares the obtained results with the expected outcomes to validate TAIL's correctness.

### Test Queries

The `test_queries` list contains a variety of search queries covering different species, countries, and years.

### Expected Results

The `expected_results` list contains the expected outcomes for each query, specifying the species, countries, and years.

Example:
- Query: "Chickens in Great Britain between 2011 and 2010"
  - Expected Result: {"species": ["Chickens"], "years": ["2011", "2010"], "countries": ["Great Britain"]}

## Automated_Test Class

### Methods

- `__init__()`: Initializes the Selenium WebDriver and a validation array.
- `disassemble_and_save_expected_result(expected_result)`: Parses and saves expected results into the validation array.
- `validate_ui(found_array, current_screen)`: Compares found UI elements with expected results and prints validation status.
- `derive_keywords(elements)`: Extracts keywords from UI elements.
- `test_query(query, expected_result)`: Executes a test query and validates the UI.
- `kill_driver()`: Closes the Selenium WebDriver.

## Execution

- The script instantiates the `Automated_Test` class and iterates through test queries, executing each test and validating the UI.
