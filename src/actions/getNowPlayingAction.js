export const setNowPlaying = (movieData) => {

    return {
        type:"SET_MOVIE_DATA",
        payload:movieData
    }

}

export const setTrailer = (trailer) => {
    return {
        type:"SET_MOVIE_TRAILER",
        payload:trailer
    }
}