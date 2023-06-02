import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cityActions";
const { city, places } = citiesActions;
const initialState = [];

const reducerCity = createReducer(initialState, (builder) => {
  builder
    .addCase(city.fulfilled, (state, actions) => {
      return {
        ...state,
        cities: actions.payload.payload,
      };
    })
    .addCase(places.fulfilled, (state, actions) => {
      return {
        ...state,
        place: actions.payload.payload,
      };
    });
});

export default reducerCity;
