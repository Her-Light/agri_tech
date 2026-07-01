export const getPriceTrend = async (cropName) => {
    // Mimicking a heavy algorithm or ML prediction logic for market rates
    const basePrices = { cassava: 150, maize: 220, rice: 310 };
    const currentPrice = basePrices[cropName.toLowerCase()] || 100;

    // Simulate market fluctuation calculations (+/- 5%)
    const predictedPriceNextMonth = currentPrice * (1 + (Math.random() * 0.1 - 0.05));

    return {
        crop: cropName,
        currentMarketPricePerKg: currentPrice,
        predictedPriceNextMonth: Math.round(predictedPriceNextMonth * 100) / 100,
        confidenceInterval: "85%"
    };
};
