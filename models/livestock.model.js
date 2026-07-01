import mongoose from 'mongoose';

const livestockSaleSchema = new mongoose.Schema({
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    livestockType: { type: String, enum: ['Cattle', 'Poultry', 'Goats', 'Pigs', 'Sheep'], required: true },
    quantity: { type: Number, required: true, min: 1 },
    weightPerKg: { type: Number }, // Optional weight tracking
    totalPrice: { type: Number, required: true },
    buyerName: { type: String },
    saleDate: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('LivestockSale', livestockSaleSchema);
