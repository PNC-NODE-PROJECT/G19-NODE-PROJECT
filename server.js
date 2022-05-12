// .env config
require("dotenv").config();

// express to run on browser
const express = require("express");
const app = express();

// allow access all ports
const cors = require('cors');
app.use(cors({origin:"*"}));

// run on port 
const PORT = process.env.PORT || 5000;

// connect to or run on public folder 
app.use(express.static("public"));

// run server 
app.listen(PORT,() =>{
    console.log("running " + PORT);
})

// connect to route back
const router = require("./routes/route_back");

// run defualt 
app.use("/quiz",router);
