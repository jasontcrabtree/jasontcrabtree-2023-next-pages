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

const IndexPageStyles = styled.main`
  grid-row-start: 2;
  grid-column: 1 / -1;

  .bg-column {
    opacity: 0.9;
  }

  .hero-children-container {
    display: flex;
    flex-direction: row;
  }

  .hero-bio--layout {
    max-width: 48ch;
    width: auto;
    font-size: 22px;
  }

  .hero-bio--layout > * + * {
    margin-top: 1.5rem;
  }

  .latest-posts-container > .index-blog-list-title--style > li > a > * + * {
    font-size: var(--size-28);
  }

  .hero-header-h1--style {
    font-weight: 900;
    color: var(--primary-blue);
    color: #ffffff;
    background: #2e2282;

    max-width: fit-content;
    max-width: -moz-max-content; /* Firefox/Gecko */
    max-width: -webkit-max-content; /* Chrome */

    padding: 24px;

    line-height: 1.2;
    letter-spacing: -1.8px;

    font-family: p22-mackinac-pro, serif;
    font-weight: 800;

    margin: 24px 0px !important;
  }

  .hero-header-h1--layout {
    padding: 24px;
    width: fit-content;
    max-width: 20ch;
  }

  .work-list-card {
    background: var(--card-background-white);

    box-shadow: var(--shadow-large);
    border-radius: 8px;
    padding: 0px;
  }

  .work-list-card:hover {
    box-shadow: var(--shadow-medium);
  }

  .work-list-container {
    grid-column: 1 / -1;
    margin: auto 0px;

    li {
      margin-left: auto;
      margin-right: auto;
      max-width: 28rem;
      width: 100%;
    }
  }

  .work-list-container {
    margin-bottom: 16px;
  }

  /* Desktop Media Query */
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    gap: 16px;
    grid-template-rows: auto;

    .hero-container {
      grid-column: 1 / 12;
      grid-row: 1 / 2;
    }

    .work-list-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30.5%, 1fr));
      grid-column-gap: var(--size-24);
      grid-row-gap: var(--size-24);
    }

    .latest-posts-container {
      grid-column: 1 / -1;
    }

    .quote-container {
      grid-column: 1/ -1;
    }

    .quote-container > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 48px;
    }

    .quote-container > div > * > * + * {
      margin-top: var(--size-8);
    }

    .posts {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
      grid-gap: 48px;
      flex-direction: row;
    }

    .hero-children-container > ul {
      margin-right: 40px;
    }

    .hero-header-h1--style {
      font-size: var(--size-64);
    }

    .work-title,
    .h2-section-title {
      font-size: var(--size-40);
      margin-bottom: var(--size-40);
    }

    .work-title {
      width: 150%;
    }

    .hero-bio-bg {
      background-color: var(--white-opacity-80);
    }

    /* home page blog list margin */
    .blog-list-item {
      margin: 0px;
    }

    main > * + * {
      margin: 32px 0px;
    }

    .decoration-dots-header--layout {
      z-index: 2;
      position: relative;
      height: auto;
      margin-top: -660px;
      margin-left: 600px;
    }

    .hero-header-parent {
      display: flex;
      flex-direction: row;
      box-sizing: content-box;
    }
  }

  /* 1/1.3 Scaled Size Hero Font Size */
  @media screen and (min-width: 1440px) {
    .hero-header-h1--style {
      font-size: var(--size-64);
    }
  }

  /* 1x1 Pixel Size Hero Font Size */
  @media screen and (max-width: 1440px) {
    .hero-header-h1--style {
      font-size: var(--size-56);
    }
  }

  /* Narrow screens, tablets & phones */
  @media screen and (max-width: 960px) {
    .hero-children-container > ul {
      margin-right: 0px;
    }

    .hero-header-h1--style {
      font-size: var(--size-40);
      letter-spacing: -0.4px;
    }

    .hero-children-container {
      display: flex;
      flex-direction: column-reverse;
    }

    .work-title {
      font-size: var(--size-32);
    }

    .top-parent-container {
      padding-bottom: 96px;
    }

    .hero-header-h1--style {
      padding: 24px 8px;
    }

    .decoration-dots-header--layout {
      z-index: 1;
      transform: rotate(180deg);
      margin-bottom: var(--size-32);
    }

    .hero-header-parent {
      display: flex;
      flex-direction: column;
    }
  }

  @media all and (max-width: 960px) and (prefers-color-scheme: light) {
    .nav-list {
      border: 1px solid var(--card-background-white);
    }
  }

  @media (prefers-color-scheme: light) {
    .decoration-dots--color {
      color: #2cb1bc;
    }

    .current-status-text {
      font-weight: bold;
      color: var(--primary-blue);
      border-bottom: 2px solid var(--primary-blue);
    }
  }

  @media (prefers-color-scheme: dark) {
    .hero-header-h1--style {
      color: var(--dm-white-text);
      background: inherit;
      padding-left: 0px;
    }
    .decoration-dots-header--layout {
      /* opacity: 0.3; */
      color: #19c0cf;
      color: #a2cdd1;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Crabtree | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer in Auckland, New Zealand"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <IndexPageStyles>
        {/* <SEO /> */}
        <section className="hero-container" id="hero">
          <div className="hero-header-parent">
            <h1 className="hero-header-h1--style hero-header-h1--layout">
              Full Stack Developer in Auckland, New Zealand
            </h1>
          </div>
          <div className="hero-children-container">
            <SocialProfiles />
            <div className="hero-bio--layout">
              <p className="large-paragraph-text">
                Hello, I’m Jason. I'm a Full Stack Developer passionate about
                JavaScript, TypeScript, React, NextJS, NodeJS, GraphQL, and
                Design and bringing these together as part of a team to make
                effective, scalable web applications.
              </p>
              <p className="large-paragraph-text">
                My perfect imaginary work day starts with building a new
                component from the design team. After finishing off the first
                version and my second coffee of the day, I revist old code to
                rewrite it for future use, improving it along the way. An
                invaluable lesson from an old boss, "use it 3 times, turn it
                into a template". After a lunchtime walk, I finish off the day
                peer programming with a colleague.
              </p>
              {/* I run a Design and Development Studio,{' '}
              <a href="https://lodestone.studio">Lodestone Studio</a>, focused
              on NZ Financial and Professional Services Companies. */}
              {/* <p className="large-paragraph-text">
                I'm a big fan of using modern JavaScript tools for websites and
                webapps, and I'm currently learning to use tools like
                TypeScript, Prisma, Postgres and Hasura. When working with these
                tools I do my best to follow best practices in accessibility,
                performance, responsiveness, and security.
              </p> */}
            </div>
          </div>
        </section>

        <hr />

        <section className="work-list-container" id="code">
          <h2 className="work-title">Website Projects</h2>
          <WebsiteProjects />
          {/* className="work-list-container" */}
        </section>

        {/* <hr /> */}

        {/* <section className="latest-posts-container">
        <h2 className="h2-section-title">Latest Blog Posts</h2>
        <BlogPostsList className="work-list-container" paginationLimit="3" />
      </section>

      <hr />

      <section className="work-list-container" id="design">
        <h2 className="work-title">Design Case Studies</h2>
        <CaseStudiesList className="work-list-container" />
      </section>

      <hr /> */}

        {/* <section className="quote-container">
          <h2 className="h2-section-title">Kind words from past colleagues</h2>
          <ColleagueQuotes />
        </section> */}

        {/* <hr />

      <section className="latest-posts-container">
        <h2 className="h2-section-title">Latest Dribbble Shots</h2>
        <DribbbleGallery />
      </section> */}
      </IndexPageStyles>
    </>
  );
}
