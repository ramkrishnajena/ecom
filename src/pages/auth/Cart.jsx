import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countCart } from "../../utils/constants";
import { addToCart, removeFromCart } from "../../utils/store/productSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const {
    products: { cart, products },
  } = useSelector((store) => store);
  const cartItems = countCart(cart);

  return (
    <div className='w-full flex flex-col flex-shrink px-16 py-5 bg-white gap-6'>
      <h1 className='text-2xl font-roboto uppercase underline px-16 '>Cart</h1>
      {Object.values(cartItems).map(
        ({ id, title, images, price, quantity }, i) => (
          <div
            className='w-full h-44 bg-white flex gap-3 items-center shadow-md'
            key={i}
          >
            <img
              src={images[0]}
              alt={title}
              className=' min-w-[16rem] w-4/12 h-44 object-cover'
            />
            <div className=' w-full flex flex-col pl-5'>
              <p className='text-2xl capitalize'>{title}</p>
              <p className='text-xl'>₹ {price}</p>
              <p className='text-base'>
                Quantity: {cart.filter((data) => data.id == id).length}
              </p>
              <div className='flex font-roboto gap-3 text-xl w-fit cursor-pointer px-3 bg-blue-500'>
                <p
                  onClick={() =>
                    dispatch(addToCart({ id, title, price, images }))
                  }
                >
                  +
                </p>
                <p>{cart.filter((data) => data.id == id).length}</p>
                <p
                  onClick={() =>
                    dispatch(removeFromCart({ id, title, price, images }))
                  }
                >
                  -
                </p>
              </div>
            </div>
          </div>
        )
      )}
      {!cart.length ? (
        <p className='flex justify-center'>
          No Items Found in Cart Visit{" "}
          <Link to='/' className='pl-3 text-red-700 underline'>
            Home
          </Link>
        </p>
      ) : (
        <div className='flex gap-5 justify-end'>
          <p className='font-lato text-2xl font-semibold'>Grand Total</p>
          <p className='text-xl font-semibold'>
            ₹
            {cart.reduce((total, item) => {
              return total + item.price;
            }, 0)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
