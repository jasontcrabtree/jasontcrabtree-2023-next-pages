import '@/styles/reset.css';
import '@/styles/globalStyles.css';
import '@/styles/globalTheme.css';
import '@/styles/globalType.css';
import '@/styles/styles.css';
import type { AppProps } from 'next/app';

import Link from 'next/link';
import styled from 'styled-components';

import GlobalFooter from '../components/GlobalFooter';
import GlobalNav from '../components/GlobalNav';
// import SEO from '../components/SEO';
import BgColumn from '../components/BgColumn';
import SkipLink from '../components/SkipLink';

const GlobalLayoutStyles = styled.div`
  .bg-column {
    opacity: 0.1;
  }

  .return-home-h2--color {
    color: var(--subheading-black-blue);
  }

  .return-home-h2--type {
    text-transform: uppercase;
    font-size: var(--size-24);
  }

  #app > a:first-child {
    text-decoration: none;
  }

  aside {
    grid-column: 1 / 5;
    height: fit-content;
  }

  @media screen and (min-width: 960px) {
    .return-home-link {
      grid-column: 1 / 8;
      grid-row-start: 1;
      margin: auto 0;
      align-self: center;
    }

    margin: 64px 112px 0px 112px;
    max-width: calc(1440px - 12vw);
    width: auto;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 16px;
    padding-left: 2rem;
    padding-right: 2rem;
    grid-template-columns: repeat(13, 1fr);
    /* grid-template-columns: repeat(13, minmax(0px, 1fr)); */
    grid-template-rows: 64px auto auto auto auto auto;

    main {
      grid-row-start: 2;
      /* grid-column: 1 / -1; */
    }

    grid-row-start: 2;
    grid-column: 1 / -1;
  }

  @media screen and (max-width: 960px) {
    margin: auto 32px;
    display: grid;
    flex-direction: column;
    padding: 16px;
    max-width: fit-content;
    max-width: -moz-max-content; /* Firefox/Gecko */
    max-width: -webkit-max-content; /* Chrome */
    /* max-width: 40rem; */
    width: auto;

    padding-top: 48px;

    header {
      grid-column: 1;
      grid-row: 1;
    }

    aside {
      grid-column: 1;
      grid-row: 1;
    }
  }

  @media screen and (max-width: 459px) {
    padding: 16px;
    max-width: fit-content;
    max-width: -moz-max-content; /* Firefox/Gecko */
    max-width: -webkit-max-content; /* Chrome */
    width: auto;

    margin: 0px auto 72px auto;
    padding-top: 32px;

    border-top: 8px solid #2cb1bc;
  }

  @media screen and (max-width: 360px) {
    /* margin-right: 16px;
    width: calc(100vw - 32px); */
  }

  @media (prefers-color-scheme: dark) {
    .return-home-h2--color {
      color: var(--primary-link-dark);
    }
  }
`;

const GlobalLayout = (props: any): any => {
  if (!props) return null;
  const { title, image, location, children } = props;

  return (
    <GlobalLayoutStyles className="top-parent-container">
      {/* <SEO image={image} title={title} location={location.pathname} /> */}
      <SkipLink />
      <aside>
        <Link className="return-home-link" href="/">
          <h2 className="return-home-h2--color return-home-h2--type">
            Jason Crabtree
          </h2>
        </Link>
      </aside>
      <GlobalNav />
      <>{children}</>
      <BgColumn />
      <GlobalFooter />
    </GlobalLayoutStyles>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
