import React from 'react';
import Link from 'next/link';

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
