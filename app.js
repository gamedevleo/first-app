const EventEmitter = require("events");

const Logger = require("./logger.js");
const logger = new Logger();


logger.on("event",(args,a,b)=>{
  console.log(args,a,b);
})

logger.log("sdf");
