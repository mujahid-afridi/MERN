import React from "react";
import { IoSearch } from "react-icons/io5";
import myContext from '../../context/data/myContext'
import { useContext , useState} from "react";


function Filter(){
  const {theme} = useContext(myContext)
  const [searchValue, setSearchValue] = useState('')

  return (
   <div className="w-full flex justify-center">
    <div className={`rounded p-[2rem] ${theme == 'rgb(223 223 223)'? "bg-gray-400" : "bg-[oklch(0.31_0_0)]"}    w-[1200px] mx-[7rem]  my-[20px]`}>
      <div className={`flex items-center w-full ${theme == 'rgb(223 223 223)'? "bg-white" : "bg-gray-500"}  rounded p-[10px] gap-[1rem]`} >
        <IoSearch />
        <input type="text" value={searchValue} placeholder="Search here.." className="outline-none border-none w-[100%]" onChange={(e)=> setSearchValue(e.target.value)} />
      </div>
      <div className="flex justify-between mt-[20px]">
        <h1 className="font-bold text-[1.2rem]">Filter</h1>
        <button className="font-bold " onClick={()=>setSearchValue(' ')}>Reset Filter</button>
      </div>
      <div className="mt-[20px]">
        <select className={`w-[20rem] ${theme == 'rgb(223 223 223)'? "bg-white" : "bg-gray-500"} p-[10px] rounded mr-[1rem] border-none outline-none`}>
          <option value="all" >All</option>
          <option value="firstItem">firstItem</option>
          <option value="secondItem">secondItem</option>
          <option value="thirdItem">thirdItem</option>
        </select>
        <select name="" id=""  className={`w-[10rem] mt-[20px] sm:mt-[0px] ${theme == 'rgb(223 223 223)'? "bg-white" : "bg-gray-500"} p-[10px] rounded border-none outline-none`}>
          <option value="any-price">Any Price</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select>
      </div>
    </div>
   </div>
  )
}
export default Filter;