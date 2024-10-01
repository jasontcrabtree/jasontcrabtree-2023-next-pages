export type BlogPost = {
  slug: string;

  meta: {
    title: string;
    date: string;
    description: string;
  };
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type RemoteBlogPost = {
  id: string;
  slug: string;
  published: boolean;
  title: string;
  date: string;
  description: string;
  content: string;
};
export type NewRemoteBlogPost = Omit<RemoteBlogPost, 'id'>;

export type Note = {
  note_id: string;
  note_body: string;
  date: string;
};

export type NewNote = Omit<Note, 'note_id'>;

export type Snippet = {
  snippet_id: string;
  label: string;
  body: string;
  dashboarduser_id: string;
  logbook_entry_id?: string;
};
export type NewSnippet = Omit<Snippet, 'snippet_id' | 'dashboarduser_id'>;

export enum Timeblock {
  'morning',
  'afternoon',
  'evening',
}

export type LogBookEntry = {
  email: string;
  logbook_entry_id: string;
  date: string;
  timeblock: 'morning' | 'afternoon' | 'evening';
  dashboarduser_id: string;
  content: string;
};

export type NewLogBookEntry = Omit<
  LogBookEntry,
  'logbook_entry_id' | 'dashboarduser_id'
>;
