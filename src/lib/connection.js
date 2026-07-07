// src/lib/mongodb.js
import mongoose from "mongoose";

export default async function connectToDb() {
    // If a connection is already established, reuse it
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw new Error("Error connecting to the database.");
    }
}