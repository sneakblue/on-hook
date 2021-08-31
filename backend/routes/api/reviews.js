const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler( async(req, res) => {
    const reviews = await Review.findAll();
    return res.json({ reviews });
}));

router.get('/:id', asyncHandler( async(req, res) => {
    const  { id } = req.params;
    const review = await Review.findByPk(id);
    return res.json({ review });
}))

router.post('/', asyncHandler( async(req, res) => {
    const { user_id, fishing_spot_id, review, rating } = req.body;
    const newReview = await Review.create({
        user_id,
        fishing_spot_id,
        review,
        rating
    });
    return res.json({ newReview });
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
