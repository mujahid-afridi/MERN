import React from "react";
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  items:  JSON.parse(localStorage.getItem("cartItems")) || []
}
// const x = [
//   {user :"email@gmail.com",
//     productList : [
//     {},{},{}
//   ]},
//   {},
//   {}
// ]



const cartReducer = createSlice({
  name : 'cart',
  initialState,
  reducers : {
    addToCart(state, action){
      const {user, product}= action.payload;
      console.log("User = ", user)
      const existingUser = state.items.find((item)=> item.user == user)
      if(existingUser){
        existingUser.productList.push(product)
      }else{
        state.items.push({"user": user, "productList" : [product]})
      }
    },
    deleteToCart(state, action){
       const existingUser = state.items.find((item)=> item.user == action.payload.user)
       console.log("existingUser = ", existingUser)
       console.log("ProductList = ", existingUser.productList[1])
       if(existingUser){
        existingUser.productList = existingUser.productList.filter((item)=> item.id !== action.payload.productID)
       }
    },
  }
})

export const {addToCart, deleteToCart} = cartReducer.actions;

export default cartReducer.reducer;