export default interface Note {
  noteId?: string;
  noteTitle: string;
  noteDescription: string;
  noteArchived?: boolean;
  userId: string;
}
