import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGOdb_URL, {
      dbName: "quizze",
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
};
