import mongoose, { mongo, Mongoose } from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db: Mongoose = await mongoose.connect(process.env.DB_URI!);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connection established!");
  } catch (error) {
    console.warn(error);
  }
}

export default dbConnect;
