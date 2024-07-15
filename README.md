# Digital Music Library

## Overview

This project is a digital music library that allows users to browse artists,their albums, and songs with a responsive and visually appealing interface.

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/garyson0/digital_music_library.git
   cd digital_music_library
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd ../frontend/music-library
   npm install
   ```

4. Create a .env file in backeknd folder with the following schema:
   ```bash
   PORT = 5000
   MONGO_URL = <YOUR_MONGO_DB_URL>
   ```

### Running the Project

1. Start the backend server:

   ```bash
   cd backend
   node index.js
   ```

2. Start the frontend development server:
   ```bash
   cd ../frontend/music-library
   npm start
   ```

### Using the Application

- Navigate to `http://localhost:3000` in your browser to see the application.

## Extending the Project

To extend this project, you can:

- Add new routes and functionalities in the backend
- Provide better ui/ux
- Improve the search functionality

## Video Demo

[Video Demo Link](#https://www.youtube.com/watch?v=742fmLG4Rmo)
