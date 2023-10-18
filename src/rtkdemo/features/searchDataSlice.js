import { createSlice } from "@reduxjs/toolkit";

const searchDataSlice = createSlice({
  name: "searchData",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      // console.log(state);

      return state.filter((item) => item.id !== action.payload);
    },
    empty(state, action) {
   
      let finalstate = [];
      return finalstate;
    },
  },
});
export const { add, remove, empty } = searchDataSlice.actions;
export default searchDataSlice.reducer;
