import React from "react";
import HeroImg01 from "../../assets/heroImage01.jpg"



function HeroSection(){
  return (
   <div className="w-full flex justify-center">
     <div className="bg-red-500 w-[1460px]  mx-[2rem]" >
      <img className="w-full h-[35rem] object-cover" src={HeroImg01} alt="Hero image 01" />
    </div>
   </div>
  )
}
export default HeroSection;