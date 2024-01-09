import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import NewsletterSubscriptionForm from './NewsletterSubscriptionForm';
import SocialProfiles from './SocialProfiles';

const FooterStyles = styled.footer`
  margin-top: 96px;
  grid-column: 1 / -1;
  /* grid-row-end: -1; */

  border-top: 2px solid var(--horiz-spacer);

  @media screen and (min-width: 1061px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    section {
      width: 10%;
    }

    section:first-child {
      padding-right: 80px;
      width: 40%;
    }

    section:last-child {
      padding-left: 80px;
      width: 40%;
    }

    .footer-text-style > p {
      padding-bottom: 16px;
      line-height: 1.5;
    }

    section > .footer-list {
      display: flex;
      text-align: left;
      flex-direction: column;
    }

    .footer-list > li {
      margin-top: var(--size-8);
      /* margin-top: 100px; */
    }

    section > .footer-list > * {
      height: 40px;
    }

    section > h3 {
      padding-bottom: 24px;
      text-decoration: underline;
    }

    grid-column: 1 / -1;

    padding-top: 72px;
    padding-bottom: 144px;
  }

  /* 1060px and smaller screen */
  @media screen and (max-width: 1060px) {
    margin-top: 160px;
    padding-top: 24px;

    display: flex;
    flex-direction: column-reverse;

    p,
    li {
      max-width: 48ch;
    }

    section {
      margin: 24px 0px;
    }

    .footer-list > * {
      line-height: 2;
    }

    * > .footer-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    * > .footer-list > * {
      margin-right: 24px;
    }

    * > .hero-social-list {
      display: flex;
      flex-direction: row;
    }

    .social-parent > ul {
      margin: 24px 24px 0px 0px;
    }
  }

  /* tiny little screen */
  @media screen and (max-width: 360px) {
    width: calc(100vw - 32px);
  }
`;

function GlobalFooter() {
  return (
    <FooterStyles>
      <section className="footer-text--layout footer-text-style">
        <h3>With thanks</h3>
        <p>
          Made with care in <strong>Auckland, New Zealand</strong>
        </p>
        <p>
          An online spot to try new things, talk about what I'm learning, and
          generally share!
        </p>
        <p>
          Built using <a href="https://nextjs.org/">NextJS</a>,{' '}
          <a href="https://www.netlify.com/">Netlify</a>,{' '}
          <a href="https://www.netlify.com/">Styled Components</a>,{' '}
          <a href="https://github.com/jasontcrabtree">GitHub</a>, and{' '}
          <a href="https://buttondown.email/">Buttondown</a>
        </p>
        <p>
          <small>
            &copy; Copyright 2018-{new Date().getFullYear()} Jason Crabtee.
            <br />
            All rights reserved.
          </small>
        </p>
      </section>
      <section>
        <h3>Social</h3>
        {/* <Social className="social-parent" /> */}
        <SocialProfiles />
      </section>
      <section>
        <h3>Explore</h3>
        <nav aria-label="footer-nav" className="footer-list">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/">Résumé</Link>
          <Link className="nav-hidden" href="/#code">
            Work
          </Link>
          {/* <Link href="/blog">Blog</Link> */}
          {/* <Link href="/snippets">Snippets</Link> */}
        </nav>
      </section>
      <section className="footer-subscribe--layout">
        <h3>Newsletter</h3>
        <NewsletterSubscriptionForm />
      </section>
    </FooterStyles>
  );
}

export default GlobalFooter;
