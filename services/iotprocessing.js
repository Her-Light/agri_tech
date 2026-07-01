import SensorData from '../models/sensordata.model.js';

export const processReading = async (data) => {
    // Save IoT data to database
    const reading = await SensorData.create(data);

    // Business Logic: Trigger actions or flags if soil moisture drops below 30%
    let alertTriggered = false;
    if (reading.soilMoisture < 30) {
        alertTriggered = true;
        console.log(`[ALERT] Low moisture detected on Device ${reading.deviceId}: ${reading.soilMoisture}%`);
    }

    return { reading, alertTriggered };
};
