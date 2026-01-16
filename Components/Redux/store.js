import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
const store = configureStore({
  reducer: {
    SideBarSlice,
  },
});
export default store;
