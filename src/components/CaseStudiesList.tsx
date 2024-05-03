// import { graphql, Link, useStaticQuery } from 'gatsby';

import Link from 'next/link';
import CustomLazyImage from '../components/CustomLazyImage';

// const WorkListItemStyles = .li`
//   .card-details {
//     padding: 20px;
//     margin: auto 0;
//   }

//   .cover-image {
//     /* Internal shadow */
//     box-shadow: var(--shadow-extra-small);
//     border-radius: 8px 8px 0 0;
//   }

//   .cover-image {
//     width: auto;
//   }

//   .card-details > * {
//     margin-bottom: var(--size-16);
//   }

//   .card-details {
//     padding-bottom: 32px;
//   }

//   a:any-link {
//     text-decoration: none;
//     color: var(--text-black);
//   }

//   .card-title {
//     color: var(--primary-blue);
//   }

//   .card-link {
//     text-decoration: underline;
//     color: var(--primary-link);
//     font-weight: bold;
//   }

//   .date--style {
//     color: var(--subheading-black-blue);
//     text-transform: uppercase;
//     font-weight: 500;
//   }

//   @media screen and (max-width: 960px) {
//     margin: 32px 0px;

//     max-width: fit-content;
//     max-width: -moz-max-content; /* Firefox/Gecko */
//     max-width: -webkit-max-content; /* Chrome */
//     padding: 0px;

//     .card-title {
//       font-size: var(--size-24);
//     }
//   }
// `;

function WorkListItem({ title, image, description, date, slug }: any): any {
  return (
    <li className="work-list-card">
      <Link href={slug} className="read">
        <CustomLazyImage src={image} alt={title} cls="cover-image" />
        <div className="card-details">
          <h2 className="card-title">{title}</h2>
          <span className="date--style">Project Date: {date}</span>
          <p className="description">{description}</p>
          <span className="card-link">View case study</span>
        </div>
      </Link>
    </li>
  );
}

function CaseStudiesList() {
  // const data = useStaticQuery(graphql`
  //   query allCaseStudies {
  //     allMdx(
  //       sort: { fields: frontmatter___date, order: DESC }
  //       filter: { frontmatter: { type: { eq: "case-study" } } }
  //     ) {
  //       nodes {
  //         slug: id
  //         frontmatter {
  //           title
  //           image
  //           description
  //           date(formatString: "D MM YYYY")
  //         }
  //       }
  //     }
  //   }
  // `);

  // const workItems = data?.allMdx.nodes || [];
  const workItems: any[] = [];

  return (
    <ul className="work-list-container">
      {workItems.map((item, i) => (
        <WorkListItem
          key={i}
          title={item.frontmatter.title}
          image={item.frontmatter.image}
          description={item.frontmatter.description}
          date={item.frontmatter.date}
          slug={`work/${item.slug}`}
        />
      ))}
    </ul>
  );
}

export default CaseStudiesList;
