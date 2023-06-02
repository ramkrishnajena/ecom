import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../utils/store/UserSlice";
import UserMenu from "./UserMenu";

const Header = () => {
  const [menus, setMenus] = useState([]);
  const dispatch = useDispatch();
  const { category, user } = useSelector((store) => store);
  const handleLogout = () => {
    dispatch(setUser({}));
  };

  return (
    <header className='flex flex-col items-center justify-center'>
      <div className='w-full h-20 bg-orange-500 flex items-center justify-between px-10'>
        <p className='w-4/12 font-roboto text-3xl font-bold text-white'>
          <Link to='/' className='outline p-1'>
            E-COM
          </Link>
        </p>
        <div className='w-8/12 flex gap-5  items-center justify-end'>
          <div className='w-full h-10 flex items-center sm:hidden md:flex'>
            <input
              type='text'
              className='bg-transparent border w-full border-white rounded-l-lg h-full px-5 text-white'
              placeholder='Search'
            />
            <button className='bg-stone-800 rounded-r-lg text-white h-full px-3 text-lg font-semibold '>
              Search
            </button>
          </div>
          {!user.user.firstName && (
            <Link
              to='login'
              className='text-xl border border-white px-2 py-1 text-white font-semibold rounded-md cursor-pointer'
            >
              Login
            </Link>
          )}
          <Link to='cart' className='text-white font-roboto'>
            Cart
          </Link>
        </div>
        <UserMenu />
      </div>
      <div className='w-full px-2 max-w-fit flex gap-2 items-center justify-items-start overflow-scroll no-scrollbar my-3 cursor-pointer whitespace-nowrap '>
        {category.categories.map((data) => (
          <NavLink
            to={"products/categories/" + data}
            className='bg-white min-w-fit text-xs p-2 rounded-lg'
            key={data}
          >
            {data.slice().toUpperCase()}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
