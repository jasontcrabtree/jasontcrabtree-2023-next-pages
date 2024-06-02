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
