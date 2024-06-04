'use server';

// export const createEntity = async (
//   formData: FormData,
//   entityType: EntityTypes
// ) => {
//   const newEntity = await fetchUtil({
//     method: 'POST',
//     url: `${apiEndpoint}/${entityType}`,
//     body: {
//       ...Object.fromEntries(formData.entries()),
//     },
//   });
//   revalidatePath(`/${entityType}`, 'layout');
//   return newEntity;
// };

import { sql } from '@vercel/postgres';
import { RemoteBlogPost } from './types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// slug: string,
//   publishStatus: boolean,
//   title: string,
//   content: string,
//   description?: string

export const createNewBlogPost = async ({
  slug,
  published,
  title,
  content,
  description,
}: RemoteBlogPost) => {
  console.log('Value', content);
  try {
    const res = await sql`
        INSERT INTO "remoteblogpost" (slug, published, title, description, content)
        VALUES (${slug}, ${published}, ${title}, ${description}, ${content}) RETURNING *;`;
    return res;
  } catch (error) {
    return {
      message: `Datebase error creating new blog post: ${error}`,
    };
  }
};
