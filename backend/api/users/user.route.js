"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_controller_1 = require("./user.controller");
var router = express_1.Router();
router.get('/user/:userId', user_controller_1.getUser);
router.post('/user', user_controller_1.createUser);
exports["default"] = router;
