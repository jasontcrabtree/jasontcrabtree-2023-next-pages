import React from 'react';
import styled from 'styled-components';
import NewsletterSubscriptionForm from './NewsletterSubscriptionForm';

const BlogPostInlineNewsletterSignupStyles = styled.main`
  background: var(--blue-white-100);
  padding: 2rem;

  @media (prefers-color-scheme: dark) {
    color: var(--dm-white-100);
    background-color: #021322;
  }
`;

function BlogPostInlineNewsletterSignup() {
  return (
    <BlogPostInlineNewsletterSignupStyles>
      <h3>Enjoying the post?</h3>
      <NewsletterSubscriptionForm />
    </BlogPostInlineNewsletterSignupStyles>
  );
}

export default BlogPostInlineNewsletterSignup;
