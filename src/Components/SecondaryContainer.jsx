import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movieList = useSelector((state) => state.nowPlayingState.movieData)
    const popularMovieList = useSelector((state) => state.nowPlayingState.PopularMovieData)
    return (
        <div className=" bg-black">
        <div className="-mt-52 relative z-20">   
            <MovieList title={"Now Playing"} movies={movieList}/>
            <MovieList title={"Trending"} movies={popularMovieList}/>
            <MovieList title={"Popular"} movies={movieList}/>
            <MovieList title={"Upcoming Movies"} movies={movieList}/>
            <MovieList title={"Horror"} movies={movieList}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;