const express = require("express");
const router = express.Router();

const loginRouter = require("./router/Login");
const discordServerRouter = require("./router/DiscordServer");
const DetectorRouter = require("./router/Detector");

router.use("/", loginRouter);
router.use("/", discordServerRouter);
router.use("/", DetectorRouter);

module.exports = router;

