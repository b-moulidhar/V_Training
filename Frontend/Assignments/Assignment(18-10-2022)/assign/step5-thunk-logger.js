const  axios  = require("axios");
const redux = require("redux");
let logger = require("redux-logger").createLogger;
// const { default: thunk } = require("redux-thunk");
let reduxthunk = require("redux-thunk").default;
let createStore = redux.legacy_createStore;
let applyMiddleware = redux.applyMiddleware;
let compose = redux.compose;
let process = require("process");


const USERS_REQUEST = "USERS_REQUEST"

let data = new Array();


let fetchUsers = ()=>{
    return {
         type: USERS_REQUEST,
         
    }
}

let initialState = {
    // loading : false,
    // error :'',
    // users : []
    sl : process.argv[2],
    title : process.argv[3],
    gender: process.argv[4],
    firstname :process.argv[5],
    lastname : process.argv[6],
    city : process.argv[7]
}
data.push(initialState);

let reducer = (state=initialState,action)=>{
    switch(action.type){
        case USERS_REQUEST : return data;
       
        default : return state
    }
}
// let thunkFetchusers = ()=>{
//     return function(dispatch){
//         dispatch( fetchUsers() );
//     }
// }
// let thunkAjaxusers = ()=>{
//     return function(dispatch){
//         axios
//         .get("https://reqres.in/api/users?page=2")
//         .then((res)=>{
//             dispatch( fetchUsersSuccess(res.data.data) )
//         })
//         .catch((err)=>{
//             dispatch( fetchUsersError(err) )
//         })
//     }
// }

let store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});

// store.dispatch(thunkFetchusers());
// store.dispatch(thunkAjaxusers());
// console.log(store.getState());
store.dispatch(fetchUsers())