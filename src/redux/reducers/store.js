import { configureStore } from "@reduxjs/toolkit";
import reducer from "./usersReducer";
const store = configureStore({
  reducer: reducer,
});
export default store