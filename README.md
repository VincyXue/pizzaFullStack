# Pizza Ordering Web App

A simple web application for ordering pizzas.

## Description

This web application allows users to view a menu of pizzas, select pizzas, and place orders. It includes a backend built with Express.js and MongoDB for handling orders and a frontend built with React.js for user interaction.

## Backend Functions

### 1. `getPizzaData()`

- **Description:** Retrieves pizza data from the database.
- **Endpoint:** `/`
- **HTTP Method:** GET
- **Usage:** Accessing this endpoint returns a JSON array containing information about available pizzas.

### 2. `submitOrder(order)`

- **Description:** Saves an order to the database.
- **Endpoint:** `/submit`
- **HTTP Method:** POST
- **Usage:** Sends a POST request with the order details in the request body to save the order.

## Frontend Functions

### 1. Menu Display

- **Description:** Renders the menu of available pizzas.
- **Component:** `Menu.jsx`
- **Functionality:** Fetches pizza data from the backend upon component mount and displays each pizza with its name, ingredients, price, and availability.

### 2. Order Form

- **Description:** Allows users to place orders.
- **Component:** `OrderForm.jsx`
- **Functionality:**
  - Displays an order button that, when clicked, reveals a form for users to input their name, address, contact information, selected pizza, and any special requests.
  - Validates form inputs and displays error messages accordingly.
  - Submits the order to the backend upon form submission.
