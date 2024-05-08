import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { isVeg, name } = action.payload;
      let foodInfo = {
        name,
        isVeg,
        price: (action.payload.price || action.payload.defaultPrice) / 100,
      };
      state.items.push(foodInfo);
    },
    removeItem: (state, action) => {
      state.total = state.total - state.items[action.payload].price;
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    cartTotal: (state) => {
      state.total = state.items.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);
    },
  },
});

export const { addItem, removeItem, clearCart, cartTotal } = cartSlice.actions;
export default cartSlice.reducer;
