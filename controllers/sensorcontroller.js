import { processReading } from '../services/iotProcessing.js';
import SensorData from '../models/sensordata.model.js';

export const receiveTelemetry = async (req, res) => {
    try {
        const result = await processReading(req.body);
        res
            .status(201)
            .json(result);
    } catch (error) {
        res
            .status(400)
            .json({ error: error.message });
    }
};

export const getDeviceLogs = async (req, res) => {
    try {
        const logs = await SensorData.find({ deviceId: req.params.deviceId }).sort({ recordedAt: -1 }).limit(20);
        res
            .status(200)
            .json(logs);
    } catch (error) {
        res
            .status(500)
            .json({ error: error.message });
    }
};
