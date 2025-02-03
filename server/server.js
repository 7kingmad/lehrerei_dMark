const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ message: "huttoo" });
});
app.get("/api/balla", (req, res) => {
  res.json({ message: "buh buh" });
});

app.listen(5000, () => {
  console.log("listning on port 5000");
});
