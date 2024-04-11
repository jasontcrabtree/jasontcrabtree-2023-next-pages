import React from 'react';
import styled from 'styled-components';

const ContactPageStyles = styled.main`
  display: grid;
  grid-column: 1 / 9;

  .contact-header > p {
    margin: 1.4em 0px;
  }

  p {
    /* max-width: 72ch; */
  }

  header > p {
    max-width: 68ch;
  }

  fieldset {
    margin: 0px;
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
      grid-column: 1 / 5;
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
      width: 100%;
    }
  }

  .hidden {
    display: none;
  }
`;

function ContactPage() {
  return (
    <main>
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
        <form
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact-success">
          <fieldset className="contact-form-fieldset--style">
            <h2>Contact Form</h2>
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden" hidden>
              <label htmlFor="bot-field">
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </div>
            <div className="sender-info">
              <label htmlFor="name">
                Your Name
                <input type="text" name="name" />
              </label>
            </div>
            <div className="sender-info">
              <label htmlFor="email">
                Your Email*
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                />
              </label>
            </div>
            <div>
              <label htmlFor="project">
                Project Type:
                <select name="project" id="project">
                  <option value="website-development">
                    Website Development
                  </option>
                  <option value="website-design">Website Design</option>
                  <option value="mobile-design">Mobile Design</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="budget">
                Available Budget
                <input type="text" name="budget" placeholder="$" />
              </label>
            </div>
            <div className="message-wrapper">
              <label htmlFor="message">
                Project Details
                <textarea name="message" rows={4} />
              </label>
            </div>
            <div>
              <button className="base-button--style" type="submit">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
