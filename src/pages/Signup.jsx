import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const call = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...input,
        }),
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='w-full h-5/6 flex items-center justify-center my-5'>
      <form
        className='md:w-4/12 sm:8/12 flex flex-col items-center justify-center gap-2 border shadow-lg p-16 bg-white'
        method='post'
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl'>Signup</h2>
        <div className='flex w-5/6 font-popins flex-col'>
          <p className='text-lg'>First Name</p>
          <input
            type='text'
            className='border-b-2'
            name='firstName'
            value={input.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='flex w-5/6 font-popins flex-col'>
          <p className='text-lg'>Last Name</p>
          <input
            type='text'
            className='border-b-2'
            name='lastName'
            value={input.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='flex w-5/6 font-popins flex-col'>
          <p className='text-lg'>Username</p>
          <input
            type='text'
            className='border-b-2'
            name='username'
            value={input.username}
            onChange={handleChange}
          />
        </div>

        <div className='flex w-5/6 font-popins flex-col'>
          <p className='text-lg'>Email</p>
          <input
            type='email'
            name='email'
            className='border-b-2'
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex w-5/6 font-popins flex-col'>
          <p className='text-lg'>Password</p>
          <input
            type='password'
            name='password'
            className='border-b-2'
            value={input.password}
            onChange={handleChange}
          />
        </div>
        <button className='w-5/6 mt-2 border-orange-950 bg-black text-xl rounded-lg text-white p-3 drop-shadow-md transition ease-linear delay-150 duration-150 hover:bg-white hover:text-black '>
          Signup
        </button>
        <p className='mt-2 font-popins'>
          Already have an account?
          <Link
            to='/login'
            className='font-popins text-blue-400 underline pl-2'
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
