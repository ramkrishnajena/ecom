import React from "react";

const ImgElement = ({ image, description }) => {
  return (
    <div className='absolute w-80 h-fit border-4 border-red-500 p-3 transition-all delay-100 duration-700 z-10 bg-white'>
      <img src={image} alt={image} />
      <p className='font-lato'>{description}</p>
    </div>
  );
};

export default ImgElement;
