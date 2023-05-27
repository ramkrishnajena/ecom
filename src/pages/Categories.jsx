import React from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  const param = useParams();

  return (
    <div className='px-16 bg-white'>
      <h1>{param.id}</h1>
    </div>
  );
};

export default Categories;
