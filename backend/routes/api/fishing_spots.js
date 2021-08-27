const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { Fishing_Spot, Fish_Type, Favorite, Comment, Review } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler( async(req, res) => {
    const fishing_spots = await Fishing_Spot.findAll();
    return res.json({fishing_spots});
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    const fishing_spot = await Fishing_Spot.findByPk(id);
    return res.json({ fishing_spot });
}));

router.post('/', asyncHandler( async (req, res) => {
    const { user_id, pic, description, name, city, state, country, lat, lng } = req.body;
    const fishing_spot = await Fishing_Spot.create({
        user_id,
        pic,
        description,
        name,
        city,
        state,
        country,
        lat,
        lng
    });
    return res.json({ fishing_spot });
}));

router.put('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    await Fishing_Spot.update(
        req.body,
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    const updatedSpot = await Fishing_Spot.findByPk(id);
    return res.json({ updatedSpot });
}));

router.delete('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    await Review.destroy({
        where: {
            fishing_spot_id: id,
        }
    });
    await Favorite.destroy({
        where: {
            fishing_spot_id: id,
        }
    });
    await Comment.destroy({
        where: {
            fishing_spot_id: id,
        }
    });
    await Fish_Type.destroy({
        where: {
            fishing_spot_id: id,
        }
    });
    await Fishing_Spot.destroy({
        where: { id }
    });
    return res.json({ message: 'Fishing Spot deleted' });
}));

module.exports = router;
