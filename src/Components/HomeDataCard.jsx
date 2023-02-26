import React from 'react';
import  "../Styles/Home.css";


export const HomeDataCard = ({image}) => {
    // console.log(image)
  return (
    <div className='hover' >
        <img className='image_size' src={image} alt="eminem" />
    </div>
  )
}
