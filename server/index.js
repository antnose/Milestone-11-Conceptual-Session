const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;

// All Middleware is here
const corsOptions = {
  origin: "http://localhost:5173/",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Code from server");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
