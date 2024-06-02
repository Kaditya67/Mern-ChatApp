import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className='mt-auto flex items-center justify-center'>
      {!loading ? (
        <BiLogOut 
          className='w-6 h-6 text-white cursor-pointer hover:text-red-500 transition duration-200' 
          onClick={logout} 
          aria-label='Logout'
        />
      ) : (
        <span className='loading-spinner'></span>
      )}
    </div>
  );
};

export default LogoutButton;
