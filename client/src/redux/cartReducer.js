import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

 
  reducers: {
    addItem: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      

      if (!item) {
        state.products.push(action.payload); 
      } else {
        item.currentQuantity += action.payload.currentQuantity;
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetAll: (state) => {
      state.products = [];
    },
  },
});

export const { addItem, removeItem, resetAll } = cartSlice.actions;

export default cartSlice.reducer;
