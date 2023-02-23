import React from 'react';
import "../css/Home.css";


export const HomeDataCard = ({image}) => {
    // console.log(image)
  return (
    <div >
        <img className='image_size' src={image} alt="eminem" />
    </div>
  )
}
