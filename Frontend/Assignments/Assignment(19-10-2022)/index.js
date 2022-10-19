// const store = require("./app/store");
// const heroAction = require("./features/hero/heroSlice").heroAction;

// console.log(store.getState());

// let unsubscribe = store.subscribe(()=>{console.log("updated",store.getState())});

// store.dispatch(heroAction.addHero());
// store.dispatch(heroAction.addHero());
// store.dispatch(heroAction.delHero());

const store = require("./app/store");
let heroActions = require("./features/hero/heroSlice").heroActions;
let movieActions = require("./features/movie/movieSlice").movieActions;
 
console.log("Initial State", store.getState());
 
const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState());
})

store.dispatch(heroActions.addHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.delHero());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.delMovie());
 
unsubscribe();