'use server';

import { sql } from '@vercel/postgres';
import { RemoteBlogPost } from './types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createNewBlogPost = async ({
  slug,
  published,
  title,
  content,
  description,
}: RemoteBlogPost) => {
  console.log('Value', content);
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
