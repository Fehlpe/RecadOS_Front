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

export const updateNote = createAsyncThunk(
  "/user/notes/update",
  async (newNote: object) => {
    return NotesInstance.update(newNote);
  }
);

export const archiveNote = createAsyncThunk(
  "user/notes/archive",
  async (archiveNewNote: any) => {
    return NotesInstance.archive(archiveNewNote);
  }
);

export const unarchiveNote = createAsyncThunk(
  "user/notes/unarchive",
  async (unarchiveNewNote: any) => {
    return NotesInstance.unarchive(unarchiveNewNote);
  }
);

export const deleteNote = createAsyncThunk(
  "/users/notes/delete",
  async (id: string) => {
    return NotesInstance.delete(id);
  }
);

export const searchNote = createAsyncThunk(
  "/users/notes/search",
  async (searchNewNote: any) => {
    return NotesInstance.search(searchNewNote);
  }
);

interface NoteSliceState {
  userNotes: Note[];
  success: boolean;
  showArchived: boolean;
  currentMessage: string;
}

const initialState: NoteSliceState = {
  userNotes: [],
  success: false,
  showArchived: false,
  currentMessage: "",
};

const NotesSlice = createSlice({
  name: "NotesSlice",
  initialState,
  reducers: {
    resetState: () => initialState,
    toggleArchived: (state) => {
      state.showArchived = !state.showArchived;
    },
    resetNoteMessage: (state) => {
      state.currentMessage = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(addNote.fulfilled, (state, action) => {
      if (action.payload.data.ok) state.success = true;
    });
    builder.addCase(addNote.rejected, (state) => {
      state.currentMessage = "New notes must have title and description";
    });
    builder.addCase(getAllUserNotes.fulfilled, (state, action) => {
      if (action.payload.data.ok) state.userNotes = action.payload.data.data;
    });
    builder.addCase(archiveNote.fulfilled, (state, action) => {
      state.userNotes = action.payload.data.data;
    });
    builder.addCase(unarchiveNote.fulfilled, (state, action) => {
      state.userNotes = action.payload.data.data;
    });
    builder.addCase(searchNote.fulfilled, (state, action) => {
      state.userNotes = action.payload.data.data;
    });
  },
});

export const { toggleArchived, resetNoteMessage } = NotesSlice.actions;

export default NotesSlice.reducer;
