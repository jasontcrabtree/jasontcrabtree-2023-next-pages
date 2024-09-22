'use server';

import { QueryResult, sql } from '@vercel/postgres';
import {
  NewLogBookEntry,
  NewNote,
  NewRemoteBlogPost,
  NewSnippet,
  RemoteBlogPost,
} from './types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export const getUserInfo = async (userEmail: string) => {
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

export const saveNote = async ({
  email,
  note_body,
  date,
}: {
  email: string;
  note_body: string;
  date: string;
}) => {
  const userInfo = await getUserInfo(email);

  if (!userInfo) {
    return null;
  }

  try {
    await sql`
      INSERT INTO "note" (note_body, date, dashboarduser_id)
      VALUES (${note_body}, ${date}, ${userInfo.dashboarduser_id}) RETURNING *;`;
  } catch (error) {
    return {
      message: `Datebase error creating new note ${error}`,
    };
  }
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
  email: string;
  snippets: NewSnippet[];
  logbook_entry_id?: string;
}) => {
  const userInfo = await getUserInfo(email);

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
  const userInfo = await getUserInfo(email);

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

export const getUserSnippets = async ({ userEmail }: { userEmail: string }) => {
  const userInfo = await getUserInfo(userEmail);

  if (!userInfo) {
    return NextResponse.json({ error: 'User is required' }, { status: 404 });
  }

  try {
    const res =
      await sql`SELECT * FROM snippet WHERE dashboarduser_id = ${userInfo.dashboarduser_id};`;

    return res.rows;
  } catch (error) {
    return {
      message: `DB error for email ${userEmail}. Errors: ${error}`,
    };
  }
};

export const getUserLogbookEntries = async ({
  userEmail,
}: {
  userEmail: string;
}) => {
  const userInfo = await getUserInfo(userEmail);

  if (!userInfo) {
    return NextResponse.json({ error: 'User is required' }, { status: 404 });
  }

  try {
    const res =
      await sql`SELECT * FROM logbook_entry WHERE dashboarduser_id = ${userInfo.dashboarduser_id};`;

    return res.rows;
  } catch (error) {
    return {
      message: `DB error for email ${userEmail}. Errors: ${error}`,
    };
  }
};

export const getUserNotes = async ({ userEmail }: { userEmail: string }) => {
  const userInfo = await getUserInfo(userEmail);

  if (!userInfo) {
    return NextResponse.json({ error: 'User is required' }, { status: 404 });
  }

  try {
    const res =
      // await sql`SELECT * FROM snippet WHERE dashboarduser_id = ${userInfo.dashboarduser_id};`;
      await sql`SELECT * FROM note WHERE dashboarduser_id = ${userInfo.dashboarduser_id};`;

    return res.rows;
  } catch (error) {
    return {
      message: `DB error for email ${userEmail}. Errors: ${error}`,
    };
  }
};
