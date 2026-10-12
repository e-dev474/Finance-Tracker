import express from "express";

const app = express();
const PORT = 3000;

// Allow our API to read JSON requests
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Finance Tracker API is running"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});