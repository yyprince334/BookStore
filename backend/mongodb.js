import mongoose from "mongoose";
const URL = "mongodb://127.0.0.1:27017/BookStore";

export const connectdb = () => {
  mongoose
    .connect(URL, {
      UseNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => console); // Or We can do ".catch(console.error)" instead of ".catch(err => console)"
};
