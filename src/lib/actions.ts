'use server';

import { QueryResult, sql } from '@vercel/postgres';
import { NewRemoteBlogPost, RemoteBlogPost } from './types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

    revalidatePath('/dashboard');
    redirect('/dashboard');
  } catch (error) {
    return {
      message: `Datebase error creating new blog post: ${error}`,
    };
  }
};

export const getAllPosts = async (): Promise<RemoteBlogPost[] | undefined> => {
  try {
    const result: QueryResult<RemoteBlogPost> = await sql<RemoteBlogPost>`
      SELECT * FROM remoteblogpost
      WHERE published = TRUE
      ORDER BY published_date;`;
    console.log('posts', result.rows);
    return result.rows;
  } catch (error) {}
};
