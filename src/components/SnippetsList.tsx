// import { graphql, Link, useStaticQuery } from 'gatsby';
import Link from 'next/link';

import styled from 'styled-components';

const SnippetCardStyles = styled.li`
  .card-details {
    padding: 20px;
    margin: auto 0;
  }

  margin-bottom: 24px;

  background: var(--card-background-white);

  box-shadow: var(--shadow-large);
  border-radius: 8px;
  padding: 0px;

  &:hover {
    box-shadow: var(--shadow-medium);
  }

  /* margin: 56px 0px;
  padding: 40px 32px;
  box-shadow: var(--shadow-medium);
  border-radius: 8px;

  .blog-list-item {
    background: var(--white-100);
  }

  .blog-list-item > * > * + * {
    margin: 8px 0;
  } */

  .cover-image {
    /* Internal shadow */
    box-shadow: var(--shadow-extra-small);
    border-radius: 8px 8px 0 0;
  }

  .cover-image {
    width: auto;
  }

  .card-details > * {
    margin-bottom: var(--size-16);
  }

  *:last-child {
    padding-bottom: 32px;
  }

  a:any-link {
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

  .date--style {
    color: var(--subheading-black-blue);
    text-transform: uppercase;
    font-weight: 500;
  }

  @media screen and (max-width: 960px) {
    margin: 32px 0px;

    max-width: fit-content;
    max-width: -moz-max-content; /* Firefox/Gecko */
    max-width: -webkit-max-content; /* Chrome */
    padding: 0px;

    .card-title {
      font-size: var(--size-24);
    }
  }
`;

function SnippetCard({
  title,
  description,
  date,
  slug,
  cardWithDescription,
}: any): any {
  return (
    <SnippetCardStyles className="work-list-card">
      <Link href={slug} className="read">
        <div className="card-details">
          <p className="date--style">Published: {date}</p>
          <h2 className="card-title">{title}</h2>
          <span className="card-link">Read Snippet</span>
        </div>
      </Link>
    </SnippetCardStyles>
  );
}

function SnippetsList() {
  // TODO: Sort blog post and this query out to seperate case study, blog post and snippets
  // const data = useStaticQuery(graphql`
  //   query allSnippets {
  //     allMdx(
  //       sort: { fields: frontmatter___date, order: DESC }
  //       filter: { frontmatter: { type: { eq: "snippet" } } }
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

  // const snippets = data.allMdx.nodes;
  const snippets: any[] = [];

  return (
    <ul className="snippets__list">
      {snippets.map((item, i) => (
        <SnippetCard
          key={i}
          title={item.frontmatter.title}
          description={item.frontmatter.description}
          date={item.frontmatter.date}
          slug={`/snippets/${item.slug}`}
          // cardWithDescription={cardWithDescription}
        />
      ))}
    </ul>
  );
}

export default SnippetsList;
