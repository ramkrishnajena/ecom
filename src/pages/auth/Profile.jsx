import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const {
    user: { user },
  } = useSelector((store) => store);

  return (
    <div className='flex justify-center my-3'>
      <div className='w-fit bg-white font-lato py-3 h-2/3 flex  flex-col items-center justify-start gap-3 rounded-sm shadow-md drop-shadow-sm '>
        <p className='text-2xl'>Hello, {user?.firstName}</p>
        <img src={user.image} alt={user.firstName} />
        <p className='text-xl'>
          Name : {user?.firstName + " " + user?.lastName}
        </p>
        <p className='text-xl'>Email : {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
