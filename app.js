var piGlow = require('piglow');
var glowLeg = [ 'leg_2', 'leg_1', 'leg_0' ];
var i = 0;


piGlow(function (error, pi) {
  if (error) {
    return console.log('Could not initialize PiGlow board');
  }

	pi.all=100;
	setTimeout(function() {
		pi.all=0;
		pi.ring_0=50;
		pi.ring_5=50;
	}, 1000);

  setInterval(function () {
    i++;
    pi.all = 0;
    var leg = glowLeg[i % 3];
    pi[leg] = 100;
  }, 5000);

});
