import React from "react"
import myContext from "../../context/data/myContext"
import { useContext } from "react"


export default function Modal({display}){
  const {theme} = useContext(myContext)

  return (
    <form onClick={(e)=> e.stopPropagation()} className={`${display == true ? 'block' : "hidden"} p-[15px] ${theme == 'rgb(223 223 223)'? "bg-white" : "bg-gray-700"}  border-2 rounded-lg w-[80%] sm:w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
      <label htmlFor="name" className="block">Enter Full Name</label>
      <input type="text" id="name" className="block text-black w-full bg-gray-200 mb-[10px] p-[7px] outline-none border-1 border-gray-400 rounded"/>
      <label htmlFor="address" className="block">Enter Full Address</label>
      <input type="text" id="address" className="block text-black w-full mb-[10px] p-[7px] outline-none bg-gray-200 border-1 border-gray-400 rounded" />
      <label htmlFor="pinCode" className="block">Enter PinCode</label>
      <input type="text" id="pinCode" className="block text-black w-full mb-[10px] p-[7px]  outline-none bg-gray-200 border-1 border-gray-400 rounded" />
      <label htmlFor="mobileNum" className="block">Enter Mobile Number</label>
      <input type="tel" pattern="[0-9]{11}" id="mobileNum" className="block  w-full text-black mb-[10px] p-[7px]  outline-none bg-gray-200 border-1 border-gray-400 rounded" />
      <button className="w-full rounded-lg bg-orange-500 font-bold border-none outline-none p-[7px]">Order now</button>
    </form>
  )
}