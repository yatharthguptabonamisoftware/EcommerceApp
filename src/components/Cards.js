import React, { useState } from 'react'
import './../styles/Cards.css'
import { useDispatch } from 'react-redux'
import { add } from '../rtkdemo/features/cartSlice'
import Dropdown from './Dropdown';
import Inputcounter from './Inputcounter';



function Cards({title,price,image,id}) {
    const dispatch =useDispatch();
    const [amount,setamount]=useState(0);
  const handleaddtocart = ()=>{
    dispatch(add({title,price,image,id,inputVal}));
  
    setshowAdd(false);

  }
  const [inputVal , setinputVal]=useState(0);
  const [showAdd , setshowAdd]=useState(false);
   
  
    return (
 
        <div className='cards'>
            <a href="#">
            <img className='cardimage' src={image} alt="" />
             </a>
    <       div class="p-5">
                <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">   Price - {price}</p>
                {/* <label htmlFor="">Quantity</label> */}
                {/* <input className='countinput'  onChange={e=>setinputVal(e.target.value)} type="text" />   */}
                <div className="counter">
                <Inputcounter setinputVal={setinputVal} inputVal={inputVal} title={title} price={price} image={image} id={id}></Inputcounter>
                <div className="addtocart">
                <a  disabled={showAdd} onClick={()=>{handleaddtocart()}}  href="#" class="inline-flex =items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Add to Cart
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                </div>
                </div>
            </div>
        </div>

  )
}

export default Cards