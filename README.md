# StellarHunt-frontend

StellarHunt is a beautiful and user-friendly flower shop frontend website built using React. This frontend interacts 
with a Django backend API to provide a seamless shopping experience for users. Whether you are looking to buy flowers
for a special occasion or just to brighten up your day, StellarHunt has got you covered.
<img src="https://github.com/WishaEman/StellarHunt-frontend/blob/main/my-app/public/media/StellarHunt.png" height="30%", height="50%" />
[//]: # (<![StellarHunt.png]&#40;my-app%2Fpublic%2Fmedia%2FStellarHunt.png&#41;>)

`Features`

StellarHunt offers a range of features to make your flower shopping experience enjoyable and hassle-free:

* `User Authentication`: Users can sign up and log in to access personalized features such as order history and saved
addresses.
* `Home Page`: The home page displays featured flower arrangements and promotions to grab the user's attention.
* `Categories and Subcategories`: Flowers are categorized into various types and subcategories, making it easy for users
to browse and find their favorite blooms.
* `Product Catalog`: Users can browse through the extensive catalog of flowers, view product details, and add them to 
their cart.
* `Shopping Cart`: An interactive shopping cart allows users to add, remove, and update the quantity of items they 
wish to purchase.
* `Checkout`: A seamless checkout process where users can see payment details to complete their purchase.

`Getting Started`

To run StellarHunt on your local machine, follow these steps:

`Prerequisites`
* Node.js and npm installed on your computer.
* A running Django backend server. Ensure the API endpoints for products, categories, and user authentication 
are correctly configured.

`Installation`
1. Clone the repository to your local machine:
    ```bash
       git clone https://github.com/WishaEman/StellarHunt-frontend.git
    ```

2. Navigate to the project directory:
    ```bash
       cd StellarHunt-frontend
   ```
   
3. Install the required dependencies:
    ```bash
       npm install
    ```

`Configuration`

1. Open the .env file in the project root directory and configure the API endpoint for your Django backend:
   ```env
        REACT_APP_API_URL=http://127.0.0.1:8000/
   ```

2. Update any other configuration settings as needed, such as the authentication settings.

`Running the Application`

1. Start the development server:
   ```bash
      npm start
   ```

2. Open your web browser and access the application at `http://localhost:3000`.

`Contributing`

If you'd like to contribute, please follow these guidelines:

* Fork the repository and create a new branch for your feature or bug fix.
* Make your changes and test thoroughly.
* Create a pull request with a clear description of your changes.
* Ensure your code follows best practices and is well-documented.
