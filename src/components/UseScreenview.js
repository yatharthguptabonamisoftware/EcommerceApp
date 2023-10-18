import React from 'react'
import { useState, useEffect } from 'react'
function UseScreenview() {
    const [screenWidth , setscreenWidth]=useState(window.innerWidth<690);
    useEffect(()=>{
        console.log("hi");
        function change(){
       setscreenWidth(window.innerWidth<690);
          }
      window.addEventListener('resize',change);
    },[]) 
     return screenWidth;
}

export default UseScreenview