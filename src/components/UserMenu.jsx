import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user: { user },
  } = useSelector((store) => store);

  if (!user.firstName) {
    return null;
  }
  return (
    <div className='px-3'>
      <img
        className='w-16 h-16 rounded-full bg-center bg-amber-400 flex items-center justify-center font-roboto font-semibold relative bg-contain'
        src={user.image}
        onClick={() => setIsOpen(!isOpen)}
      ></img>
      {isOpen && (
        <div className='w-30 top-16 z-10 right-4 bg-white p-5 absolute rounded-sm border'>
          <ul
            className='font-popins cursor-pointer text-lg text-center underline-offset-4 uppercase first:text-red'
            onClick={() => setIsOpen(false)}
          >
            <li>My Profile</li>
            <li>Orders</li>
            <li>Cart</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

// {email
// :
// "kminchelle@qq.com"
// firstName
// :
// "Jeanne"
// gender
// :
// "female"
// id
// :
// 15
// image
// :
// "https://robohash.org/autquiaut.png"
// lastName
// :
// "Halvorson"
// token
// :
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY4NTI2MDA3NSwiZXhwIjoxNjg1MjYzNjc1fQ.W1j4-3jpEVXBOxUviML9DqG0rtdkVUj5MCMi6FrWzEI"
// username
// :
// "kminchelle"
// }
