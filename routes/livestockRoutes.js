import express from 'express';
import { recordSale, getMySales } from '../controllers/livestockController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/sales', protect, recordSale); // Record a sale
router.get('/sales', protect, getMySales);   // View all sales

export default router;
