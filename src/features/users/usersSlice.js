import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: true,
    error,
    reducers: {},
    extraReducers: {},
  }
});

export default usersSlice.reducer;