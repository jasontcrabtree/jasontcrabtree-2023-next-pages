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

const ProjectItem = ({ link, illustration, title, description, codeSrc }: {
  link: string,
  illustration?: JSX.Element,
  title: string,
  description?: string,
  codeSrc?: string
}) => {
  return (
    <li className="shadow-lg rounded-lg p-6 grid place-content-center gap-4 dark:bg-indigo-950">
      <a href={link}>
        {illustration ? illustration : <WireframeSVG
          loading="lazy"
          width={100}
          height={100}
          className="shadow-xs rounded-lg transform rotate-[-4deg]"
        />}
        <h2 className="text-blue-500">
          {title}
        </h2>
        {description ? (<p className='text-sm'>{description}</p>) : null}
      </a>
      {codeSrc ? (
        <a
          className="font-semibold  no-underline text-black"
          href={codeSrc}>
          Code Source
        </a>
      ) : null}
    </li>
  )
}

const projects = [
  {
    link: 'https://usescaffold.com/',
    title: 'Visit Again',
    codeSrc: 'https://github.com/jasontcrabtree/usescaffold',
    description: 'Food review web app (NextJS, Prisma, NextAuth, Styled Components)'
  },
  {
    link: 'https://usescaffold.com/',
    title: 'Bondbridge (CRM Clone)',
    codeSrc: 'https://github.com/jasontcrabtree/usescaffold',
    description: 'CRM Clone - Contact & Organisations (NextJS, ASP.NET, Tailwind, Jest)'
  },
  {
    link: 'https://usescaffold.com/',
    title: 'Sage Midwife Coaching',
    codeSrc: 'https://github.com/jasontcrabtree/usescaffold',
    description: 'Small business marketing website (NextJS, Prismic, Netlify forms)'
  },
  {
    link: 'https://sales-emails.netlify.app/',
    title: 'Sales-Email App',
    codeSrc: 'https://github.com/jasontcrabtree/sales-emails',
    description: 'NextJS App: Cold-Email Starters',
    illustration: <SalesEmailsAppSVG loading="lazy" width={100} height={100} className="cover-illustration" />
  },
  {
    link: 'https://sapwood.netlify.app/',
    title: 'Sapwood Demo',
    codeSrc: 'https://github.com/jasontcrabtree/sapwood-example-website',
    description: 'Gatsby & Prismic CMS website',
    illustration: <SapwoodSVG loading="lazy" width={100} height={100} className="cover-illustration" />
  },
  {
    link: 'https://usescaffold.com/',
    title: 'UseScaffold',
    codeSrc: 'https://github.com/jasontcrabtree/usescaffold',
    description: 'Eleventy Digital eComm Website',
    illustration: <ScaffoldSVG loading="lazy" width={100} height={100} className="cover-illustration" />
  }
];


function WebsiteProjects() {
  return (
    <ul className="grid grid-cols-3 gap-2 w-full md:p-0">
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          link={project.link}
          title={project.title}
          codeSrc={project.codeSrc}
          description={project.description}
          illustration={project.illustration}
        />
      ))}
    </ul>
  );
}

export default WebsiteProjects;
