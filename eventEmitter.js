var events = require('events');

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!!!');
}

var eventEmitter = new events.EventEmitter();

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
