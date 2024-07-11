import mongoose from "mongoose";
import dotenv from "dotenv";

const connectToDatabase = async () => {
  try {
    dotenv.config();
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connection has been established.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
