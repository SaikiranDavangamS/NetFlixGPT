import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const nowPlaying = useSelector((state) => state.nowPlayingState?.movieData)

    if(!nowPlaying) return 

    const mainMovie = nowPlaying[0];

    const {original_title,overview,id} = mainMovie;

    return (
        <div>
        <VideoTitle title={original_title} overview={overview}></VideoTitle>

        <VideoBackground movieId={id}></VideoBackground>
            
        </div>
    )
}

export default MainContainer;