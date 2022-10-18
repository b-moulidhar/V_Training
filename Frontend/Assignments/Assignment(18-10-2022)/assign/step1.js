let redux = require("redux")
let createStore = redux.legacy_createStore;
let combineReducers = redux.combineReducers;

//------------------------------------
const DELETEHERO = "DELETEHERO";
const ADDHERO = "ADDHERO";
const SETHERO = "SETHERO";
//
const DELETEMOVIE = "DELETEMOVIE";
const ADDMOVIE = "ADDMOVIE";
const SETMOVIE = "SETMOVIE";
//------------------------------------------------------------------
let delHero = ()=>{
    return {
        type : DELETEHERO
    }
}
let addHero = ()=>{
    return {
        type : ADDHERO
    }
}
let setHero = (num)=>{
    return {
        type : SETHERO,
        payload : num
    }
}
//-------------------------
let delmovie = ()=>{
    return {
        type : DELETEMOVIE
    }
}
let addmovie = ()=>{
    return {
        type : ADDMOVIE
    }
}
let setmovie = (num)=>{
    return {
        type : SETMOVIE,
        payload : num
    }
}

let initialHerostate = {
    Heroes : 10
}
let initialMoviestate = {
    Movies : 20
}
//-----------------------------------------------------------------------------

let heroreducer = (state = initialHerostate, action)=>{
    switch(action.type){
        case DELETEHERO : return {...state, Heroes:state.Heroes-1};
        case ADDHERO : return {...state, Heroes:state.Heroes+1};
        case SETHERO : return {...state, Heroes: action.payload};
        default : return state;
    }

};
//------------------------------------------------------------
let moviereducer = (state = initialMoviestate, action)=>{
    switch(action.type){
        case DELETEMOVIE : return {...state, Movies:state.Movies-1};
        case ADDMOVIE : return {...state, Movies:state.Movies+1};
        case SETMOVIE : return {...state, Movies: action.payload};
        default : return state;
    }

};
let rootReducer = combineReducers({
    Heroes : heroreducer,
    Movies : moviereducer
})
let store = createStore(rootReducer);

let unsubscribe = store.subscribe(()=>{
    // console.log(store.getState().Movies);
    console.log(store.getState().Heroes);
})

store.dispatch( delHero());
store.dispatch( addHero());
store.dispatch( delHero());
store.dispatch( addHero());
store.dispatch( delHero());
store.dispatch( addHero());
store.dispatch( setHero(99));
//---------------------------------
store.dispatch( delmovie());
store.dispatch( addmovie());
store.dispatch( delmovie());
store.dispatch( addmovie());
store.dispatch( delmovie());
store.dispatch( addmovie());
store.dispatch( setmovie(99));


