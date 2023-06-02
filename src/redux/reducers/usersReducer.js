import { createReducer } from "@reduxjs/toolkit";

import usersActions from "../actions/usersActions";
const { signup , signin } = usersActions;

const initialState = ''

const reducerUser = createReducer(initialState, (builder) => {
  builder.addCase(signup.fulfilled , (state, actions) => {
    return {
      ...state,
      user: actions.payload.payload ,
    };

  });
  builder.addCase(signin.fulfilled , (state, actions) => {
    return {
      ...state,
      user: actions.payload.payload ,
    };

  });
});

export default reducerUser;
