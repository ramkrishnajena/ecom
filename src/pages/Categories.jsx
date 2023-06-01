import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { discountPercent } from "../utils/constants";
import { addToCart, removeFromCart } from "../utils/store/productSlice";

const Categories = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const {
    products: { products, cart },
  } = useSelector((store) => store);

  const filteredCategory = Object.values(products).filter((data) => {
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
          filteredCategory.map((item) => (
            <div className=' h-60 flex gap-4 border-4 relative' key={item.id}>
              <img
                src={item.images[0]}
                alt={item.title}
                className='w-2/5 object-cover'
              />
              <p className='absolute bg-orange-600 p-1 -left-3 top-1 text-white font-lato uppercase'>
                {item.category}
              </p>

              <div className='flex flex-col justify-around'>
                <p className='text-2xl font-popins'>{item.title}</p>
                <p className='text-2xl font-semibold'>₹ {item.price}</p>
                <p className='w-12/12 text-xl font-sans border text-center bg-yellow-300'>
                  ₹
                  <span className='line-through'>
                    {discountPercent(item.price, item.discountPercentage)}
                  </span>
                  <span className='px-5 text-red-900'>
                    {item.discountPercentage}% OFF
                  </span>
                </p>

                <div className='flex font-roboto gap-3 text-2xl cursor-pointer'>
                  <p onClick={() => dispatch(addToCart(item))}>+</p>
                  <p>{cart.filter((obj) => obj.id == item.id).length}</p>
                  <p
                    onClick={() => {
                      dispatch(removeFromCart(cart.indexOf(item, 0)));
                    }}
                  >
                    -
                  </p>
                </div>
                <button
                  className='w-8/12 bg-blue-800 p-3 text-white font-roboto font-extrabold'
                  onClick={() => dispatch(addToCart(item))}
                >
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
