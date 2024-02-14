///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const RestaurantBillsSchema = new mongoose.Schema({
  restaurant_name: String,
  address: {
    address1: String,
    city: String,
    state: String,
    zip_code: String,
  },
  receipt_image_url: String,
  date: Date,
  total: Number,
  parties: Number,
  tax_rate: Number,
  tip_percentage: Number,
  dishes: [
    {
        name: String,
        cost: Number,
    }
  ],
  total_tax: Number,
},{timestamps: true});

const RestaurantBills = mongoose.model("RestaurantBills", RestaurantBillsSchema);

module.exports = RestaurantBills;
