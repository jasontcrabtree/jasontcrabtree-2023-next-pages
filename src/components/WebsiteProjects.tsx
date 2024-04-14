import SapwoodSVG from './svgs/SapwoodSVG.svg';
import ScaffoldSVG from './svgs/ScaffoldSVG.svg';
import SalesEmailsAppSVG from './svgs/SalesEmailsAppSVG.svg';
import CSSPosterSVG from './svgs/CSSPosterSVG.svg';
import WireframeSVG from './svgs/WireframeSVG.svg';
import CharacterCounterSVG from './svgs/CharacterCounterSVG.svg';

const ProjectItem = ({ link, illustration, title, description, codeSrc }: {
  link: string,
  illustration?: JSX.Element,
  title: string,
  description?: string,
  codeSrc?: string
}) => {
  return (
    <li className="shadow-lg rounded-lg md:p-6 p-4 gap-4 dark:bg-indigo-950 flex flex-col">
      <a href={link} className=''>
        <div className='rotate-[-4deg] hover:rotate-[0deg]'>
          {illustration ? illustration :
            <WireframeSVG
              loading="lazy"
              width={100}
              height={100}
              className="shadow-xs rounded-xl transform"
            />
          }
        </div>
        <h2 className="text-blue-500 mt-4 text-lg">
          {title}
        </h2>
        {description ? (<p className='md:text-sm text-base'>{description}</p>) : null}
      </a>
      {codeSrc ? (
        <a
          className="font-medium md:text-sm text-base no-underline text-black dark:text-zinc-200 mt-auto"
          href={codeSrc}>
          Code Source
        </a>
      ) : null}
    </li>
  )
}

const projects = [
  {
    link: 'https://visitagain.vercel.app/',
    title: 'Visit Again',
    codeSrc: 'https://github.com/jasontcrabtree/visit-again',
    description: 'Food review web app (NextJS, Prisma, NextAuth, Styled Components)'
  },
  {
    link: 'https://crm-clone.vercel.app/',
    title: 'Bondbridge (CRM Clone)',
    codeSrc: 'https://github.com/jasontcrabtree/crm-clone',
    description: 'CRM Clone - Contact & Organisations (NextJS, ASP.NET, Tailwind, Jest)'
  },
  {
    link: 'https://sagemidwifecoaching.co.nz/',
    title: 'Sage Midwife Coaching',
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
    <ul className="grid md:grid-cols-3 gap-2 w-full md:p-0">
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
