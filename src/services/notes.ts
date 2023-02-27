import Note from "../utils/interfaces/Note";
import { api } from "./api";

class NotesDataService {
  async create(note: Note) {
    return await api.post("/users/notes", {
      title: note.noteTitle,
      description: note.noteDescription,
      userId: note.userId,
    });
  }

  async getAllUserNotes(loggedUser: string) {
    return await api.get(`/users/notes?userId=${loggedUser}`);
  }

  async update(newNote: any) {
    return await api.put(`/users/notes/${newNote.noteId}`, {
      noteTitle: newNote.title,
      noteDescription: newNote.description,
    });
  }

  async archive(archiveNewNote: any) {
    return await api.put(
      `/${archiveNewNote.userId}/notes/${archiveNewNote.noteId}/archive`
    );
  }

  async unarchive(unarchiveNewNote: any) {
    return await api.put(
      `/${unarchiveNewNote.userId}/notes/${unarchiveNewNote.noteId}/unarchive`
    );
  }

  async delete(id: string) {
    return await api.delete(`/users/notes/${id}`);
  }

  async search(searchNewNote: any) {
    return await api.get(
      `/${searchNewNote.userId}/notes/search?query=${searchNewNote.title}`
    );
  }
}

const NotesInstance = new NotesDataService();

export { NotesInstance };
