"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get('/', ctrl.output.home);
router.get('/summary1', ctrl.output.summary1)
router.get('/byservice1', ctrl.output.byservice1)
router.get('/interservice1', ctrl.output.interservice1)
router.get('/interservice2', ctrl.output.interservice2)
router.get('/user1', ctrl.output.user1)

module.exports = router;