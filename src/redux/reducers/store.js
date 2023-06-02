import { configureStore } from "@reduxjs/toolkit";
import reducerUser from "./usersReducer";
import reducerCity from "./cityReducer";
const store = configureStore({
  reducer: { reducerUser, reducerCity },
});
export default store;
