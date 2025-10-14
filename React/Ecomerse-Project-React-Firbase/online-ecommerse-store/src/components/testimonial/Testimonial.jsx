import React, {useContext} from "react"
import myContext from "../../context/data/myContext"
import profileImg from '../../assets/profile-img.jpg'


export default function Testimonial(){
  const {theme} = useContext(myContext)
  return (
    <div className="w-full flex  justify-center my-[3rem]">
      <div className="w-[1460px] mx-[2rem] ">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[2rem]">Testimonial</h1>
          <h2 className="text-[1.5rem]">What our customer are saying</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] mt-[1rem]">

            <div className={`w-full  flex flex-col items-center ${theme === 'rgb(223 223 223)'? 'bg-[rgb(223 223 223)]' : 'bg-[oklch(0.31_0_0)]'} p-[20px]  gap-[15px]`}>
              <div className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] rounded"><img src={profileImg} alt="this is customer profile image" className="rounded-[50%]"/></div>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolore voluptate, facere accusamus commodi eligendi nostrum eveniet odio facilis perferendis ipsum sed voluptatibus ut, culpa quam ad minus officiis distinctio.
              </p>
              <div className="text-center">
                <h1 className="font-bold">Name of Customer</h1>
              <p>Customer Qualification</p>
              </div>
            </div>
           
            <div className={`w-full  flex flex-col items-center ${theme === 'rgb(223 223 223)'? 'bg-[rgb(223 223 223)]' : 'bg-[oklch(0.31_0_0)]'} p-[20px]  gap-[15px]`}>
              <div className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] rounded"><img src={profileImg} alt="this is customer profile image" className="rounded-[50%]"/></div>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolore voluptate, facere accusamus commodi eligendi nostrum eveniet odio facilis perferendis ipsum sed voluptatibus ut, culpa quam ad minus officiis distinctio.
              </p>
              <div className="text-center">
                <h1 className="font-bold">Name of Customer</h1>
              <p>Customer Qualification</p>
              </div>
            </div>
           
            <div className={`w-full  flex flex-col items-center ${theme === 'rgb(223 223 223)'? 'bg-[rgb(223 223 223)]' : 'bg-[oklch(0.31_0_0)]'} p-[20px]  gap-[15px]`}>
              <div className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] rounded"><img src={profileImg} alt="this is customer profile image" className="rounded-[50%]"/></div>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolore voluptate, facere accusamus commodi eligendi nostrum eveniet odio facilis perferendis ipsum sed voluptatibus ut, culpa quam ad minus officiis distinctio.
              </p>
              <div className="text-center">
                <h1 className="font-bold">Name of Customer</h1>
              <p>Customer Qualification</p>
              </div>
            </div>
           
                
        </div>
      </div>
    </div>
  )
}