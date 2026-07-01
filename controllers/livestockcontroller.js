import LivestockSale from '../models/livestock.model.js';

// Record a new livestock sale
export const recordSale = async (req, res) => {
    try {
        const { livestockType, quantity, weightPerKg, totalPrice, buyerName, saleDate } = req.body;

        const newSale = await LivestockSale.create({
            farmer: req.user.id, // Pulled safely from your auth middleware token
            livestockType,
            quantity,
            weightPerKg,
            totalPrice,
            buyerName,
            saleDate
        });

        res
            .status(201)
            .json({ message: "Livestock sale recorded successfully", sale: newSale });
    } catch (error) {
        res
            .status(400)
            .json({ error: error.message });
    }
};

// Get all livestock sales for the logged-in farmer
export const getMySales = async (req, res) => {
    try {
        const sales = await LivestockSale.find({ farmer: req.user.id }).sort({ saleDate: -1 });
        res
            .status(200)
            .json(sales);
    } catch (error) {
        res
            .status(500)
            .json({ error: error.message });
    }
};
