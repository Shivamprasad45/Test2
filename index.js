const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "App is working now" });
});

app.listen(8000, () => {
  console.log(`App is running on PORT ${8000}`);
});
