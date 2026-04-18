const Asset = require("../models/Asset");

exports.transferAsset = async (req,res) => {
  const {id,newBase} = req.body;

  const item = await Asset.findByIdAndUpdate(
    id,
    {base:newBase},
    {new:true}
  );

  res.json(item);
};