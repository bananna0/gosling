"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    var contacts = [
        {
            name: 'Vk-link',
            link: 'www.youarejerk.com',
            owner: 'You Mom',
            description: 'Mockmockmock'
        },
        {
            name: 'Vk-link',
            link: 'www.youarejerk.com',
            owner: 'You Mom',
            description: 'Mockmockmock'
        },
        {
            name: 'Vk-link',
            link: 'www.youarejerk.com',
            owner: 'You Mom',
            description: 'Mockmockmock'
        }
    ];
    res.send(contacts);
});
exports.ContactController = router;
