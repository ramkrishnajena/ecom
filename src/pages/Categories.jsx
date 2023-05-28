import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { discountPercent } from "../utils/constants";

const Categories = () => {
  const param = useParams();
  const { products } = useSelector((store) => store);

  const filteredCategory = Object.values(products.products).filter((data) => {
    return data.category == param.id;
  });
  return (
    <div className='px-16 pb-16 bg-white'>
      <h1 className='text-3xl py-5 uppercase font-lato font-semibold underline underline-offset-4'>
        {param.id}
      </h1>
      <div className='flex flex-col gap-4'>
        {!filteredCategory?.length ? (
          <p
            className='w-full h-3/4 flex flex-col items-center justify-center text-3xl font-roboto'
            key={param.id}
          >
            No Product Found
            <Link to='/' className='text-xl'>
              Back to Home
            </Link>
          </p>
        ) : (
          filteredCategory.map((data) => (
            <div className=' h-60 flex gap-4 border-4 relative' key={data.id}>
              <img src={data.images[0]} alt={data.title} className='w-2/5' />
              <p className='absolute bg-orange-600 p-1 -left-3 top-1 text-white font-lato uppercase'>
                {data.category}
              </p>

              <div className='flex flex-col justify-around'>
                <p className='text-2xl font-popins'>{data.title}</p>
                <p className='text-2xl font-semibold'>₹ {data.price}</p>
                <p className='w-56 text-xl font-sans border text-center bg-yellow-300'>
                  ₹
                  <span className='line-through'>
                    {discountPercent(data.price, data.discountPercentage)}
                  </span>
                  <span className='px-5 text-red-900'>
                    {data.discountPercentage}% OFF
                  </span>
                </p>
                <button className='w-72 bg-blue-800 p-3 text-white font-roboto font-extrabold'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
