import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "./Api";
import List from "./List";

function Page() {
  const [productData, setProductData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchparams = Object.fromEntries([...searchParams]);

  let { query, sort } = searchparams;
  query = query || "";
  sort = sort || "default";


  useEffect(function() {
    let sortType;
    let sortBy;
    
    if (sort == "name") {
      sortBy = "title";
    } else if (sort == "price") {
      sortBy = "price"
    } else if (sort == "price2") {
      sortBy = "price";
      sortType = "desc";
    }

    getProduct(sortBy, query, sortType).then(function(wdata) {
      setProductData(wdata.data);
    });
  }, [sort, query]);

  function handleChange(event) {
    setSearchParams({ ...searchparams, query: event.target.value }, { replace: false })
  }

  function handleSortChange(event) {
    setSearchParams({ ...searchparams, sort: event.target.value }, { replace: false })
  }

  return (
    <div className="bg flex space-x-4 flex-col max-h-max min-h-screen w-full p-4">
      <div className="flex flex-row justify-center items-center space-x-4">
        <input
          onChange={handleChange}
          value={query}
          type="text"
          placeholder="search"
          className="w-1/2 p-2 rounded-lg shadow-md shadow-zinc-700">
        </input>

        <select
          onChange={handleSortChange}
          value={sort}
          className="w-28 rounded-lg p-2 shadow-md shadow-zinc-700">

          <option value="default">default</option>
          <option value="name">sortbyname</option>
          <option value="price">sortbyprice:low to high</option>
          <option value="price2">sortbyprice:high to low</option>

        </select>
      </div>
      <div>
        {productData.length > 0 && <List products={productData} />}
      </div>
    </div>
  );
}
export default Page;
