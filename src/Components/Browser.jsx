
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
    const showGptSearch = useSelector((state) => state.gptReducer.gptState);
    // Custom hooks to fetch movies
    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div>
           <Header></Header>
           {
            showGptSearch ? (<GptSearch></GptSearch>) : 
            (<>
             <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
            </>
            )

           }
       
             {/* MainContainer
                - VideoBackground
                - VideoTitle 
            SecondaryContainer
                - MovieList * n
                    - cards * n
                */}
               
                

        </div>
    )
}

export default Browse;