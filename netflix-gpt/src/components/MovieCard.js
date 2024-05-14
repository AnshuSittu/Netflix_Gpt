import React from 'react'
import {IMG_CDN_URL} from "../utils/constants"

const MovieCard = ({posterPath}) => {
  /* if poster path is not there return null over there  */
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img alt="MoviePoster" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard
