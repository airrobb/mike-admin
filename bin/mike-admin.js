#!/usr/bin/env node

var pjson = require('../package.json');
var program = require('commander');
var printGreeting = require('../index.js').mikeAdmin;
var mikeGyver = require('../lib/mikegyver.js');

program.version(pjson.version).option('-p, --play-theme', 'Play MikeGyver theme song').parse(process.argv);

if (process.argv.length < 3) {
	printGreeting();
} 

if (program.playTheme) {
	mikeGyver.printFace();
	mikeGyver.playTheme();
}