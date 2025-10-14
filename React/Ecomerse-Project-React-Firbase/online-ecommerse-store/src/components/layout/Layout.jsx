import React from "react";
import Footer from "../Footer/Footer";
import Navbar from '../navbar/Navbar'
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "../loader/Loader"


function Layout(){
  const location = useLocation()
  const hideFooterRoutes = ['/cart']
  let shouldHideFooter = hideFooterRoutes.includes(location.pathname)
  return (
      <div className="relative">
        <Loader />
        <Navbar />
        <Outlet />
        {!shouldHideFooter && <Footer />}
      </div>
  )
}
export default Layout;