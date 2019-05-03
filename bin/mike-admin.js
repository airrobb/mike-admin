#!/usr/bin/env node

var pjson = require('../package.json');
var program = require('commander');
var printGreeting = require('../index.js').mikeAdmin;
var mikeGyver = require('../lib/mikegyver.js');
var dadmin = require('../lib/dadmin.js');


program.version(pjson.version)
	.option('-p, --play-theme', 'Play MikeGyver theme song')
    .option('-d, --dadmin', 'Play Dadmin theme song')
    .parse(process.argv);

if (process.argv.length < 3) {
	printGreeting();
} 

if (program.playTheme) {
	mikeGyver.printFace();
	mikeGyver.playTheme();
}

if (program.dadmin) {
	dadmin.printFace();
	dadmin.playTheme();
}