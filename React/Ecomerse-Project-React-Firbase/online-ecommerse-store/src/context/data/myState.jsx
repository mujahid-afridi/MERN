import React, {useState, useEffect} from "react";
import MyContext from "./myContext";
import { collection,  getDocs} from "firebase/firestore"; 
import { db } from "../../fiebase/FirebaseConfig";


function MyState(props){
  const user = JSON.stringify(localStorage.getItem("user"))

  const [theme, setTheme] = useState('rgb(223 223 223)')
  const [loading, setLoading] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(user ? true : false);
  const [showDashboard, setShowDashboard] = useState(false)
  let allProducts = []

  useEffect(()=>{
    document.body.style.backgroundColor = theme;
    document.body.style.color = theme=='rgb(223 223 223)'? 'black' : 'rgb(223 223 223)';
  }, [theme, setTheme])

  const getProductsFromDB =async () =>{
      const querySnapshot = await getDocs(collection(db, "products"));
      allProducts = []
      querySnapshot.forEach((doc) => {
          console.log("Doc = ",doc)
          allProducts.push({id:doc.id,...doc.data()})
      });
      localStorage.setItem('products',JSON.stringify(allProducts))
  }


  const [productTittle, setProductTittle] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productImageUrl, setProductImageUrl] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productDescription, setProductDescription] = useState('')
  
  
  const product = {
    time : Date.now(),
    tittle : productTittle,
    price : productPrice,
    url : productImageUrl,
    category: productCategory,
    description : productDescription
  }


  return (
    <MyContext.Provider value={{theme, setTheme, loading, setLoading,  userLoggedIn, setUserLoggedIn, showDashboard, setShowDashboard, getProductsFromDB, productTittle, setProductTittle, productPrice, setProductPrice, productImageUrl, setProductImageUrl, productCategory, setProductCategory, productDescription, setProductDescription, product}}>
      {props.children}
    </MyContext.Provider>
  )
}
export default MyState;