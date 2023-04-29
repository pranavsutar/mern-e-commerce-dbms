const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  return mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
