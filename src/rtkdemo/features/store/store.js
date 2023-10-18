import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './../cartSlice'
import productReducer from './../productSlice'
import searchDataReducer from './../searchDataSlice'



const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
        searchData:searchDataReducer,
      

    }
})
export default store;