const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")


require("dotenv").config()

const app = express()

app.use(logger("dev"))
app.use(express.json())

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3001;

//API routes here
app.use("/api/articles", require("./routes/api/articles"))



//The following 'catch-all' route(not the *) is necessary
//to return the index.html on all non AJAX requests
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
  
  app.listen(port, () => {
    console.log(`Express app running on port ${port}`);
  });