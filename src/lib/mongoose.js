// Initialize Mongoose connection
import mongoose from "mongoose";
export async function initiMongoose() {
  try {
      if (mongoose.connection.readyState === 1) {
          console.log("MongoDB connection already established");
          return mongoose.connection;
      }
      return await mongoose.connect("mongodb+srv://jerrymardeburg:hg1Cevqzis54qEYm@cluster0.1vx980y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
  } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error; // Re-throw the error for the caller to handle
  }
}