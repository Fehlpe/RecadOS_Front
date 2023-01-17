import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersInstance } from "../../../services/users";
import User from "../../../utils/interfaces/User";

const initialState = {
  logged: false,
  changeLog: false,
  currentMessage: "",
};

export const addUser = createAsyncThunk("/users/add", async (user: User) => {
  const response = await usersInstance.create(user);
  return response.data;
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
    resetLogged: (state) => {
      state.logged = false;
    },
    resetChangeLog: (state) => {
      state.changeLog = false;
    },
    resetMessage: (state) => {
      state.currentMessage = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.data.success) {
        state.logged = true;
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.error.message === "Request failed with status code 404") {
        state.currentMessage = "Incorrect username or password";
      }
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.changeLog = true;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      if (action.error.message === "Request failed with status code 400") {
        state.currentMessage = "Required fields not filled";
      } else if (
        action.error.message === "Request failed with status code 401"
      ) {
        state.currentMessage = "Passwords don't match";
      } else if (
        action.error.message === "Request failed with status code 409"
      ) {
        state.currentMessage = "Email already registered";
      }
    });
  },
});

export const { resetChangeLog, resetLogged, resetState, resetMessage } =
  UsersSlice.actions;

export default UsersSlice.reducer;
