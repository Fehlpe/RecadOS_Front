import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NotesInstance } from "../../../services/notes";
import Note from "../../../utils/interfaces/Note";

export const addNote = createAsyncThunk(
  "/users/notes/add",
  async (note: Note) => {
    return NotesInstance.create(note);
  }
);

export const getAllUserNotes = createAsyncThunk(
  "/user/notes/getAll",
  async (loggedUser: string) => {
    return NotesInstance.getAllUserNotes(loggedUser);
  }
);

export const deleteNote = createAsyncThunk(
  "users/notes/delete",
  async (id: string) => {
    return NotesInstance.delete(id);
  }
);

interface NoteSliceState {
  userNotes: Note[];
  success: boolean;
}

const initialState: NoteSliceState = {
  userNotes: [],
  success: false,
};

const NotesSlice = createSlice({
  name: "NotesSlice",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(addNote.fulfilled, (state, action) => {
      if (action.payload.data.success) state.success = true;
    });
    builder.addCase(getAllUserNotes.fulfilled, (state, action) => {
      if (action.payload.data.success)
        state.userNotes = action.payload.data.data;
    });
  },
});

export default NotesSlice.reducer;
