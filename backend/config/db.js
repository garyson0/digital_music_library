import mongoose from 'mongoose';


const connectToDatabase = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL,);
      console.log('MongoDB connection has been established.');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
};

export default connectToDatabase;