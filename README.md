# Weather Game

A web-based weather-themed strategy game where players battle using weather patterns from real cities around the world.

## Overview

Weather Game combines real-time weather data with tactical gameplay. Players collect weather patterns from different cities and engage in turn-based battles. Each weather type has unique strengths and weaknesses, creating strategic depth through rock-paper-scissors-style combat mechanics.

## Tech Stack

**Frontend**
- React 19 with Vite
- Tailwind CSS for styling
- React Router for navigation
- DND Kit for drag-and-drop interactions
- Axios for API calls

**Backend**
- Node.js with Express
- MongoDB with Mongoose
- CORS enabled for cross-origin requests
- Real-time weather data integration

## Features

- Real weather data from OpenWeatherMap API
- Turn-based tactical combat system
- Drag-and-drop squad management
- Progressive difficulty with boss battles
- City-based weather collection
- Squad enhancement mechanics

## Setup

### Prerequisites
- Node.js (v16+)
- MongoDB database
- OpenWeatherMap API key

### Installation

1. Clone the repository
2. Install root dependencies:
   ```
   npm install
   ```

3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

4. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Configuration

1. Backend environment variables (`.env`):
   ```
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=production
   PORT=5000
   RENDER_EXTERNAL_URL=your_backend_url
   ```

2. Frontend environment variables (`.env`):
   ```
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
   VITE_API_URL=your_backend_url
   ```

## Development

Run both frontend and backend concurrently:
```
npm start
```

Or run them separately:
```
# Backend only
npm run server

# Frontend only
npm run client
```

## Deployment

**Backend**: Deploy to Render or similar Node.js hosting service
**Frontend**: Deploy to Vercel or similar static hosting service

Configure environment variables on your deployment platforms matching the local setup.

## Game Rules

- Choose a starting city to build your initial squad
- Battle enemy cities using weather-based combat
- Weather types have rock-paper-scissors relationships
- Enhance squad members by winning battles
- Survive progressive waves of increasing difficulty
- Face boss battles at rounds 10, 20, 30, and 40

## API Endpoints

- `GET /health` - Server health check
- `GET /api/cities/:count` - Get random cities for gameplay

## License

This project is open source and available under standard license terms.
