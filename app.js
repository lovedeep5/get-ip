const express = require("express");
const requestIp = require("request-ip");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/", (req, res) => {
  const ip = requestIp.getClientIp(req);
  res.json({ ip });
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
