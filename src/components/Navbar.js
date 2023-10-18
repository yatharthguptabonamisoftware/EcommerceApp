import React, { useState } from 'react'
import './../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import Products from './Products';
import { useDispatch } from 'react-redux';
import { add } from '../rtkdemo/features/searchDataSlice';
import { empty } from '../rtkdemo/features/searchDataSlice';
function Navbar() {
  const dispatch = useDispatch();
    const items = useSelector((state)=>state.cart);
    const { data, status}=useSelector((state) => state.product);
    const searchItems = useSelector((state)=>state.searchData);
    const [searchVal,setsearchVal] = useState('');
    function startSearch(val){
      if( val === ''){
        dispatch(empty());
      }
      console.log(val);
      console.log(searchItems,"items");
      console.log(data,"data");
      data.map((item)=>{
        if( item.title.toLowerCase().includes(val.toLowerCase())){
           dispatch(add({item}));
           console.log(item.images,"dispatcher");
        }
      })
    

    }
    function throttle (fn,time){
      let id;
      return function(){
        clearTimeout(id);
        id = setTimeout(()=>{
          fn(arguments[0]);
        },(time));
      }
    }
    const betterSearcher = throttle(startSearch,1000);
    console.log(searchItems,"searched");
  return (
    <div className='navbar'>
        <Link className='link' to='/'>Home</Link>
        <input  onChange={(e)=>betterSearcher(e.target.value)} className='inputnavbar' placeholder='Search Here' type="text" />
        <Link className='link' to='/cart'>Cart {items.length}</Link>

    </div>
  )
}

export default Navbar