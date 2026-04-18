const Asset = require("../models/Asset");

exports.getAssets = async (req,res) => {
  const data = await Asset.find();
  res.json(data);
};

exports.addAsset = async (req,res) => {
  const asset = await Asset.create(req.body);
  res.json(asset);
};