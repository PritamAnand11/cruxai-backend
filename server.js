import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:5000`);
});

app.use(cors());
app.use(express.json());

// Example test route
app.get("/", (req, res) => {
  res.send("🚀 CruxAI Backend is running...");
});

app.post("/api/ask", async (req, res) => {
  try {
    const { question, provider } = req.body;

    if (!question) {
      return res.status(400).json({ success: false, error: "Question is required" });
    }

    let reply = "";

    switch (provider) {
      case "gemini":
        reply = "Gemini response placeholder";
        break;

      case "grok":
        reply = "Grok response placeholder";
        break;

      case "deepseek":
        reply = "DeepSeek response placeholder";
        break;

      default:
        return res.status(400).json({ success: false, error: "Unknown provider" });
    }

    res.json({ success: true, provider, reply });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:5000`);
});
