// src/lib/mongodb.js
import mongoose from "mongoose";

export default async function connectToDb() {
    // logic to connect to the database

    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        if (db) {
            console.log('Connected to the database successfully');
            return db;
        } else {
            console.log('Failed to connect to the database');
        }
    }

    catch (error) {
        console.error('Error connecting to the database:', error);
    }

}