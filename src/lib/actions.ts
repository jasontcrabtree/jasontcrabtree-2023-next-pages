'use server';

import { QueryResult, sql } from '@vercel/postgres';
import {
  NewLogBookEntry,
  NewRemoteBlogPost,
  NewSnippet,
  RemoteBlogPost,
} from './types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const getUserInfo = async ({
  userEmail,
}: {
  userEmail: string | null | undefined;
}) => {
  if (!userEmail) {
    return null;
  }

  try {
    const res =
      await sql`SELECT dashboarduser_id, name, created_at, email FROM dashboarduser WHERE email = ${userEmail};`;
    return res.rows[0];
  } catch (error) {
    return {
      message: `Datebase error fetching user: ${error}`,
    };
  }
};

export const createNewBlogPost = async ({
  slug,
  published,
  title,
  content,
  description,
}: NewRemoteBlogPost) => {
  try {
    await sql`
    INSERT INTO "remoteblogpost" (slug, published, title, description, content)
    VALUES (${slug}, ${published}, ${title}, ${description}, ${content}) RETURNING *;`;
  } catch (error) {
    return {
      message: `Datebase error creating new blog post: ${error}`,
    };
  }

  revalidatePath('/posts');
  redirect('/posts');
};

export const getAllPosts = async (): Promise<RemoteBlogPost[] | undefined> => {
  try {
    const result: QueryResult<RemoteBlogPost> = await sql<RemoteBlogPost>`
      SELECT * FROM remoteblogpost
      WHERE published = TRUE
      ORDER BY published_date;`;
    return result.rows;
  } catch (error) {}
};

export const createNewSnippets = async ({
  email,
  snippets,
  logbook_entry_id,
}: {
  email: string | null | undefined;
  snippets: NewSnippet[];
  logbook_entry_id?: string;
}) => {
  const userInfo = await getUserInfo({ userEmail: email });

  if (!userInfo) {
    return null;
  }

  try {
    const newSnippets = Promise.all(
      snippets.map(async (snippet: NewSnippet) => {
        const res =
          await sql`INSERT INTO "snippet" (label, body, dashboarduser_id, logbook_entry_id)
          VALUES (${snippet.label}, ${snippet.body}, ${
            userInfo.dashboarduser_id
          }, ${logbook_entry_id || null})
          RETURNING *;`;

        return res.rows[0];
      })
    );
    return newSnippets;
  } catch (error) {
    return {
      message: `Datebase error creating ${snippets.length} snippets`,
    };
  }
};

export const createNewLogbookEntry = async ({
  email,
  content,
  timeblock,
  date,
}: NewLogBookEntry) => {
  const userInfo = await getUserInfo({ userEmail: email });

  if (!userInfo) {
    return null;
  }

  try {
    const res =
      await sql`INSERT INTO "logbook_entry" (dashboarduser_id, timeblock, content, date) VALUES (${userInfo.dashboarduser_id}, ${timeblock}, ${content}, ${date}) RETURNING *;`;
    return res.rows[0];
  } catch (error) {
    return {
      message: `Datebase error creating new logbook entry: ${error}`,
    };
  }
};
