"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = express_1["default"]();
//use cors
app.use(cors_1["default"]());
//parse data
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
var user_route_1 = require("./app/modules/user/user.route");
app.use('/api/v1/user', user_route_1["default"]);
exports["default"] = app;
