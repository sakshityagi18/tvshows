import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {getproductdetail} from "./Api";
import {Link} from "react-router-dom";
function Productdetail({AddToCart}){
  const [product,setProduct] = useState([]);
  const id =+useParams().id;
  const [count,setCount] = useState(1);

  function handleCountChange(event){
 setCount(+event.target.value);   
  }
  function onButtonClick(){
    AddToCart(+id,+count);
    console.log("id",id,"count",count)
  }

  useEffect(function(){
    getproductdetail(id).then(function(response){
      setProduct(response);
    });
  },[id]);
  return(
 <>
 <div className="bg-gray-400 h-screen w-full lg:p-2 flex flex-col justify-top space-y-4 items-center pt-4 p-2">
   <h1 className="text-center lg:text-4xl text-lg text-gray-500 fnt2">{product.title}</h1>
  <div className="lg:flex-row bg-white/60 flex-col flex items-center justify-center lg:h-2/3 h-full w-full lg:w-4/5 p-2 border-2 rounded-lg shadow-inner shadow-zinc-800 space-x-3">
    <div className="overflow-hidden rounded-lg lg:w-1/2 lg:h-full h-1/2 w-full">
      <img className="w-full h-full hover:scale-125 hover:transition hover:ease-in-out" src={product.thumbnail} />
    </div> 
    <div className="lg:w-1/2 lg:h-full h-4/5 w-full">
      <h1>{product.category}</h1>
        <h1 className="lg:text-2xl text-lg text-red-500 font-semibold">{product.title}</h1>
        <p>{product.description}</p>
        <h1 className="text-blue-800 font-bold">{product.rating}</h1>
        <h1 className="text-blue-800 font-bold lg:text-lg">Discount 4.4%</h1>
        <h1 className="text-blue-800 font-bold lg:text-lg">{product.price}</h1>
        <h1 className="text-black font-bold">{product.stock}</h1>
        <h1 className="text-black font-bold">{product.brand}</h1>
        <div className="flex flex-col space-y-2">
          <input type="number" onChange={handleCountChange} value={count} className="text-center rounded-full w-14"></input>
          <button onClick={onButtonClick} className="bg-blue-400 w-1/3 lg:w-1/4 rounded-md p-2 text-gray-500 shadow-sm shadow-zinc-800">Add to Cart</button>
           <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-2 lg:space-x-2">
            <Link><button className="bg-lime-300 py-1 px-4 rounded-md text-gray-500 shadow-sm shadow-zinc-800">Buy Now</button></Link>
            <Link to="/"><button className="bg-lime-500 rounded-md py-1 px-8 shadow-sm shadow-zinc-800 text-gray-500">Back</button></Link>
           </div>
          </div>
        </div>
    </div>
  </div>

 </>   
  )
}
export default Productdetail;