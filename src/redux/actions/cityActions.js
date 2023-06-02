import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const city = createAsyncThunk("cities", async () => {
  try {
    let res = await axios.get(`http://localhost:8080/cities`);
    return {
      payload : res.data.response
    }
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});

const citiesActions = { city };
export default citiesActions;
