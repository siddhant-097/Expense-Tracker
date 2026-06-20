import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://siddhantchaudhary097_db_user:zBM2Lbks2YUYakxe@cluster0.vklskn3.mongodb.net/Expense")
    .then(() => console.log("DB Connected"));
} 