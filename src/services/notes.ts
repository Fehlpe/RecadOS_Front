import Note from "../utils/interfaces/Note";
import { api } from "./api";

class NotesDataService {
  async create(note: Note) {
    return await api.post("/users/notes", {
      email: note.userId,
      title: note.title,
      description: note.description,
    });
  }
}

const NotesInstance = new NotesDataService();

export { NotesInstance };
