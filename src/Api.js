import axios from "axios";

export function getProduct(sort,query,sortType){
  let params = {};

  if (sort) {
    params.sortBy = sort;
  }

   if(query){
    params.search = query;
  }
  
  if(sortType){
    params.sortType = sortType;
  }
  
  return axios.get("https://myeasykart.codeyogi.io/products",{params}).then(function(response){
    return response.data;
  });
}

export function getproductdetail(id){
  return axios.get("https://myeasykart.codeyogi.io/product/" + id).then(function(response){
    return response.data;
  });
}