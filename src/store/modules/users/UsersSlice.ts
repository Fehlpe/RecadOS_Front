import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersInstance } from "../../../services/users";
import User from "../../../utils/interfaces/User";

const initialState = {
  logged: false,
  changeLog: false,
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
    resetChangeLog: (state) => {
      state.changeLog = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.data.success) {
        state.logged = true;
      }
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      if (action.payload.data.success) {
        state.changeLog = true;
      }
    });
  },
});

export const { resetChangeLog, resetState } = UsersSlice.actions;

export default UsersSlice.reducer;
