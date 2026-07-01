import express from 'express';
import { receiveTelemetry, getDeviceLogs } from '../controllers/sensorController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Device data submissions don't usually require user JWT tokens (often uses api-keys instead)
router.post('/telemetry', receiveTelemetry);
router.get('/:deviceId', protect, getDeviceLogs);

export default router;
