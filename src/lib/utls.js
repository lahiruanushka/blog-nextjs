import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    // Check if already connected
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    // Connect to the MongoDB database
    const db = await mongoose.connect(process.env.MONGOURI);

    // Set the connection state
    connection.isConnected = db.connection.readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
    throw new Error(error);
  }
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', // e.g., December
      day: 'numeric', // e.g., 25
    });
  
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true // 12-hour format with AM/PM
    });
  
    return `${formattedDate}, ${formattedTime}`;
  };
  