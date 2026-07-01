import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Fall back to MONGO_URI if MONGO_URI_TEST is not found
        const dbUri = process.env.MONGO_URI_TEST || process.env.MONGO_URI;

        if (!dbUri) {
            throw new Error("No database connection string found in .env file. Check your MONGO_URI or MONGO_URI_TEST variables.");
        }

        const conn = await mongoose.connect(dbUri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
