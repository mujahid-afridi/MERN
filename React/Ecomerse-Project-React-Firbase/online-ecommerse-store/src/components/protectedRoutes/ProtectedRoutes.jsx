import React from "react";
import { useContext } from "react";
import myContext from "../../context/data/myContext";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({children}){
  const {userLoggedIn} = useContext(myContext)
  if(!userLoggedIn){
    return <Navigate to={'/login'} />
  }

  return children;
}

export default ProtectedRoutes;