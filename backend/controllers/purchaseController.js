const Asset = require("../models/Asset");

exports.createPurchase = async (req,res) => {
  const {name,type,quantity,base} = req.body;

  const item = await Asset.create({
    name,type,quantity,base
  });

  res.json(item);
};