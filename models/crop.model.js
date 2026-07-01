import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema({
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true }, // e.g., Cassava, Maize
    variety: { type: String },
    plantedAt: { type: Date, required: true },
    harvestExpectedAt: { type: Date }
}, { timestamps: true });

export default mongoose.model('Crop', cropSchema);
