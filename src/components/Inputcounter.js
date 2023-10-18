import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './../styles/Inputcounter.css'
import { add } from '../rtkdemo/features/cartSlice';
import { remove } from '../rtkdemo/features/cartSlice';
import { update } from '../rtkdemo/features/cartSlice';

function Inputcounter({setinputVal,inputVal = 1,title,price,image,id}) {
  const dispatch = useDispatch();
  const [inputValue , setinputValue]=useState('');
  const handleclickadd = ()=>{
    setinputVal((prev) => +prev +1);
    // dispatch(remove(id));
    // dispatch(add({title,price,image,id,inputVal}));
    dispatch(update({id,inputVal}));
  }
  const handleclickminus = ()=>{
    setinputVal((prev) => +prev -1);
  }
  function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });
  
  return (
    
        <div class="custom-number-input h-10 w-32">
          <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Quantity
          </label>
          <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button onClick={()=>handleclickminus()} data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
             <span class="m-auto text-2xl font-thin">−</span>
            </button>
             <input  className='inputcounterinput' onChange={e=>setinputVal(+e.target.value)}  value={inputVal}type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" ></input>
              <button onClick={()=>handleclickadd()}  data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
            <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
      </div>
  )
}

export default Inputcounter