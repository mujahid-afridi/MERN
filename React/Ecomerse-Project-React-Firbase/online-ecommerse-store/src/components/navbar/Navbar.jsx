import React, { useState,  useEffect } from "react";
import {Link} from 'react-router-dom'
import profileImg from '../../assets/profile-img.jpg'
import logo from '../../assets/logo.jpg'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import myContext from '../../context/data/myContext'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Navbar(){
  const [countryList, setCountryList] = useState([])
  const [selected, setSelected]  =useState({})
  const {theme, setTheme, showDashboard, setShowDashboard, userLoggedIn, setUserLoggedIn} = useContext(myContext)
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate('')

  const user = JSON.parse(localStorage.getItem('user'))
  const calTotalItemsInCart = useSelector(state => state.cart.items)
  let totalItemsInCart = calTotalItemsInCart.map((item)=>{
    if(item?.user == user?.email){
      return item.productList.length
    }
  })


  const isUserAdmin = () =>{
    if(user?.email == "admain@gmail.com"){
      setShowDashboard(true)
    }else{
      setShowDashboard(false)
    }
  }
 
  const logout = () =>{
    if(userLoggedIn){
      localStorage.removeItem('user')
      toast.success('You have logged out.')
      setUserLoggedIn(false)
      navigate('/login')
    }
  }

  useEffect(()=>{
    async function getCountrList(){
      await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flags')
      .then((conuntriesList)=>{
        return conuntriesList.json()
      })
      .then((data)=>{
        setCountryList(data)
        setSelected(data[0])
      })
    }
    getCountrList();
    isUserAdmin()
  }, [])

  const selectCountry = (value) =>{
    let country = countryList.find((obj)=>{
      return obj.name.common == value;
    })
    setSelected(country)
  }

  return (
    <nav className="nav-container flex justify-center w-full h-[112px] box-border">
      <div className=" flex flex-col w-[1460px] mx-[2rem]">
        <div className={`nav-part-1 w-full pl-[2rem] pr-[2rem] pt-[10px] pb-[10px] text-center ${theme == 'rgb(223 223 223)'? "bg-pink-500" : "bg-gray-800"}`}>
          <p>Get free delivery on over $300</p>
        </div>
        <div className={`nav-part-2  flex justify-between items-center pl-[2rem] pr-[2rem] pt-[10px] pb-[10px] relative ${theme == 'rgb(223 223 223)'? "bg-white" : "bg-gray-400"}`}>
          <div className="h-[1.5rem] w-[1.5rem] md:hidden"><CiMenuBurger onClick={()=> setShowMenu(!showMenu)} /></div>
          <div className={`w-[70%] p-[1rem]  absolute top-[68px] left-0 bg-red-500 h-[calc(100vh-112px)]   ${showMenu ? "block" : 'hidden'}`}>
            <ul className="space-y-4">
              <li><RxCross2 onClick={()=> setShowMenu(false)} /></li>
              <hr />
              <li><Link to={'/allProducts'} onClick={()=> setShowMenu(false)}>All Products</Link></li>
              {userLoggedIn && <li><Link to={'/order'} onClick={()=> setShowMenu(false)}>Order</Link></li>}
              {showDashboard && <li><Link to={'/dashboard'} onClick={()=> setShowMenu(false)}>Admin</Link></li>}
              {userLoggedIn && <li><Link to={""} onClick={()=>{
                logout()
                setShowMenu(false)
              }}>Logout</Link></li>}
              <li><img src={profileImg} alt="" className="h-[2.2rem] w-[2.2rem] rounded-full" onClick={()=> setShowMenu(false)}/></li>
              <li>
                <div className="flex gap-[5px]">
                    <select name="" id="countryList" className="w-[7rem] order-2 border-none outline-none " onChange={(e) => selectCountry(e.target.value)}>
                      {countryList.map((country)=>{
                        return <option key={country?.name?.common}  value={country?.name?.common} className={`${theme=='black' ? 'bg-gray-500' : "bg-white"}`}>{country?.name?.common}</option>
                      })}
                    </select>
                    <div>
                      <img src={selected?.flags?.png} alt={selected?.flags?.alt} className="h-[1.5rem] w-[3rem]" />
                    </div>
                  </div>
              </li>
            </ul>
          </div>
          <div className="logo-container " >
            <Link>
              <img src={logo} alt="store-logo" className="h-[3rem] w-[8rem] object-cover" />
            </Link>
          </div>
          <div className="list-container ">
            <ul className="flex justify-evenly gap-[1rem] items-center">
              <li className="li hidden md:block"><Link to={'/allProducts'}>All Products</Link></li>
              {userLoggedIn && <li className="li hidden md:block"><Link to={'/order'}>Order</Link></li>}
              {showDashboard && <li className="li hidden md:block"><Link to={'/dashboard'}>Admin</Link></li>} 
              {userLoggedIn && <li className="li hidden md:block"><Link to={""} onClick={()=>{
                logout()
              }}>Logout</Link></li>}
              <li className="li hidden md:block">
                <div className="flex gap-[5px]">
                  <select name="" id="countryList" className="w-[7rem] order-2 border-none outline-none" onChange={(e) => selectCountry(e.target.value)}>
                    {countryList.map((country)=>{
                      return <option key={country?.name?.common}  value={country?.name?.common} className={`${theme=='black' ? 'bg-gray-500' : "bg-white"}`}>{country?.name?.common}</option>
                    })}
                  </select>
                  <div>
                    <img src={selected?.flags?.png} alt={selected?.flags?.alt} className="h-[1.5rem] w-[3rem]" />
                  </div>
                </div>
              </li>
              <li className="li hidden md:block">
                  <img src={profileImg} alt="" className="h-[2.2rem] w-[2.2rem] rounded-full"/>
              </li>
              <li onClick={()=> theme == 'rgb(223 223 223)'?setTheme('black') : setTheme('rgb(223 223 223)')}>
                {theme=='rgb(223 223 223)'&& <MdOutlineLightMode className="h-[1.5rem] w-[1.5rem]" />}
                {theme=='black' && <MdOutlineDarkMode className="h-[1.5rem] w-[1.5rem]" />}
                  
              </li>
              <li>
                <Link to={'/cart'}>
                  <div className="flex items-center gap-[5px]">
                    <BsFillCartCheckFill className="h-[1.5rem] w-[1.5rem]"/>
                    <p>{totalItemsInCart}</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;