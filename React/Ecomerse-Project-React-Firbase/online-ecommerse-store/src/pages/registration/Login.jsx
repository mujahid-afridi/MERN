import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fiebase/FirebaseConfig";
import { toast } from "react-toastify";
import { useContext } from "react";
import myContext from "../../context/data/myContext";

function Login(){
  const {setLoading, userLoggedIn, setUserLoggedIn} = useContext(myContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMisg, setErrorMisg] = useState('')
  const navigate = useNavigate('')

  const loginUser =async () =>{
    try{
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user))
        setUserLoggedIn(true)
        toast.success('You have Logged in successfully ')
        navigate('/')
      })
      setLoading(false);
    }catch(error){
      setLoading(false);
      setUserLoggedIn(false)
      console.log( "Login error = ",error)
      switch (error.code) {
        case 'auth/wrong-password':
          toast.error('Incorrect password. Please try again.');
          break;
        case 'auth/user-not-found':
          toast.error('No user found with this email.');
          break;
        case 'auth/invalid-email':
          toast.error('Please enter a valid email address.');
          break;
        case 'auth/missing-password':
          toast.error('Please enter your password.');
          break;
        default:
          toast.error('Login failed. Please try again.');
      }

      setErrorMisg(error.message)
      setEmail('')
      setPassword('')
    }
  }


  return (
    <div className="h-[100vh] flex justify-center items-center  text-white">
      <div className="w-[40rem] rounded-lg p-[20px] bg-black mx-[2rem]">
        <h1 className="text-center font-bold text-[20px]">Login</h1>
        <input type="email" value={email} placeholder="Email" className="bg-gray-500 block w-full p-[10px] rounded-lg mt-[15px] outline-none border-none" onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Password" className="bg-gray-500 block w-full p-[10px] rounded-lg mt-[15px] outline-none border-none" onChange={(e)=> setPassword(e.target.value)}/>
        <button className="text-black bg-orange-500 w-full rounded-lg font-bold p-[10px] mt-[15px] mb-[10px] cursor-pointer" onClick={loginUser}>Login</button>
        <div className="flex gap-[10px]">
          <p>Don't have account</p>
          <button  className="font-bold text-orange-500 cursor-pointer">
            <Link to={'/signup'}>
              Signup
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;