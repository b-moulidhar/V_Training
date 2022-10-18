const redux = require("redux");
let createStore = redux.legacy_createStore;
let fs = require("fs")
let process = require("process");
const { argv } = require("process");
let obj;
if(process.argv[2]){
     obj = {
        title: process.argv[2],
        firstname: process.argv[3] || "no name given",
        lastname: process.argv[4] || "no name given",      
}
}else{
    console.log(obj = {
        title: "no title given",
        firstname: "no name given",
        lastname: "no name given",      
});
console.log("please enter the title, firstname, lastname in the arguments")
}
const USERS_REQUEST = "USERS_REQUEST"

let data = new Array();
let usersjson = fs.readFileSync("data.json","utf-8");
let users = JSON.parse(usersjson);
users.push(obj);
usersjson = JSON.stringify(users);
fs.writeFileSync("data.json",usersjson,"utf-8");


// fs.appendFile("data.json",text, 'utf-8',(err)=>{ 
//     if(err){
//     console.log(err);
//     }else {
//     console.log("Contents of file appended");
//     //   fs.readFileSync("../data/test.txt", "utf8"));
//   }});

let fetchUsers = ()=>{
    return {
         type: USERS_REQUEST,
         
    }
}

data.push( fs.readFileSync("data.txt","utf-8"))

let reducer = (state,action)=>{
    switch(action.type){
        case USERS_REQUEST : return users;
       
        default : return state
    }
}

let store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(fetchUsers())
