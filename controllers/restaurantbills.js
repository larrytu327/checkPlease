const express = require('express');
const router = express.Router();
const {RestaurantBills} = require('../models')

//ROUTES

// RESTAURANTBILLS INDEX ROUTE
router.get("/", async (req, res) => {
	try {
    // get all restaurantbills
    res.json(await RestaurantBills.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// RESTAURANTBILLS CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    // create new person
    res.json(await RestaurantBills.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// RESTAURANTBILLS SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        // send one restaurantbill
        res.json(await RestaurantBills.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

// restaurantbills DELETE ROUTE
router.delete("/:id", async (req, res) => {
    try {
        res.json(await RestaurantBills.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// RESTAURANTBILLS UPDATE ROUTE
router.put("/:id", async (req, res) => {
    try {
        res.json(await RestaurantBills.findByIdAndUpdate(req.params.id, req.body, {new:true}));
    } catch (error) {
        res.status(400).json(error);
    }
});
module.exports = router