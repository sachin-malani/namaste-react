import { createSlice, current } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    name: null,
    location: null,
    imageId: null,
    tempName: null,
  },
  reducers: {
    addRestaurantInfo: (state, action) => {
      const { areaName, cloudinaryImageId, name } = action.payload;

      state.tempName = name;
      state.location = areaName;
      state.imageId = cloudinaryImageId;
    },
    restaurantInfo: (state) => {
      state.name = state.tempName;
    },
  },
});

export const { addRestaurantInfo, restaurantInfo } = restaurantSlice.actions;
export default restaurantSlice.reducer;
