import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./src/db/index.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const app = express(); 

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:"], 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
  console.log("server running on port", PORT);
  await connectToDB();
});
