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
  published?: boolean;
  title: string;
  date?: string;
  description: string;
  content: string;
};

export type NewRemoteBlogPost = Omit<RemoteBlogPost, 'id'>;
