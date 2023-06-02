import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cityActions";
const { city } = citiesActions;
const initialState = [];

const reducerCity = createReducer(initialState, (builder) => {
  builder.addCase(city.fulfilled, (state, actions) => {
    return {
      ...state,
      cities: actions.payload.payload,
    };
  });
});

export default reducerCity;
