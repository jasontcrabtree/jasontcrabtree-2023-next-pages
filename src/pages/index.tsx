import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import WebsiteProjects from '../components/WebsiteProjects';
import SocialProfiles from '../components/SocialProfiles';
import BlogPostsList from '../components/BlogPostsList';
import CustomLazyImage from '../components/CustomLazyImage';

export default function Home({ blogPostPaths }: { blogPostPaths: string[] }) {
  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Jason Crabtree | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer in Auckland, New Zealand"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='w-full max-w-3xl flex flex-col md:gap-8 gap-4 items-center p-6 pt-0 md:p-0'>
        {/* <SEO /> */}
        <section className="flex flex-col md:gap-4 gap-6 items-center w-full" id="hero">
          <h1 className="text-4xl md:text-[56px] bg-indigo-900 text-white dark:bg-indigo-950 dark:text-white p-4 w-fit font-bold">
            Full Stack Developer in Auckland, New Zealand
          </h1>
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 w-full">
            <SocialProfiles />
            <div className="text-pretty max-w-prose text-lg md:text-base">
              <p className="">
                Hello, I’m Jason. I'm a Full Stack Developer passionate about
                JavaScript, TypeScript, React, NextJS, NodeJS, GraphQL, and
                Design and bringing these together as part of a team to make
                effective, scalable web applications.
              </p>
              <p className="">
                My perfect imaginary work day starts with building a new
                component from the design team. After finishing off the first
                version and my second coffee of the day, I revist old code to
                rewrite it for future use, improving it along the way. An
                invaluable lesson from an old boss, "use it 3 times, turn it
                into a template". After a lunchtime walk, I finish off the day
                peer programming with a colleague.
              </p>
            </div>
          </div>
        </section>

        {/* <hr /> */}

        <section className="w-full" id="code">
          <h2 className="text-3xl font-bold mb-6 mt-4 md:mt-4">Website Projects</h2>
          <WebsiteProjects />
        </section>

        {/* <hr /> */}

        <section className="">
          <h2 className="">Latest Blog Posts</h2>
          <BlogPostsList posts={blogPostPaths} className="" paginationLimit="3" />
        </section>

        <hr />

        {/* <section className="" id="design">
          <h2 className="work-title">Design Case Studies</h2>
          <CaseStudiesList className="" />
        </section> */}

        {/* <hr /> */}

        {/* <section className="quote-container">
          <h2 className="h2-section-title">Kind words from past colleagues</h2>
          <ColleagueQuotes />
        </section> */}

        {/* <hr /> */}

        {/* <section className="latest-posts-container">
          <h2 className="h2-section-title">Latest Dribbble Shots</h2>
          <DribbbleGallery />
        </section> */}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const folder = path.join(process.cwd(), 'writing', '_blog-posts');
  const filenames = fs.readdirSync(folder);

  const blogPostPaths = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      slug: filename.replace(/\.mdx$/, '')
    }));

  const blogPostFrontmatter = blogPostPaths.map((postPath) => {
    const postContents = fs.readFileSync(`${postPath.slug}.mdx`, 'utf-8');

    console.log('postContents', postContents);

    const { data: frontmatter } = matter(postContents);

    return frontmatter;
  })


  //   const fileContents = fs.readFileSync(filePath, 'utf8');
  //   const {
  //     data: frontmatter,
  //     content
  //   } = matter(fileContents);
  //   const mdxSource = await serialize(content);

  //   return {
  //     props: {
  //       source: mdxSource,
  //       frontmatter
  //     }
  //   };
  // };


  return {
    props: {
      blogPostPaths,
      blogPostFrontmatter
    },
  };
}

