import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sideBarState: false,
};
const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState,
  reducers: {
    handleSideBar: (state, action) => {
      state.sideBarState = action.payload;
    },
  },
});
export const { handleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
