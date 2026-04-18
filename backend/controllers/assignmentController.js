const Asset = require("../models/Asset");

exports.assignAsset = async (req,res) => {
  const {id,quantity} = req.body;

  const item = await Asset.findById(id);

  if(item.quantity < quantity){
    return res.status(400).json({msg:"Insufficient stock"});
  }

  item.quantity -= quantity;
  await item.save();

  res.json(item);
};