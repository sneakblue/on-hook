const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const fishingSpotRouter = require('./fishing_spots.js');
const commentRouter = require('./comments.js');
const reviewsRouter = require('./reviews.js');

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use('/fishing_spots', fishingSpotRouter);

router.use('/reviews', reviewsRouter);

router.use('/comments', commentRouter);

module.exports = router;
