const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    nHeroes : 0
}

const heroSlice = createSlice({
    name : "Hero",
    initialState : initialState,
    reducers : {
        addHero : (state)=> {state.nHeroes++} ,
        delHero : (state)=> {state.nHeroes-- }
    }
})

module.exports = heroSlice.reducer;
module.exports.heroActions = heroSlice.actions;