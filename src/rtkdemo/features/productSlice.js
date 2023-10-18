import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const statuses ={
    IDLE:'idle',
    ERROR:'error',
    loading:'loading'
}
export const fetchProducts = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
      
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
      
        const data = await res.json();
        console.log(data);
        return data;
    }
  )
const productSlice = createSlice({
    name:'products',
    initialState :{
        data:[],
        status:statuses.IDLE
    },
    reducers:{
    
    },
  
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status = statuses.loading
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status =statuses.IDLE;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = statuses.ERROR
        })
    }
});
export const {setProducts,setStatus}= productSlice.actions;
export default productSlice.reducer

// export const fetchProducts = createAsyncThunk('products/fetch',
// async()=>{
   
// });  