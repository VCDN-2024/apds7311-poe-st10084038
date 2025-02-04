NetBankers International Payments Portal
Project Overview
NetBankers is a state-of-the-art international payment platform designed to streamline global financial transactions securely and efficiently. This web application includes features for both administrative and user roles, allowing users to send payments, view financial statements, and manage their accounts while providing admins with tools to manage payments and oversee operations.

Features
User Features:
Secure Login and Registration:

Users can log in with their credentials or create an account securely.
Passwords are hashed and salted for security.
Send Payments:

Initiate payments by providing recipient details, amount, and SWIFT code.
Real-time currency conversion for supported currencies (USD, EUR, GBP, ZAR).
View Financial Insights:

Visual representation of transactions (money in vs. money out) via interactive charts.
Comprehensive transaction history, including statuses and timestamps.
Account Management:

View balance and account number.
View transaction history and statements.
Admin Features:
Admin Dashboard:

View pending payments with options to approve or reject.
Manage user accounts and monitor payment activities.
Add New Admins:

Create additional admin accounts directly from the dashboard.
Audit and Oversight:

Monitor and manage all transactions and user activities for compliance and accuracy.
Tech Stack
Frontend:

React
Tailwind CSS
Chart.js
Backend:

Node.js
Express.js
MongoDB (via Mongoose)
JWT for authentication
Development Tools:

ESLint for code linting
Prettier for code formatting
SonarQube for code quality checks
Installation and Setup
Prerequisites:
Node.js installed on your machine.
MongoDB Atlas database connection string.
mkcert or equivalent for setting up SSL certificates.
Steps:
Clone the repository:

git clone https://github.com/your-repository/netbankers.git
cd netbankers
Set up the backend:

cd backend
npm install
Configure the .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Set up the frontend:

cd ../frontend
npm install
Configure the .env file:
REACT_APP_API_URL=https://localhost:5000
Generate SSL Certificates:

mkcert -install
mkcert localhost
Move the generated .pem files to the appropriate backend folder and update server.js.

Run the application:

Start the backend server:
cd backend
npm start
Start the frontend server:
cd ../frontend
npm start
Open the application in your browser at https://localhost:3000.

Project Structure
/backend
  ├── config/           # Database configuration
  ├── middleware/       # Middleware for authentication and error handling
  ├── models/           # MongoDB schemas
  ├── routes/           # API routes
  ├── server.js         # Entry point of the backend

/frontend
  ├── public/           # Static files
  ├── src/              # React source code
      ├── components/   # React components
      ├── api.js        # Axios setup for API requests
      ├── App.js        # Main application file
      ├── index.js      # Entry point of the frontend
  ├── .env              # Environment variables for React
Security Features
Authentication:

Password hashing with bcrypt.
JSON Web Tokens (JWT) for session management.
Input Validation:

RegEx patterns for whitelisting input fields.
Server-side validation.
Traffic Security:

HTTPS enforced via SSL certificates.
Protection Against Common Attacks:

SQL injection: Using Mongoose ORM for safe database queries.
Cross-Site Scripting (XSS): Input sanitization and React's built-in escaping mechanisms.
CSRF Protection: Cookies with SameSite policies.
Usage Guide
Users:

Register or log in to access your account.
Use the "Make Payment" feature to send funds internationally.
View your financial insights and transaction history.
Admins:

Log in to the admin dashboard.
Manage pending payments by approving or rejecting them.
Add new admin users from the "Add Admin" section.
Testing and Quality Assurance
Unit Testing:

Mocha and Chai for backend.
Jest for frontend components.
Code Quality:

ESLint and Prettier for consistent code style.
SonarQube for analyzing code smells and vulnerabilities.
References
MongoDB Documentation:

Mongoose Guide
MongoDB Atlas
React Documentation:

React Official Docs
React Router
Node.js and Express:

Node.js Official Docs
Express.js Guide
Chart.js for Financial Insights:

Chart.js Documentation
Authentication and Security:

JSON Web Tokens (JWT)
bcrypt.js
Styling and Design:

Tailwind CSS Documentation
Testing Tools:

Mocha
Jest
Contribution
Fork the repository.
Create a new branch for your feature:
git checkout -b feature-name
Commit your changes and push to your fork.
Submit a pull request for review.
License
This project is licensed under the MIT License. See LICENSE for details

## Features

- User account and Registration and user login
- Mock user button for logging in without password
- Banking Page: Currency can be selected from dropdown menu
- Reacts: Account no and Password can be saved and managed in the Internet Password Management cloud system


## Details of the Screens

1. Register section
The user must enter their full name and ID numner(13 digits). The account no has to be manually entered in the register panel or pulled from the cloud(after successful register). Lastly the password should be created(and will be saved in password manager)

2. Login In section
The Log In secion allows existing users to log into their accounts securely. Users can input their credentials to access the banking panel section once successfully logged in.

3. Banking Section
- The user can manually enter an amount or use the dropdown on the right of the panel that increments or decreses by 1 currency every time. 
- The currency can be specified in the list pannel below
- The user must enter the account no that they desire to transact with
- (Important Note) The Swift code must be entered(must use 4001)
- Then the user can click the pay button and successfully complete the transaction

## Installation (Methods to use)

Install my-project with npm

```bash
Copy code
git clone 

Install dependencies: https://github.com/VCDN-2024/apds7311-poe-st10084038.git

```bash
Copy code
npm install
Run the application:

``` bash
Copy code
npm start
Access the application at http://localhost:3000.

```
    
## Authors

- [Aphiwe Lanhgalethu Mbonambi](ST10083669@vcconnect.edu.za)

- [Lulamani Goodnews Ndabandaba](ST10084038@vcconnect.edu.za)

- [Brian Raymond](st10083930@vcconnect.edu.za)

- [Siyabonga Avumile Bagwa](st10116698@vcconnect.edu.za)

Youtube: https://www.youtube.com/watch?v=JffL2QEjnv0&error=15
