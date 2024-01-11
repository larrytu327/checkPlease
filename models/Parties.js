///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const PartiesSchema = new mongoose.Schema({
  party_name: String,
  tip_percentage: Number,
  dishes: [
    {
        name: String,
        cost: Number,
    }
  ],
  total_tax: Number,
  total_owed: Number,
},{timestamps: true});

const Parties = mongoose.model("Parties", PartiesSchema);

module.exports = Parties;
