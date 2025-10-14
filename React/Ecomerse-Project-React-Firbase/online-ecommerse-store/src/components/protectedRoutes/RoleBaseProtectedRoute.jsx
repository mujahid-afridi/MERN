import React, { useState } from "react"
import { useContext } from "react"
import myContext from "../../context/data/myContext"
import { Navigate } from "react-router-dom"

export default function RoleBaseProtectedRoute({children}){
 
  const {userLoggedIn} = useContext(myContext)
  if(userLoggedIn){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user.email == "admain@gmail.com"){
      return children;
    }else{
      return <Navigate to={'/'} />
    }
  }else{
    return <Navigate to={'/login'} />
  }

}