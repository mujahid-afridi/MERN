import React from "react";
import { FaUser } from "react-icons/fa";
import myContext from '../../../context/data/myContext'
import { useContext } from "react";
import DashboardTabs from "./DashboardTabs";


function Dashboard(){
  const {theme} = useContext(myContext)

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1460px] mx-[2rem] py-[2rem]">
       <div className="flex flex-wrap gap-[15px] justify-evenly">
          <div className={`p-[10px] w-[10rem] sm:w-[15rem] rounded-lg  flex flex-col items-center justify-center gap-[10px] ${theme == 'rgb(223 223 223)'? "bg-gray-300" : 'bg-gray-600'}`}>
            <FaUser className="text-[30px] text-[oklch(0.63_0.19_299.38)]"/>
            <h1 className="font-bold text-[20px]">$10</h1>
            <p className="text-[oklch(0.63_0.19_299.38)] font-bold">Total products</p>
          </div>
          <div className={`p-[10px] w-[10rem] sm:w-[15rem] rounded-lg  flex flex-col items-center justify-center gap-[10px] ${theme == 'rgb(223 223 223)'? "bg-gray-300" : 'bg-gray-600'}`}>
            <FaUser className="text-[30px] text-[oklch(0.63_0.19_299.38)]"/>
            <h1 className="font-bold text-[20px]">$10</h1>
            <p className="text-[oklch(0.63_0.19_299.38)] font-bold">Total products</p>
          </div>
          <div className={`p-[10px] w-[10rem] sm:w-[15rem] rounded-lg  flex flex-col items-center justify-center gap-[10px] ${theme == 'rgb(223 223 223)'? "bg-gray-300" : 'bg-gray-600'}`}>
            <FaUser className="text-[30px] text-[oklch(0.63_0.19_299.38)]"/>
            <h1 className="font-bold text-[20px]">$10</h1>
            <p className="text-[oklch(0.63_0.19_299.38)] font-bold">Total products</p>
          </div>
          <div className={`p-[10px] w-[10rem] sm:w-[15rem] rounded-lg  flex flex-col items-center justify-center gap-[10px] ${theme == 'rgb(223 223 223)'? "bg-gray-300" : 'bg-gray-600'}`}>
            <FaUser className="text-[30px] text-[oklch(0.63_0.19_299.38)]"/>
            <h1 className="font-bold text-[20px]">$10</h1>
            <p className="text-[oklch(0.63_0.19_299.38)] font-bold">Total products</p>
          </div>
       </div>
        <DashboardTabs />
      </div>
    </div>
  )
}

export default Dashboard;