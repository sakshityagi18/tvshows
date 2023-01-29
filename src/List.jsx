import React from "react";
import Product from "./Product";

function List({ products }) {
  return (
    <div className="flex flex-wrap justify-center p-2 mt-8 overflow-hidden">
      {products.map(function(item) {
        return (
          <>
            <div key={item.id}>
              <Product key={item.id} {...item}></Product>
            </div>
          </>
        );
      })}
    </div>
  )
}
export default List