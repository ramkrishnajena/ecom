import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../utils/store/UserSlice";
import store from "../utils/store/store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  console.log(input);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: input.username,
          password: input.password,
          expiresInMins: 60,
        }),
      });
      const responce = await data.json();
      const { id, username, email, firstName, lastName, gender, image, token } =
        responce;
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      dispatch(setUser(responce));
    } catch (error) {
      dispatch(setUser({ message: error }));
    }
  };
  useEffect(() => {
    user.username && navigate("/");
  }, [user]);

  return (
    <div className='w-full h-5/6 flex flex-col items-center justify-center my-5 '>
      <form
        className='w-4/12 flex flex-col items-center justify-center gap-2 border shadow-lg p-16 bg-white'
        method='post'
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl'>Login</h2>

        <div className='flex w-5/6 font-popins flex-col'>
          <p className='text-lg'>Email</p>
          <input
            type='text'
            name='username'
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
          Login
        </button>

        <p className='mt-2 font-popins'>
          Don't have an account?
          <Link
            to='/signup'
            className='font-popins text-blue-400 underline pl-2'
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
