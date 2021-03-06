var L8 = require("../index").L8;

var SERIAL_PORT = "/dev/tty.L8-SerialPortServerPort1";

var l8 = new L8(SERIAL_PORT);

l8.open().then(function() {
    return l8.setOrientation('up');
}).then(function() {
    l8.clearMatrix();
}).then(function() {
    l8.setScrollingText('Move me!', {r: 0, g: 15, b: 0}, "fast", true);
}).then(function() {
    var acceleration = l8.createAccelerationStream(100);

    acceleration.on('data', function(data) {
        console.log(data);
    });
}).catch(function(error) {
    console.error(error);
});

