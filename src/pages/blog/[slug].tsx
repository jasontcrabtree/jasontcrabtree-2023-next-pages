import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';

interface PostMetadata {
  title: string;
  date?: string;
}

interface PostPageProps {
  source: any;
  frontmatter: PostMetadata;
}

const PostPage: NextPage<PostPageProps> = ({ source, frontmatter }) => {
  return (
    <article className='flex flex-col items-center gap-2'>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <h1 className='text-3xl max-w-lg'>{frontmatter.title}</h1>
      <main className='w-full max-w-3xl flex flex-col gap-3 p-6 pt-0 md:p-0 blog-wrapper'>
        <MDXRemote {...source} />
      </main>
    </article>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const folder = path.join(process.cwd(), 'writing', '_blog-posts');
  const filenames = fs.readdirSync(folder);

  const paths = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      params: {
        slug: filename.replace(/\.mdx$/, '')
      },
    }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params!;

  const blogDirectory = path.join(process.cwd(), 'writing', '_blog-posts');
  const filePath = path.join(blogDirectory, `${slug}.mdx`);

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  // Remove any non-serializable properties from frontmatter
  const serializableFrontmatter = JSON.parse(JSON.stringify(frontmatter));

  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontmatter: serializableFrontmatter
    }
  };
};