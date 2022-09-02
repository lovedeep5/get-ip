const express = require("express");
const requestIp = require("request-ip");
const cors = require("cors");
const visitorDB = require("./firebaseConfig");
const { v4: uuid } = require("uuid");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/", (req, res) => {
  const ip = requestIp.getClientIp(req);
  const host = req.get("host");
  const date = new Date();

  const remoteAddress = req.socket.remoteAddress;
  visitorDB.add({ id: uuid(), date, ip, host, remoteAddress });
  res.json({ ip });
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
