# ToDo Website

This project is a simple ToDo application built using HTML, CSS, JavaScript, and MongoDB. It allows users to add, update, and delete tasks, providing a straightforward interface for task management.

## Project Structure

```
todo-website
├── public
│   ├── css
│   │   └── styles.css        # CSS styles for the ToDo website
│   ├── js
│   │   └── scripts.js        # JavaScript for client-side functionality
│   └── index.html            # HTML structure of the ToDo website
├── server
│   ├── models
│   │   └── task.js           # Mongoose model for tasks
│   ├── routes
│   │   └── tasks.js          # Express routes for task-related API requests
│   └── server.js             # Entry point of the server application
├── package.json               # npm configuration file
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd todo-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. **Start the server:**
   ```
   node server/server.js
   ```

5. **Open the application:**
   Navigate to `http://localhost:3000` in your web browser to access the ToDo application.

## Usage

- Add a new task using the form on the homepage.
- View existing tasks in the list below the form.
- Update or delete tasks using the provided buttons next to each task.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.