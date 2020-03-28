const express = require("express");
const app = express();
const PORT = process.env.PORT || 8880;
const db = require("./models")
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const apiroutes = require("./routes/apiroutes.js")
// Add routes, both API and view
apiroutes(app);

db.sequelize.sync().then(()=>{
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
})
// Start the API server
