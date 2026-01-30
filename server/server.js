import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/connectDB.js";
import authRoutes from './routes/authRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.port || 8080;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(cookieParser());
app.use(express.json());
app.use('/api', authRoutes);
async function startServer() {
  await connectDB();   

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();