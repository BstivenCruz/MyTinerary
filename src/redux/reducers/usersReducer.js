import { createReducer } from "@reduxjs/toolkit";

import usersActions from "../actions/usersActions";
const { signup } = usersActions;
const initialState = ''
const reducer = createReducer(initialState, (builder) => {
  builder.addCase(signup.fulfilled , (state, actions) => {
    return {
      ...state,
      user: actions.payload.payload ,
    };

  });
});

export default reducer;
