import React, { useState } from "react";
import appreal from "../assets/appereal.jpg";
import electronics from "../assets/electronics.jpg";
import { useEffect } from "react";
import Product from "../components/Product";
import { callApi } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { callProducts } from "../utils/store/productSlice";
import { callProductsCategories } from "../utils/store/categoriesSlice";
import { setUser } from "../utils/store/UserSlice";

const Home = () => {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const data = token;
  console.log(data);

  useEffect(() => {
    dispatch(callProducts());
    dispatch(callProductsCategories());
    token && dispatch(setUser(token));
  }, []);

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex'>
        <div className='w-full relative'>
          <img src={electronics} alt='appreal' className='w-full' />
          <p className='absolute top-2/4 left-1/4 text-orange-500 font-semibold text-4xl drop-shadow-2xl'>
            Electronics
          </p>
        </div>
        <div className='w-full relative'>
          <img src={appreal} alt='appreal' className='w-full ' />
          <p className='absolute top-2/4 right-1/4 text-orange-500 font-semibold text-4xl drop-shadow-2xl'>
            Womens Collection
          </p>
        </div>
      </div>

      <p className='text-2xl px-10 pt-5 font-lato font-semibold'>Smartphones</p>
      <div className='mx-10 my-4 p-10 bg-white shadow-xl'>
        <div className='w-full h-2/4 flex flex-wrap gap-3 items-center justify-between'>
          {Object.values(products).map(
            (data) =>
              data.category == "smartphones" && (
                <Product {...data} key={data.id} />
              )
          )}
        </div>
      </div>
      <p className='text-2xl px-10 pt-5 font-lato font-semibold'>Laptops</p>
      <div className='mx-10 my-4 p-10 bg-white shadow-xl'>
        <div className='w-full h-2/4 flex flex-wrap gap-3 items-center justify-between'>
          {Object.values(products).map(
            (data) =>
              data.category == "laptops" && <Product {...data} key={data.id} />
          )}
        </div>
      </div>
      <p className='text-2xl px-10 pt-5 font-lato font-semibold'>
        Home Decoration
      </p>
      <div className='mx-10 my-4 p-10 bg-white shadow-xl'>
        <div className='w-full h-2/4 flex flex-wrap gap-3 items-center justify-between'>
          {Object.values(products).map(
            (data) =>
              data.category == "home-decoration" && (
                <Product {...data} key={data.id} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
