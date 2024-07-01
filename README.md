# Survin

Survin is an online survey platform designed to simplify the process of creating, sharing, and managing surveys. Built with Vue.js, Express.js, Node.js, and MongoDB, Survin offers a user-friendly interface, various question types, and response trackings.

## Features

- **User Registration and Authentication**

  - Secure user registration and login
  - Password recovery

- **Survey Creation**

  - Support for multiple question types (multiple choice, text input, rating scales, etc.)
  - Customizable survey fields (mandatory and optional)

- **Survey Distribution**

  - Unique link generation for sharing surveys

- **Response Collection and Management**
  - Option to close surveys

## Technology Stack

- **Frontend:** Vue.js
- **Backend:** Express.js, Node.js
- **Database:** MongoDB

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/khalednadam/survin.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd survin
   ```

3. **Setup the project:**

   ```sh
   npm run setup-project
   ```

4. **Run the development servers:**
   ```sh
   npm run dev
   ```

## Scripts

- **`npm run setup-project`**: Installs backend and frontend dependencies.
- **`npm run dev`**: Runs both backend and frontend servers concurrently.
- **`npm run server`**: Runs only the backend server with nodemon.
- **`npm run build-client`**: Builds the frontend client.
- **`npm start`**: Starts the backend server.
- **`npm run setup-production`**: Sets up the project for production.
- **`npm run install-client`**: Installs frontend dependencies.

## Usage

1. **Register a new account or log in with existing credentials.**
2. **Create a new survey.**
3. **Share the survey via the generated link.**
4. **Track responses via the responses tab.**

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Khaled Nadam - hello@khalednadam.com

Project Link: [https://github.com/khalednadam/survin](https://github.com/khalednadam/survin)
