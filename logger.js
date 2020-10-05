const EventEmitter = require("events");
const emitter = new EventEmitter();


class Logger extends EventEmitter{
  log(message){
    console.log(message);
    this.emit("event",1,2,3,4);
  }
}


module.exports = Logger;
