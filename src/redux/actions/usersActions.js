/* eslint-disable no-undef */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const signup = createAsyncThunk("signup", async (data) => {
  try {
    let res = await axios.post(`http://localhost:8080/users/signup`, data);
    toast.success(`🦄 ${res.data.response}`, {
      position: "bottom-left",
      autoClose: 1500,
      theme: "colored",
    });
  } catch (error) {
    toast.error(`🦄 ${error.response.data.response}`, {
      position: "bottom-left",
      autoClose: 1500,
      theme: "colored",
    });
    return {
      payload: error.response.data,
    };
  }
});

const signin = createAsyncThunk("signin", async (data) => {
  try {
    let res = await axios.post(`http://localhost:8080/users/signin`, data);
    toast.success(`🦄 ${res.data.response.user.message}  ${res.data.response.user.email}`, {
      position: "bottom-left",
      autoClose: 1500,
      theme: "colored",
    });
    return {
      payload: res.data.response
    };
  } catch (error) {
    toast.error(`🦄 ${error.response.data.response}`, {
      position: "bottom-left",
      autoClose: 1500,
      theme: "colored",
    });
    return {
      payload: error.response.data,
    };
  }
});

const usersActions = { signup, signin };

export default usersActions;
