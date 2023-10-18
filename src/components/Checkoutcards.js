import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { add } from "../rtkdemo/features/cartSlice";
import { remove } from "../rtkdemo/features/cartSlice";
import Inputcounter from "./Inputcounter";
import { useState } from "react";
import "./../styles/Checkoutcards.css";

function Checkoutcards({
  title,
  price,
  image,

  id,
  count,
}) {
  const [inputVal, setinputVal] = useState(count);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id));
  };
  useEffect(() => {
    // dispatch(add({title,price,image,id,inputVal}));
    //  dispatch(add({title,price,image,rating,id,inputVal}));
  }, inputVal);
  return (
    <div className="checkoutcards">
      <img className="checkoutcardimg" src={image} alt="" />
      <h1 className="checkoutcardtitle">{title.substr(0, 30)}</h1>
      <h1>{count}</h1>

      <h1 className="checkoutprice">{price}</h1>
    </div>
  );
}

export default Checkoutcards;
