import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'

function App() {


  console.log(Products);
  return (
    <>
    <Navbar/>
      <h1 style={{'color':'blue','textAlign':"center"}}>Top Result Search Buy Users</h1>

<Products/>

<Footer/>
      
    </>
  )
}

export default App
