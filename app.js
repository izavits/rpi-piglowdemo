var piGlow = require('piglow');
var glowLeg = [ 'leg_2', 'leg_1', 'leg_0' ];
var i = 0;


piGlow(function (error, pi) {
  if (error) {
    return console.log('Could not initialize PiGlow board');
  }

  setInterval(function () {
    i++;
    pi.all = 0;
    var leg = glowLeg[i % 3];
    pi[leg] = 100;
  }, 2000);

});
