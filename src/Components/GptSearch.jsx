import React from 'react'
import { useSelector } from 'react-redux';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {

  const gptState = useSelector((state) => state.gptReducer.gptState);
  return (
    <div>
            <div className="absolute -z-10">

                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="logo" />

            </div>
      <GptSearchBar />
      <GptMovieSuggestions />
      
    </div>
  )
}

export default GptSearch
