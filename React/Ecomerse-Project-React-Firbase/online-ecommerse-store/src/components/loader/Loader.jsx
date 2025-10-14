import React from "react";
import myContext from "../../context/data/myContext";
import { useContext } from "react";
import './Loader.css'

function Loader(){
  const {loading} = useContext(myContext)
  console.log('this is loader component', loading)

  return (
    <div className={`opacity max-w-[1460px] mx-auto h-full  flex justify-center items-center fixed z-[9999]  inset-0 ${loading == true ? "flex" : "hidden"}`}>
        <p className="font-bold text-[60px] text-white">Loading...</p>
    </div>

  )
}
export default Loader;