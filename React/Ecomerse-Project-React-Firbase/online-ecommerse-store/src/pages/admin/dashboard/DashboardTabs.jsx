import React, { useEffect } from "react";
import './DashboardTabs.css';  
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TfiShoppingCart } from "react-icons/tfi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {db} from '../../../fiebase/FirebaseConfig'
import { doc, deleteDoc , updateDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import { useContext } from "react";
import myContext from "../../../context/data/myContext";

function DashboardTabs(){
  const navigate = useNavigate()
  let desiredOrder = ['url', 'tittle', 'price', 'category', 'time']
  const {theme, setLoading,getProductsFromDB ,productTittle, setProductTittle, productPrice, setProductPrice,productImageUrl, setProductImageUrl, productCategory, setProductCategory, productDescription, setProductDescription, product} = useContext(myContext)
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({})

  const [productData, setProductData] = useState([])
  const [orderDetail, setOrderDetail] = useState([{
    "PAYMENT ID" :  1,
    "IMAGE": "IMAGE",
    "TITTLE":"TITTLE",
    "PRICE":67,
    "CATEGORY":"LADIES CLOTHS",
    "NAME":"ALI",
    "PINCODE":999,
    "PHONENUMBER":'0000000000000',
    "EMAIL":"email@email.com",
    "DATE":"33/03/2025"
  }])
  const [userDetail, setUserDetail] = useState([{
    "S.NO": 1,
    "NAME":"ALI",
    "ADDRESS": "ISLAMABAD",
    "PINCODE":999,
    "PHONENUMBER": 33333333333,
    "EMAIL":"email@email.com",
    "DATE": "02/02/2025"
  }])


  useEffect(()=>{
    let allProducts = JSON.parse(localStorage.getItem('products') || [])
    setProductData(allProducts)
  },  [])

  const deleteProduct = async(data)=>{
    setLoading(true)
    try{
      await deleteDoc(doc(db, "products", data.id));
      toast.success('Item deleted')
      await getProductsFromDB()
      setProductData(JSON.parse(localStorage.getItem('products') || []))
      setLoading(false)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  const editBtnClicked = (data) =>{
    setShowUpdateForm(!showUpdateForm)
    setCurrentProduct(data)
  }
  
  const updateFormBtnClicked = async() =>{
    setLoading(true)
    setShowUpdateForm(!showUpdateForm)
    console.log("Selected product = ",currentProduct)
    try{
      if(productTittle=="" || productPrice=="" || productImageUrl=="" || productCategory==""  || productDescription==""){
        setLoading(false)
        return toast.error('Please fill all the fields')
      }
      let docRef = doc(db, 'products', currentProduct.id)
      await updateDoc(docRef, product);
      await getProductsFromDB()
      setProductData(JSON.parse(localStorage.getItem('products') || []))
      console.log("After updating the product = ", product)
      setProductTittle("")
      setProductPrice("")
      setProductImageUrl("")
      setProductDescription("")
      setProductCategory("")
      setLoading(false)
    }catch(error){
      console.log("Error occurred : ", error)
      setLoading(false)
    }
    }
  
  return (
    <Tabs>
      <TabList className="w-full flex  justify-center gap-[20px] my-[2rem]">
        <Tab><button className="font-bold rounded-lg  px-[20px] py-[5px] text-[oklch(0.63_0.19_299.38)] bg-gray-300 border-2 border-gray-400 cursor-pointer">Products</button></Tab>
        <Tab><button className="font-bold rounded-lg  px-[20px] py-[5px] text-red-500 bg-gray-300 border-2 border-gray-400 cursor-pointer">Orders</button></Tab>
        <Tab><button className="font-bold rounded-lg  px-[20px] py-[5px] text-green-500 bg-gray-300 border-2 border-gray-400 cursor-pointer">Users</button></Tab>
      </TabList>

      <TabPanel className="flex flex-col gap-[10px]">
        <h1 className="text-center font-bold text-[20px]"><u>Product Details</u> </h1>
        <div className="flex justify-end"><button className="flex justify-center items-center gap-[10px] px-[20px] py-[5px] bg-red-500 rounded-lg font-bold text-white cursor-pointer" onClick={()=> navigate('/addproduct')}><h1>Add Products</h1> <TfiShoppingCart className="text-[20px]"/></button></div>
        <div>
          <table className="w-full border-separate border-spacing-y-[20px]">
            <thead className="bg-gray-400 ">
              <tr>
                <th>S.No</th>
                <th>IMAGE</th>
                <th>TITTLE</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {productData && productData.map((data, index)=>{
                return <tr key={index}>
                  <td className="text-center " key={index}>{index}</td>
                  {
                    desiredOrder.map((order)=>{
                      return Object.keys(data).map((key)=>{
                        if(key == order){
                          if(key == 'url'){
                            return <td className="text-center flex justify-center" key={key}><img className="h-[5rem] w-[5rem] object-cover" src={data[key]} /></td>
                          }else if(key=='time'){
                            return <td className="text-center " key={key}>{`${(new Date(data[key])).toLocaleDateString()} - ${(new Date(data[key])).toLocaleTimeString()}`}</td>

                          }else{
                            return <td className="text-center " key={key}>{data[key]}</td>
                          }  
                        }
                      })
                    })
                  }
                  <td>
                    <div className="flex justify-center gap-[15px]">
                      <AiOutlineDelete className="cursor-pointer" onClick={()=> deleteProduct(data)}/><FaRegEdit className="cursor-pointer" onClick={()=> editBtnClicked(data)}/>
                    </div>
                  </td>
                  <div className={`w-full fixed  inset-0 z-10000  ${showUpdateForm == true ? 'flex' : 'hidden'} justify-center`} onClick={()=> setShowUpdateForm(false)}>
                    <div className="w-[1460px] flex justify-center pt-[150px]">
                      <form onClick={(e)=> {
                        e.preventDefault()
                        e.stopPropagation()
                      }} className={`insideForm w-[500px] h-[500px] p-[10px] rounded-lg ${theme== 'rgb(223 223 223)'? 'bg-gray-200': 'bg-gray-700'}`}>
                        <label htmlFor="tittle" className="block font-bold">Tittle</label>
                        <input type="text" id="tittle" placeholder="Tittle" value={productTittle} className="p-5px border-1 mb-[10px] p-[5px]  outline-none rounded block w-full " onChange={(e)=> setProductTittle(e.target.value)}/>
                        <label htmlFor="price" className="block font-bold">Price</label>
                        <input type="number" id="price" placeholder="$0" value={productPrice} className="p-5px border-1 mb-[10px] p-[5px]   outline-none rounded block w-full" onChange={(e)=> setProductPrice(e.target.value)}/>
                        <label htmlFor="url"className="block font-bold">Image URL</label>
                        <input type="text" id="url" placeholder="Image url" value={productImageUrl} className="p-5px border-1 mb-[10px] p-[5px]  outline-none rounded block w-full" onChange={(e)=> setProductImageUrl(e.target.value)}/>
                        <label htmlFor="category" className="block font-bold">Category</label>
                        <input type="text" placeholder="Category" value={productCategory} className="p-5px border-1 mb-[10px] p-[5px] w-full   outline-none rounded block" onChange={(e)=> setProductCategory(e.target.value)} />
                        <label htmlFor="textarea" className="block font-bold">Description</label>
                        <textarea id="textarea" placeholder="Description..." value={productDescription}  className="p-5px border-1 mb-[10px] p-[5px]   outline-none rounded block w-full" onChange={(e)=> setProductDescription(e.target.value)}></textarea>
                        <button onClick={()=> updateFormBtnClicked()} className="w-full p-[10px] text-center bg-green-400 rounded-xl cursor-pointer" >Update Product</button>
                      </form>
                    </div>
                  </div>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </TabPanel>
      <TabPanel className="flex flex-col gap-[10px]">
        <h1 className="text-center font-bold text-[20px]"><u>Order Details</u> </h1>
        <div>
          <table className="w-full border-separate border-spacing-y-[20px]">
            <thead className="bg-gray-400 ">
           
              <tr>
                <th>PAYMENT ID</th>
                <th>IMAGE</th>
                <th>TITTLE</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>NAME</th>
                <th>PINCODE</th>
                <th>PHONE NUMBER</th>
                <th>EMAIL</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {orderDetail.map((data, index)=>{
                return <tr key={index}>
                  {Object.values(data).map((value)=>{
                    console.log(value)
                    return <td className="text-center" key={value}>{value}</td>
                  })}
                </tr>
            })}
              {/* <tr className="border-b-2 border-black ">
                <td className="text-center">1</td>
                <td className="text-center">image</td>
                <td className="text-center">men shirt</td>
                <td className="text-center">99</td>
                <td className="text-center">clothing</td>
                <td className="text-center">ali</td>
                <td className="text-center">999</td>
                <td className="text-center">00000000000</td>
                <td className="text-center">user@gmail.com</td>
                <td className="text-center">22/2/2025</td>
              </tr>          */}
            </tbody>
          </table>
        </div>
      </TabPanel>
      <TabPanel className="flex flex-col gap-[10px]">
        <h1 className="text-center font-bold text-[20px]"><u>User Details</u> </h1>
        <div>
          <table className="w-full border-separate border-spacing-y-[20px]">
            <thead className="bg-gray-400 ">
              <tr>
                <th>S.No</th>
                <th>NAME</th>
                <th>ADDRESS</th>
                <th>PINCODE</th>
                <th>PHONENUMBER</th>
                <th>EMAIL</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {userDetail.map((data, index)=>{
                return <tr key={index}>
                  {Object.values(data).map((value)=>{
                    console.log(value)
                    return <td className="text-center" key={value}>{value}</td>
                  })}
                </tr>
                
            })}
              {/* <tr className="border-b-2 border-black ">
                <td className="text-center">1</td>
                <td className="text-center">ALI</td>
                <td className="text-center">Islamabad</td>
                <td className="text-center">99</td>
                <td className="text-center">00000000000</td>
                <td className="text-center">user@gmail.com</td>
                <td className="text-center">22/2/2025</td>
              </tr>          */}
            </tbody>
          </table>
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default DashboardTabs;