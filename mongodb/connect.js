import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectDB = () => {
  const url = process.env.MONGO_URL; // Load MONGO_URL from .env

  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("connected to MovieTicket MongoDB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

export default connectDB;
