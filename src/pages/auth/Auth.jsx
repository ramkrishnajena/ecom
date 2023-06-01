import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Auth = () => {
  const { user } = useSelector((store) => store);
  const Navigate = useNavigate();
  useEffect(() => {
    !user.user?.firstName && Navigate("/login");
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Auth;
