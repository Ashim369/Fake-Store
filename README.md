
<!-- Fake Store Products React App -->

<!-- Overview -->

This is a React-based web application that fetches and displays products from the Fake Store API. It features a responsive product listing, product category , a navigation bar, and a cart system . The app is styled using CSS and built with Create React App.

<!-- Features -->

1.Product Listing: Displays products fetched from the Fake Store API in a responsive grid.

2.Navigation Bar: Includes links for Home, Store, Login, and Product.

3.Cart Functionality: Add  products to/from a cart (client-side simulation).

4.Responsive Design: Styled with CSS for a clean, modern look across devices.

<!-- Tech Stack -->

1.React: Frontend framework for building the UI.

2.Create React App: Boilerplate for setting up the React project.

3.Fake Store API: External API for product data.


<!-- Prerequisites -->

1.Node.js: Ensure you have Node.js installed (v14 or later recommended).

2.npm: Node package manager (comes with Node.js).


<!-- Installation -->

1.Clone the Repository:

git clone https://github.com/<your-username>/fakestore.git
cd fakestore


2.Install Dependencies:

npm install


3.Run the App:

npm start

<!-- API Reference -->

This project uses the Fake Store API to fetch product data. The endpoint used is:

GET https://fakestoreapi.com/products: Fetches the list of products.

Note: The API does not support authentication or product modification, so login and cart features are simulated client-side.