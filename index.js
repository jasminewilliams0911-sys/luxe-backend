const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "Alurix API running",
    time: new Date().toISOString()
  });
});
app.get('/heartbeat', (req, res) => {
  res.json({
    status: 'ok',
    service: 'alurix',
    timestamp: new Date().toISOString()
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
