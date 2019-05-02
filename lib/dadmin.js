var fs = require('fs');
var path = require('path');
var Speaker = require('speaker');


var facePath = path.join(__dirname, '..', 'assets', 'face');
var themePath = path.join(__dirname, '..', 'assets', 'theme');

var face = fs.createReadStream(facePath);
var audio = fs.createReadStream(themePath);
var speaker = new Speaker({
  channels: 1,
  bitDepth: 8
});

exports.printFace = function() {
	face.pipe(process.stdout);
};

exports.playTheme = function() {
	audio.pipe(speaker);
};



