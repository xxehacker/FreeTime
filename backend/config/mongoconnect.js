import mongoose from "mongoose";
import { ENV_VARIABLES } from "./envVariables.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV_VARIABLES.MONGO_URI);
    console.log("Connected to MongoDB" + connection.connection.host);
  } catch (error) {
    console.log(error);
  }
};
