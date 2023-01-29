import './App.css'
import Page from "./Page"
import React, { useState } from "react"
import Productdetail from "./Productdetail";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"
 function App() {

let xyz = 30

   const [totalCount,setTotalCount]=useState(0)
   function handleAddToCart(productId,count){
    setTotalCount(totalCount + count ); 
   }
  return (
    <>
      <Navbar pqr={xyz} productCount={totalCount}></Navbar>
    <main className="pt-20">
      <Routes>
      <Route index element={<Page></Page>}></Route>
        <Route path="/productdetail/:id" element={<Productdetail AddToCart={handleAddToCart}></Productdetail>}></Route>
      </Routes>
    </main>
    </>
  )
}
export default App;