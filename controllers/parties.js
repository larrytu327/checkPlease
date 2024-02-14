const express = require('express');
const router = express.Router();
const {Parties} = require('../models');

router.get("/", async (req, res) => {
	try {
    // get all parties
    res.json(await Parties.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PARTIES CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    // create new person
    res.json(await Parties.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PARTIES SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        // send one restaurantbill
        res.json(await Parties.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

// PARTIES DELETE ROUTE
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Parties.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// PARTIES UPDATE ROUTE
router.put("/:id", async (req, res) => {
    try {
        res.json(await Parties.findByIdAndUpdate(req.params.id, req.body, {new:true}));
    } catch (error) {
        res.status(400).json(error);
    }
});
module.exports = router