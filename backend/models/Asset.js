const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
  base: String
});

module.exports = mongoose.model("Asset", assetSchema);