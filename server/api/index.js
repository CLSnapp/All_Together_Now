const router = require("express").Router();

//Import Backend routes
router.use("/auth", require("./auth"));

module.exports = router;