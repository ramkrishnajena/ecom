import React from "react";
import Load from "../assets/three-dots.svg";

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src={Load} className='animate h-16 w-16 text-red-900'></img>
    </div>
  );
};

export default Loading;
