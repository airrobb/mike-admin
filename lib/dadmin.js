var fs = require('fs');
var path = require('path');
var Speaker = require('speaker');


var facePath = path.join(__dirname, '..', 'assets', 'dad-face');
var songPath = path.join(__dirname, '..', 'assets', 'dadmin-and-son-2.wav');

var face = fs.createReadStream(facePath);
var audio = fs.createReadStream(songPath);
var speaker = new Speaker({
  channels: 2,
  bitDepth: 16,
  sampleRate: 48000,
});

exports.printFace = function() {
	face.pipe(process.stdout);
};

exports.playTheme = function() {
	audio.pipe(speaker);
};



