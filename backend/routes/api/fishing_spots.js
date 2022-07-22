const express = require("express");
const asyncHandler = require("express-async-handler");
const { Fishing_Spot, Image } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler( async(req, res) => {
    const fishing_spots = await Fishing_Spot.findAll({
        include: [
            {
                model: Image,
                as: 'images'
            }
        ]
    });
    return res.json({fishing_spots});
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    const fishing_spot = await Fishing_Spot.findByPk(id, {
        include: [
            {
                model: Image,
                as: 'images'
            }
        ]
    });
    return res.json({ fishing_spot });
}));

router.post('/', asyncHandler( async (req, res) => {
    const { user_id, description, name, city, state, country, lat, lng } = req.body;
    const fishing_spot = await Fishing_Spot.create({
        user_id,
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

    await Fishing_Spot.destroy({
        where: { id }
    });
    return res.json({ message: 'Fishing Spot deleted' });
}));

module.exports = router;
