var leftPad = require('left-pad');

exports.mikeAdmin = function() {
  console.log(leftPad("You've been visited by the mike-admin you'll have good luck for 20 years!", 75));
  console.log(leftPad("Use mike-admin -h to learn how to be awesome", 75));
}
