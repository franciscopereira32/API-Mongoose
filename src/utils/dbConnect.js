import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('cluster0.jblk2.mongodb.net');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;