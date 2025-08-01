const initialState = {
    movieData:null,
    trailerVideo:null,
    PopularMovieData:null,
}

const nowPlayingReducer = (state=initialState,action) => {
    switch (action.type) {
    case 'SET_MOVIE_DATA':
      return { ...state, movieData: action.payload };
    
    case "SET_MOVIE_TRAILER":
        return {...state,trailerVideo:action.payload}
    
    case "SET_POPULAR_MOVIE_DATA":
        return {...state,PopularMovieData:action.payload}

       default:
      return state;
      }

}

export default nowPlayingReducer;
