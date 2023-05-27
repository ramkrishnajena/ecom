import ImgElement from "./ImgElement";
import { useState } from "react";

const Product = (props) => {
  const { title, images, description, price, discountPercentage, rating } =
    props;
  const [imgHover, setImgHover] = useState(false);
  const discountPercent = (price, discount) => {
    const a = price + (price * discount) / 100;
    return Math.round(a);
  };
  const showPopup = () => setImgHover(!imgHover);
  return (
    <div className='w-4/12 min-h-[30rem] items-center justify-center flex flex-col shadow-md flex-1 relative'>
      <div
        className='w-full h-full flex items-center justify-center'
        onMouseEnter={showPopup}
        onMouseLeave={showPopup}
      >
        <img src={images[0]} className='w-full max-h-40' />
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
        <button className='border text-white p-2 font-roboto uppercase bg-black hover:bg-yellow-500 hover:scale-125'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
