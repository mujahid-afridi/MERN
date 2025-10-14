import React, { useEffect, useState } from "react";
import ProductImg from '../../assets/product-01.jpg'
import { RiDeleteBin6Line } from "react-icons/ri";
import myContext from "../../context/data/myContext";
import { useContext } from "react";
import Modal from "../../components/modal/Modal";
import { useSelector, useDispatch} from "react-redux";
import { deleteToCart } from "../../redux/cartSlice";
import {JazzCashPaymentGateway} from '../../components/jazzcash/JazzCashPaymentGateway'


function Cart(){
  const {theme} = useContext(myContext)
  const [display, setDisplay] = useState(false)
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cart.items)
  const [subtotal, setSubtotal] = useState(0)
  const [shippingCost, setShippingCost] = useState(0)
  const currentUser = JSON.parse(localStorage.getItem("user")) || []
  const currentUserCartData = cartProducts.find((item)=> item.user == currentUser.email)
  console.log("current user for cart page data find = ",currentUserCartData)

  useEffect(()=>{
    let totalOfPrices = 0;
    let calShipping = 0;
    currentUserCartData?.productList?.map((product)=>{
      totalOfPrices+=Number(product.price);
      calShipping+=5;
    })
    setSubtotal(totalOfPrices)
    setShippingCost(calShipping)
    localStorage.setItem('cartItems', JSON.stringify(cartProducts))
  },[cartProducts])

  return (
    <div className="w-full flex justify-center ">
      <div className={`w-[1460px] h-[calc(100vh-112px)]  py-[2rem] mx-[2rem] relative ${display && theme =='rgb(223 223 223)' ? "bg-[rgb(176_176_176)]" : ""}  ${display && theme =='black' ? "bg-[oklch(0.26_0_0)]" : ""}`}>
          <div>
            <h1 className="text-center font-bold text-[20px]">Cart Items</h1>
          </div>
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-[20px] mt-[2rem] mx-[2rem]">
            <div className=" flex flex-col gap-[15px]">
              {currentUserCartData && currentUserCartData.productList?.map((product,  index)=>{
                return <div key={index} className={` rounded-lg p-[15px] flex gap-[15px] flex-wrap md:flex-nowrap ${theme == 'rgb(223 223 223)'? "bg-white" : "bg-[oklch(0.31_0_0)]"}`}>
                  <div className="w-[8rem]">
                    <img src={product.url} alt="this is product image" className=" w-full rounded-lg object-cover " />
                  </div>
                  <div className="w-full">
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold">{product.tittle}</h1>
                      <RiDeleteBin6Line className="cursor-pointer" onClick={()=> {
                        console.log("delete btn clicked")
                        dispatch(deleteToCart({"user":currentUser.email, "productID": product.id}))
                      }}/>
                    </div>
                    <p>{product.description}</p>
                    <p>{`$${product.price}`}</p>
                  </div>
                </div>              
              })}
            </div>
            <div className={`w-[15rem] h-[11.5rem] p-[15px] rounded-md flex flex-col gap-[10px] ${theme == 'rgb(223 223 223)'? "bg-white" : "bg-[oklch(0.31_0_0)]"}`}>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>${shippingCost}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="font-bold">Total</h1>
                <p className="font-bold">${subtotal+shippingCost}</p>
              </div>
              <button className="w-full py-[10px] bg-orange-500 rounded-lg font-bold " onClick={()=> setDisplay(!display)}>Buy Now</button>
              <JazzCashPaymentGateway amount={subtotal+shippingCost}/>
            </div>    
          </div>

          {display && (
            <div
              className="absolute inset-0 z-10"
              onClick={() => setDisplay(false)}
            >
              <Modal  display={display} />
            </div>
          )}

      </div>
    </div>
  )
}
export default Cart;