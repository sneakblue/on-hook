const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review, User } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler( async(req, res) => {
    const reviews = await Review.findAll();
    return res.json({ reviews });
}));

router.get('/:id', asyncHandler( async(req, res) => {
    const  { id } = req.params;
    const reviews = await Review.findAll({
        where: { fishing_spot_id: id },
        include: [{
            model: User,
            as: 'user'
        }]
    });
    return res.json({ reviews });
}))

router.post('/', asyncHandler( async(req, res) => {
    const { user_id, fishing_spot_id, review, rating } = req.body;
    const newReview = await Review.create({
        user_id,
        fishing_spot_id,
        review,
        rating
    });
    const createdReview = await Review.findOne({
        where: {
            id: newReview.id
        },
        include: [{
            model: User,
            as: 'user'
        }]
    })
    return res.json({ createdReview });
}));

router.put('/:id', asyncHandler( async(req, res) => {
    const { id } = req.params;
    await Review.update(
        req.body,
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    const updatedReview = await Review.findByPk(id);
    return res.json({ updatedReview });
}));

router.delete('/:id', asyncHandler( async(req, res) => {
    const { id } = req.params;
    await Review.destroy({
        where: { id }
    });
    return res.json({ message: 'Review deleted' });
}));

module.exports = router;
