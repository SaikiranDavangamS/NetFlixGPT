const initialState = {
    movieData:null,
    trailerVideo:null
}

const nowPlayingReducer = (state=initialState,action) => {
    switch (action.type) {
    case 'SET_MOVIE_DATA':
      return { ...state, movieData: action.payload };
    
    case "SET_MOVIE_TRAILER":
        return {...state,trailerVideo:action.payload}

       default:
      return state;
      }

}

export default nowPlayingReducer;
