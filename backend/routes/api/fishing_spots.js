const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { Fishing_Spot } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler( async(req, res) => {
    const fishing_spots = await Fishing_Spot.findAll();
    return res.json({fishing_spots});
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    const fishing_spot = await Fishing_Spot.findByPk(id);
    return res.json({ fishing_spot });
}))
