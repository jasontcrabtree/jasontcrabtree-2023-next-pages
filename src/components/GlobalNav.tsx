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
  <GlobalNavStyles>
    <div
      style={{ boxSizing: `content-box` }}
      className="nav-dots--layout decoration-dots--color">
      <svg
        width="112"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6" fill="currentColor" />
        <circle cx="40" cy="8" r="6" fill="currentColor" />
        <circle cx="72" cy="8" r="6" fill="currentColor" />
        <circle cx="104" cy="8" r="6" fill="currentColor" />
      </svg>
    </div>
    <nav className="nav-list">
      <Link href="/#hero">Home</Link>
      <Link href="/contact">Contact</Link>
      <a
        href="/jason-crabtree-developer-cv-dec-2023.pdf"
        aria-label="navigates to CV PDF">
        Résumé
      </a>
      <Link className="nav-hidden" href="/#code">
        Work
      </Link>
      {/* <Link href="/blog">Blog</Link> */}
    </nav>
  </GlobalNavStyles>
);

export default GlobalNav;
