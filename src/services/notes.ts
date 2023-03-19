import Note from "../utils/interfaces/Note";
import { api } from "./api";

class NotesDataService {
  async create(note: Note) {
    return await api.post("/note", {
      title: note.noteTitle,
      description: note.noteDescription,
      userId: note.userId,
    });
  }

  async getAllUserNotes(loggedUser: string) {
    return await api.get(`/note/user?userId=${loggedUser}`);
  }

  async update(newNote: any) {
    return await api.put(`/note/user/${newNote.noteId}`, {
      noteTitle: newNote.title,
      noteDescription: newNote.description,
    });
  }

  async archive(archiveNewNote: any) {
    return await api.put(
      `/note/${archiveNewNote.userId}/${archiveNewNote.noteId}/archive`
    );
  }

  async unarchive(unarchiveNewNote: any) {
    return await api.put(
      `/note/${unarchiveNewNote.userId}/${unarchiveNewNote.noteId}/unarchive`
    );
  }

  async delete(id: string) {
    return await api.delete(`/note/user/${id}`);
  }

  async search(searchNewNote: any) {
    return await api.get(
      `/note/${searchNewNote.userId}/search?query=${searchNewNote.title}`
    );
  }
}

const NotesInstance = new NotesDataService();

export { NotesInstance };
