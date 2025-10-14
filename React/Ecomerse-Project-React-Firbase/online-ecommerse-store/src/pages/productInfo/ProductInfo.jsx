import ProductImg from '../../assets/product-01.jpg'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import myContext from '../../context/data/myContext';
import { useContext } from 'react';


function ProductInfo(){
  const {theme}= useContext(myContext)

  return (
    <div className='w-full flex justify-center'> 
      <div className="w-[1460px] mx-[2rem] py-[40px] flex flex-wrap  justify-center items-center gap-[20px]">
        <div className='w-[20rem] h-[20rem] rounded-lg'>
          <img src={ProductImg} alt="product image" className='w-full h-full  rounded-lg'/>
        </div>
        <div className='w-[20rem]'>
          <p>Brand Name</p>
          <h1 className='font-bold text-[20px]'>Product Name</h1>
          <div className='flex items-center gap-[10px]'>
            <div className='flex items-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
            </div>
            <p>4 Reviews</p>
            <div className='border-l-2 border-black-200 h-[2rem]'></div>
            <div className='flex items-center gap-[10px]'>
              <FaFacebookF />
              <FaTwitter />
              <TbMessageCircleFilled />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta facere magnam pariatur dolorem quo exercitationem laudantium placeat, excepturi minima vitae nisi asperiores temporibus id dolor in modi ipsum consequatur cumque.</p>
          <hr className='my-[15px]' />
          <div className='flex items-center justify-between'>
            <h1>$60.00</h1>
            <div className='flex gap-[10px]'>
              <button className='p-[10px] font-bold bg-orange-500 rounded-lg'>Add To Cart</button>
              <div className={`h-[40px] w-[40px] rounded-[50%] flex justify-center items-center ${theme == 'rgb(223 223 223)'? 'bg-white' : 'bg-gray-500 '}`}>
                <FaHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;