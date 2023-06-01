import React, { useState } from "react";
import appreal from "../assets/appereal.jpg";
import electronics from "../assets/electronics.jpg";
import { useEffect } from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useSelector((store) => store.products);

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex'>
        <div className='w-full relative group bg-slate-500'>
          <img
            src={electronics}
            alt='appreal'
            className='w-full group-hover:opacity-50'
          />
          <Link
            to='/products/categories/smartphones'
            className='absolute top-2/4 left-1/4 text-orange-500 font-semibold text-4xl drop-shadow-2xl transition group-hover:scale-150'
          >
            Electronics
          </Link>
        </div>

        <div className='w-full relative group bg-slate-500'>
          <img
            src={appreal}
            alt='appreal'
            className='w-full group-hover:opacity-50'
          />
          <Link
            to='/products/categories/home-decoration'
            className='absolute top-2/4 right-1/4 text-orange-500 font-semibold text-4xl drop-shadow-2xl transition group-hover:scale-150'
          >
            Home Decoration
          </Link>
        </div>
      </div>

      <p className='text-2xl px-10 pt-5 font-lato font-semibold'>Smartphones</p>
      <div className='mx-10 my-4 p-10 bg-white shadow-xl'>
        <div className='w-full h-2/4 flex flex-wrap gap-3 items-center justify-between'>
          {Object.values(products).map(
            (data) =>
              data.category == "smartphones" && (
                <Product items={data} key={data.id} />
              )
          )}
        </div>
      </div>
      <p className='text-2xl px-10 pt-5 font-lato font-semibold'>Laptops</p>
      <div className='mx-10 my-4 p-10 bg-white shadow-xl'>
        <div className='w-full h-2/4 flex flex-wrap gap-3 items-center justify-between'>
          {Object.values(products).map(
            (data) =>
              data.category == "laptops" && (
                <Product items={data} key={data.id} />
              )
          )}
        </div>
      </div>
      <p className='text-2xl px-10 pt-5 font-lato font-semibold'>
        Home Decoration
      </p>
      <div className='mx-10 my-4 p-10 bg-white shadow-xl'>
        <div className='w-full h-2/4 flex flex-wrap gap-x-3 items-center justify-between'>
          {Object.values(products).map(
            (data) =>
              data.category == "home-decoration" && (
                <Product items={data} key={data.id} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
