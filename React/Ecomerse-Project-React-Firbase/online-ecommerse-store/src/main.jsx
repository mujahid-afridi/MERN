import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import Layout from './components/layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import Order from './pages/order/Order.jsx'
import Cart from './pages/cart/Cart.jsx'
import Dashboard from './pages/admin/dashboard/Dashboard'
import NoPage from './pages/noPage/NoPage.jsx'
import AllProduct from './pages/allProducts/AllProducts.jsx'
import MyState from './context/data/myState.jsx'
import Login from './pages/registration/Login.jsx'
import Signup from './pages/registration/Signup.jsx'
import ProductInfo from './pages/productInfo/productInfo.jsx'
import AddProduct from './pages/admin/pages/AddProduct.jsx'
import UpdateProduct from './pages/admin/pages/UpdateProduct.jsx'
import { store } from './redux/store.js'
import  Loader from './components/loader/Loader'
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes.jsx'
import RoleBaseProtectedRoute from './components/protectedRoutes/RoleBaseProtectedRoute.jsx'
import Return from './pages/return/Return.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path="order" element={
          <ProtectedRoutes>
            <Order />
          </ProtectedRoutes>
          }/>
        <Route path='cart' element={
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
          }/>
        <Route path='allProducts' element={<AllProduct />} />
        <Route path='dashboard' element={
          <RoleBaseProtectedRoute >
            <Dashboard />
          </RoleBaseProtectedRoute>
          } />
        <Route path='addproduct' element={
          <RoleBaseProtectedRoute>
            <AddProduct />
          </RoleBaseProtectedRoute>
          } />
        <Route path='updateproduct' element={
          <RoleBaseProtectedRoute>
            <UpdateProduct />
          </RoleBaseProtectedRoute>
          } />
        <Route path='/productinfo/:id' element={<ProductInfo />} />
        <Route path='*' element={<NoPage />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/return' element={<Return />} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
     <MyState>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={1500} />
      <Loader />
    </MyState>
   </Provider>
  </StrictMode>,
)
