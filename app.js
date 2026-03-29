import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import commentsModel from "./models/comments.model.js";

const app = express();

await connectDB();

// Middleware
app.use(cors());
app.use(express.json());   

// default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Task On GCP - Using DOCKER......</h1>");
});

app.get("/api/comments", async (req, res) => {
  try {
    const comments = await commentsModel.find().limit(20).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default app;


