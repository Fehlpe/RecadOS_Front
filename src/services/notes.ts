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

  async update(newNote: any) {
    return await api.put(`/users/notes/${newNote.id}`, {
      title: newNote.title,
      description: newNote.description,
    });
  }

  async archive(archiveNewNote: any) {
    return await api.put(
      `/${archiveNewNote.userEmail}/notes/${archiveNewNote.id}/archive`
    );
  }

  async unarchive(unarchiveNewNote: any) {
    return await api.put(
      `/${unarchiveNewNote.userEmail}/notes/${unarchiveNewNote.id}/unarchive`
    );
  }

  async delete(id: string) {
    return await api.delete(`/users/notes/${id}`);
  }

  async search(searchNewNote: any) {
    return await api.get(
      `/${searchNewNote.userEmail}/notes/search?query=${searchNewNote.title}`
    );
  }
}

const NotesInstance = new NotesDataService();

export { NotesInstance };
