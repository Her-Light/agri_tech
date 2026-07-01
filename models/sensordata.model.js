import mongoose from 'mongoose';

const sensorDataSchema = new mongoose.Schema({
    deviceId: { type: String, required: true },
    soilMoisture: { type: Number, required: true }, // Percentage
    temperature: { type: Number, required: true },  // Celsius
    recordedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('SensorData', sensorDataSchema);
