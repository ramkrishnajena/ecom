import ImgElement from "./ImgElement";
import { useEffect, useState } from "react";
import { countCart, discountPercent } from "../utils/constants";
import { addToCart, removeFromCart } from "../utils/store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store/store";

const Product = ({ items }) => {
  const { id, title, images, description, price, discountPercentage, rating } =
    items;
  const [imgHover, setImgHover] = useState(false);
  const dispatch = useDispatch();
  const {
    products: { cart },
  } = useSelector((store) => store);
  const showPopup = () => setImgHover(!imgHover);

  return (
    <div className='w-4/12 min-h-[30rem] max-h-96 my-4 items-center justify-center flex flex-col shadow-md flex-1 relative'>
      <div
        className='w-full max-h-[2/4] h-40 flex items-center justify-center'
        onMouseEnter={showPopup}
        onMouseLeave={showPopup}
      >
        <img src={images[0]} className='max-h-40 object-cover' />
        {imgHover && <ImgElement image={images[0]} description={description} />}
      </div>
      <div className=' px-5 py-3 flex flex-col gap-2 items-start flex-wrap'>
        <p className='text-xl font-sans text-blue-900'>{title}</p>
        <p className='text-sm'>{rating} Rating</p>
        <p className='w-fit h-8 flex items-center p-2 text-white bg-red-600'>
          {discountPercentage}%
        </p>
        <div className=' flex flex-col text-xl'>
          <p>₹ {price}</p>
          <p className='text-sm font-popins'>
            List Price
            <span className='px-1 line-through'>
              ₹ {discountPercent(price, discountPercentage)}
            </span>
          </p>
          <p className='text-red-900 text-lg'>
            FREE <span className='text-black'>Shipping</span>
          </p>
        </div>
        <div className='flex font-roboto gap-3 text-2xl cursor-pointer'>
          <p onClick={() => dispatch(addToCart({ id, quantity: 1 }))}>+</p>
          <p>{cart.filter((data) => data.id == id).length}</p>
          <p onClick={() => dispatch(removeFromCart(cart.indexOf(items, 0)))}>
            -
          </p>
        </div>
        <button
          className='border text-white p-2 font-roboto uppercase bg-black hover:bg-yellow-500 hover:scale-125'
          onClick={() => dispatch(addToCart(items))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
