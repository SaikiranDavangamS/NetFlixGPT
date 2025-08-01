
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div>
           <Header></Header>

             {/* MainContainer
                - VideoBackground
                - VideoTitle 
            SecondaryContainer
                - MovieList * n
                    - cards * n
                */}
                <MainContainer></MainContainer>
                <SecondaryContainer></SecondaryContainer>
                

        </div>
    )
}

export default Browse;