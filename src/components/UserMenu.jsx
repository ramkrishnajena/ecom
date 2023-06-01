import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../utils/store/UserSlice";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    user: { user },
  } = useSelector((store) => store);

  if (!user.firstName) {
    return null;
  }
  return (
    <div className='px-3'>
      <img
        className='w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center font-roboto font-semibold relative border-2 border-white'
        src={user.image}
        onClick={() => setIsOpen(!isOpen)}
      ></img>
      {isOpen && (
        <div className='w-30 top-16 z-10 right-4 bg-white p-5 absolute rounded-sm border'>
          <ul
            className='font-popins cursor-pointer text-lg text-center underline-offset-4 uppercase first:text-red'
            onClick={() => setIsOpen(false)}
          >
            <li>
              <Link to='/in/my-profile'>My Profile</Link>
            </li>
            <li>
              <Link to='/in/orders'>Orders</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <li>
              <Link
                to='/'
                onClick={() => {
                  dispatch(setUser({}));
                  localStorage.clear();
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
