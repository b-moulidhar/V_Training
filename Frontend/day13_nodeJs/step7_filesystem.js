const fs = require("fs");
// fs.writeFileSync("temp.txt","hello world","utf-8");
// fs.writeFile("temp.txt","helllo wooooorld","utf-8",function(err,data){
//     if(!err){
//         console.log("file created");
//     }else{
//         console.log("error",err);
//     }
// });
// console.log(fs.readFileSync("temp.txt"));
// fs.readFile("temp.txt","utf-8",(err,data)=>{
//     if(!err){
//         console.log("read successful\n",data);
//     }else{
//         console.log("error",err);
//     }
// });
var count =0;
fs.watchFile("temp.txt",()=>{
    console.log("file updated");
})
var si = setInterval(()=>{
    fs.appendFile("temp.txt","\nso whatsup?",(err,data)=>{
        if(!err&&count<5){
            console.log("content added");
            count++;
        }else{
            console.log("error",err);
            clearInterval(si);

        }
    })
},2000)