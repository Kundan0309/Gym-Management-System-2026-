//required modules //
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 5000;


//to serve static files  such as js,css,images//
app.use(express.static(path.join(__dirname, "public")));


//to render main page//
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });



// Listen on Port 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

