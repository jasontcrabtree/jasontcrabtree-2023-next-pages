import React from 'react';
import Link from 'next/link';

import NewsletterSubscriptionForm from './NewsletterSubscriptionForm';
import SocialProfiles from './SocialProfiles';

function GlobalFooter() {
  return (
    <>
      <div className='bg-ingigo-500 dark:bg-white mx-auto w-full max-w-3xl h-[1px] bg-opacity-20 mt-auto' />
      <footer className='w-full flex justify-center p-6 pt-0'>
        <div className="flex w-full max-w-3xl md:flex-row flex-col gap-8 md:gap-16 justify-between">
          <section className="footer-text--layout footer-text-style max-w-96">
            <h3 className='font-bold text-xl'>With thanks</h3>
            <p>
              Made with care in <strong>Auckland, New Zealand</strong>
            </p>
            <p>
              An online spot to try new things, talk about what I'm learning, and
              generally share!
            </p>
            <p>
              Built using <Link href="https://nextjs.org/">NextJS</Link>,{' '}
              <Link className='underline' href="https://www.netlify.com/">Netlify</Link>,{' '}
              <Link className='underline' href="https://www.netlify.com/">
                Styled Components
              </Link>,{' '}
              <Link className='underline' href="https://github.com/jasontcrabtree">GitHub</Link>, and{' '}
              <Link className='underline' href="https://buttondown.email/">Buttondown</Link>
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
            <h3 className='font-bold text-xl mb-[8px]'>Social</h3>
            {/* <Social className="social-parent" /> */}
            <SocialProfiles />
          </section>
          <section className='flex flex-col gap-1'>
            <h3 className='font-bold text-xl'>Explore</h3>
            <nav aria-label="footer-nav" className="flex flex-col gap-1">
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
          {/* <section className="footer-subscribe--layout">
        <h3>Newsletter</h3>
        <NewsletterSubscriptionForm />
      </section> */}
        </div>
      </footer>
    </>
  );
}

export default GlobalFooter;
