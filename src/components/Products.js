import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import "./../styles/Products.css";
import { fetchProducts } from "../rtkdemo/features/productSlice";

function Products() {
  const dispatch = useDispatch();
  const [showAdd, setshowAdd] = useState(true);
  const searchItems = useSelector((state) => state.searchData);
  let { data, status } = useSelector((state) => state.product);
  const [emptySearchItems, setemptySearchItems] = useState(false);
  // const [products,setproducts]=useState([]);
  // console.log({});
  useEffect(() => {
    console.log('resulted data',searchItems);
    
    // if (searchItems.length == 0) {
    dispatch(fetchProducts());
    
  }, []);

  return (
    <div className="products">
      {searchItems.length
        ? searchItems.map((res) => (
            <Cards
              title={res.item.title}
              price={res.item.price}
              image={res.item.images}
              id={res.item.id}
            ></Cards>
          ))
        : data.map((res) => (
            <Cards
              title={res.title}
              price={res.price}
              image={res.images}
              id={res.id}
            ></Cards>
          ))}
    </div>
  );
}

export default Products;
