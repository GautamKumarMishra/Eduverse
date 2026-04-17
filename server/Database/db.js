import mongoose from "mongoose";
const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error Occured --> ", error);
  }
};
export default DBConnect;
