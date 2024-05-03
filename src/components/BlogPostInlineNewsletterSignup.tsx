import React from 'react';
import NewsletterSubscriptionForm from './NewsletterSubscriptionForm';

// const BlogPostInlineNewsletterSignupStyles = .main`
//   background: var(--blue-white-100);
//   padding: 2rem;

//   @media (prefers-color-scheme: dark) {
//     color: var(--dm-white-100);
//     background-color: #021322;
//   }
// `;

function BlogPostInlineNewsletterSignup() {
  return (
    <main>
      <h3>Enjoying the post?</h3>
      <NewsletterSubscriptionForm />
    </main>
  );
}

export default BlogPostInlineNewsletterSignup;
