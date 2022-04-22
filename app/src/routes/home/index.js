"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get('/', ctrl.output.home);
router.get('/summary1', ctrl.output.summary1)
router.get('/byservice1', ctrl.output.byservice1)
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register)
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;