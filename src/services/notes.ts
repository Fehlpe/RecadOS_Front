import Note from "../utils/interfaces/Note";
import { api } from "./api";

class NotesDataService {
  async create(note: Note) {
    return await api.post("/users/notes", {
      userEmail: note.userEmail,
      title: note.title,
      description: note.description,
    });
  }

  async getAllUserNotes(loggedUser: string) {
    return await api.get(`/users/notes?userEmail=${loggedUser}`);
  }

  async update(id: string, title: string, description: string) {
    return await api.put(`/users/notes/${id}`, {
      title,
      description,
    });
  }

  async delete(id: string) {
    return await api.delete(`/users/notes/${id}`);
  }
}

const NotesInstance = new NotesDataService();

export { NotesInstance };
