/* eslint-disable no-undef */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signup = createAsyncThunk("signup", async (data) => {
  console.log(data)
  try {
    let res = await axios.post(`http://localhost:8080/users/signup`, data);
    return {
      payload: res.data,
    };
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});

const usersActions = { signup };

export default usersActions;
