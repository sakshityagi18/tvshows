import React from "react";

function Navbar({ productCount,pqr }) {
  console.log("navbar k pqr",pqr)
  return (
    <>
      <div class="h-20 fixed w-full bg-purple-100 flex items-center justify-between px-12">
        <h1 class="lg:text-3xl text-lg font-thin text-emerald-500 fnt2">Sakshi Tyagi</h1>
        <div class="flex">
          <img alt="Cart" class="mt-0.5 h-14 w-14" src="/cart.png"></img>
          <h1 class="absolute right-16 top-5 font-bold text-lg text-red-400">{productCount}</h1>
        </div>
      </div>
    </>
  )
}
export default Navbar;