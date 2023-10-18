


import React, { useEffect } from 'react'
import './../styles/Cartcards.css'
import { useDispatch } from 'react-redux'
import { add } from '../rtkdemo/features/cartSlice'
import { remove } from '../rtkdemo/features/cartSlice'
import Inputcounter from './Inputcounter'
import { useState } from 'react'

function Cartcards({title,price,image
  
  ,id, count}) {
  const [inputVal , setinputVal]=useState(count);
   const dispatch = useDispatch();
  
   const removeItem = (id)=>{
    dispatch(remove(id));
   }
   useEffect(()=>{
    // dispatch(add({title,price,image,id,inputVal}));
    //  dispatch(add({title,price,image,rating,id,inputVal}));
   },inputVal)
    return (
 
      <div className='cartcards'>
        <img className='cartcardimg' src={image} alt="" />
        <h1 className='cardtitle'>{title.substr(0,30)}</h1>
        {/* <h1>{count}</h1> */}
       <h1> <Inputcounter setinputVal={setinputVal} inputVal={inputVal} title={title} price={price} image={image} id={id}></Inputcounter></h1>
        <h1 className='price'>{price}</h1>
        <button onClick={()=>removeItem(id)}> <img className='deleteicon' src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" alt="" /></button>
       
      </div>

  )
}

export default Cartcards