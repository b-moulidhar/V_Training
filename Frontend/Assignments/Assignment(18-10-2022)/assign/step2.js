const redux = require("redux");
let createStore = redux.legacy_createStore;
let fs = require("fs")
let process = require("process");
let text = `firstname ${process.argv[2]} \n lastname ${process.argv[3]} \ncity ${process.argv[4]} \n`

const USERS_REQUEST = "USERS_REQUEST"

let data = new Array();

fs.appendFile("data.txt",text, 'utf-8',(err)=>{console.log("error",err)});

let fetchUsers = ()=>{
    return {
         type: USERS_REQUEST,
         
    }
}

let initialState = {
    // sl : process.argv[2],
    // title : process.argv[3],
    // gender: process.argv[4],
    // firstname :process.argv[5],
    // lastname : process.argv[6],
    // city : process.argv[7]
}
 let datas = fs.readFileSync("data.txt","utf-8")

let reducer = (state,action)=>{
    switch(action.type){
        case USERS_REQUEST : return datas;
       
        default : return state
    }
}

let store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(fetchUsers())