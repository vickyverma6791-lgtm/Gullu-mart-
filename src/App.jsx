import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Getloaction from './datafetch/Getloaction'
import Footer from './components/Footer'
import Singlepages from './pages/Singlepages'
import CategoryProduct from './pages/CategoryProduct'
import Loginpg from './pages/Loginpg'
import SignUp from './pages/SignUp'
const App = () => {

    const[location,setlocation]= useState(null)
  useEffect(()=>{
    const fetchlocation = async()=>{
      try{
        const data = await Getloaction();
        console.log("data aaya", data)
        setlocation(data)
        console.log(data)
      }catch(err){
        console.log("errror",err)
      }
    }
    fetchlocation()
  },[])
  
  return (
    <BrowserRouter>
    <Navbar location={location} getloaction ={Getloaction}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<Singlepages/>}></Route>
        <Route path = '/category/:category' element={<CategoryProduct/>}></Route>
        <Route path='/login' element={<Loginpg/>} ></Route>
        <Route path ='/signup' element={<SignUp/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart location={location} getloaction ={Getloaction}/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
