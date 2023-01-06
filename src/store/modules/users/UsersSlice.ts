import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersInstance } from "../../../services/users";
import User from "../../../utils/interfaces/User";

const initialState = {
  logged: false,
};

export const addUser = createAsyncThunk("/users/add", async (user: User) => {
  return usersInstance.create(user);
});

export const loginUser = createAsyncThunk(
  "/users/login",
  async (loginInfo: object) => {
    return usersInstance.login(loginInfo);
  }
);

const UsersSlice = createSlice({
  name: "UsersSlice",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.data.success) {
        state.logged = true;
      }
    });
  },
});

export default UsersSlice.reducer;
