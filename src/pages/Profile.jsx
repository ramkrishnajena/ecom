import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const {
    user: { user },
  } = useSelector((store) => store);
  return (
    <div className='w-full flex flex-col'>
      <p>Hello, {user?.firstname}</p>
      <div>Name : {user?.firstname + " " + user?.lastname}</div>
      <div>Email : {user?.email}</div>
      <div>Name : {user?.firstname + " " + user?.lastname}</div>
    </div>
  );
};

export default Profile;
