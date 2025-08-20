import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
connectDB();


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Example test route
app.get("/", (req, res) => {
  res.send("🚀 CruxAI Backend is running...");
});

/* -------------------- API Routes -------------------- */

// Gemini API route
app.post("AIzaSyAioHwT8E5NTKsm9Kn7orKStR4OGwXl7Ws", async (req, res) => {
  try {
    // TODO: integrate Gemini API here
    res.json({ success: true, provider: "Gemini", message: "Gemini response placeholder" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Grok API route
app.post("2dZtgId7E4ebWsPPsyyBiCek4OFgzwlSiBjGC1UPa7mWWCUtuQtpfYFJFkG0A8UA2vfhIFPrQCCaV8Ep", async (req, res) => {
  try {
    // TODO: integrate Grok API here
    res.json({ success: true, provider: "Grok", message: "Grok response placeholder" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DeepSeek API route
app.post("sk-85b6cd33dbfa4576a34b7a0d84c6685c", async (req, res) => {
  try {
    // TODO: integrate DeepSeek API here
    res.json({ success: true, provider: "DeepSeek", message: "DeepSeek response placeholder" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/* -------------------- Start Server -------------------- */
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});