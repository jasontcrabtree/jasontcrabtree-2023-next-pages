import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const GlobalNavStyles = styled.header`
  .nav-list {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-content: space-around;
  }

  margin-top: 24px;

  height: fit-content;

  z-index: 1;

  div:first-of-type {
    margin-bottom: -16px !important;
  }

  .decoration-dots--color {
    color: var(--dots-color);
  }

  @media screen and (max-width: 960px) {
    .nav-list {
      flex-direction: row;
    }

    .nav-list {
      flex-wrap: wrap;
    }

    .nav-list > * {
      margin-right: 16px;
    }

    * {
      margin: 8px 0;
    }
  }

  @media screen and (min-width: 960px) {
    .nav-list {
      flex-direction: column;
    }
    .nav-list {
      position: static;
    }

    .nav-list {
      border-radius: 8px;
      padding: 0px 8px;
      width: 112px;
    }

    .nav-list {
      background-color: var(--white-opacity-80);
    }

    .nav-list > * {
      margin: 8px 0px;
    }

    grid-row-start: 1;
    grid-column: 13 / 14;
  }

  @media screen and (max-width: 960px) {
    .nav-dots--layout {
      display: none;
    }
  }

  @media screen and (max-width: 350px) {
    max-width: calc(100vw - 32px);
    width: auto;
  }

  @media (prefers-color-scheme: dark) {
    .nav-list {
      opacity: 1;
      background: inherit;
    }

    .decoration-dots--color {
      color: var(--dots-color);
    }
  }
`;

const GlobalNav = () => (
  <header className='max-w-3xl w-full flex md:flex-row flex-col justify-between mx-auto p-6 pb-0 md:p-0 md:pt-8'>
    {/* <SkipLink /> */}
    <aside>
      <Link className="return-home-link flex-row" href="/">
        <h2 className="uppercase  underline pb-4 md:pb-0">
          Jason Crabtree
        </h2>
      </Link>
    </aside>
    <nav className="flex flex-row md:gap-6 gap-4 underline">
      <Link href="/#hero">Home</Link>
      <a
        href="/jason-crabtree-cv.pdf"
        aria-label="navigates to CV PDF">
        Résumé
      </a>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <Link className="nav-hidden" href="/#code">
        Work
      </Link>
    </nav>
  </header>
);

export default GlobalNav;
