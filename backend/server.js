require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/db');
const cityRoutes = require('./routes/cityRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// CORS configuration - cho phép Vercel domain
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        'https://https://lilsadfoqs-weather-game.vercel.app/', // Thay bằng URL Vercel thực tế
        process.env.FRONTEND_URL
    ],
    credentials: true,
    optionsSuccessStatus: 200
}));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

dbConnect();

app.use('/api', cityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
    // Self-ping to prevent RENDER sleep
    if (process.env.NODE_ENV === 'production') {
        const RENDER_URL = process.env.RENDER_EXTERNAL_URL || `https://weather-game-lilsadfoqs.onrender.com`;
        
        setInterval(async () => {
            try {
                const fetch = (await import('node-fetch')).default;
                await fetch(`${RENDER_URL}/health`);
                console.log('Self-ping successful');
            } catch (error) {
                console.log('Self-ping failed:', error.message);
            }
        }, 10 * 60 * 1000); // Ping mỗi 10 phút
    }
});