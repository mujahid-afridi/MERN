import React, { useEffect} from 'react'
import myContext from '../../../context/data/myContext'
import { useContext } from 'react'
import { db } from '../../../fiebase/FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function AddProduct() {
  const { setLoading, theme, getProductsFromDB,productTittle, setProductTittle, productPrice, setProductPrice,productImageUrl, setProductImageUrl, productCategory, setProductCategory, productDescription, setProductDescription, product} = useContext(myContext)
  const navigate = useNavigate('')

  useEffect(()=> {
    getProductsFromDB()
  }, [])

  const addProductInDB =async ()=>{
    setLoading(true)
    try {
        if(productTittle=="" || productPrice=="" || productImageUrl=="" || productCategory==""  || productDescription==""){
            return toast.error('Please fill all the fields')
        }
        await addDoc(collection(db, "products"), product);
        toast.success('Product added in Database.')
        await getProductsFromDB()
        setProductTittle("")
        setProductPrice("")
        setProductImageUrl("")
        setProductCategory("")
        setProductDescription("")
        navigate('/dashboard')
        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error.message)
    }
  }

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className={` ${theme == 'rgb(223 223 223)'? "bg-gray-400" :"bg-gray-700"}   px-10 py-10 rounded-xl `}>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                            onChange={(e)=> setProductTittle(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                            onChange={(e)=> setProductPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                            onChange={(e)=> setProductImageUrl(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                            onChange={(e)=> setProductCategory(e.target.value)}
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                            onChange={(e)=> setProductDescription(e.target.value)}
                            >
                            
                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button 
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg cursor-pointer' onClick={addProductInDB}>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct