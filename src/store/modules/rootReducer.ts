import { combineReducers } from "@reduxjs/toolkit";
import users from "./users/UsersSlice";
import notes from "./notes/NotesSlice";

export default combineReducers({
  users,
  notes,
});
