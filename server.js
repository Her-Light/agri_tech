import dns from 'node:dns'; // 1. Import the native Node DNS package
dns.setServers(['1.1.1.1', '8.8.8.8']); // 2. Force Node to use Cloudflare & Google DNS

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs'; // Added built-in File System module
import connectDB from './config/database.js';

import userRoutes from './routes/userRoutes.js';
import cropRoutes from './routes/cropRoutes.js';
import sensorRoutes from './routes/sensorRoutes.js';
import livestockRoutes from './routes/livestockRoutes.js'

// Manually parse the file to completely bypass terminal injection issues
try {
    const envConfig = dotenv.parse(fs.readFileSync('./.env'));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
    console.log("Successfully loaded environment variables directly from file.");
} catch (error) {
    console.error("Failed to read .env file manually:", error.message);
}

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes Hookup
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/crops', cropRoutes);
app.use('/api/v1/sensors', sensorRoutes);
app.use('/api/v1/livestock', livestockRoutes);

app.get('/', (req, res) => res.json({ status: "online", system: "Agritech Engine V1" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Agritech system running on port ${PORT}`));
