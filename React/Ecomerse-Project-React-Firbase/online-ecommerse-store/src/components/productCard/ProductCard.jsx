import React, { useEffect } from "react"
import myContext from "../../context/data/myContext"
import { useContext } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from "../../redux/cartSlice"

function ProductCard(){
  const {theme,  getProductsFromDB} = useContext(myContext)
  const dispatch = useDispatch()
  let allProducts = JSON.parse(localStorage.getItem('products'))
  const selector = useSelector(state=> state.cart.items)
  const user = JSON.parse(localStorage.getItem('user'))//get current user

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(selector))
  },[selector])

  useEffect(()=>{
    getProductsFromDB()
  },[])


  return (
   <div className="w-full flex justify-center" >
     <div className="w-[1460px] mx-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px]">
      {allProducts && allProducts.map((product,index)=>{
        return <div key={index} className={`w-[90%] h-full p-[10px] border-1 rounded-xl border-gray-800  ${theme == "rgb(223 223 223)"? "bg-gray-400" : "bg-[oklch(0.31_0_0)]"} m-auto`}>
          <div>
            <img src={product.url} alt="product image" className="w-[100%] object-cover rounded"/>
          </div>
          <div className="py-[1rem]">
            <p>{product.category}</p>
            <h1 className="text-xl font-bold">{product.tittle}</h1>
            <p className="my-[10px]">${product.price}</p>
            <button className="w-full bg-pink-500 rounded-xl p-[10px] cursor-pointer" onClick={()=> {
              console.log('addToCart btn clicked')
              dispatch(addToCart({"user": user.email, "product":product}))
            }}>Add to cart</button>
          </div> 
        </div> 
      })}
      
    </div>
   </div>
  )
}
export default ProductCard