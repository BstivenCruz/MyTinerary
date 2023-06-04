import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_API;

const city = createAsyncThunk("cities", async () => {
  try {
    let res = await axios.get(`${url}/cities`);
    return {
      payload: res.data.response,
    };
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});
const places = createAsyncThunk("oneCity", async () => {
  try {
    let res = await axios.get(`${url}/places`);
    return {
      payload: res.data.response,
    };
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});

const citiesActions = { city, places };
export default citiesActions;
