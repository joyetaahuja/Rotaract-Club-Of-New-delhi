import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./router/messageRouter.js";
import volunteerRoutes from './router/volunteerRoutes.js';
import mongoose from 'mongoose';
const PORT = 4000;
const app = express();
dotenv.config({ path: "./config.env" });
app.use(cors({
  origin: ['https://rotaract-club-of-new-delhi.vercel.app'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);
app.use('/api/volunteers', volunteerRoutes);


app.get('/',(req,res)=>{
  res.send("checkinggg")
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
  app.listen( PORT, ()=>{
      console.log(` http://localhost:` + PORT)
  }); 
});

export default app;