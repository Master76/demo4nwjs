// imports
var fs = require('fs'),
    scene = require('./scene');


module.exports = function (logger) {
    logger("img_data generating");

    var current = scene.current;
    var instance = new current();

    var canvas = instance.canvas;
    var ret=canvas.toDataURL();
    logger("img_data generated");
    return ret;
};
