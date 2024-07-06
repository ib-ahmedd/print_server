import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGODB_URI ? process.env.MONGODB_URI : "",
      {
        dbName: "Print",
      }
    );
    console.log("MongoDB connected");
    isConnected = true;
  } catch (err) {
    console.log(err);
  }
};

export default connectToDB;
