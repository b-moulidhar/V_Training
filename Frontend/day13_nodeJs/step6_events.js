var EventEmiter = require('events').EventEmitter;
let myevent = new EventEmiter;
myevent.addListener("Mouli",function(){
    console.log("Event happened");
});
setTimeout(()=>{
    myevent.emit("Mouli");
},1000);