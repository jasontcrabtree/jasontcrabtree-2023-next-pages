import React from 'react';
import styled from 'styled-components';

const ContactSuccessStyles = styled.main`
  display: grid;
  grid-column: 1/ 9;

  .contact-header > p {
    margin: 1.4em 0px;
  }

  p {
    /* max-width: 72ch; */
  }

  header > p {
    max-width: 68ch;
  }

  .contact-form-fieldset--style > * + * {
    margin-top: 1rem;
  }

  .contact-form-fieldset--style {
    border-radius: 8px;
    border: 1px solid var(--primary-blue);
    box-shadow: var(--shadow-medium);
  }

  @media screen and (min-width: 960px) {
    .contact-form--layout {
      display: grid;
      grid-column: 1/ 5;
    }

    .contact-form-fieldset--style > * > input,
    .contact-form-fieldset--style > * > select,
    .contact-form-fieldset--style > * > textarea {
      width: 60%;
    }

    .contact-form-fieldset--style {
      padding: 2rem;
    }
  }

  @media screen and (max-width: 960px) {
    .contact-h1-title--style {
      font-size: var(--size-32);
    }

    .contact-form-fieldset--style {
      padding: 8px 16px;
    }

    .contact-form-fieldset--style > * > input,
    .contact-form-fieldset--style > * > select,
    .contact-form-fieldset--style > * > textarea {
      width: 60%;
    }
  }

  .hidden {
    display: none;
  }
`;

function ContactSuccess() {
  return (
    <ContactSuccessStyles>
      <header className="contact-header">
        <h1 className="contact-h1-title--style">Getting in touch 👋</h1>
        <p>
          Hello! If you want to talk about a role you're recruiting or a
          freelance contract, I'd love to learn more. Please contact me with the
          form below.
        </p>
        <p>
          If you want to chat about a personal project, I'd love to hear about
          that too! Get in touch on twitter at{' '}
          <a href="https://twitter.com/jasontcrabtree">@jasontcrabtree</a>,{' '}
          <a href="mailto:jasontcrabtree@gmail.com">email</a>, or the contact
          form below.
        </p>
      </header>
      <section className="contact-form--layout contact-form--spacing">
        <section className="contact-form-fieldset--style">
          <h2>Success!</h2>
          <p>The form successsfully submitted 🎉</p>
          <p>
            Thanks for getting in touch! I'll respond to you as quickly as
            possible, which mostly means in 2-4 days.
          </p>
        </section>
      </section>
    </ContactSuccessStyles>
  );
}

export default ContactSuccess;
