const express = require('express');
const asyncHandler = require('express-async-handler');
const { singlePublicFileUpload, singleMulterUpload, multiplePublicFileUpload, multipleMulterUpload } = require('../../awsS3');
const { Image } = require('../../db/models');

const router = express.Router();

router.post('/create-single/:id', singleMulterUpload('image'), asyncHandler( async (req, res) => {
    const { id } = req.params;
    const imageUrl = await singlePublicFileUpload(req.file);
    const image = await Image.create({
        spotId: id,
        url: imageUrl
    });
    return res.json({ image });
}));

router.post('/create-mult/:spotId', multipleMulterUpload('images'), asyncHandler( async (req, res) => {
    const { spotId } = req.params;
    const imageUrls = await multiplePublicFileUpload(req.files);
    let newImages = [];
    imageUrls.forEach(async (url) => {
        const image = await Image.create({
            spotId,
            url
        });
        newImages.push(image);
    });
    return res.json({ newImages });
}));

router.delete('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    await Image.destory({
        where: { id }
    });
    return res.json({ message: 'Image deleted' });
}));


module.exports = router;
