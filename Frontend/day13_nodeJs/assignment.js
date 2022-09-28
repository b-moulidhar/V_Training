const EventEmiter = require("events").EventEmitter;
let myevt= new EventEmiter();
myevt.addListener("someEvent",()=>{
    console.log("event happened \n");
});
var count = 0;
let si = setInterval(()=>{
    if(count<5){
    myevt.emit("someEvent");
    count++;
    }
    else{
        myevt.removeListener("someEvent",()=>{})
        clearInterval(si);
    }

},1000)