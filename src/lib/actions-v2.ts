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

export const runDbOperation = async (query: string) => {
  console.log('query', query);

  try {
    const res = await sql`${query}`;

    console.log('res', res);

    return res;
  } catch (error) {
    return {
      message: `DB operation error: ${error}`,
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
  await runDbOperation(`
    INSERT INTO "remoteblogpost" (slug, published, title, description, content)
    VALUES (${slug}, ${published}, ${title}, ${description}, ${content}) RETURNING *;`);

  revalidatePath('/posts');
  redirect('/posts');
};

export const getAllPosts = async (): Promise<RemoteBlogPost[] | undefined> => {
  try {
    const result: QueryResult<RemoteBlogPost> = await sql<RemoteBlogPost>`
      SELECT * FROM remoteblogpost
      ORDER BY published_date;`;
    return result.rows;
  } catch (error) {}
};

export const createNewSnippets = async ({
  userId,
  snippets,
}: {
  userId: string;
  snippets: NewSnippet[];
}) => {
  const newSnippets = snippets.forEach(async (snippet: NewSnippet) => {
    try {
      await sql`
            INSERT INTO "logbook_entry" (label, body, dashboarduser_id)
            VALUES (${snippet.label}, ${snippet.body}, ${userId}) RETURNING *;`;
    } catch (error) {
      return {
        message: `Datebase error creating snippet ${snippet.label}: ${error}`,
      };
    }
  });
  return newSnippets;
};

export const createNewLogbookEntry = async ({
  dashboarduser_id,
  content,
  timeblock,
}: NewLogBookEntry) => {
  const newlogbookQuery = `INSERT INTO "logbook_entry" (dashboarduser_id, timeblock, content)
    VALUES (${dashboarduser_id}, ${timeblock}, ${content}) RETURNING *;`;

  const newLogbookEntry = await runDbOperation(newlogbookQuery);

  console.log('newLogbookEntry', newLogbookEntry);
  revalidatePath('/logbook');

  return newLogbookEntry;
};
