const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    nMovies : 0
}

const movieSlice = createSlice({
    name : "Movie",
    initialState : initialState,
    reducers : {
        addMovie : (state)=> {state.nMovies++} ,
        delMovie : (state)=> {state.nMovies-- }
    }
})

module.exports = movieSlice.reducer;
module.exports.movieActions = movieSlice.actions;