import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./src/db/index.js";
import userRoutes from "./src/routes/user.routes.js";
import { swaggerSpec, swaggerUi } from "./src/config/swagger.js";
import examRoutes from "./src/routes/exam.routes.js";
import subjectRoutes from "./src/routes/subject.routes.js";
import paperRoutes from "./src/routes/paper.routes.js ";

dotenv.config();

const app = express(); 

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "https://oyo-elibrary.vercel.app"], 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/papers", paperRoutes);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
  console.log("server running on port", PORT);
  connectToDB();
});
