const express = require("express");
const asyncHandler = require("express-async-handler");
const { Comment, User } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async(req, res) => {
    const comments = await Comment.findAll();
    return res.json({comments});
}));

router.get('/:fishing_spot_id', asyncHandler( async(req, res) => {
    const { fishing_spot_id } = req.params;

    const comments = await Comment.findAll({
        where: { fishing_spot_id},
        include: [{
            model: User,
            as: 'user'
        }]
    });
    return res.json({ comments });
}));

router.post('/', asyncHandler( async(req, res) => {
    const { user_id, fishing_spot_id, comment } = req.body;
    const newComment = await Comment.create({
        user_id,
        fishing_spot_id,
        comment
    });
    const createdComment = await Comment.findOne({
        where: {
            id: newComment.id
        },
        include: [{
            model: User,
            as: 'user'
        }]
    })
    return res.json({ createdComment });
}));

router.put('/:id', asyncHandler( async(req, res) => {
    const { id } = req.params;
    await Comment.update(
        req.body,
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    const updatedComment = await Comment.findByPk(id, {
        include: [{
            model: User,
            as: 'user'
        }]
    });
    return res.json({ updatedComment });
}));

router.delete('/:id', asyncHandler( async(req, res) => {
    const { id } = req.params;
    await Comment.destroy({
        where: { id }
    });
    return res.json({ message: 'Comment deleted' });
}));

module.exports = router;
