const redux = require("redux");
let createStore = redux.legacy_createStore;
let fs = require("fs")
let process = require("process");
const { argv } = require("process");
let text;
if(process.argv[2]){
   text= `firstname ${process.argv[2]} 
lastname ${process.argv[3]} 
city ${process.argv[4]} \n
`
}else{
    text = "";
}
const USERS_REQUEST = "USERS_REQUEST"

let data = new Array();

fs.appendFile("data.txt",text, 'utf-8',(err)=>{ 
    if(err){
    console.log(err);
    }else {
    console.log("Contents of file appended");
    //   fs.readFileSync("../data/test.txt", "utf8"));
  }});

let fetchUsers = ()=>{
    return {
         type: USERS_REQUEST,
         
    }
}

data.push( fs.readFileSync("data.txt","utf-8"))

let reducer = (state,action)=>{
    switch(action.type){
        case USERS_REQUEST : return data;
       
        default : return state
    }
}

let store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(fetchUsers());
