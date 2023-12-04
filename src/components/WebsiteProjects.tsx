import styled from 'styled-components';

import SapwoodSVG from './svgs/SapwoodSVG.svg';
import ScaffoldSVG from './svgs/ScaffoldSVG.svg';
import SalesEmailsAppSVG from './svgs/SalesEmailsAppSVG.svg';
import CSSPosterSVG from './svgs/CSSPosterSVG.svg';
import WireframeSVG from './svgs/WireframeSVG.svg';
import CharacterCounterSVG from './svgs/CharacterCounterSVG.svg';

const WebsiteProjectsStyles = styled.ul`
  --cover-rotation: -4deg;

  .cover-illustration {
    box-shadow: var(--shadow-extra-small);
    border-radius: 16px;
    transform: rotate(var(--cover-rotation));
  }

  .websites-list-card {
    box-shadow: var(--shadow-extra-small);
    border-radius: 8px 8px 0 0;
    background: var(--card-background-white);

    box-shadow: var(--shadow-large);
    border-radius: 8px;
    padding: 24px;

    display: grid;
    align-content: center;
    /* margin: auto 0; */
  }

  .code-source {
    font-weight: 600;
    color: var(--primary-blue) !important;
  }

  .websites-list-card:hover {
    box-shadow: var(--shadow-medium);
    --cover-rotation: 8deg;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .websites-list-card > a:any-link {
    text-decoration: none;
    color: var(--text-black);
  }

  .card-title {
    color: var(--primary-blue);
  }

  .card-link {
    text-decoration: underline;
    color: var(--primary-link);
    font-weight: bold;
  }

  @media screen and (max-width: 960px) {
    .websites-list-card {
      margin: 32px 0px;
    }

    .websites-list-card {
      max-width: 40ch;
      width: 100%;
      padding: 0px;
    }

    .websites-list-card {
      width: 100%;
      padding: 16px 24px;
      width: 100%;

      display: grid;
      align-content: center;
    }

    .card-title {
      font-size: var(--size-24);
    }
  }
`;

function WebsiteProjects() {
  return (
    <WebsiteProjectsStyles className="work-list-container">
      <li className="websites-list-card">
        <a href="https://usescaffold.com/">
          <ScaffoldSVG
            loading="lazy"
            width={100}
            height={100}
            className="cover-illustration"
          />
          <h2 className="card-title">UseScaffold</h2>
          Eleventy Digital eComm Website
        </a>
        <a
          className="code-source"
          href="https://github.com/jasontcrabtree/usescaffold">
          Code Source
        </a>
      </li>
      <li className="websites-list-card">
        <a href="https://sapwood.netlify.app/">
          <SapwoodSVG
            loading="lazy"
            width={100}
            height={100}
            className="cover-illustration"
          />
          <h2 className="card-title">Sapwood Demo</h2>
          Demo Website: GatsbyJS & Prismic
        </a>{' '}
        <a
          className="code-source"
          href="https://github.com/jasontcrabtree/sapwood-example-website">
          Code Source
        </a>
      </li>
      <li className="websites-list-card">
        <a href="https://sales-emails.netlify.app/">
          <SalesEmailsAppSVG
            loading="lazy"
            width={100}
            height={100}
            className="cover-illustration"
          />
          <h2 className="card-title">Sales-Email App</h2>
          NextJS App: Cold-Email Starters
        </a>
        <a
          className="code-source"
          href="https://github.com/jasontcrabtree/sales-emails">
          Code Source
        </a>
      </li>
      <li className="websites-list-card">
        <a href="https://use-underscore.netlify.app/">
          <WireframeSVG
            loading="lazy"
            width={100}
            height={100}
            className="cover-illustration"
          />
          <h2 className="card-title">Underscore</h2>
          NextJS: A tiny BEM CSS playground
        </a>
        <a
          className="code-source"
          href="https://github.com/jasontcrabtree/underscore">
          Code Source
        </a>
      </li>
      <li className="websites-list-card">
        <a href="https://charactercounter.netlify.app/">
          <CharacterCounterSVG
            width={100}
            height={100}
            className="cover-illustration"
          />
          <h2 className="card-title">Character Counter</h2>
          Micro Website: Counts Characters
        </a>
        <a
          className="code-source"
          href="https://github.com/jasontcrabtree/CharacterCounter">
          Code Source
        </a>
      </li>
      <li className="websites-list-card">
        <a href="https://codepen.io/jasontcrabtree/pen/qBbQXJP">
          <CSSPosterSVG
            loading="lazy"
            width={100}
            height={100}
            className="cover-illustration"
          />
          <h2 className="card-title">CSS Poster Layout</h2>
          CodePen Public Link
        </a>
      </li>
    </WebsiteProjectsStyles>
  );
}

export default WebsiteProjects;
