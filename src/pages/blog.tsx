import React from 'react';
import BlogPostsList from '../components/BlogPostsList';
import { allWritingOrderedByDate } from '@/lib/blog';
import { BlogPost } from '@/lib/types';

function BlogPage({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <div className='w-full flex flex-col items-center'>
      <main className='max-w-3xl flex flex-col gap-8'>
        <header>
          <h1 className='text-3xl pb-2'>Personal Blog</h1>
          <p className="max-w-prose">
            A personal and professional blog by{' '}
            <a href="http://twitter.com/jasontcrabtree">@jasontcrabtree.</a> I
            write about learning Front-End Development, Product Design, Product
            Development and how they all tie together.
          </p>
        </header>

        <section className="blog-list-section--layout">
          <h2 className='text-2xl'>Latest Posts:</h2>

          <BlogPostsList
            posts={blogPosts}
            paginationLimit={1000}
          />
        </section>
      </main>
    </div>
  );
}

export default BlogPage;

export const getStaticProps = () => {
  return {
    props: {
      blogPosts: JSON.parse(
        JSON.stringify(allWritingOrderedByDate('_blog-posts'))
      )
    },
  };
}

