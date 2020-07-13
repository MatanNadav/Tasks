"use strict";
exports.__esModule = true;
var express = require("express");
var tasks_route_1 = require("./api/tasks/tasks.route");
var user_route_1 = require("./api/users/user.route");
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var port = process.env.PORT || 8080;
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
if (process.env.NODE_ENV !== 'production') {
    var corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true
    };
    app.use(cors(corsOptions));
}
app.use(session({
    secret: "covid-key",
    resave: false,
    saveUnintialized: false
}));
app.use(tasks_route_1["default"]);
app.use(user_route_1["default"]);
app.listen(port, function () {
    console.log("server running on port", port);
});
