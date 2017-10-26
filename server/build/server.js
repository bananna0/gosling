"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* app/server.ts */
var express = require("express");
var api_1 = require("./api");
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = 4200;
// Mount the WelcomeController at the /welcome route
app.use('/contacts', api_1.ContactController);
app.use('/wiki', api_1.WikiController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/api");
});
