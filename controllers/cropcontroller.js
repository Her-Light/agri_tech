import Crop from '../models/crop.model.js';
import { getPriceTrend } from '../services/pricePrediction.js';

export const addCrop = async (req, res) => {
    try {
        const { name, variety, plantedAt, harvestExpectedAt } = req.body;
        const crop = await Crop.create({ farmer: req.user.id, name, variety, plantedAt, harvestExpectedAt });
        res
            .status(201)
            .json(crop);
    } catch (error) {
        res
            .status(400)
            .json({ error: error.message });
    }
};

export const getCrops = async (req, res) => {
    try {
        const crops = await Crop.find({ farmer: req.user.id });
        res
            .status(200)
            .json(crops);
    } catch (error) {
        res
            .status(500)
            .json({ error: error.message });
    }
};

export const getMarketPrediction = async (req, res) => {
    try {
        const trend = await getPriceTrend(req.params.cropName);
        res
            .status(200)
            .json(trend);
    } catch (error) {
        res
            .status(500)
            .json({ error: error.message });
    }
};
