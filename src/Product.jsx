import React from "react";
import {Link} from "react-router-dom"
function Product({
  title,
  thumbnail,
  category,
  discountPercentage,
  rating,
  stock,
  price,
  id
}) {
  return (
    <>
      <div key={id} className="m-2 bg-gray-300 overflow-hidden rounded-md shadow-md outline outline-transparent shrink shadow-zinc-800 w-60 lg:w-80">
        <div className="flex max-w-xs">
          <div className="w-full overflow-hidden aspect-square">
            <img className="h-full" src={thumbnail}></img>
          </div>
        </div>
        <h3 className="ml-2 text-sm text-slate-600">{category}</h3>
        <h1 className="ml-2 text-2xl font-bold text-red-500 truncate">{title}</h1>                                <div className="flex ml-2">
          <h1 className="text-lg text-gray-600">Rating: {rating}</h1>
        </div>
        <div className="flex-col flex flex-col justify-between">
          <h2 className="ml-2 text-lg text-gray-600 decoration-2">Discount: {discountPercentage}</h2>
          <h3 className="ml-2 text-lg font-semibold text-gray-600">Price: {price}</h3>
          <h1 className="ml-2 text-sm text-gray-600">Stock: {stock}</h1>
        </div>
        <div className="m-4 flex flex-col">
        <Link to={"/productdetail/" + id}><button className="p-2 bg-red-400">View Details</button></Link>  
        </div>
      </div>
    </>
  );
}
export default Product;