import React from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const language = useSelector((state) => state.configReducer.lang)
  return (

    <div className="pt-[5%] flex justify-center">
        <form className = " w-1/2 bg-black grid grid-cols-12 rounded-lg">
            <input type="text" className='p-4 m-4  col-span-9 text-black bg-white rounded-lg' placeholder={lang[language]?.gptSearchPlaceholder} />
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[language]?.search}</button>
            </form>
      
    </div>
  )
}

export default GptSearchBar
