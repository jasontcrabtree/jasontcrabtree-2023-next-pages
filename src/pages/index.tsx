import Head from 'next/head';
import Image from 'next/image';

import styled from 'styled-components';

import WebsiteProjects from '../components/WebsiteProjects';
import CaseStudiesList from '../components/CaseStudiesList';

// import SEO from '../components/SEO';
import SocialProfiles from '../components/SocialProfiles';

import BlogPostsList from '../components/BlogPostsList';
import DribbbleGallery from '../components/DribbbleGallery';
import ColleagueQuotes from '../components/ColleagueQuotes';

import CustomLazyImage from '../components/CustomLazyImage';

export default function Home() {
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
      <main className='w-full max-w-3xl flex flex-col gap-8 items-center'>
        {/* <SEO /> */}
        <section className="flex flex-col gap-4 items-center w-full" id="hero">
          <h1 className="text-[56px] bg-indigo-900 text-white dark:bg-indigo-950 dark:text-white p-4 w-fit font-bold">
            Full Stack Developer in Auckland, New Zealand
          </h1>
          <div className="flex flex-row gap-8 w-full">
            <SocialProfiles />
            <div className="text-pretty max-w-prose">
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
          <h2 className="text-3xl font-bold mb-6">Website Projects</h2>
          <WebsiteProjects />
        </section>

        {/* <hr /> */}

        {/* <section className="">
          <h2 className="">Latest Blog Posts</h2>
          <BlogPostsList className="" paginationLimit="3" />
        </section>

        <hr /> */}

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
