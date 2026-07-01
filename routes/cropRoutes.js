import express from 'express';
import { addCrop, getCrops, getMarketPrediction } from '../controllers/cropController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, addCrop);
router.get('/', protect, getCrops);
router.get('/predict/:cropName', protect, getMarketPrediction);

export default router;
