import { createReducer } from "@reduxjs/toolkit";

import usersActions from "../actions/usersActions";
const { signup , signin } = usersActions;
const initialState = ''
const reducer = createReducer(initialState, (builder) => {
  builder.addCase(signup.fulfilled , (state, actions) => {
    return {
      ...state,
      user: actions.payload.payload ,
    };

  });
  builder.addCase(signin.fulfilled , (state, actions) => {
    console.log(actions.payload.payload)
    return {
      ...state,
      user: actions.payload.payload ,
    };

  });
});

export default reducer;
