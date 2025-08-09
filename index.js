const express = require("express");
const app = express();

// Define PORT first
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Docker the container!");
});

// Listen on all network interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
