import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db} from "../../fiebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore"; 
import myContext from "../../context/data/myContext";
import { useContext } from "react";


function Signup(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMisg, setErrorMisg] = useState('')
  const navigate = useNavigate('')
  const {setLoading} = useContext(myContext)

  const addUserInDB = async(user) =>{
    try {
      const docRef = await addDoc(collection(db, "users"), {
        "name" : name,
        "id" : user.uid,
        "email" : email,
        "password" : password,
        "time" : (new Date(Number(user.reloadUserInfo.createdAt))).toISOString()

      });
      console.log("User added in firestore db successfully")
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
  }


  const handleUser = async ()=>{
    try{
      setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('userCredential', userCredential)
        const user = userCredential.user;
        addUserInDB (user);
        console.log('User registered successfully: ', user)
        toast.success('You have Sign Up successfully ')
        navigate('/login')
      })
      setLoading(false)
    }catch(error){
      setLoading(false);
      setErrorMisg(error.message)
      setEmail('')
      setPassword('')
      switch (error.code) {
        case 'auth/email-already-in-use':
          toast.error('This email is already in use. Try logging in instead.');
          break;
        case 'auth/invalid-email':
          toast.error('Please enter a valid email address.');
          break;
        case 'auth/weak-password':
          toast.error('Password should be at least 6 characters long.');
          break;
        case 'auth/missing-email':
          toast.error('Please enter your email address.');
          break;
        case 'auth/missing-password':
          toast.error('Please enter your password.');
          break;
        default:
          toast.error('Sign-up failed. Please try again.');
      }
    }
  }


  return (
    <div className="h-[100vh] flex justify-center items-center  text-white">
      <div className="w-[40rem] rounded-lg p-[20px] bg-black mx-[2rem]">
        <h1 className="text-center font-bold text-[20px]">Signup</h1>
        <input type="name" value={name} placeholder="Name" className="bg-gray-500 block w-full p-[10px] rounded-lg mt-[15px] outline-none border-none" onChange={(e)=> setName(e.target.value)} />
        <input type="email" value={email} placeholder="Email" className="bg-gray-500 block w-full p-[10px] rounded-lg mt-[15px] outline-none border-none" onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Password" className="bg-gray-500 block w-full p-[10px] rounded-lg mt-[15px] outline-none border-none" onChange={(e)=> setPassword(e.target.value)}/>
        <button className="text-black bg-orange-500 w-full rounded-lg font-bold p-[10px] mt-[15px] mb-[10px] cursor-pointer" onClick={handleUser}>Signup</button>
        <div className="flex gap-[10px]">
          <p>Have an account</p>
          <button  className="font-bold text-orange-500 cursor-pointer">
            <Link to={'/login'}>
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Signup;