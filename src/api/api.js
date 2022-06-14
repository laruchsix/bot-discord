const express = require("express");
const router = express.Router();

const loginRouter = require("./router/Login");
const discordServerRouter = require("./router/DiscordServer");

router.use("/", loginRouter);
router.use("/", discordServerRouter);

module.exports = router;

