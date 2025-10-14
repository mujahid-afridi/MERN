import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import myContext from "../../context/data/myContext";
import { useContext } from "react";


function Footer(){
  const {theme}  = useContext(myContext)
  return (
    <div className={`w-full flex justify-center`}>
      <div className={`w-[1460px] mx-[2rem] `}>
        <div className={`px-[20px] py-[40px] ${theme == 'rgb(223 223 223)'? 'bg-gray-400': 'bg-[oklch(0.31_0_0)]'}`}>
          <div className="grid grid-cols-1  gap-[20px] sm:grid-cols-2 md:grid-cols-3 ">
              <div>
                <h1 className="font-bold">Categories</h1>
                <ul className="mt-[10px]">
                  <li>Home</li>
                  <li>Order</li>
                  <li>Local for Vocal</li>
                  <li>Cart</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold">Customer Service</h1>
                <ul className="mt-[10px]">
                  <li>Return Policy</li>
                  <li>Contact us</li>
                  <li>About us</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold">Service</h1>
                <ul className="mt-[10px]">
                  <li>Privacy</li>
                </ul>
              </div>
          </div>
        </div>
        <div className={`flex flex-wrap gap-[15px] justify-between items-center px-[20px]  py-[15px]  ${theme == 'rgb(223 223 223)'? ('bg-gray-400 border-t-2 border-black'): 'bg-[oklch(0.48_0.01_0)] border-t-2 border-white'}`}>
          <div className="flex gap-[20px]">
            <h1 className="font-bold ">Online Shopping</h1>
            <div className="flex items-center justify-center gap-[5px]"><FaRegCopyright className="text-[15px] font-normal"/> <p>mujahidafridi53@gmail.com</p></div>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <IoLogoLinkedin />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;