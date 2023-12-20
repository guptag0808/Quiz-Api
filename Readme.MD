# Quiz Application Backend

This repository contains the backend implementation for a quiz application built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create quizzes with questions, options, and time constraints.
- Retrieve the currently active quiz.
- Get quiz results after the quiz has ended.
- Retrieve a list of all quizzes.
- Secure access with JWT-based authentication.
- Rate limiting to prevent abuse.

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quiz-application-backend.git

 - cd quiz-application-backend
 - npm install
 - npm start

 ## Usage 
  - The application will be running at http://localhost:3000 by default.
  - Use Postman or any API testing tool to interact with the API endpoints.

## API Endpoints
 - POST /auth/signup: Create a new user.
 - POST /auth/login : For login
 - POST /api/quizzes: Create a new quiz.
 - GET /api/quizzes/active: Retrieve the currently active quiz.
 - GET /api/quizzes/:id/result: Get quiz results for a specific quiz.
 - GET /api/quizzes/all: Retrieve a list of all quizzes.

 ## Authentication
- Secure your API with JWT-based authentication.
- Pass the token into the headers
- Include the JWT token in the Authorization header for protected routes
 
## Error Handling
 - Proper error handling is implemented for various scenarios.
 - Check the response status code and the returned JSON for error details

## Request.body  for user
 ```bash
    username:"",
    password:""


## Request.body For quizzes
```bash
{
  "questions": [
    {
      "text": "What is the capital of France?",
      "options": ["Berlin", "Paris", "Madrid", "Rome"],
      "correctAnswer": 1
    },
    {
      "text": "What is the largest mammal?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      "correctAnswer": 1
    }
  ],
  "startDate": "2023-01-01T12:00:00Z",
  "endDate": "2023-01-01T13:00:00Z"
}




