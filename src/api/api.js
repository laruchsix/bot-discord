const express = require("express");
const router = express.Router();

const loginRouter = require("./router/Login");

router.use("/", loginRouter);

module.exports = router;

