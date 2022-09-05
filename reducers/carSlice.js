import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarDetails = createAsyncThunk('car/getDetails', async (vin) => {
  console.log("async thumb call for : ", vin);
  const car = await axios.get(`https://autodigg.com/ad-api/cars/list?vin=${vin}`);
  console.log(car, " : data for car");
  return car.data[0];
});
// https://autodigg.com/ad-api/cars/list?vin=NM0GE9F23N1532001

const carSlice = createSlice({
  name: "car",
  initialState: {
    isLoading: false,
    data : []
  },
  reducers: {
    setCar: (state, action) => {
      state.data = action.payload
    }
  },
  extraReducers: {
    [getCarDetails.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCarDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload , " : payload");
      state.data = action.payload;
    },
    [getCarDetails.rejected]: (state, action) => {
      state.isLoading = false;
    }
  }
});

export const { setCar } = carSlice.actions;

export default carSlice.reducer;