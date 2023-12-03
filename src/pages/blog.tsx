import React from 'react';
import styled from 'styled-components';
import BlogPostsList from '../components/BlogPostsList';

const BlogPageStyles = styled.main`
  grid-column: 2 / 9;

  header > * {
    margin-bottom: var(--size-32);
  }

  header,
  section {
    margin: var(--size-32) 0px;
  }

  li {
    margin-top: 48px;
  }

  @media screen and (max-width: 960px) {
    grid-row-start: 2;
    grid-column: 1;
  }
`;

function BlogPage() {
  return (
    <BlogPageStyles>
      <header>
        <h1>Personal Blog</h1>
        <p className="large-paragraph-text">
          A personal and professional blog by{' '}
          <a href="http://twitter.com/jasontcrabtree">@jasontcrabtree.</a> I
          write about learning Front-End Development, Product Design, Product
          Development and how they all tie together.
        </p>
      </header>

      <section className="blog-list-section--layout">
        <h2>Latest Posts:</h2>

        <BlogPostsList
          className="work-list-container"
          cardWithDescription
          paginationLimit="1000"
        />
      </section>
    </BlogPageStyles>
  );
}

export default BlogPage;
