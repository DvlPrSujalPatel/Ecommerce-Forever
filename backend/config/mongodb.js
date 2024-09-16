import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI); // No options needed anymore
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit with failure code
  }
};

export default connectDB;
