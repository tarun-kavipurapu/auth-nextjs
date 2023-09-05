import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(
      process.env.DATABASE!
    );
    const connection = mongoose.connection;

    connection.on("connection", () => {
      console.log("MongoDB connection established");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection error" + err.message);
      process.exit();
    });
  } catch (err) {
    console.error("Error connecting to MongoDB: " + err);
    process.exit(1);
  }
}
