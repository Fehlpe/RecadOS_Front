import { combineReducers } from "@reduxjs/toolkit";
import users from "./users/UsersSlice";

export default combineReducers({
  users,
});
