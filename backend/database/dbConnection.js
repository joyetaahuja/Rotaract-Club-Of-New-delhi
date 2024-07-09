import mongoose from "mongoose";
import express from "express"; 
const PORT =4000;
const app = express();
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Volunteering_Project",
    })
    .then(() => {
      app.listen( PORT, ()=>{
        console.log(` http://localhost:` + PORT)
    }); 
    })
    .catch((error) => {
      console.log("Some Error Occured While Connecting To Database: ", error);
    });
};
