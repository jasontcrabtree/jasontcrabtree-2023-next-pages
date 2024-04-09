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
    <article>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...source} />
    </article>
  );
};

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
  const {
    data: frontmatter,
    content
  } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontmatter
    }
  };
};

export default PostPage;