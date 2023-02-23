const express = require("express");
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({ extended: true })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to carousel application. :)" });
});
// routes
require("./app/routes/carousel.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`***********************************************`);
  console.log(`Server is running on port ${PORT}.`);
  console.log(`***********************************************`);
});
