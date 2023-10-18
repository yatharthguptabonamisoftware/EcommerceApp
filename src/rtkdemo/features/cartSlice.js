import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      // console.log(state);

      return state.filter((item) => item.id !== action.payload);
    },
    update(state, action) {
        const final = state;
      let productToBefound  =  final.filter(el => el.id === action.payload.id);  
      // console.log(productToBefound[0]?.price, action.payload)
      let finalstate = final.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              price : item.price + (productToBefound[0]?.price)/action.payload.inputVal,
            }
          : item
      );

      // finalstate.inputVal = action.payload.inputVal;
      // console.log(finalstate);
      return finalstate;
    },
  },
});
export const { add, remove, update } = cartSlice.actions;
export default cartSlice.reducer;
