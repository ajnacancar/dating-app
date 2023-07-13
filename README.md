# Dating Application

This is a web-based dating application built with .NET Core and Angular. It allows users to create profiles, browse through other user profiles, and connect with potential matches.

## Features

- User Registration: Users can create an account by providing their basic information and setting up a password.
- User Authentication: Secure user authentication is implemented using password hashing and JWT authentication tokens.
- User Profiles: Users can create and update their profiles by adding personal details, uploading photos, and setting preferences.
- Matching Algorithm: The application uses a sophisticated matching algorithm to suggest potential matches based on user preferences and interests.
- Search Functionality: Users can search for other users based on various filters, such as age, location, interests, etc.
- Messaging: Users can send messages to other users they are interested in and engage in private conversations.
- Notifications: Users receive real-time notifications for new messages, profile views, and matches.
- Premium Features: The application offers premium features, such as advanced search filters, unlimited messaging, and the ability to see who viewed their profiles.
- Admin Dashboard: An admin dashboard is provided to manage the application, including user management and analytical insights.

## Technologies Used

- Backend: .NET Core, PostgreSQL (Database)
- Frontend: Angular (TypeScript)
- Database: PostgreSQL

## Backend Technologies

1. .NET Core: The backend of this application is built using the .NET Core framework. .NET Core is a cross-platform framework that allows developers to build scalable and high-performance applications.
2. PostgreSQL: The application utilizes PostgreSQL as the relational database management system. PostgreSQL is a powerful and open-source database that provides reliability, scalability, and robustness.

## Frontend Technologies

1. Angular: The frontend of this application is developed using Angular, a popular JavaScript framework for building dynamic and responsive web applications. Angular provides a modular and component-based architecture for creating rich user interfaces.
2. TypeScript: Angular applications are written in TypeScript, a statically typed superset of JavaScript that adds features like strong typing, classes, and modules. TypeScript makes Angular code more manageable and helps catch errors during development.

Setup Instructions
To set up and run the e-commerce application, please follow the steps below:

Backend
Install .NET Core SDK if you don't have it already. Refer to the official .NET Core documentation for installation instructions.

Install PostgreSQL database server if you don't have it already. Refer to the official PostgreSQL documentation for installation instructions.

Install Redis server if you don't have it already. Refer to the official Redis documentation for installation instructions.

Clone this repository

Navigate to the API project folder: cd API

Run the database migrations to create the necessary tables: dotnet ef database update

Start the backend server: dotnet run

Frontend
Install Node.js if you don't have it already.
Go to clinet folder: cd clienr
Run: npm i
Run: ng serve --o
