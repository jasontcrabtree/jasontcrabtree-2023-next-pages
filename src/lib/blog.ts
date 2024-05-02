import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const allWritingOrderedByDate = (folderName: string) => {
  const folder = path.join(process.cwd(), 'writing', folderName);
  const filenames = fs.readdirSync(folder);

  const blogPostPaths = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      slug: filename.replace(/\.mdx$/, ''),
    }));

  const blogPostFrontmatter = blogPostPaths.map(postName => {
    const postPath = path.join(folder, postName.slug);
    const postContents = fs.readFileSync(`${postPath}.mdx`, 'utf8');
    const { data: frontmatter } = matter(postContents);

    return {
      slug: postName.slug,
      meta: frontmatter,
    };
  });

  const postsByDate = blogPostFrontmatter.sort((a, b) => {
    if (a.meta.date < b.meta.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return postsByDate;
};
