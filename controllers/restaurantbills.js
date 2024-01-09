const express = require('express');
const router = express.Router();

//ROUTES

router.get("/", async (req, res) => {
    res.status(200).json({message: "restaurantbills index route"})
});

router.post("/", async (req, res) =>  {
	res.status(201).json({message: "restaurantbills create route"})
});

module.exports = router