import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isWatchPage: false
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
      state.isWatchPage = true;
    },
    backToMain: (state) => {
      state.isWatchPage = false;
    }
  },
});

export const { toggleMenu, closeMenu, backToMain } = appSlice.actions;
export default appSlice.reducer;
