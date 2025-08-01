import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setTrailer } from "../actions/getNowPlayingAction";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerId = useSelector((state) => state.nowPlayingState?.trailerVideo)

    useMovieTrailer(movieId)

    return (
        <div className="w-screen ">
<iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackground; 