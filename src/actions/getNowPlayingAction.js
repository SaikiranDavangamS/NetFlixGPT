export const setNowPlaying = (movieData) => {

    return {
        type:"SET_MOVIE_DATA",
        payload:movieData
    }

}

export const setPopularMovieData = (popularMovieData) => {
    return{
        type:"SET_POPULAR_MOVIE_DATA",
        payload:popularMovieData
    }
}

export const setTrailer = (trailer) => {
    return {
        type:"SET_MOVIE_TRAILER",
        payload:trailer
    }
}