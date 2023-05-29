/* eslint-disable no-undef */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const signup = createAsyncThunk("signup", async (data) => {
  console.log(data);
  try {
    let res = await axios.post(`http://localhost:8080/users/signup`, data);
    console.log(res)
    toast.success(`🦄 ${res.data.response}`, {
      position: "bottom-left",
      autoClose: 1500,
      theme: "colored",
    });
   
  } catch (error) {
    console.log(error)
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

const usersActions = { signup };

export default usersActions;
