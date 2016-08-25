var os = require('os');

// Get the network information
var interfaces = os.networkInterfaces();
// The counter will go from min to max
var COUNTER = {
  MIN: 1000000,
  MAX: 1679615
}

function Id () {

  var self = this;
  this.counter = COUNTER.MIN;
  this.generate = function() {
    // Increment the counter
    self.counter ++;
    if (self.counter > COUNTER.MAX) {
      self.counter = COUNTER.MIN;
    }
    // Make sure the pid is four characters long
    var pid = (process.pid * 1000).toString().substring(0,4);
    pid = parseInt(pid).toString(36);
    // MAC address fallback
    var mac = '100000000001';
    // Get the mac address and format it
    Object.keys(os.networkInterfaces()).forEach(function(key){
      if (interfaces[key][0].mac != '00:00:00:00:00:00')
        return mac = interfaces[key][0].mac.replace(/:/g, '');
    });
    // Get a base 36 out of the MAC address
    mac = parseInt(mac, 16).toString(36);
    var counter = self.counter.toString(36);
    var timestamp = new Date().getTime().toString(36);
    // Return the 24 characters id
    return mac + pid + timestamp + counter;
  }

}

module.exports = new Id();
