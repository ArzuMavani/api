const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://arzumavani1:u0NWwwOCpULlRNvm@cluster0.4nza34e.mongodb.net/"
  
  )
  .then(() => console.log("connected to the database"));

module.exports = mongoose;